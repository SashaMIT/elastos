import type { Express, Request, Response } from "express";
import { apiServices } from './api-proxy';
import { apiCache } from './cache';
import path from 'path';
import fs from 'fs';

export function registerRoutes(app: Express) {
  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    return res.json({ status: 'ok' });
  });

  // Cache stats endpoint (for monitoring)
  app.get('/api/cache/stats', (_req, res) => {
    return res.json(apiCache.getStats());
  });

  // Cache control endpoint
  app.delete('/api/cache', (_req, res) => {
    apiCache.clear();
    return res.json({ success: true, message: 'Cache cleared' });
  });

  // API endpoints
  
  // Hashrate data endpoint
  app.get('/api/hashrate', async (_req, res) => {
    try {
      const data = await apiServices.getHashrateData();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching hashrate data:', error);
      return res.status(500).json({ 
        error: 'Failed to fetch hashrate data',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Market cap data endpoint
  app.get('/api/market-cap', async (_req, res) => {
    try {
      const data = await apiServices.getMarketCapData();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching market cap data:', error);
      return res.status(500).json({ 
        error: 'Failed to fetch market cap data',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Individual endpoints for specific data
  app.get('/api/bitcoin/hashrate', async (_req, res) => {
    try {
      const data = await apiServices.getBitcoinHashrate();
      return res.json({ hashrate: data });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch Bitcoin hashrate' });
    }
  });

  app.get('/api/elastos/hashrate', async (_req, res) => {
    try {
      const data = await apiServices.getElastosHashrate();
      return res.json({ hashrate: data });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch Elastos hashrate' });
    }
  });

  app.get('/api/bitcoin/price', async (_req, res) => {
    try {
      const data = await apiServices.getBitcoinPrice();
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch Bitcoin price' });
    }
  });

  app.get('/api/elastos/price', async (_req, res) => {
    try {
      const data = await apiServices.getELAPrice();
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch ELA price' });
    }
  });

  // Whitepaper download endpoint
  app.get('/whitepapers/:filename', (req: Request, res: Response) => {
    const { filename } = req.params;
    const whitepapersDir = path.join(__dirname, '../public/whitepapers');

    try {
      // Check if file exists
      const filePath = path.join(whitepapersDir, filename);

      // For security, verify the file is actually in the whitepapers directory
      if (!filePath.startsWith(whitepapersDir)) {
        return res.status(403).json({ error: 'Access denied' });
      }

      if (fs.existsSync(filePath)) {
        return res.sendFile(filename, { root: whitepapersDir });
      } else {
        // If the file doesn't exist, return a placeholder message
        return res.status(404).json({ 
          error: 'File not found',
          message: 'This is a demo. The actual whitepaper PDFs would be available in a production environment.'
        });
      }
    } catch (error) {
      console.error('Error serving whitepaper:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
}