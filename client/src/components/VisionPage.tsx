
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { FeaturesSectionWithTechStack } from "@/components/blocks/feature-section-with-tech-stack";
import { TextScramble } from "@/components/ui/text-scramble";
import { Feature } from "@/components/ui/feature-with-advantages";
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
          
          {/* Feature with Advantages */}
          <div className="mt-16">
            <Feature />
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
          
          {/* Rong Chen Quote */}
          <div className="w-full max-w-5xl mx-auto px-4 py-8 mt-6">
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

          {/* Why the World Needs This */}
          <div className="mt-6 mb-16">
            <WhyTheWorldNeedsThis />
          </div>
         
          {/* Features Grid */}
          <div className="-mt-10 mb-0">
            <FeaturesSectionWithBentoGrid />
          </div>

          {/* Essentials Wallet Component */}
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#171717] to-[#272727] rounded-xl p-8 border border-[#444] relative"
                >
                  {/* Background elements */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>

                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                      <img 
                        src="/images/Essentials.png" 
                        alt="Elastos Essentials" 
                        className="w-full max-w-[350px] rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/350x700?text=Elastos+Essentials";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">The Complete Elastos Experience</h3>
                      <div className="space-y-4 text-white/70">
                        <p>Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                            <span>Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                            <span>Integrated DID (Decentralized Identity) management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                            <span>Secure digital asset management with multi-chain support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                            <span>Built-in DApp browser and credential manager</span>
                          </li>
                        </ul>

                        <div className="flex flex-wrap gap-4 pt-4">
                          <a
                            href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                          >
                            <span>App Store</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                              <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                            </svg>
                          </a>
                          <a
                            href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                          >
                            <span>Google Play</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                              <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Ecosystem dApps Section */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
                Ecosystem <span className="text-[#F6921A]">dApps</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore applications built on Elastos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
              {/* Essentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full cursor-pointer"
                onClick={() => window.open("https://essentials.elastos.org", "_blank")}
              >
                <div className="h-40 mb-4">
                  <img 
                    src="/images/Ecosystem/Essentials.png" 
                    alt="Elastos Essentials" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Essentials</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Elastos SuperWallet with ELA staking, multi-chain, identity and CR governance
                </p>
              </motion.div>

              {/* Elacity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#8BABFF]/10 via-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/20 h-full cursor-pointer"
                onClick={() => window.open("https://ela.city", "_blank")}
              >
                <div className="h-40 mb-4">
                  <img 
                    src="/images/Ecosystem/Elacity Market.png" 
                    alt="Elacity" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Elacity</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Trade ERC-721 and ERC-1155 NFTs, tokenize IP into royalty-based assets
                </p>
              </motion.div>

              {/* Glide Finance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full cursor-pointer"
                onClick={() => window.open("https://glidefinance.io", "_blank")}
              >
                <div className="h-40 mb-4">
                  <img 
                    src="/images/Ecosystem/Glide Finance Website.png" 
                    alt="Glide Finance" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Glide Finance</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Bridge and DEX for ERC-20 token trading on Elastos Smart Chain
                </p>
              </motion.div>

              {/* BeL2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#8BABFF]/10 via-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/20 h-full cursor-pointer"
                onClick={() => window.open("https://lending.bel2.org", "_blank")}
              >
                <div className="h-40 mb-4">
                  <img 
                    src="/images/Ecosystem/BeL2 Lending dapp.png" 
                    alt="BeL2" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">BeL2</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Test BeL2's Bitcoin DeFi capabilities with lending demo
                </p>
              </motion.div>
            </div>
            
            <div className="flex justify-center">
              <a href="/ecosystem" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
                <span>Explore Ecosystem</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
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
