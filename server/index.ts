import express from 'express';
import { setupRoutes } from './routes.js';
import { setupVite, serveStatic } from './vite.js';
import compression from 'compression';

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
  serveStatic(app);
}

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});