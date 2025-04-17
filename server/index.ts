import express from 'express';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { setupRoutes } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  try {
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: join(__dirname, '..', 'client'),
    });

    app.use(vite.middlewares);
    setupRoutes(app);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();