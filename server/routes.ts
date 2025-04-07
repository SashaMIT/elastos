import type { FastifyInstance } from "fastify";
import { db } from '../db';
import path from 'path';
import fs from 'fs';
import Parser from "rss-parser";

const parser = new Parser();

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


  // RSS Feed endpoint - Elastos official blog
  server.get("/api/blog", async (request, reply) => {
    try {
      const feed = await parser.parseURL("https://news.elastos.org/feed/");
      const posts = feed.items.slice(0, 6).map(item => ({
        title: item.title,
        link: item.link,
        date: item.pubDate,
        description: item.contentSnippet,
        source: "Elastos Blog"
      }));
      return reply.send(posts);
    } catch (error) {
      return reply.code(500).send({ message: "Failed to fetch blog posts" });
    }
  });

  // WordPress articles RSS feed (adapted for Fastify)
  server.get("/api/wordpress-blogs", async (request, reply) => {
    try {
      const { limit = 20, offset = 0 } = request.query;
      const parsedLimit = Math.min(Number(limit), 50); 
      const parsedOffset = Number(offset);
      const feedUrl = "https://rss.app/feeds/COQSFdAgMY8p4SOz.xml";
      const parsedFeed = await parser.parseURL(feedUrl);

      const blogPosts = parsedFeed.items.map(item => {
        let imageUrl = null;
        if (item.content) {
          const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }
        return {
          title: item.title ?? "",
          link: item.link ?? "",
          date: item.pubDate ?? new Date().toISOString(),
          description: item.contentSnippet ?? "",
          content: item.content ?? "",
          author: item.creator || "Elastos Blog",
          imageUrl: imageUrl
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
      .slice(parsedOffset, parsedOffset + parsedLimit); 

      return reply.send({
        total: parsedFeed.items.length,
        offset: parsedOffset,
        limit: parsedLimit,
        items: blogPosts
      });
    } catch (error) {
      console.error("Failed to fetch WordPress blogs:", error);
      return reply.code(500).send({ message: "Failed to fetch WordPress blogs" });
    }
  });

  // Elastos News from RSS.app aggregated feed (adapted for Fastify)
  server.get("/api/elastos-news", async (request, reply) => {
    try {
      const { limit = 20, offset = 0 } = request.query;
      const parsedLimit = Math.min(Number(limit), 50); 
      const parsedOffset = Number(offset);
      const feedUrl = "https://rss.app/feeds/tQGWZNuxHC69yKOm.xml";
      const parsedFeed = await parser.parseURL(feedUrl);

      const elastosNews = parsedFeed.items.map(item => ({
        title: item.title ?? "",
        link: item.link ?? "",
        date: item.pubDate ?? new Date().toISOString(),
        description: item.contentSnippet ?? "",
        content: item.content ?? "",
        source: item.creator || "Elastos News"
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
      .slice(parsedOffset, parsedOffset + parsedLimit); 

      return reply.send({
        total: parsedFeed.items.length,
        offset: parsedOffset,
        limit: parsedLimit,
        items: elastosNews
      });
    } catch (error) {
      console.error("Failed to fetch Elastos news:", error);
      return reply.code(500).send({ message: "Failed to fetch Elastos news" });
    }
  });
}