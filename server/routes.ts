import type { FastifyInstance } from "fastify";
import { db } from '../db';
import path from 'path';
import fs from 'fs';

export async function registerRoutes(server: FastifyInstance) {
  server.get('/api/health', async () => {
    return { status: 'ok' };
  });

  // Whitepaper download endpoint
  server.get('/whitepapers/:filename', async (request, reply) => {
    const { filename } = request.params as { filename: string };
    const whitepapersDir = path.join(__dirname, '../public/whitepapers');

    try {
      // Check if file exists
      const filePath = path.join(whitepapersDir, filename);

      // For security, verify the file is actually in the whitepapers directory
      if (!filePath.startsWith(whitepapersDir)) {
        return reply.code(403).send({ error: 'Access denied' });
      }

      if (fs.existsSync(filePath)) {
        return reply.sendFile(filename, whitepapersDir);
      } else {
        // If the file doesn't exist, return a placeholder message
        return reply.code(404).send({ 
          error: 'File not found',
          message: 'This is a demo. The actual whitepaper PDFs would be available in a production environment.'
        });
      }
    } catch (error) {
      console.error('Error serving whitepaper:', error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });
}