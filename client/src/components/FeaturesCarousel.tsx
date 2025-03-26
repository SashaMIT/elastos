
import React, { useState, useEffect } from 'react';
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

const features = [
  {
    title: "Elacity World Computer Marketplace. A Blockchain-Powered Open Market.",
    buttonText: "Learn More",
    video: "/videos/ElacityTeam.mp4"
  },
  {
    title: "BeL2. Unlocking Bitcoins Value with Native Bitcoin DeFi using ELA-backed Nodes.",
    buttonText: "Explore",
    video: "/videos/BeL2Team.mp4"
  },
  {
    title: "Essentials Wallet. Stake ELA and Earn APY, Access dApps and Explore Elastos.",
    buttonText: "Learn More",
    video: "/videos/EssentialsTeam.mp4"
  },
  {
    title: "Cyber Republic: Our community-governed DAO, powered by merged-mined ELA.",
    buttonText: "Explore",
    video: "/videos/CyberRepublicTeam.mp4"
  },
];

const SLIDE_DURATION = 10000;

export function FeaturesCarousel() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(progress);

      if (elapsed >= SLIDE_DURATION) {
        const nextIndex = (currentIndex + 1) % features.length;
        setCurrentIndex(nextIndex);
        setProgress(0);
        startTime = Date.now();

        if (api) {
          api.scrollTo(nextIndex);
        }
      }
    }, 16);

    return () => clearInterval(timer);
  }, [currentIndex, api]);

  return (
    <div className="container mx-auto">
      <Carousel 
        className="w-full relative" 
        opts={{ duration: 100, loop: true, startIndex: 0, watchDrag: false, skipSnaps: false, easing: (t) => 1 - Math.pow(1 - t, 4) }}
        setApi={setApi}
        onSelect={(index) => {
          setCurrentIndex(index);
          setProgress(0);
        }}
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index}>
              <div className={cn(
                "relative rounded-2xl overflow-hidden",
                "backdrop-blur-lg border border-white/10",
                isMobile ? "h-[320px]" : "h-[400px]"
              )}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  loading="lazy"
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={feature.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 p-8 text-white">
                  <div className="h-full flex flex-col">
                    <div className="flex-grow" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-full sm:max-w-[70%] text-center sm:text-left">{feature.title}</h2>
                      <button className="px-4 py-2 bg-[#090e1a] hover:bg-[#090e1a]/10 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-[#5C8EFF]/50">
                        <span>{feature.buttonText}</span>
                        <div className="rounded-full border border-[#5C8EFF]/50 bg-[#111]/10 flex items-center justify-center" style={{ width: '28px', height: '28px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5C8EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24">
                  <Progress value={progress} className="h-2 w-full bg-white/20" indicatorClassName="bg-white" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
