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
  const publicPath = join(__dirname, "../dist/public");

  // Add middleware to handle host checking
  app.use((req, res, next) => {
    // Allow all hosts in production
    next();
  });

  // Serve static files with cache control
  app.use(express.static(publicPath, {
    maxAge: '1w', // Set max age to 1 week
    etag: true,
    lastModified: true
  }));

  // Catch-all route to serve index.html
  app.get("*", (_req, res) => {
    res.sendFile(join(publicPath, "index.html"));
  });
}