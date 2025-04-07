
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Newspaper, 
  RefreshCw,
  Search,
  X,
  Star,
  BookOpen,
  ArrowRight,
  User
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fadeIn, staggerContainer } from "@/lib/animations";

// Types
type NewsItem = {
  title: string;
  link: string;
  date: string;
  description: string;
  source: string;
  content?: string;
  imageUrl?: string; // Extracted from content
};

type BlogPost = {
  title: string;
  link: string;
  date: string;
  description: string;
  content?: string;
  author?: string;
  imageUrl?: string;
};

type NewsResponse = {
  total: number;
  offset: number;
  limit: number;
  items: NewsItem[];
};

type BlogResponse = {
  total: number;
  offset: number;
  limit: number;
  items: BlogPost[];
};

export default function ElastosAnnouncementsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [blogItems, setBlogItems] = useState<BlogPost[]>([]);
  const itemsPerPage = 12;

  // Fetch news from the API
  const { data, isLoading, isError, refetch } = useQuery<NewsResponse>({
    queryKey: ['/api/elastos-news', currentPage, itemsPerPage],
    queryFn: async ({ signal }: { signal?: AbortSignal }) => {
      const response = await fetch(`/api/elastos-news?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`, { signal });
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      return response.json() as Promise<NewsResponse>;
    },
  });
  
  // Fetch blog posts separately for the blog carousel - using wordpress-blogs endpoint
  const { data: blogData, isLoading: isBlogLoading } = useQuery<BlogResponse>({
    queryKey: ['/api/wordpress-blogs'],
    queryFn: async ({ signal }: { signal?: AbortSignal }) => {
      const response = await fetch('/api/wordpress-blogs', { signal });
      if (!response.ok) {
        console.error('Failed to fetch blog posts');
        return { total: 0, offset: 0, limit: 10, items: [] }; // Return empty array on error, but don't throw
      }
      return response.json() as Promise<BlogResponse>;
    },
  });

  // Extract images from content and enrich the news items
  useEffect(() => {
    if (data?.items && data.items.length > 0) {
      console.log("Processing", data.items.length, "news items");
      
      const enrichedItems = data.items.map((item: NewsItem) => {
        let imageUrl = undefined;
        
        // Try to extract image URL from content
        if (item.content) {
          const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }
        
        // If no image found, use a default based on source
        if (!imageUrl) {
          // Use default images based on source
          const sourceDefaults: Record<string, string> = {
            "Elastos Blog": "/images/Elastos Icon - 2.png",
            "CoinTelegraph": "https://s3.cointelegraph.com/storage/uploads/view/36084ee27c9de30de8a173375a652435.png",
            "CoinDesk": "https://www.coindesk.com/resizer/s8J-7C3mOJr1TWY0wBatVoGEkXg=/2000x1125/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/JPYJWPA2HFCCVJ7WAU74OBEA2Y.jpg",
            "Chainwire": "/images/Elastos Essentials.png"
          };
          imageUrl = sourceDefaults[item.source] || "/images/Elastos Icon - 2.png";
        }
        
        return {
          ...item,
          imageUrl
        };
      });
      
      setNewsItems(enrichedItems);
      console.log("Set enriched news items:", enrichedItems.length);
    } else {
      console.log("No news items available or empty array");
    }
  }, [data]);
  
  // Extract images from content and enrich the blog posts
  useEffect(() => {
    if (blogData?.items && blogData.items.length > 0) {
      console.log("Processing", blogData.items.length, "blog posts");
      
      const enrichedBlogPosts = blogData.items.map((post: BlogPost) => {
        let imageUrl = undefined;
        
        // Try to extract image URL from content
        if (post.content) {
          const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }
        
        // If no image found, use a default
        if (!imageUrl) {
          // For blogs, use Elastos icon
          imageUrl = "/images/Elastos Icon - 2.png";
        }
        
        return {
          ...post,
          imageUrl
        };
      });
      
      setBlogItems(enrichedBlogPosts);
      console.log("Set enriched blog items:", enrichedBlogPosts.length);
    } else {
      console.log("No blog posts available or empty array");
    }
  }, [blogData]);

  // Handle pagination
  const handleNextPage = () => {
    if (data && currentPage < Math.ceil(data.total / itemsPerPage)) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Filter news based on search term
  const filteredNews = newsItems && newsItems.length > 0 ? 
    newsItems.filter((item: NewsItem) => {
      if (!searchTerm) return true;
      const searchableText = `${item.title} ${item.description}`.toLowerCase();
      return searchableText.includes(searchTerm.toLowerCase());
    }) : [];
  
  // Format source names (keeping original writer names)
  const getPlatformName = (source: string): string => {
    // Check if source is empty
    if (!source) return 'Unknown Source';
    
    // Return the source name (writer name) with proper capitalization
    // Capitalize first letter of each word
    return source.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Source badge color mapping - randomized but consistent colors for writers
  const getSourceColor = (source: string) => {
    // Generate a consistent color based on the source name
    // This ensures the same writer always gets the same color
    const colorChoices = [
      "text-blue-400 bg-blue-400/10 border-blue-400/30",
      "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
      "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      "text-amber-400 bg-amber-400/10 border-amber-400/30",
      "text-purple-400 bg-purple-400/10 border-purple-400/30",
      "text-green-400 bg-green-400/10 border-green-400/30",
      "text-red-400 bg-red-400/10 border-red-400/30",
      "text-orange-400 bg-orange-400/10 border-orange-400/30",
      "text-sky-400 bg-sky-400/10 border-sky-400/30",
      "text-pink-400 bg-pink-400/10 border-pink-400/30",
      "text-teal-400 bg-teal-400/10 border-teal-400/30",
      "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
    ];

    // Special case for Elastos-related sources
    if (source.toLowerCase().includes('elastos')) {
      return "text-[#F7921A] bg-[#F7921A]/10 border-[#F7921A]/30";
    }
    
    // Get a hash of the source name to generate a consistent index
    let hashCode = 0;
    for (let i = 0; i < source.length; i++) {
      hashCode = ((hashCode << 5) - hashCode) + source.charCodeAt(i);
      hashCode = hashCode & hashCode; // Convert to 32bit integer
    }
    
    // Use the hash to select a color
    const index = Math.abs(hashCode) % colorChoices.length;
    return colorChoices[index];
  };

  // Get source icon - using User icon for all writer names
  const getSourceIcon = (source: string) => {
    // Special case for Elastos-related sources
    if (source.toLowerCase().includes('elastos')) {
      return <Star className="w-3.5 h-3.5 mr-1" />;
    }
    
    // Default to user icon for writers
    return <User className="w-3.5 h-3.5 mr-1" />;
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F7921A]/5 blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#8BABFF]/5 blur-[180px] opacity-20"></div>
      </div>

      {/* Main Content */}
      <section className="relative pt-20 pb-8">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Loading state */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-20">
                <RefreshCw className="w-12 h-12 text-[#8BABFF] animate-spin mb-4" />
                <p className="text-white/70">Loading Elastos announcements...</p>
              </div>
            )}

            {/* Error state */}
            {isError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 text-center">
                <p className="text-red-400 mb-4">Failed to load news</p>
                <button 
                  onClick={() => refetch()}
                  className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-full flex items-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
              </div>
            )}

            {/* No results */}
            {!isLoading && !isError && filteredNews.length === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <Newspaper className="w-12 h-12 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No announcements found</h3>
                <p className="text-white/60 mb-4">
                  {searchTerm ? 
                    `No results found for "${searchTerm}"` : 
                    "No Elastos announcements found from our sources"}
                </p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="px-6 py-2 bg-white/10 hover:bg-white/15 text-white rounded-full inline-flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear Search</span>
                  </button>
                )}
              </div>
            )}

            {/* Announcements Content */}
            {!isLoading && !isError && filteredNews.length > 0 && (
              <>
                {/* Featured Announcements Carousel */}
                <div className="mb-14">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center text-[#F7921A] mr-2">
                      <Star className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Featured Announcements</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredNews.slice(0, Math.min(2, filteredNews.length)).map((item, index) => (
                      <motion.div
                        key={`featured-${item.link}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#F7921A]/30 group transition-all duration-300 h-full cursor-pointer"
                        onClick={() => window.open(item.link, '_blank')}
                      >
                        {/* Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                          <motion.img 
                            src={item.imageUrl} 
                            alt={item.title}
                            className="w-full h-full object-cover object-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute top-3 right-3 z-20">
                            <span className={`text-xs px-2.5 py-0.5 rounded-full border flex items-center ${getSourceColor(item.source)}`}>
                              {getSourceIcon(item.source)}
                              <span className="truncate max-w-[120px]">{getPlatformName(item.source)}</span>
                            </span>
                          </div>
                          
                          {/* Date overlaid on image */}
                          <div className="absolute bottom-4 left-4 z-20">
                            <div className="flex items-center text-white/80 text-sm bg-black/30 px-3 py-1 rounded-full">
                              <Calendar className="w-3.5 h-3.5 mr-1.5" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 h-[4rem]">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-[#F7921A] transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.title}
                            </a>
                          </h3>
                          
                          <p className="text-white/70 mb-4 text-sm line-clamp-3 h-[4.5rem]">
                            {item.description}
                          </p>
                          
                          <motion.div 
                            className="flex justify-end"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-[#F7921A] hover:text-[#F7921A]/80 transition-colors font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Read Full Article</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Regular Announcements Grid */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center text-[#8BABFF] mr-2">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Latest Announcements</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.slice(2).map((item, index) => (
                      <motion.div
                        key={`${item.link}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#8BABFF]/30 group transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                          <img 
                            src={item.imageUrl} 
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 z-20">
                            <span className={`text-xs px-2.5 py-0.5 rounded-full border flex items-center ${getSourceColor(item.source)}`}>
                              {getSourceIcon(item.source)}
                              <span className="truncate max-w-[120px]">{getPlatformName(item.source)}</span>
                            </span>
                          </div>
                          
                          {/* Date overlaid on image */}
                          <div className="absolute bottom-4 left-4 z-20">
                            <div className="flex items-center text-white/80 text-sm bg-black/30 px-3 py-1 rounded-full">
                              <Calendar className="w-3.5 h-3.5 mr-1.5" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 h-[3.5rem]">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-[#8BABFF] transition-colors"
                            >
                              {item.title}
                            </a>
                          </h3>
                          
                          <p className="text-white/70 mb-4 text-sm line-clamp-2 h-[2.5rem]">
                            {item.description}
                          </p>
                          
                          <div className="flex justify-end">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-[#8BABFF] hover:text-[#8BABFF]/80 transition-colors font-medium"
                            >
                              <span>Read More</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Pagination */}
            {!isLoading && !isError && data && data.total > itemsPerPage && (
              <div className="flex items-center justify-between mt-14 pt-6 border-t border-white/10">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    currentPage === 1 
                      ? 'text-white/30 border-white/10 cursor-not-allowed' 
                      : 'text-white border-white/20 hover:bg-white/5'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <span className="text-white/60">
                  Page {currentPage} of {Math.ceil(data.total / itemsPerPage)}
                </span>
                
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage >= Math.ceil(data.total / itemsPerPage)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    currentPage >= Math.ceil(data.total / itemsPerPage) 
                      ? 'text-white/30 border-white/10 cursor-not-allowed' 
                      : 'text-white border-white/20 hover:bg-white/5'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section - Advanced Carousel */}
      <section className="relative py-16 mt-10">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="flex items-center text-[#F7921A] mr-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Latest Blog Posts</h2>
            </div>
            
            {isBlogLoading && (
              <div className="flex flex-col items-center justify-center py-12">
                <RefreshCw className="w-10 h-10 text-[#8BABFF] animate-spin mb-4" />
                <p className="text-white/70">Loading blog posts...</p>
              </div>
            )}
            
            {!isBlogLoading && blogItems.length === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <BookOpen className="w-12 h-12 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No blog posts found</h3>
                <p className="text-white/60 mb-6">
                  Visit our blogs page soon for new content
                </p>
                <Link 
                  to="/blogs-and-news"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-full"
                >
                  <span>Visit Blogs Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
            
            {!isBlogLoading && blogItems.length > 0 && (
              <div className="mb-8">
                <Carousel 
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {blogItems.map((post, index) => (
                      <CarouselItem key={post.link} className="md:basis-1/2 lg:basis-1/3 pl-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            y: -10,
                            transition: { duration: 0.3 }
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#F7921A]/30 h-full"
                        >
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                            <img 
                              src={post.imageUrl || "/images/Elastos Icon - 2.png"} 
                              alt={post.title}
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Date overlaid on image */}
                            <div className="absolute bottom-4 left-4 z-20">
                              <div className="flex items-center text-white/80 text-sm bg-black/30 px-3 py-1 rounded-full">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-5">
                            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 h-[3.5rem]">
                              <a 
                                href={post.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-[#F7921A] transition-colors"
                              >
                                {post.title}
                              </a>
                            </h3>
                            
                            <p className="text-white/70 mb-4 text-sm line-clamp-2 h-[2.5rem]">
                              {post.description}
                            </p>
                            
                            <div className="flex justify-between items-center">
                              {post.author && (
                                <span className="text-xs text-white/60 flex items-center">
                                  <User className="w-3 h-3 mr-1" />
                                  <span>{post.author}</span>
                                </span>
                              )}
                              
                              <a 
                                href={post.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-[#F7921A] hover:text-[#F7921A]/80 transition-colors font-medium ml-auto"
                              >
                                <span>Read</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex items-center justify-center mt-6">
                    <CarouselPrevious className="static mr-2 translate-y-0" />
                    <CarouselNext className="static ml-2 translate-y-0" />
                  </div>
                </Carousel>
                
                <div className="flex justify-center mt-10">
                  <Link 
                    to="/blogs-and-news"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F7921A] to-[#8BABFF] rounded-lg text-white font-medium hover:opacity-90 transition-all hover:gap-3"
                  >
                    <span>View All Blog Posts</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
