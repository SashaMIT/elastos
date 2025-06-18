import express from 'express';
import { setupRoutes } from './routes.js';
import { setupVite } from './vite.js';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();
const port = parseInt(process.env.PORT || '10000', 10);

// Enable compression
app.use(compression());

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Add security headers - Move this BEFORE any other middleware
app.use((req, res, next) => {
  try {
    // Set CSP header explicitly
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:",
      "style-src 'self' 'unsafe-inline' https:",
      "font-src 'self' data: https: moz-extension: chrome-extension: *",
      "img-src 'self' data: blob: https: *",
      "connect-src 'self' https: wss: *",
      "frame-src 'self' https: *",
      "worker-src 'self' blob: *",
      "media-src 'self' https: *",
      "object-src 'none'"
    ].join('; ');

    // Set security headers
    res.setHeader('Content-Security-Policy', csp);
    res.setHeader('X-Content-Security-Policy', csp);
    res.setHeader('X-WebKit-CSP', csp);
    
    // Add cache control headers only for HTML (not for static assets)
    if (req.path === '/' || req.path.endsWith('.html') || !req.path.includes('.')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Last-Modified', new Date().toUTCString());
      res.setHeader('ETag', `"${Date.now()}"`);
      res.setHeader('Vary', 'Accept-Encoding, User-Agent');
      res.setHeader('X-No-Cache', 'true');
    }
    
    // Add optimized CORS headers for specific domains
    const allowedOrigins = process.env.ALLOWED_DOMAINS?.split(',') || [
      'https://elastos.net', 
      'https://www.elastos.net',
      'https://elastos-network.onrender.com'
    ];
    
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (!origin) {
      // For same-origin requests (like elastos.net accessing itself)
      res.setHeader('Access-Control-Allow-Origin', 'https://elastos.net');
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  } catch (error) {
    console.error('Error in security middleware:', error);
    next(error);
  }
});

// Setup routes
setupRoutes(app);

// Setup Vite in development, serve static files in production
if (process.env.NODE_ENV === 'development') {
  await setupVite(app);
} else {
  try {
    // In production, serve from the dist/public directory (one level up from server)
    const publicPath = join(__dirname, '..', '..', 'public');
    console.log('Serving static files from:', publicPath);
    
    // Serve static files with optimized performance
    app.use(express.static(publicPath, {
      maxAge: '30d', // Increased cache time
      etag: true,
      lastModified: true,
      index: false,
      dotfiles: 'ignore',
      setHeaders: (res, path) => {
        // Set proper MIME types
        if (path.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.webp')) {
          res.setHeader('Content-Type', 'image/webp');
        } else if (path.endsWith('.png')) {
          res.setHeader('Content-Type', 'image/png');
        } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
          res.setHeader('Content-Type', 'image/jpeg');
        }
        
        // Aggressive caching for static assets
        if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$/)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
          res.setHeader('Vary', 'Accept-Encoding');
        }
        
        // Special headers for images
        if (path.match(/\.(png|jpg|jpeg|gif|webp)$/)) {
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.setHeader('Accept-Ranges', 'bytes');
        }
      }
    }));

    // Catch-all route to serve index.html
    app.get("*", (_req, res) => {
      try {
        const indexPath = join(publicPath, 'index.html');
        console.log('Checking for index.html at:', indexPath);
        
        if (existsSync(indexPath)) {
          console.log('Serving index.html from:', indexPath);
          res.sendFile(indexPath);
        } else {
          console.log('Index.html not found at:', indexPath);
          // As a fallback, look for index.html in the current directory
          const fallbackPath = join(process.cwd(), 'dist', 'public', 'index.html');
          console.log('Trying fallback path:', fallbackPath);
          
          if (existsSync(fallbackPath)) {
            console.log('Serving index.html from fallback path:', fallbackPath);
            res.sendFile(fallbackPath);
          } else {
            console.log('Index.html not found at fallback path:', fallbackPath);
            res.status(404).send('Not found');
          }
        }
      } catch (error) {
        console.error('Error serving index.html:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  } catch (error) {
    console.error('Error setting up static file serving:', error);
    throw error;
  }
}

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

server.on('error', (error: any) => {
  console.error('Server error:', error);
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});