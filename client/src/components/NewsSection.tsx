import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RefreshCcw, AlertTriangle } from 'lucide-react';
import { Spinner } from './ui/spinner';
import { Skeleton } from './ui/skeleton';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  partners?: string[];
}

// Fallback news items in case the RSS feed fails
const fallbackNewsItems: NewsItem[] = [
  {
    id: '1',
    date: 'January 14, 2025',
    title: 'Elastos secures $20 million investment to expand Bitcoin DeFi ecosystem',
    description: 'Elastos secures $20 million from Rollman Management to expand Bitcoin-based DeFi and Web3 infrastructure.',
    image: '/images/Elastosvideoimage.png',
    link: '#',
    partners: ['Elastos', 'Investment']
  },
  {
    id: '2',
    date: 'January 14, 2025',
    title: 'Bitcoin DeFi project Elastos closes $20M investment round',
    description: 'Web3 infrastructure provider Elastos has closed a $20-million investment round as part of a broader push to expand Bitcoin-based DeFi.',
    image: '/images/Elastos New Logo_Kit-01.png',
    link: '#'
  },
  {
    id: '3',
    date: 'January 14, 2025',
    title: 'Elastos introduces new BeL2 technology for Bitcoin scalability',
    description: 'The new BeL2 technology aims to bring DeFi capabilities to Bitcoin through advanced Layer 2 solutions.',
    image: '/images/BeL2.png',
    link: '#',
    partners: ['Elastos', 'BeL2']
  },
  {
    id: '4',
    date: 'January 14, 2025',
    title: 'Elastos Community launches new developer portal',
    description: 'New developer resources aim to accelerate adoption of the Elastos ecosystem among blockchain developers.',
    image: '/images/Elastosvideoimage.png',
    link: '#'
  }
];

// RSS feed URL
const RSS_FEED_URL = "https://rss.app/feeds/4dpMoB5Crc5ACmOz.xml";
const CORS_PROXY = "https://api.allorigins.win/get?url=";
const DEFAULT_IMAGE = '/images/Elastos New Logo_Kit-03.png';

// Cache key for localStorage
const CACHE_KEY = 'elastos_news_cache';
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes in milliseconds

export function NewsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  // Helper function to get cached data
  const getCachedData = (): { data: NewsItem[] | null, timestamp: number | null } => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        return { data, timestamp };
      }
    } catch (e) {
      console.error('Error reading from cache:', e);
    }
    return { data: null, timestamp: null };
  };

  // Helper function to set cached data
  const setCachedData = (data: NewsItem[]) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (e) {
      console.error('Error writing to cache:', e);
    }
  };

  // Fetch news data from RSS feed
  const fetchNews = useCallback(async (forceFresh = false) => {
    setError(null);
    
    if (!forceFresh) {
      // Check for cached data first
      const { data: cachedData, timestamp } = getCachedData();
      if (cachedData && timestamp && Date.now() - timestamp < CACHE_EXPIRY) {
        setNewsItems(cachedData);
        setLoading(false);
        return;
      }
    }
    
    try {
      setLoading(true);
      // Using a CORS proxy to handle the cross-origin request
      const response = await fetch(
        CORS_PROXY + encodeURIComponent(RSS_FEED_URL)
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch news (Status: ${response.status})`);
      }

      const data = await response.json();

      if (!data.contents) {
        throw new Error("Invalid RSS feed data");
      }

      // Parse the XML content
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");

      // Extract items from the feed (limit to 9)
      const items = xmlDoc.querySelectorAll("item");
      const parsedItems: NewsItem[] = [];
      const maxItems = Math.min(items.length, 9);

      // Only process the first 9 items
      for (let index = 0; index < maxItems; index++) {
        const item = items[index];
        // Extract image URL from content or enclosure
        let imageUrl = DEFAULT_IMAGE; // Default image

        const enclosure = item.querySelector("enclosure");
        if (enclosure && enclosure.getAttribute("url")) {
          imageUrl = enclosure.getAttribute("url") || imageUrl;
        } else {
          // Try to extract from content or description
          const content = item.querySelector("content\\:encoded")?.textContent || 
                          item.querySelector("content")?.textContent || 
                          item.querySelector("description")?.textContent || '';

          const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }

        // Get categories if available
        const categories: string[] = [];
        item.querySelectorAll("category").forEach(cat => {
          if (cat.textContent && cat.textContent !== "News") {
            categories.push(cat.textContent);
          }
        });

        // Clean description text of HTML tags
        const rawDescription = item.querySelector("description")?.textContent || "No Description";
        const cleanDescription = rawDescription.replace(/<[^>]*>/g, '');

        parsedItems.push({
          id: (index + 1).toString(),
          title: item.querySelector("title")?.textContent || "No Title",
          description: cleanDescription,
          date: item.querySelector("pubDate")?.textContent || new Date().toDateString(),
          image: imageUrl,
          link: item.querySelector("link")?.textContent || "#",
          partners: categories.length > 0 ? categories : undefined
        });
      }

      if (parsedItems.length > 0) {
        setNewsItems(parsedItems);
        // Cache the successfully fetched data
        setCachedData(parsedItems);
      } else {
        // Use fallback data if no items were parsed
        setNewsItems(fallbackNewsItems);
        setError("No news items found in feed");
      }
    } catch (error) {
      console.error("Error fetching news from RSS:", error);
      setNewsItems(fallbackNewsItems);
      setError(error instanceof Error ? error.message : "Failed to load news");
    } finally {
      setLoading(false);
      setIsRetrying(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    // Refresh data every 30 minutes if tab is active
    const intervalId = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchNews(true);
      }
    }, CACHE_EXPIRY);

    return () => clearInterval(intervalId);
  }, [fetchNews]);

  const handleRetry = () => {
    setIsRetrying(true);
    fetchNews(true);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Check scroll possibilities
  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Set up scroll event listener
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
    }

    // Check after images may have loaded
    const timer = setTimeout(checkScroll, 500);

    // Cleanup
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
      clearTimeout(timer);
    };
  }, [newsItems, checkScroll]); // Rerun when newsItems changes

  // Format date
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

  // Render loading skeletons
  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
      <div 
        key={`skeleton-${index}`}
        className="min-w-[300px] flex-shrink-0 bg-[#F5F5F5] dark:bg-[#1a1a1a] rounded-lg overflow-hidden"
        style={{ width: 'calc(33.333% - 16px)' }}
      >
        <Skeleton className="h-[200px] w-full" />
        <div className="p-4">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6 mb-3" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full py-20 bg-background dark:bg-[#171717]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-[400] leading-tight text-left mb-0 text-black dark:text-white">Stay Updated</h3>
          <div className="flex items-center space-x-3">
            {error && (
              <button 
                onClick={handleRetry}
                aria-label="Retry loading news"
                disabled={isRetrying}
                className="inline-flex items-center px-3 py-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full font-[200] transition-all gap-1 border border-amber-200 dark:border-amber-700 text-sm hover:bg-amber-200 dark:hover:bg-amber-800"
              >
                {isRetrying ? (
                  <Spinner size="sm" className="text-amber-800 dark:text-amber-100" />
                ) : (
                  <RefreshCcw size={16} className="mr-1" />
                )}
                <span>Retry</span>
              </button>
            )}
            
            <a
              href="https://blog.elastos.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-[#F6921A] dark:text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)]"
              aria-label="Explore all Elastos news articles"
            >
              Explore News
            </a>
          </div>
        </div>

        {/* Error message - shown together with fallback data */}
        {error && (
          <div className="mb-4 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg flex items-center text-amber-800 dark:text-amber-300">
            <AlertTriangle size={16} className="mr-2 flex-shrink-0" />
            <p className="text-sm">Using cached news due to: {error}. You're seeing our most recent available updates.</p>
          </div>
        )}

        {/* Content area with scroll controls */}
        <div className="relative">
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-[#242424] shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          )}

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-[#242424] shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          )}

          {/* Main content */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            aria-label="Latest news articles"
          >
            {loading ? renderSkeletons() : (
              newsItems.map(item => (
                <article 
                  key={item.id} 
                  className="min-w-[300px] flex-shrink-0 bg-[#F5F5F5] dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" 
                  style={{ width: 'calc(33.333% - 16px)' }} /* Showing 3 cards per row */
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-full h-full object-cover bg-gray-100 dark:bg-gray-800"
                      onError={(e) => {
                        // If image fails to load, replace with default image
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = DEFAULT_IMAGE;
                      }}
                    />
                    {item.partners && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 flex flex-wrap items-center gap-2">
                        {item.partners.map((partner, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                            {partner}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <time dateTime={new Date(item.date).toISOString()} className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
                      {formatDate(item.date)}
                    </time>
                    <h3 className="text-lg font-semibold mb-2 leading-tight text-foreground dark:text-white line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{item.description}</p>
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-[#5C8EFF] dark:text-white rounded-full font-[200] transition-all border border-[rgba(92,142,255,0.25)] text-sm hover:bg-[rgba(92,142,255,0.25)]"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read more
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}