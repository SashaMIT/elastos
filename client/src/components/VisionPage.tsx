
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { FeaturesSectionWithTechStack } from "@/components/blocks/feature-section-with-tech-stack";
import { TextScramble } from "@/components/ui/text-scramble";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { VideoPlayerDemo } from "@/components/VideoPlayerDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { WhyTheWorldNeedsThis } from "@/components/blocks/why-the-world-needs-this";
import { WhatYouCanBuild } from "@/components/blocks/what-you-can-build";
import { WorldComputerBanner } from "@/components/blocks/world-computer-banner";
import { DetailedVisionSection } from "@/components/blocks/detailed-vision-section";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";

export function VisionPage() {
  const technologies = [
    { name: "Elastos Blockchain", desc: "Security & trust layer" },
    { name: "Elastos DID", desc: "Identity & authentication layer" },
    { name: "Elastos Carrier", desc: "P2P communication layer" },
    { name: "Elastos Hive", desc: "Decentralized storage layer" },
    { name: "Elastos Essentials", desc: "Super wallet & dApp gateway" }
  ];

  const taglines = [
    "Own Your Digital Life – Secured by Bitcoin",
    "Reclaim Your Internet: Privacy, Freedom, and Digital Ownership",
    "The Smart Web: An Internet Where You're in Control",
    "No More Middlemen. No More Censorship. No More Data Exploitation."
  ];

  return (
    <div className="w-full relative" style={{ zIndex: 0 }}>
      <BackgroundCells className="bg-slate-950 h-[50vh] -mt-6 pt-0">
        <TextScramble
          className="text-5xl md:text-5xl lg:text-7xl font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        >
          The World Computer
        </TextScramble>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center mt-4">
          Our mission is to create a new internet infrastructure that gives users and developers full control over their digital interactions, enabling a secure, private, and censorship-resistant online experience.
        </p>
      </BackgroundCells>
      <div className="w-full bg-white dark:bg-[#171717] py-16 font-sans">
        <div className="container mx-auto px-4">
          {/* Video Demo */}
          <div className="px-10 md:px-0 -mt-40">
            <VideoPlayerDemo />
          </div>

          {/* Detailed Vision Section */}
          <div className="mt-20">
            <DetailedVisionSection />
          </div>

          {/* Technology Stack */}
          <div className="w-full mb-20 mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white">
              Technology Stack
            </h2>
            <FeaturesSectionWithHoverEffects />
          </div>

          {/* Why the World Needs This */}
          <div className="mt-10 mb-20">
            <WhyTheWorldNeedsThis />
          </div>
         
          {/* Features Grid */}
          <div className="-mt-20 mb-0">
            <FeaturesSectionWithBentoGrid />
          </div>
         
          {/* A World Computer for Everyone Banner */}
          <div className="mt-20 -mx-4">
            <WorldComputerBanner />
          </div>
          
          {/* Logo Carousel */}
          <div className="mt-20 -mx-4">
            <LogoCarouselDemo />
          </div>
        </div>
      </div>
      
      <div className="w-full">
        {/* Footer */}
        <div className="w-full ">
          <StackedCircularFooter />
        </div>
      </div>
    </div>
  );
}
