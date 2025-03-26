
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { TextScramble } from "@/components/ui/text-scramble";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { WhyTheWorldNeedsThis } from "@/components/blocks/why-the-world-needs-this";
import { WorldComputerBanner } from "@/components/blocks/world-computer-banner";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { FeatureCards } from "@/components/blocks/feature-cards";

export function VisionPage() {
  const taglines = [
    "Own Your Digital Life – Secured by Bitcoin",
    "Reclaim Your Internet: Privacy, Freedom, and Digital Ownership",
    "The Smart Web: An Internet Where You're in Control",
    "No More Middlemen. No More Censorship. No More Data Exploitation."
  ];

  return (
    <div className="relative bg-white dark:bg-[#171717]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundCells className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center mb-16">
              <TextScramble
                className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white mb-4"
                scrambles={taglines}
                scrambleSpeed={20}
                pauseTime={3000}
              />
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl">
                Elastos is building a new internet infrastructure that empowers users with true ownership of their digital assets, identity, and data.
              </p>
            </div>

            {/* Features Sections */}
            <div className="mb-20">
              <FeaturesSectionWithBentoGrid />
            </div>

            <div className="mb-20">
              <WhyTheWorldNeedsThis />
            </div>

            <div className="mb-20">
              <FeaturesSectionWithHoverEffects />
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                To create a new internet infrastructure that gives users and developers full control over their digital interactions, enabling a secure, private, and censorship-resistant online experience.
              </p>
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
