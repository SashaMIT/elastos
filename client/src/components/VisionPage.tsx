import React from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { FeatureCards } from "@/components/blocks/feature-cards";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { WorldComputerBanner } from "@/components/blocks/world-computer-banner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { WhyTheWorldNeedsThis } from "@/components/blocks/why-the-world-needs-this";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { DetailedVisionSection } from "@/components/blocks/detailed-vision-section";
import { VideoPlayerDemo } from "@/components/VideoPlayerDemo";

export function VisionPage() {
  const taglines = [
    "Own Your Digital Life – Secured by Bitcoin",
    "Reclaim Your Internet: Privacy, Freedom, and Digital Ownership",
    "The Smart Web: An Internet Where You're in Control",
    "No More Middlemen. No More Censorship. No More Data Exploitation."
  ];

  return (
    <>
      <div className="relative bg-white dark:bg-[#171717]">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundCells className="w-full h-full" />
        </div>

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
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-20">
          <StackedCircularFooter />
        </div>
      </div>
    </>
  );
}