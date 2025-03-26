import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Lock, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHashrateData } from '../hooks/useHashrateData';

const FriendlyHashrate = () => {
  const [locks, setLocks] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    rotation: number;
    opacity: number;
  }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const { data: hashrateData } = useHashrateData();
  const bitcoinHashrate = hashrateData?.bitcoinHashrate ?? 0;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocks(prev => {
        const filtered = prev.filter(p => p.y < 400);
        const newLocks = [...Array(3)].map(() => ({
          id: Date.now() + Math.random(),
          x: Math.random() * containerWidth,
          y: -20,
          size: Math.random() * 12 + 8,
          speed: Math.random() * 4 + 3,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.4 + 0.6
        }));
        return [...filtered, ...newLocks];
      });
    }, 50);

    return () => clearInterval(interval);
  }, [containerWidth]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setLocks(prev => 
        prev.map(lock => ({
          ...lock,
          y: lock.y + lock.speed,
          rotation: lock.rotation + 1
        }))
      );
    }, 16);

    return () => clearInterval(moveInterval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-background/95 dark:bg-[#171717] backdrop-blur-sm border-0 rounded-xl shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold dark:text-white">
          Bitcoin's Network Security
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild className="touch-auto">
                <Info className="inline-block w-4 h-4 ml-2 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="p-3 touch-auto">
                <div className="text-sm">
                  <a 
                    href="https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline p-1"
                  >
                    View data on Minerstat
                  </a>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-2">
          {bitcoinHashrate.toFixed(2)} EH/s = {(bitcoinHashrate * 1e18).toLocaleString()} hashes per second 🔒
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild className="touch-auto">
                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="p-3 touch-auto">
                <div className="text-sm">
                  <a 
                    href="https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline p-1"
                  >
                    View data on Minerstat
                  </a>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative h-64 dark:bg-[#262626] rounded-xl overflow-hidden border dark:border-[#262626]"
      >
        <div className="absolute bottom-4 w-full flex justify-around">
          {[...Array(5)].map((_, i) => (
            <Cpu key={i} size={32} className="dark:text-white animate-pulse" style={{
              animationDelay: `${i * 200}ms`
            }} />
          ))}
        </div>

        {locks.map(lock => (
          <div
            key={lock.id}
            className="absolute transition-all duration-100"
            style={{
              transform: `translate(${lock.x}px, ${lock.y}px) rotate(${lock.rotation}deg)`,
              opacity: lock.opacity
            }}
          >
            <Lock 
              size={lock.size} 
              className="dark:text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendlyHashrate;