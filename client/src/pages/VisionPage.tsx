import React from "react";
import { Link } from "wouter";
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
            <h1 className="font-[200] text-6xl mb-8 text-black dark:text-white">
              <TextScramble phrases={taglines} />
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-[200]">
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
              <h2 className="text-2xl md:text-3xl font-[200] mb-4 text-black dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg dark:text-neutral-300 font-[200]">
                Elastos is committed to creating a decentralized internet where users regain control of their digital identities and assets, free from corporate surveillance and exploitation.
              </p>
            </div>

            {/* World Computer Banner */}
            <div className="mt-40 mb-20 p-8 bg-[#171717] rounded-2xl border border-[#5C8EFF]/30">
              <WorldComputerBanner />
            </div>

            {/* Explorer Links */}
            <div className="mb-20 text-center">
              <h2 className="text-2xl md:text-3xl font-[200] mb-6 text-black dark:text-white">
                Explore the Elastos Ecosystem
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/explorer"
                  className="inline-flex px-4 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm min-w-[130px]"
                >
                  <span>ESC Explorer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
                <a
                  href="/dao"
                  className="inline-flex px-4 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm min-w-[130px]"
                >
                  <span>MC Explorer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* ELA Utility & Start Building */}
            <div className="mb-20 text-center">
              <h2 className="text-2xl md:text-3xl font-[200] mb-6 text-black dark:text-white">
                A SmartWeb for Everyone
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/ela-utility"
                  className="inline-flex px-4 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm min-w-[130px]"
                >
                  <span>ELA Utility</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
                <a
                  href="https://elastos.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm min-w-[130px]"
                >
                  <span>Start Building</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
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