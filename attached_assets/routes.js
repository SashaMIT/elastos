// Server-side routes for the Announcements page
const Parser = require('rss-parser');
const parser = new Parser();

/**
 * Register API routes for the Announcements page
 * @param {Express} app - Express application
 */
function registerAnnouncementsRoutes(app) {
  // WordPress blog posts RSS feed
  app.get("/api/wordpress-blogs", async (req, res) => {
    try {
      const { limit = 20, offset = 0 } = req.query;
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // Replace with your RSS feed URL
      const feedUrl = "https://rss.app/feeds/COQSFdAgMY8p4SOz.xml";
      
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
      console.error("Failed to fetch WordPress blogs:", error);
      res.status(500).json({ message: "Failed to fetch WordPress blogs" });
    }
  });
  
  // Elastos News from RSS.app aggregated feed
  app.get("/api/elastos-news", async (req, res) => {
    try {
      const { limit = 20, offset = 0 } = req.query;
      const parsedLimit = Math.min(Number(limit), 50); // Cap at 50 items
      const parsedOffset = Number(offset);
      
      // Replace with your RSS feed URL
      const feedUrl = "https://rss.app/feeds/tQGWZNuxHC69yKOm.xml";
      
      // Fetch and parse the RSS feed
      const parsedFeed = await parser.parseURL(feedUrl);
      
      // Process the news items
      const elastosNews = parsedFeed.items.map(item => ({
        title: item.title ?? "",
        link: item.link ?? "",
        date: item.pubDate ?? new Date().toISOString(),
        description: item.contentSnippet ?? "",
        content: item.content ?? "",
        source: item.creator || "Elastos News"
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
      .slice(parsedOffset, parsedOffset + parsedLimit); // Apply pagination
      
      res.json({
        total: parsedFeed.items.length,
        offset: parsedOffset,
        limit: parsedLimit,
        items: elastosNews
      });
    } catch (error) {
      console.error("Failed to fetch Elastos news:", error);
      res.status(500).json({ message: "Failed to fetch Elastos news" });
    }
  });
}

module.exports = registerAnnouncementsRoutes;