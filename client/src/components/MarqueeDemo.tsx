import React from 'react';
import { Marquee } from "@/components/ui/marquee";

export function MarqueeDemo() {
  return (
    <div className="relative overflow-hidden flex justify-around items-start w-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.0)] to-[rgba(17,17,17,1)] z-40 h-[100px] bottom-[-2px] max-w-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,1)] to-[rgba(17,17,17,0.0)] z-40 h-[50px] top-[-1px] max-w-full"></div>
      <div
        className="flex space-x-16 animate-marquee"
        style={{
          "--duration": "40s",
        } as React.CSSProperties}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="relative overflow-hidden inline-flex py-6">
            <iframe
              src="https://www.youtube.com/embed/mq7TnEK3P4I?autoplay=1&mute=1&loop=1&playlist=mq7TnEK3P4I&controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[300px] h-[200px] object-cover rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              title="Elacity Team Video"
            ></iframe>
          </div>
        ))}
      </div>
      <div
        className="flex space-x-16 animate-marquee"
        style={{
          "--duration": "45s",
        } as React.CSSProperties}
      >
      </div>
    </div>
  );
}