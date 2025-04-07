
import { Express } from 'express';
import Parser from 'rss-parser';
const parser = new Parser();

export default function registerRoutes(app: Express) {
  // WordPress blog posts RSS feed
  app.get("/api/wordpress-blogs", async (req, res) => {
    try {
      const { limit = 20, offset = 0 } = req.query;
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // Example RSS feed URL (replace with your actual feed)
      const feedUrl = "https://rss.app/feeds/COQSFdAgMY8p4SOz.xml";
      
      try {
        // Fetch and parse the RSS feed
        const parsedFeed = await parser.parseURL(feedUrl);
        
        // Process the blog items
        const blogPosts = parsedFeed.items.map(item => {
          // Extract image from content if available
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
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
        .slice(parsedOffset, parsedOffset + parsedLimit); // Apply pagination
        
        res.json({
          total: parsedFeed.items.length,
          offset: parsedOffset,
          limit: parsedLimit,
          items: blogPosts
        });
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ 
          total: 0, 
          offset: 0, 
          limit: parsedLimit, 
          items: [] 
        });
      }
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Elastos news feed
  app.get("/api/elastos-news", async (req, res) => {
    try {
      const { limit = 20, offset = 0 } = req.query;
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // Example RSS feed URL for news (replace with actual feed)
      const feedUrl = "https://rss.app/feeds/tQGWZNuxHC69yKOm.xml";
      
      try {
        // Fetch and parse the RSS feed
        const parsedFeed = await parser.parseURL(feedUrl);
        
        // Process the news items
        const newsItems = parsedFeed.items.map(item => {
          // Extract image from content if available
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
            source: item.creator || "Elastos News",
            imageUrl: imageUrl
          };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
        .slice(parsedOffset, parsedOffset + parsedLimit); // Apply pagination
        
        // For demo purposes, if no actual items, add some placeholder items
        if (newsItems.length === 0) {
          const placeholders = [
            {
              title: "Elastos Announces Major Security Update",
              link: "https://elastos.info",
              date: new Date().toISOString(),
              description: "The Elastos Foundation has released a major security update enhancing the network's protection against potential threats.",
              source: "Elastos Blog",
              imageUrl: "/images/Elastos Icon - 2.png"
            },
            {
              title: "BeL2 Protocol Achieves Major Milestone",
              link: "https://elastos.info",
              date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
              description: "The BeL2 protocol has reached a significant milestone with its latest upgrade, enhancing Bitcoin's integration with Elastos.",
              source: "CoinTelegraph",
              imageUrl: "/images/Elastos Icon - 2.png"
            }
          ];
          
          for (let i = 0; i < 10; i++) {
            newsItems.push({
              ...placeholders[i % 2],
              title: `${placeholders[i % 2].title} ${i + 1}`,
              date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString()
            });
          }
        }
        
        res.json({
          total: parsedFeed.items.length || newsItems.length,
          offset: parsedOffset,
          limit: parsedLimit,
          items: newsItems
        });
      } catch (error) {
        console.error("Error fetching news:", error);
        
        // Return placeholder data for demo purposes
        const placeholders = Array.from({ length: parsedLimit }, (_, i) => ({
          title: `Elastos Announcement ${i + 1 + parsedOffset}`,
          link: "https://elastos.info",
          date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
          description: "This is a placeholder announcement for demonstration purposes.",
          source: i % 2 === 0 ? "Elastos Blog" : "CoinTelegraph",
          imageUrl: "/images/Elastos Icon - 2.png"
        }));
        
        res.json({
          total: 30, // Simulate a larger dataset
          offset: parsedOffset,
          limit: parsedLimit,
          items: placeholders
        });
      }
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}

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