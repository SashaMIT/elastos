"use client";

import React from "react";
import { SparklesCore } from "./sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[45vh] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md my-8">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#5C8EFF"
        />
      </div>
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 mt-8">
        ELA
      </h1>
    </div>
  );
}