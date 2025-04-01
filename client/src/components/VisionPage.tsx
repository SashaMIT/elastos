
import React from "react";
import { motion } from "framer-motion";
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">The <span className="text-[#F6921A]">World Computer</span></h1>
            <p className="text-white/70 text-lg">
              Our mission is to create a new internet infrastructure that gives users and developers full control over their digital interactions, enabling a secure, private, and censorship-resistant online experience.
            </p>
          </motion.div>
        </div>
      </BackgroundCells>
      
      <div className="w-full bg-white dark:bg-[#171717] py-16 font-sans">
        <div className="container mx-auto px-4">
          {/* Video Demo */}
          <div className="px-10 md:px-0 -mt-20">
            <VideoPlayerDemo />
          </div>

          {/* Detailed Vision Section */}
          <div className="mt-20">
            <DetailedVisionSection />
          </div>

          {/* Technology Stack */}
          <div className="w-full mb-0 mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white">
              Technology Stack
            </h2>
            <FeaturesSectionWithHoverEffects />
          </div>

          {/* Why the World Needs This */}
          <div className="mt-0 mb-20">
            <WhyTheWorldNeedsThis />
          </div>
         
          {/* Features Grid */}
          <div className="-mt-20 mb-0">
            <FeaturesSectionWithBentoGrid />
          </div>
         
          {/* Rong Chen Quote */}
          <div className="w-full max-w-5xl mx-auto px-4 py-16 mt-10">
            <div className="bg-gradient-to-br from-[#5C8EFF]/10 to-[#F6921A]/10 rounded-xl p-8 border border-[#5C8EFF]/30 relative">
              {/* Background blur elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="md:w-1/4 flex justify-center">
                  <img 
                    src="/images/Rong Chen.png" 
                    alt="Rong Chen, Elastos Founder" 
                    className="w-48 h-48 object-cover rounded-full border-4 border-[#5C8EFF]/30"
                  />
                </div>
                <div className="md:w-3/4">
                  <blockquote className="italic text-lg text-gray-200">
                    <span className="text-4xl text-[#F7921A]">"</span>
                    The Internet today is owned by cartels. If Amazon goes down, all my ebooks vanish—that's not ownership. What we're building with Elastos is a World Computer: a decentralized internet that runs code, not just shares files. It's an operating system for the network, not just a blockchain. We give users decentralized IDs so companies like Facebook can't impersonate them or control access. You own your data, your identity, your apps—and no one can shut them down. We don't need another OS. This is the last one. That's why it's called Elastos.
                    <span className="text-4xl text-[#F7921A]">"</span>
                  </blockquote>
                  <div className="mt-4 font-semibold text-[#5C8EFF]">
                    Rong Chen, Elastos Founder
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A World Computer for Everyone Banner */}
          <div className="mt-10 -mx-4 px-4 md:px-0">
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
        <div className="w-full">
          <StackedCircularFooter />
        </div>
      </div>
    </div>
  );
}
