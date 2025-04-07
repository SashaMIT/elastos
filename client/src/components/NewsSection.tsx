import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Spinner } from './ui/spinner';

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

export function NewsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch news data from RSS feed
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Using a CORS proxy to handle the cross-origin request
        const response = await fetch(
          "https://api.allorigins.win/get?url=" + 
          encodeURIComponent("https://rss.app/feeds/COQSFdAgMY8p4SOz.xml")
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

        // Extract items from the feed
        const items = xmlDoc.querySelectorAll("item");
        const parsedItems: NewsItem[] = [];

        items.forEach((item, index) => {
          // Extract image URL from content or enclosure
          let imageUrl = '/images/Elastos New Logo_Kit-03.png'; // Default image

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

          parsedItems.push({
            id: (index + 1).toString(),
            title: item.querySelector("title")?.textContent || "No Title",
            description: item.querySelector("description")?.textContent?.replace(/<[^>]*>/g, '') || "No Description",
            date: item.querySelector("pubDate")?.textContent || new Date().toDateString(),
            image: imageUrl,
            link: item.querySelector("link")?.textContent || "#",
            partners: categories.length > 0 ? categories : undefined
          });
        });

        if (parsedItems.length > 0) {
          setNewsItems(parsedItems);
        } else {
          // Use fallback data if no items were parsed
          setNewsItems(fallbackNewsItems);
        }
      } catch (error) {
        console.error("Error fetching news from RSS:", error);
        setNewsItems(fallbackNewsItems);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

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
  }, [newsItems]); // Rerun when newsItems changes

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

  return (
    <div className="w-full py-20 bg-background dark:bg-[#171717]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-[400] leading-tight text-left mb-0 text-black dark:text-white">Stay Updated</h3>
          <div className="flex items-center space-x-3">
            <a
              href="/announcements"
              className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)]"
            >
              <span>Explore News</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Spinner size="lg" />
          </div>
        ) : (
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsItems.map(item => (
              <div 
                key={item.id} 
                className="min-w-[300px] flex-shrink-0 bg-[#F5F5F5] dark:bg-[#1a1a1a] rounded-lg overflow-hidden" 
                style={{ width: 'calc(33.333% - 16px)' }} /* Showing 3 cards per row */
              >
                <div className="relative h-62 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
                    onError={(e) => {
                      // If image fails to load, replace with default image
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = '/images/Elastos New Logo_Kit-03.png';
                    }}
                  />
                  {item.partners && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 flex items-center space-x-2">
                      {item.partners.map((partner, idx) => (
                        <React.Fragment key={idx}>
                          <span className="text-sm">{partner}</span>
                          {idx < item.partners!.length - 1 && (
                            <div className="w-1 h-1 rounded-full bg-white"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formatDate(item.date)}</div>
                  <h3 className="text-lg font-semibold mb-2 leading-tight text-foreground dark:text-white line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{item.description}</p>
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm hover:bg-[rgba(92,142,255,0.25)]"
                  >
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                      <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                      <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}