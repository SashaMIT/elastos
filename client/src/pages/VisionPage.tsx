import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { TextScramble } from "@/components/ui/text-scramble";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { FeatureCards } from "@/components/blocks/feature-cards";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { WorldComputerBanner } from "@/components/blocks/world-computer-banner";

import { WhyTheWorldNeedsThis } from "@/components/blocks/why-the-world-needs-this";


export function VisionPage() {
  const taglines = [
    "The Operating System of the Smart Web",
    "Digital Freedom & Self-Sovereignty",
    "Bitcoin-Backed DeFi, Identity & Apps",
    "Privacy, Control, Ownership"
  ];

  return (
    <div className="relative">
      <div className="relative">
        <BackgroundCells className="absolute inset-0 z-0" />
        <div className="relative z-10 px-4 pb-20">
          <div className="pt-20 md:pt-32 text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-black dark:text-white">
              Elastos: The World Computer
            </h1>
            <div className="max-w-2xl mx-auto">
              <TextScramble
                phrases={taglines}
                className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground mb-12"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto space-y-4 text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black dark:text-white">
                Building the Internet's Missing Layer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Elastos combines blockchain security with decentralized identity and storage to create the foundation for a more secure, private internet where users own their data.
              </p>
            </div>

            {/* Why The World Needs This Section */}
            <WhyTheWorldNeedsThis />

            <div className="mb-20">
              <FeatureCards />
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To create a new internet infrastructure where digital rights are respected, privacy is ensured, and decentralized applications can flourish without the constraints of centralized control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* World Computer Banner */}
      <WorldComputerBanner />

      {/* Logo Carousel */}
      <LogoCarouselDemo />
    </div>
  );
}