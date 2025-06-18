import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
    title: "BTCD: The Bitcoin Backed Stablecoin",
    buttonText: "Learn More",
    video: "/videos/btcd-announcement.mp4",
    youtubeEmbed: false,
    poster: "/images/Carousel/ElacityTea.png" // Fallback poster
  },
  {
    title: "Elacity World Computer Marketplace. A Blockchain-Powered Open Market.",
    buttonText: "Learn More",
    video: "/videos/elacity-team.mp4",
    youtubeEmbed: false,
    poster: "/images/Carousel/ElacityTea.png"
  },
  {
    title: "BeL2. Unlocking Bitcoins Value with Native Bitcoin DeFi using ELA-backed Nodes.",
    buttonText: "Learn More",
    video: "/videos/bel2-team.mp4",
    youtubeEmbed: false,
    poster: "/images/Carousel/BeL2Tea.png"
  },
  {
    title: "Essentials Wallet. Stake ELA and Earn APY, Access dApps and Explore Elastos.",
    buttonText: "Learn More",
    video: "/videos/essentials-team.mp4",
    youtubeEmbed: false,
    poster: "/images/Carousel/EssentialsTea.png"
  },
  {
    title: "Elastos DAO: Our community-governed DAO, powered by merged-mined ELA.",
    buttonText: "Learn More",
    video: "/videos/cyber-republic-team.mp4",
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
  const [loadedVideos, setLoadedVideos] = useState(new Set([0])); // Track which videos should be loaded
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  let animationFrameId: NodeJS.Timeout;

  // Initialize video refs array and ensure first video loads
  useEffect(() => {
    videoRefs.current = new Array(features.length).fill(null);
    // Ensure first video is loaded on initial render
    setLoadedVideos(prev => {
      const newSet = new Set(prev);
      newSet.add(0); // Always load first video
      newSet.add(1); // Preload second video
      return newSet;
    });
  }, []);

  // Preload poster images
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

  // Handle API setup and events
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      setProgress(0);
      
      // Load current and next video for smooth transitions
      setLoadedVideos(prev => {
        const newSet = new Set(prev);
        newSet.add(index);
        newSet.add((index + 1) % features.length); // Preload next video
        return newSet;
      });
    };
    
    api.on('select', handleSelect);
    
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

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

  // Video play/pause management
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (index === currentIndex && loadedVideos.has(index)) {
        // Play current slide video
        video.currentTime = 0; // Reset to beginning first
        // Small delay to ensure video is loaded
        setTimeout(() => {
          video.play().catch(console.error);
        }, 100);
      } else {
        // Pause all other videos
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    });
  }, [currentIndex, loadedVideos]);

  // Ensure first video plays on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo && currentIndex === 0) {
        firstVideo.currentTime = 0;
        firstVideo.play().catch(console.error);
      }
    }, 500); // Give time for video to load

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

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
        setApi={setApi}
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
                  {/* Render videos for all slides with lazy loading */}
                  {feature.video && loadedVideos.has(index) ? (
                    <video 
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={feature.video}
                      poster={feature.poster}
                      className={`absolute inset-0 w-full h-full object-cover transform-gpu z-0 ${
                        !isVisible ? 'opacity-0' : 'opacity-100'
                      }`}
                      autoPlay={index === 0} // Autoplay for first slide
                      loop
                      muted
                      playsInline
                      preload={index === 0 ? "auto" : "metadata"} // Preload first video fully
                      onContextMenu={(e) => e.preventDefault()}
                      onLoadedData={() => {
                        // Ensure first video plays when loaded
                        if (index === 0 && currentIndex === 0) {
                          const video = videoRefs.current[0];
                          if (video) {
                            video.play().catch(console.error);
                          }
                        }
                      }}
                    />
                  ) : (
                    <img 
                      src={feature.poster}
                      alt={`${index === 0 ? 'BTCD' : index === 1 ? 'Elacity' : index === 2 ? 'BeL2' : index === 3 ? 'Essentials' : 'Elastos DAO'} Preview`}
                      className={`absolute inset-0 w-full h-full object-cover transform-gpu z-0 ${
                        !isVisible ? 'opacity-0' : 'opacity-100'
                      }`}
                      loading="eager" 
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
                  <div className="absolute inset-0 p-8 text-white z-10">
                    <div className="h-full flex flex-col">
                      <div className="flex-grow" />
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-full sm:max-w-[70%] text-center sm:text-left text-shadow-lg">{feature.title}</h2>
                        <a 
                          href={
                            index === 0 ? "https://www.nbwlabs.org/offerings" : // BTCD - NBW Labs offerings page
                            index === 1 ? "https://labs.ela.city" : 
                            index === 2 ? "https://bel2.org" : 
                            index === 3 ? "/wallet" : 
                            index === 4 ? "/dao" : "#"
                          } 
                          target={index === 0 || index === 1 || index === 2 ? "_blank" : "_self"}
                          rel={index === 0 || index === 1 || index === 2 ? "noopener noreferrer" : ""}
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