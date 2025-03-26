"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        // In light mode, background is set to #f5f5f5 and border is light;
        // in dark mode, it remains dark.
        "bg-[#f5f5f5] dark:bg-[#131313] p-4 max-w-md max-h-[13rem] h-full w-full rounded-xl border border-neutral-300 dark:border-neutral-800",
        className
      )}
    >
      <div className="flex justify-center items-center sm:mb-2">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div
        className={`px-2 ${
          window.innerWidth <= 640 ? "pb-1 mt-2" : "pb-6 mt-5"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        // In light mode: dark text; in dark mode: white text.
        "text-xs sm:text-sm text-black dark:text-white max-w-[16rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "font-normal text-lg sm:text-xl text-black dark:text-[#eaeaea]",
        className
      )}
    >
      {children}
    </h2>
  );
};

const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    let lastUpdate = 0;
    const updateStars = (timestamp: number) => {
      if (timestamp - lastUpdate >= 3000) {
        highlightedStars.current = Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * stars)
        );
        setGlowingStars([...highlightedStars.current]);
        lastUpdate = timestamp;
      }
      requestRef.current = requestAnimationFrame(updateStars);
    };
    requestRef.current = requestAnimationFrame(updateStars);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [stars]);

  return (
    <div
      className="h-20 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        // When glowing, use the blue color #2463eb for the dot instead of white.
        background: isGlowing ? "#2463eb" : "#666",
      }}
      transition={{ duration: 2, ease: "easeInOut", delay: delay }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: delay }}
      exit={{
        opacity: 0,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-[#2463eb] blur-[1px] shadow-2xl shadow-[#2463eb]"
    />
  );
};

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="grid grid-cols-3 gap-4 py-5 items-start justify-center antialiased">
      <a
        href="https://elastos.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlowingStarsBackgroundCard className="cursor-pointer group">
          <div className="flex justify-between items-center">
            <GlowingStarsTitle>Build</GlowingStarsTitle>
            <div className="sm:hidden flex-shrink-0 h-6.5 w-6.5 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-end">
            <GlowingStarsDescription className="flex-1 mr-5">
              Start building on Bitcoin-secured infrastructure.
            </GlowingStarsDescription>
            <div className="flex-shrink-0 h-8 w-8 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <GlowingStarsBackgroundCard className="cursor-pointer group">
          <div className="flex justify-between items-center">
            <GlowingStarsTitle>Stake</GlowingStarsTitle>
            <div className="sm:hidden flex-shrink-0 h-6.5 w-6.5 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-end">
            <GlowingStarsDescription className="flex-1 mr-5">
              Merge-mine Elastos with Bitcoin. Stake ELA and earn rewards.
            </GlowingStarsDescription>
            <div className="flex-shrink-0 h-8 w-8 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <GlowingStarsBackgroundCard className="cursor-pointer group">
          <div className="flex justify-between items-center">
            <GlowingStarsTitle>Use</GlowingStarsTitle>
            <div className="sm:hidden flex-shrink-0 h-6.5 w-6.5 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-end">
            <GlowingStarsDescription className="flex-1 mr-5">
              Bridge, Swap and Trade Digital Assets on Elastos.
            </GlowingStarsDescription>
            <div className="flex-shrink-0 h-8 w-8 rounded-full border border-[#95B5FF]/50 bg-[#95B5FF]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#95B5FF]/30 group-hover:scale-110 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#95B5FF]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="rgba(149, 181, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </a>
    </div>
  );
}