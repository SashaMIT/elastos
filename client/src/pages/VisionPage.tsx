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
    <div className="relative bg-white dark:bg-[#171717]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundCells className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="py-16 md:py-24">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-bold text-6xl mb-8 text-black dark:text-white">
              <TextScramble phrases={taglines} />
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Elastos is building a new paradigm for the internet—a Web3 infrastructure that gives you true digital ownership and privacy, secured by Bitcoin.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature Section with Bento Grid */}
            <div>
              <FeaturesSectionWithBentoGrid />
            </div>

            {/* FeaturesSectionWithHoverEffects */}
            <div>
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
              <p className="text-lg dark:text-neutral-300">
                Elastos is committed to creating a decentralized internet where users regain control of their digital identities and assets, free from corporate surveillance and exploitation.
              </p>
            </div>

            {/* World Computer Banner */}
            <div className="mb-20 p-8 bg-gradient-to-br from-[#5C8EFF]/10 to-[#F6921A]/10 rounded-2xl border border-[#5C8EFF]/30">
              <WorldComputerBanner />
            </div>

            {/* Logo Carousel */}
            <div className="mb-20">
              <LogoCarouselDemo />
            </div>

            {/* Testnets Section */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                  Elastos <span className="text-[#F7921A]">Testnets</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Test and build with our developer-friendly environments
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <a 
                  href="https://esc-testnet.elastos.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 rounded-xl border border-[#5C8EFF]/30 bg-white dark:bg-[#1A1A1A] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#5C8EFF]">Elastos ESC Testnet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Test your smart contracts and dApps on the Elastos Smart Contract chain</p>
                  <div className="mt-auto text-sm text-[#F7921A] font-medium flex items-center">
                    Visit Testnet
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 34" fill="none" className="ml-1">
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F7921A"/>
                    </svg>
                  </div>
                </a>
                <a 
                  href="https://eid-testnet.elastos.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 rounded-xl border border-[#5C8EFF]/30 bg-white dark:bg-[#1A1A1A] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#5C8EFF]">Elastos EID Testnet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Develop and test applications with Elastos Identity on the testnet</p>
                  <div className="mt-auto text-sm text-[#F7921A] font-medium flex items-center">
                    Visit Testnet
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 34" fill="none" className="ml-1">
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F7921A"/>
                    </svg>
                  </div>
                </a>
              </div>
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