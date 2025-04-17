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

  // Serve static files with cache control and no host checking
  app.use(express.static(publicPath, {
    maxAge: '1w',
    etag: true,
    lastModified: true,
    setHeaders: (res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
  }));

  // Catch-all route to serve index.html
  app.get("*", (_req, res) => {
    res.sendFile(join(publicPath, "index.html"));
  });
}