
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

export function VisionPage() {
  const taglines = [
    "Own Your Digital Life – Secured by Bitcoin",
    "Reclaim Your Internet: Privacy, Freedom, and Digital Ownership",
    "The Smart Web: An Internet Where You're in Control",
    "No More Middlemen. No More Censorship. No More Data Exploitation."
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -top-0">
        <BackgroundCells className="h-screen -mt-16">
          <div className="h-full flex items-center justify-center">
            <TextScramble 
              className="md:text-4xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
            >
              The World Computer
            </TextScramble>
          </div>
        </BackgroundCells>
      </div>

      <div className="relative z-10 pt-[80vh]">
        <div className="w-full bg-background dark:bg-[#171717] py-16 font-sans">
          <div className="container mx-auto px-4">
            {/* Vision Statement */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <TextScramble
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F6921A] to-[#95B5FF]"
                duration={1.2}
                speed={0.05}
              >
                The World Computer
              </TextScramble>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic">
                Elastos is building the World Computer: a decentralized system where individuals truly can own their identity, data, and digital assets—secured by Bitcoin's trust and immutability.
              </p>
            </div>

            {/* Features Grid */}
            <div className="my-16">
              <FeaturesSectionWithBentoGrid />
            </div>

            {/* Feature Cards */}
            <div className="mb-20">
              <FeatureCards />
            </div>

            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To create a new internet infrastructure that gives users and developers full control over their digital interactions, enabling a secure, private, and censorship-resistant online experience.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="w-full mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white">
                Technology Stack
              </h2>
              <FeaturesSectionWithHoverEffects />
            </div>

            {/* Taglines */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {taglines.map((tagline, index) => (
                  <div key={index} className="bg-[#5C8EFF]/[0.06] p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {tagline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* World Computer Banner */}
            <div className="mb-20">
              <WorldComputerBanner />
            </div>
            
            {/* Logo Carousel */}
            <div className="mb-20">
              <LogoCarouselDemo />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <StackedCircularFooter />
        </div>
      </div>
    </div>
  );
}
