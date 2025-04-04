import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wallet, Layers, Key } from "lucide-react";

function LandingPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white" style={{ fontWeight: 400 }}>
        Own Your Digital Life, Secured by Bitcoin
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Your Gateway to the Decentralized Internet for Autonomy and Freedom.
      </h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        All-in-One Decentralized Infrastructure
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Bitcoin-Grade Security
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Financial Empowerment
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Digital Freedom and Ownership
      </h3>
      <h4 className="text-lg md:text-xl lg:text-2xl font-normal leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Queen ELA: Married to Bitcoin since 2018.
      </h4>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Invest in the Backbone of the New Internet
      </h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Stay Updated
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Your Questions
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-[400] leading-tight text-center md:text-left mb-4 text-black dark:text-white">
        Our Community
      </h3>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="w-full bg-white dark:bg-[#171717] py-16 sm:py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 lg:px-8">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-black dark:text-white mb-6">
            Own Your Digital Life, <span className="text-[#F6921A]">Secured by Bitcoin</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Your Gateway to the Decentralized Internet for autonomy and freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="rounded-full h-12 px-6 bg-black hover:bg-gray-900 text-white">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <button 
              className="rounded-full h-12 px-6 bg-black hover:bg-gray-900 dark:bg-black dark:hover:bg-gray-900 text-white flex items-center gap-4 transition-colors"
              onClick={() => window.location.href = '/about'}
            >
              <span>Learn More</span>
              <div className="rounded-full border border-[#F6921A]/50 bg-[#1A1A1A] flex items-center justify-center" style={{ width: '28px', height: '28px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-[#F6921A]"/>
              <div>
                <h3 className="text-lg text-black dark:text-white mb-1" style={{ fontWeight: 400 }}>
                  Bitcoin-Grade Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Merge-mined with Bitcoin since 2018</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wallet className="h-6 w-6 text-[#F6921A]"/>
              <div>
                <h3 className="text-lg text-black dark:text-white mb-1" style={{ fontWeight: 400 }}>
                  Financial Empowerment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">True ownership of your digital assets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="h-6 w-6 text-[#F6921A]"/>
              <div>
                <h3 className="text-lg text-black dark:text-white mb-1" style={{ fontWeight: 400 }}>
                  All-in-One Decentralized Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Complete Web3 tech stack</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Key className="h-6 w-6 text-[#F6921A]"/>
              <div>
                <h3 className="text-lg text-black dark:text-white mb-1" style={{ fontWeight: 400 }}>
                  Digital Freedom and Ownership
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Self-sovereign identity and data</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6921A]/30 to-purple-500/30 rounded-full blur-3xl opacity-70"></div>
            <img
              src="/images/ElastOS 1.png"
              alt="Elastos Smart Web"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl dark:shadow-orange-500/20"
            />
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#222222] p-2 rounded-lg shadow-lg z-20 flex items-center gap-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <img 
                  src="/images/Elastos New Logo_Kit-03.png" 
                  alt="Elastos Logo" 
                  className="h-8 w-auto mb-3 sm:mb-0 sm:h-8"
                />
                <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white">
                  Queen ELA: Married to Bitcoin since 2018.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;