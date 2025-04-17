import express from 'express';
import { setupRoutes } from './routes.js';
import { setupVite, serveStatic } from './vite.js';
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
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    font-src 'self' data:;
    img-src 'self' data: blob:;
    connect-src 'self' https://api.coingecko.com;
  `.replace(/\s+/g, ' ').trim());
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Setup routes
setupRoutes(app);

// Setup Vite in development, serve static files in production
if (process.env.NODE_ENV === 'development') {
  await setupVite(app);
} else {
  // In production, serve from the dist/public directory
  const publicPath = join(__dirname, '..', 'public');
  console.log('Serving static files from:', publicPath);
  
  app.use(express.static(publicPath, {
    maxAge: '1w',
    etag: true,
    lastModified: true
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