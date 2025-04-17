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

// Add CORS middleware
app.use((_req, res, next) => {
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
  app.use(express.static(join(__dirname, '..', 'public'), {
    maxAge: '1w',
    etag: true,
    lastModified: true
  }));

  // Catch-all route to serve index.html
  app.get("*", (_req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });
}

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});