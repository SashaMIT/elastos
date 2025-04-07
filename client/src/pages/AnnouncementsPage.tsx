import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Calendar, CalendarDays, ChevronRight, Clock, ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: {
    url: string;
    type: string;
  };
  content?: string;
  categories?: string[];
}

export function AnnouncementsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      // Using a CORS proxy to handle the cross-origin request
      const response = await fetch(
        "https://api.allorigins.win/get?url=" + 
        encodeURIComponent("https://rss.app/feeds/tQGWZNuxHC69yKOm.xml")
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      if (!data.contents) {
        throw new Error("Invalid RSS feed data");
      }

      // Parse the XML content
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");

      const items = xmlDoc.querySelectorAll("item");
      const parsedItems: NewsItem[] = [];

      items.forEach((item) => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        const description = item.querySelector("description")?.textContent || "";

        // Get enclosure (image) if available
        let enclosure;
        const enclosureElement = item.querySelector("enclosure");
        if (enclosureElement) {
          enclosure = {
            url: enclosureElement.getAttribute("url") || "",
            type: enclosureElement.getAttribute("type") || "",
          };
        }

        // Try to get categories
        const categoryElements = item.querySelectorAll("category");
        const categories: string[] = [];
        categoryElements.forEach((cat) => {
          if (cat.textContent) {
            categories.push(cat.textContent);
          }
        });

        // Try to get content
        const content = item.querySelector("content\\:encoded")?.textContent || 
                       item.querySelector("content")?.textContent || "";

        // Try to extract image from content or description if no enclosure
        if (!enclosure || !enclosure.url) {
          // Check content first
          const mediaMatch = content.match(/<img.*?src=["'](.*?)["']/i);

          // If not found in content, check description
          const descMediaMatch = !mediaMatch ? description.match(/<img.*?src=["'](.*?)["']/i) : null;

          if (mediaMatch && mediaMatch[1]) {
            enclosure = {
              url: mediaMatch[1],
              type: "image/jpeg" // Assume image type
            };
            console.log(`Extracted image from content: ${mediaMatch[1]}`);
          } else if (descMediaMatch && descMediaMatch[1]) {
            enclosure = {
              url: descMediaMatch[1],
              type: "image/jpeg"
            };
            console.log(`Extracted image from description: ${descMediaMatch[1]}`);
          }
        }

        parsedItems.push({
          title,
          link,
          pubDate,
          description,
          enclosure,
          content,
          categories: categories.length > 0 ? categories : ["News"]
        });

        // Log each processed item
        console.log(`Processed item: ${title} - Image: ${enclosure?.url || 'None'}`);
      });

      setNewsItems(parsedItems);
      setError(null);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please try again later.");

      // If RSS feed fails, add some fallback items from the screenshot
      const fallbackItems = [
        {
          title: "Elastos secures $20 million investment to expand Bitcoin DeFi ecosystem",
          link: "#",
          pubDate: "January 30, 2024",
          description: "Elastos secures $20 million from Rollman Management to expand Bitcoin-based DeFi and Web3 infrastructure.",
          categories: ["Investment", "DeFi"],
          enclosure: {
            url: "/images/Elastosvideoimage.png",
            type: "image/png"
          }
        },
        {
          title: "Bitcoin DeFi project Elastos closes $20M investment round",
          link: "#",
          pubDate: "January 30, 2024",
          description: "Web3 infrastructure provider Elastos has closed a $20-million investment round as part of a broader push to expand Bitcoin-based DeFi.",
          categories: ["Investment", "DeFi"],
          enclosure: {
            url: "/images/Elastos New Logo_Kit-01.png",
            type: "image/png"
          }
        },
        {
          title: "Elastos Secures $20M Funding to Scale Its Native Bitcoin Protocol",
          link: "#",
          pubDate: "January 30, 2024",
          description: "The financing comes from the private investment company Rollman Management.",
          categories: ["Funding", "Protocol"],
          enclosure: {
            url: "/images/BeL2.png",
            type: "image/png"
          }
        },
        {
          title: "Elastos Bitcoin DeFi Secures $20M Funding for Expansion",
          link: "#",
          pubDate: "January 30, 2024",
          description: "Elastos Bitcoin DeFi secures $20M funding to scale BeL2, enabling BTC holders to collateralize Bitcoin-backed stablecoins.",
          categories: ["Funding", "DeFi"],
          enclosure: {
            url: "/images/Roadmap/CoinTelegraph Report.png",
            type: "image/png"
          }
        },
        {
          title: "Elastos raises $20 million to enhance DeFi on Bitcoin",
          link: "#",
          pubDate: "January 30, 2024",
          description: "Elastos has obtained $20 million to develop BeL2, a protocol that aims to integrate DeFi services on the Bitcoin network.",
          categories: ["Funding", "DeFi"],
          enclosure: {
            url: "/images/Ecosystem/BeL2 Lending dapp.png",
            type: "image/png"
          }
        }
      ];

      setNewsItems(fallbackItems);
    } finally {
      setLoading(false);
    }
  };

  // Extract unique categories from news items, excluding "News" category
  const allCategories = [...Array.from(new Set(
    newsItems.flatMap(item => item.categories || [])
  ))].filter(category => category !== "News");

  // Filter news items by selected category
  const filteredNews = selectedCategory === null 
    ? newsItems 
    : newsItems.filter(item => item.categories?.includes(selectedCategory));

  // Clean news items of unwanted image source text
  filteredNews.forEach(item => {
    if (item.description && item.description.includes('src="https://')) {
      item.description = item.description.replace(/<img.*?>/g, '');
    }
  });

  // Format date helper function
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateString; // Return original if parsing fails
    }
  };

  // Extract reading time (3-5 min based on description length)
  const getReadingTime = (description: string): string => {
    const words = description.split(' ').length;
    const minutes = Math.max(1, Math.min(5, Math.ceil(words / 200)));
    return `${minutes} min`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717]">
      <ScrollToTop />

      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos Announcements" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>
        
        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6">
                  Announcements
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Stay up to date with the latest news, updates, and events from the Elastos ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#F6921A]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 rounded-full bg-[#5C8EFF]/10 blur-[120px]"></div>
      </div>

      {/* Category filters */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-6 -mt-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {allCategories.filter(category => category !== "All").map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category 
                  ? 'bg-[#F6921A] text-white' 
                  : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
              }`}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="w-full max-w-7xl mx-auto px-4 py-20 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-[#F6921A]" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading latest announcements...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 text-center">
          <p className="text-red-500 dark:text-red-400">{error}</p>
          <button 
            onClick={fetchNews}
            className="mt-4 px-4 py-2 bg-[#F6921A] text-white rounded-md hover:bg-[#E68200]"
          >
            Try Again
          </button>
        </div>
      )}

      {/* News grid */}
      {!loading && (
        <div className="w-full max-w-7xl mx-auto px-4 pb-12 -mt-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-800">
                  {/* Card image */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <img 
                      src={item.enclosure?.url || '/images/Elastos New Logo_Kit-03.png'} 
                      alt={item.title}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                      onError={(e) => {
                        // If image fails to load, replace with default image
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = '/images/Elastos New Logo_Kit-03.png';
                        console.log("Image failed to load, using fallback:", item.title);
                      }}
                    />
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {item.categories && item.categories.length > 0 && item.categories[0] !== "News" && (
                        <span className="bg-[rgba(246,146,26,0.15)] text-[#F6921A] px-2 py-1 rounded-full">
                          {item.categories[0]}
                        </span>
                      )}
                      <div className="flex items-center">
                        <CalendarDays className="w-3 h-3 mr-1" />
                        {formatDate(item.pubDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {getReadingTime(item.description)} read
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-3 text-black dark:text-white line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {item.description.replace(/<[^>]*>/g, '')}
                    </p>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#F6921A] hover:underline"
                    >
                      <span>Read more</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* No news state */}
      {!loading && filteredNews.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400">No announcements found for this category.</p>
        </div>
      )}

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}

export default AnnouncementsPage;