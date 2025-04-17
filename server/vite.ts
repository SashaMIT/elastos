import express from 'express';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function setupVite(app: express.Application): Promise<void> {
  const vite = await createServer({
    server: { 
      middlewareMode: true,
      host: '0.0.0.0',
      hmr: {
        host: '0.0.0.0'
      }
    },
    appType: 'custom',
    root: join(__dirname, '..', 'client'),
  });

  app.use(vite.middlewares);

  // Serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'index.html'));
  });
}

export function serveStatic(app: express.Application) {
  // Use the correct path for production
  const publicPath = join(__dirname, "..", "public");

  // Add CORS middleware
  app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  // Serve static files with cache control
  app.use(express.static(publicPath, {
    maxAge: '1w',
    etag: true,
    lastModified: true
  }));

  // Catch-all route to serve index.html
  app.get("*", (_req, res) => {
    res.sendFile(join(publicPath, "index.html"));
  });
}