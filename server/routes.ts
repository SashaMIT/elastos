import express, { Request, Response } from 'express';

export function setupRoutes(app: express.Application): void {
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  // Add more routes here
}