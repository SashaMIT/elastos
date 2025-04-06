import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Lens } from '@/components/ui/lens';

const ecosystemProjects = [
  {
    name: "Essentials",
    description: "Elastos SuperWallet with ELA staking, multi-chain, identity and CR governance",
    url: "https://essentials.elastos.org",
    image: "/images/Ecosystem/Essentials.png"
  },
  {
    name: "Cyber Republic DAO",
    description: "A community-driven governance system for Elastos",
    url: "https://cyberrepublic.org",
    image: "/images/Ecosystem/Cyber Republic.png"
  },
  {
    name: "Elacity",
    description: "Trade ERC-721 and ERC-1155 NFTs, tokenize IP into royalty-based assets",
    url: "https://ela.city",
    image: "/images/Ecosystem/Elacity Market.png"
  },
  {
    name: "Glide Finance",
    description: "DEX for ERC-20 token trading on Elastos Smart Chain",
    url: "https://glidefinance.io",
    image: "/images/Ecosystem/Glide Finance Website.png"
  },
  {
    name: "BeL2 Lending Demo",
    description: "Test BeL2's Bitcoin DeFi capabilities (use with caution)",
    url: "https://lending.bel2.org",
    image: "/images/Ecosystem/BeL2 Lending dapp.png"
  },
  {
    name: "Chainge Finance",
    description: "Cross-chain DEX swaps from over 30+ blockchains",
    url: "https://dapp.chainge.finance",
    image: "/images/Ecosystem/Chainge Finance ELA.png"
  }
];

export function ScalingSection() {
  const [activeTab, setActiveTab] = useState('public');

  return (
    <div className="w-full bg-background dark:bg-[#171717] text-foreground py-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-[200] text-center mb-12">
        Elastos SmartWeb Architecture
      </h2>
      <div className="container mx-auto px-4 lg:px-[180px] max-w-1xl">
        <div className="flex justify-center mb-16">
          <div className="rounded-full border-[0.5px] border-[#95B5FF]/30 bg-[#95B5FF]/10 dark:bg-[#95B5FF]/10 flex">
            <button
              onClick={() => setActiveTab('public')}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeTab === 'public' 
                  ? "bg-[#95B5FF] text-black" 
                  : "bg-transparent text-white dark:text-white hover:scale-105 hover:shadow-inner"
              )}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveTab('ecosystem')}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeTab === 'ecosystem' 
                  ? "bg-[#95B5FF] text-black" 
                  : "bg-transparent text-white dark:text-white hover:scale-105 hover:shadow-inner"
              )}
            >
              Ecosystem
            </button>
          </div>
        </div>

        {activeTab === 'public' ? (
          <div className="space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="flex justify-center">
                <div className="w-64 h-64 relative">
                  <img src="/images/Glass Circles1.png" alt="Elastos Mainchain" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="md:max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold font-sans">Bitcoin-Grade Security</h3>
                  <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">LIVE</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  We anchor our security to Bitcoin's proof-of-work hashpower and utilize multiple sidechains for specialized functions.
                </p>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="order-2 md:order-1 md:max-w-lg md:pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold font-sans">Financial Empowerment</h3>
                  <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">LIVE</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  ELA, secured by Bitcoin is the oil of the Elastos SmartWeb. Use your Bitcoin for DeFi without custodians or ever moving it off the Bitcoin mainchain.
                </p>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-64 h-64 relative">
                  <img src="/images/Glass Circles2.png" alt="BeL2" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="flex justify-center">
                <div className="w-64 h-64 relative">
                  <img src="/images/Glass Circles3.png" alt="DePIN Network" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="md:max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold font-sans">Digital Freedom and Ownership</h3>
                  <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">IN PROGRESS</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Combining blockchain, decentralized identity, and secure off-chain data storage and networking, Elastos is your gateway to owning your digital life.
                </p>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ecosystemProjects.map((project) => (
                <Card 
                  key={project.name}
                  className="border-0 shadow-none hover:shadow-none relative rounded-3xl overflow-hidden bg-white dark:bg-[#171717] p-8 cursor-pointer transition-all"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <div className="relative z-10">
                    <Lens>
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    </Lens>
                    <div className="mt-4">
                      <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        {project.name}
                        <ExternalLink className="w-5 h-5 flex-shrink-0" />
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-200">{project.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/ecosystem" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}