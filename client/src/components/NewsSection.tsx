import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  partners?: string[];
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: 'January 14, 2025',
    title: 'Lorem ipsum dolor sitconsectetuer adipis elit, sed diam nonummy.',
    description: 'Lorem ipsum dolor sit amet consectetuer',
    image: '/images/Elastosvideoimage.png'
  },
  {
    id: 2,
    date: 'January 14, 2025',
    title: 'Lorem ipsum dolor sitconsectetuer adipis elit, sed diam nonummy.',
    description: 'Lorem ipsum dolor sit amet consectetuer',
    image: '/images/Elastosvideoimage.png'
  },
  {
    id: 3,
    date: 'January 14, 2025',
    title: 'Lorem ipsum dolor sitconsectetuer adipis elit, sed diam nonummy.',
    description: 'Lorem ipsum dolor sit amet consectetuer',
    partners: ['Elastos', 'Bitmain'],
    image: '/images/Elastosvideoimage.png'
  },
  {
    id: 4,
    date: 'January 14, 2025',
    title: 'Lorem ipsum dolor sitconsectetuer adipis elit, sed diam nonummy.',
    description: 'Lorem ipsum dolor sit amet consectetuer',
    image: '/images/Elastosvideoimage.png'
  }
];

export function NewsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, []);

  return (
    <div className="w-full py-20 bg-background dark:bg-[#171717]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-foreground dark:text-white">Stay Updated</h2>
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft}
              className={`p-2 rounded-full bg-[#F5F5F5] dark:bg-[#262626] text-foreground dark:text-white hover:bg-gray-200 dark:hover:bg-[#333333] transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className={`p-2 rounded-full bg-[#F5F5F5] dark:bg-[#262626] text-foreground dark:text-white hover:bg-gray-200 dark:hover:bg-[#333333] transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

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
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
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
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold mb-2 leading-tight text-foreground dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}