import express from 'express';
import { setupRoutes } from './routes.js';
import { setupVite } from './vite.js';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '10000', 10);

// Enable compression
app.use(compression());

// Add security headers
app.use((_req, res, next) => {
  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:;
    style-src 'self' 'unsafe-inline' https:;
    font-src 'self' data: https: *;
    img-src 'self' data: blob: https: *;
    connect-src 'self' https: wss: *;
    frame-src 'self' https: *;
    worker-src 'self' blob: *;
    media-src 'self' https: *;
    object-src 'none';
  `.replace(/\s+/g, ' ').trim());
  
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Setup routes
setupRoutes(app);

// Setup Vite in development, serve static files in production
if (process.env.NODE_ENV === 'development') {
  await setupVite(app);
} else {
  // In production, serve from the public directory
  const publicPath = join(__dirname, '..', 'public');
  console.log('Serving static files from:', publicPath);
  
  // Serve static files with proper MIME types
  app.use(express.static(publicPath, {
    maxAge: '1w',
    etag: true,
    lastModified: true,
    index: false,
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
      // Add cache control for assets
      if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
      }
    }
  }));

  // Catch-all route to serve index.html
  app.get("*", (_req, res) => {
    console.log('Serving index.html from:', join(publicPath, 'index.html'));
    res.sendFile(join(publicPath, 'index.html'));
  });
}

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});