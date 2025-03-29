
"use client";

import React from "react";
import { SparklesCore } from "./sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[16rem] w-full bg-[#171717] flex flex-col items-center justify-center overflow-hidden rounded-md mb-2">
      <h1 className="text-5xl md:text-7xl lg:text-7xl font-extralight text-center text-white relative z-20">
        ELA
      </h1>
      <div className="w-[40rem] h-36 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#F6921A] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#F6921A] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#95B5FF] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#95B5FF] to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-[#171717] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
