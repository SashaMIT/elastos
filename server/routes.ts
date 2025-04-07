import type { FastifyInstance } from "fastify";
import { db } from '../db';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import Parser from 'rss-parser';

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

  // RSS Feed endpoint - WordPress blog posts
  server.get('/api/wordpress-blogs', async (request, reply) => {
    try {
      const { limit = 20, offset = 0 } = request.query as { limit?: number, offset?: number };
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // Use a common crypto/blockchain RSS feed as a placeholder
      const feedUrl = "https://blog.elastos.org/feed/";
      
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
        
        return {
          total: parsedFeed.items.length,
          offset: parsedOffset,
          limit: parsedLimit,
          items: blogPosts
        };
      } catch (error) {
        console.error('Failed to fetch blog feed:', error);
        
        // Return mock data for development
        const mockBlogPosts = [
          {
            title: "Elastos Welcomes Next Generation DePIN Network",
            link: "https://blog.elastos.org/elastos-depin-network/",
            date: new Date().toISOString(),
            description: "Elastos is proud to announce its DePIN Network, enabling decentralized physical infrastructure networks with robust identity and security components.",
            content: "Elastos is proud to announce its DePIN Network, enabling decentralized physical infrastructure networks with robust identity and security components.",
            author: "Elastos Team",
            imageUrl: "/images/Elastos Icon - 2.png"
          },
          {
            title: "Elastos ESC Chain Sees Record Transaction Volume",
            link: "https://blog.elastos.org/esc-transaction-volume/",
            date: new Date(Date.now() - 86400000).toISOString(),
            description: "The Elastos Smart Contract Chain has recorded its highest transaction volume to date, showing growing adoption of the ecosystem.",
            content: "The Elastos Smart Contract Chain has recorded its highest transaction volume to date, showing growing adoption of the ecosystem.",
            author: "Elastos Team",
            imageUrl: "/images/Elastos Icon - 2.png"
          },
          {
            title: "BeL2: Bitcoin DeFi Comes to Elastos",
            link: "https://blog.elastos.org/bel2-bitcoin-defi/",
            date: new Date(Date.now() - 172800000).toISOString(),
            description: "BeL2 brings Bitcoin DeFi capabilities to the Elastos ecosystem, allowing for new financial applications without moving BTC off its chain.",
            content: "BeL2 brings Bitcoin DeFi capabilities to the Elastos ecosystem, allowing for new financial applications without moving BTC off its chain.",
            author: "Elastos Team",
            imageUrl: "/images/Bel2.png"
          },
        ];
        
        return {
          total: mockBlogPosts.length,
          offset: 0,
          limit: mockBlogPosts.length,
          items: mockBlogPosts
        };
      }
    } catch (error) {
      console.error('Error in wordpress-blogs endpoint:', error);
      return reply.code(500).send({ error: 'Failed to fetch blog posts' });
    }
  });

  // Elastos News API endpoint
  server.get('/api/elastos-news', async (request, reply) => {
    try {
      const { limit = 20, offset = 0 } = request.query as { limit?: number, offset?: number };
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // In a real implementation, you would fetch from various sources
      // For demo purposes, we'll return mock data
      const mockNewsItems = [
        {
          title: "Elastos Partners with Major Crypto Exchange for Enhanced Liquidity",
          link: "https://news.elastos.org/exchange-partnership",
          date: new Date().toISOString(),
          description: "Elastos announces a strategic partnership with a leading cryptocurrency exchange to improve ELA token liquidity and accessibility.",
          source: "Elastos Blog",
          content: "<p>Elastos announces a strategic partnership with a leading cryptocurrency exchange to improve ELA token liquidity and accessibility.</p><img src='/images/Elastos Icon - 2.png'/>"
        },
        {
          title: "Elastos SmartWeb Vision Gains Traction in Web3 Community",
          link: "https://news.elastos.org/smartweb-vision",
          date: new Date(Date.now() - 86400000).toISOString(),
          description: "The Elastos SmartWeb concept is gaining significant attention in the Web3 community as a comprehensive solution for digital rights and ownership.",
          source: "Elastos Blog",
          content: "<p>The Elastos SmartWeb concept is gaining significant attention in the Web3 community as a comprehensive solution for digital rights and ownership.</p><img src='/images/Elastos New Logo_Kit-03.png'/>"
        },
        {
          title: "Elastos Integrates with Bitcoin for Enhanced Security",
          link: "https://news.elastos.org/bitcoin-integration",
          date: new Date(Date.now() - 172800000).toISOString(),
          description: "Elastos has successfully integrated with Bitcoin's security model, leveraging its hashpower for enhanced blockchain security.",
          source: "CoinTelegraph",
          content: "<p>Elastos has successfully integrated with Bitcoin's security model, leveraging its hashpower for enhanced blockchain security.</p>"
        },
        {
          title: "Elastos DID Solution Addresses Web3 Identity Challenges",
          link: "https://news.elastos.org/did-solution",
          date: new Date(Date.now() - 259200000).toISOString(),
          description: "The Elastos Decentralized Identity (DID) solution offers a comprehensive approach to solving identity challenges in the Web3 ecosystem.",
          source: "CoinDesk",
          content: "<p>The Elastos Decentralized Identity (DID) solution offers a comprehensive approach to solving identity challenges in the Web3 ecosystem.</p>"
        },
        {
          title: "Elastos Foundation Announces Grant Program for Developers",
          link: "https://news.elastos.org/grant-program",
          date: new Date(Date.now() - 345600000).toISOString(),
          description: "The Elastos Foundation has launched a new grant program to support developers building on the Elastos ecosystem.",
          source: "Chainwire",
          content: "<p>The Elastos Foundation has launched a new grant program to support developers building on the Elastos ecosystem.</p>"
        },
        {
          title: "Elastos Celebrates 5 Years of Development Milestones",
          link: "https://news.elastos.org/5-year-anniversary",
          date: new Date(Date.now() - 432000000).toISOString(),
          description: "Elastos marks its 5-year anniversary with a reflection on key development milestones and a roadmap for future growth.",
          source: "Elastos Blog",
          content: "<p>Elastos marks its 5-year anniversary with a reflection on key development milestones and a roadmap for future growth.</p>"
        },
        {
          title: "Elastos ESC Chain Experiences Record Growth in DeFi Applications",
          link: "https://news.elastos.org/esc-defi-growth",
          date: new Date(Date.now() - 518400000).toISOString(),
          description: "The Elastos Smart Contract Chain is seeing unprecedented growth in DeFi applications, with total value locked reaching new highs.",
          source: "Elastos Blog",
          content: "<p>The Elastos Smart Contract Chain is seeing unprecedented growth in DeFi applications, with total value locked reaching new highs.</p>"
        },
        {
          title: "Elastos Launches Enhanced Developer Documentation Portal",
          link: "https://news.elastos.org/dev-documentation",
          date: new Date(Date.now() - 604800000).toISOString(),
          description: "Elastos has launched an improved developer documentation portal to streamline the onboarding process for new developers.",
          source: "CoinTelegraph",
          content: "<p>Elastos has launched an improved developer documentation portal to streamline the onboarding process for new developers.</p>"
        },
        {
          title: "Elastos Hosts Global Hackathon for SmartWeb Innovations",
          link: "https://news.elastos.org/global-hackathon",
          date: new Date(Date.now() - 691200000).toISOString(),
          description: "Elastos is hosting a global hackathon to foster innovations in the SmartWeb ecosystem, with substantial prizes for top projects.",
          source: "CoinDesk",
          content: "<p>Elastos is hosting a global hackathon to foster innovations in the SmartWeb ecosystem, with substantial prizes for top projects.</p>"
        },
        {
          title: "Elastos Releases New Version of Essentials Super Wallet",
          link: "https://news.elastos.org/essentials-wallet-update",
          date: new Date(Date.now() - 777600000).toISOString(),
          description: "Elastos has released an updated version of its Essentials Super Wallet with new features and improved security.",
          source: "Chainwire",
          content: "<p>Elastos has released an updated version of its Essentials Super Wallet with new features and improved security.</p>"
        },
        {
          title: "Elastos Community Votes on Crucial Governance Proposals",
          link: "https://news.elastos.org/governance-votes",
          date: new Date(Date.now() - 864000000).toISOString(),
          description: "The Elastos community is actively participating in voting on important governance proposals that will shape the future of the ecosystem.",
          source: "Elastos Blog",
          content: "<p>The Elastos community is actively participating in voting on important governance proposals that will shape the future of the ecosystem.</p>"
        },
        {
          title: "Elastos Partners with Academic Institutions for Research Initiatives",
          link: "https://news.elastos.org/academic-partnerships",
          date: new Date(Date.now() - 950400000).toISOString(),
          description: "Elastos has formed partnerships with leading academic institutions to advance research in blockchain technology and digital identity.",
          source: "Elastos Blog",
          content: "<p>Elastos has formed partnerships with leading academic institutions to advance research in blockchain technology and digital identity.</p>"
        }
      ];
      
      // In a real implementation, you would fetch from various sources
      // and combine the results here
      
      return {
        total: mockNewsItems.length,
        offset: parsedOffset,
        limit: parsedLimit,
        items: mockNewsItems.slice(parsedOffset, parsedOffset + parsedLimit)
      };
    } catch (error) {
      console.error('Error in elastos-news endpoint:', error);
      return reply.code(500).send({ error: 'Failed to fetch news' });
    }
  });
}