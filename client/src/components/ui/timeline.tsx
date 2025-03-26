"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ timelineData }: { timelineData: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.15]);

  return (
    <div className="w-full bg-white dark:bg-[#171717] font-sans md:px-10 relative" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 timeline-gradient"
        style={{ opacity: gradientOpacity }}
      />
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Elastos Timeline
        </h2>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base w-full mb-8">
          <p className="mb-4">Rong Chen is a veteran software engineer who spent the late 1980s and 1990s working on operating systems. He earned a Master's at the University of Illinois (home of NCSA, where the Mosaic web browser was born) and later joined Microsoft in 1992 as one of its first Chinese engineers​. At Microsoft, Chen was a senior software engineer and part of the team that developed the .NET operating system project​.</p>

          <p className="mb-4">During this time, as the internet was expanding, he witnessed how PCs were increasingly vulnerable to viruses and attacks online​. This experience led him to conceive the idea of a "network operating system" – essentially an OS for the internet itself – where the network would function as a giant computer and security could be enforced at the OS level across all connected devices​.</p>

          <p className="mb-4">Chen proposed internally to rewrite Microsoft's systems (the .NET project) in C++ to implement this network-centric OS, aiming to create a safer, decentralized internet platform​. When that ambitious proposal was not adopted at Microsoft, he decided to pursue the vision on his own. In 2000, Rong Chen left Microsoft to begin building what he envisioned as the world's first internet-based operating system, laying the foundation for the Elastos project​.  Key milestones and developments in the Elastos journey</p>
        </div>

      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 bg-white dark:bg-[#171717]">
        {timelineData.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-0 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#F6921A] via-[#95B5FF] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};