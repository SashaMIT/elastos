import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress";
import { EmblaCarouselType } from 'embla-carousel';

// Define features outside component to avoid recreation on renders
const features = [
  {
    title: "Elacity World Computer Marketplace. A Blockchain-Powered Open Market.",
    buttonText: "Learn More",
    // Store YouTube links for future reference but don't use them now
    // video: "https://youtu.be/mq7TnEK3P4I",
    youtubeEmbed: false,
    poster: "/images/Carousel/ElacityTea.png"
  },
  {
    title: "BeL2. Unlocking Bitcoins Value with Native Bitcoin DeFi using ELA-backed Nodes.",
    buttonText: "Learn More",
    // video: "https://youtu.be/yuj3h4AOBuM",
    youtubeEmbed: false,
    poster: "/images/Carousel/BeL2Tea.png"
  },
  {
    title: "Essentials Wallet. Stake ELA and Earn APY, Access dApps and Explore Elastos.",
    buttonText: "Learn More",
    // video: "https://youtu.be/OCwAsCfgOFg",
    youtubeEmbed: false,
    poster: "/images/Carousel/EssentialsTea.png"
  },
  {
    title: "Elastos DAO: Our community-governed DAO, powered by merged-mined ELA.",
    buttonText: "Learn More",
    // video: "https://youtu.be/RpIFm57cLt4",
    youtubeEmbed: false,
    poster: "/images/Carousel/CyberRepublicTea.png"
  },
];

const SLIDE_DURATION = 10000;
// Using less frequent updates (33ms = ~30fps instead of 16ms = ~60fps)
const PROGRESS_UPDATE_INTERVAL = 33;

export function FeaturesCarousel() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const [api, setApi] = React.useState<EmblaCarouselType>();
  const [visibleIndexes, setVisibleIndexes] = useState(new Set([0])); // Track visible slides
  let animationFrameId: NodeJS.Timeout;

  // Preload all images on initial load
  useEffect(() => {
    features.forEach(feature => {
      const img = new Image();
      img.src = feature.poster;
    });
  }, []);

  // Memoize carousel options to prevent recreation on render
  const carouselOptions = useMemo(() => ({
    duration: 100, 
    loop: true, 
    startIndex: 0, 
    watchDrag: false, 
    skipSnaps: false, 
    easing: (t: number) => 1 - Math.pow(1 - t, 4)
  }), []);

  // Handle slide change with useCallback to avoid recreation
  const handleApi = useCallback((api: EmblaCarouselType | undefined) => {
    if (!api) return;
    api.on('select', () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      setProgress(0);
    });
  }, []);

  // Use IntersectionObserver to detect visible slides
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const slideIndex = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleIndexes(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(slideIndex);
            } else {
              newSet.delete(slideIndex);
            }
            return newSet;
          });
        });
      },
      { threshold: 0.1 }
    );

    // Observe all carousel items
    document.querySelectorAll('.carousel-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  // Progress timer with reduced update frequency
  useEffect(() => {
    let startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(newProgress);

      if (elapsed >= SLIDE_DURATION) {
        const nextIndex = (currentIndex + 1) % features.length;
        setCurrentIndex(nextIndex);
        setProgress(0);
        startTime = Date.now();

        if (api) {
          api.scrollTo(nextIndex);
        }
      }

      animationFrameId = setTimeout(updateProgress, PROGRESS_UPDATE_INTERVAL);
    };

    animationFrameId = setTimeout(updateProgress, PROGRESS_UPDATE_INTERVAL);

    return () => clearTimeout(animationFrameId);
  }, [currentIndex, api]);

  return (
    <div className="container mx-auto">
      <Carousel 
        className="w-full relative" 
        opts={carouselOptions}
        setApi={handleApi}
      >
        <CarouselContent>
          {features.map((feature, index) => {
            const isVisible = visibleIndexes.has(index);

            return (
              <CarouselItem key={index} className="carousel-item" data-index={index}>
                <div className={cn(
                  "relative rounded-2xl overflow-hidden",
                  "backdrop-blur-lg border border-white/10",
                  isMobile ? "h-[320px]" : "h-[400px]"
                )}>
                  <div className="absolute inset-0 bg-black/30 z-[1]"></div>
                  {/* Using correct paths to the Carousel folder */}
                  <img 
                    src={index === 0 ? "/images/Carousel/ElacityTea.png" : 
                         index === 1 ? "/images/Carousel/BeL2Tea.png" : 
                         index === 2 ? "/images/Carousel/EssentialsTea.png" : 
                         "/images/Carousel/CyberRepublicTea.png"}
                    alt={`${index === 0 ? 'Elacity' : index === 1 ? 'BeL2' : index === 2 ? 'Essentials' : 'Elastos DAO'} Preview`}
                    className={`absolute inset-0 w-full h-full object-cover transform-gpu z-0 ${
                      // No scaling/zoom for all images
                      !isVisible ? 'opacity-0' : 'opacity-100'
                    }`}
                    loading="eager" 
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 p-8 text-white z-10">
                    <div className="h-full flex flex-col">
                      <div className="flex-grow" />
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-full sm:max-w-[70%] text-center sm:text-left text-shadow-lg">{feature.title}</h2>
                        <a 
                          href={
                            index === 0 ? "https://labs.ela.city" : 
                            index === 1 ? "https://bel2.org" : 
                            index === 2 ? "/wallet" : 
                            index === 3 ? "/dao" : "#"
                          } 
                          target={index === 0 || index === 1 ? "_blank" : "_self"}
                          rel={index === 0 || index === 1 ? "noopener noreferrer" : ""}
                          className="px-4 py-2 bg-[#21293a] text-white rounded-full font-[200] transition-all flex flex-row items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm min-w-[130px] hover:bg-[#2a3548]"
                        >
                          <span>{feature.buttonText}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Only render progress bar for current slide */}
                  {index === currentIndex && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24">
                      <Progress value={progress} className="h-2 w-full bg-white/20" indicatorClassName="bg-white" />
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}