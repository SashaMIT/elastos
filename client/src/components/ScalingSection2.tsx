import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Lens } from '@/components/ui/lens';
import { Server, ChartBar } from "../components/icons"; 

const ecosystemProjects = [
  {
    name: "Coinbase",
    description: "Leading cryptocurrency exchange with easy ELA buying & trading options",
    url: "https://www.coinbase.com/price/elastos",
    image: "/images/Ecosystem/Coinbase.png"
  },
  {
    name: "Uniswap",
    description: "Decentralized exchange protocol for ELA and other ERC-20 token swaps",
    url: "https://app.uniswap.org/",
    image: "/images/Ecosystem/Uniswap.png"
  },
  {
    name: "Crypto.com",
    description: "Full-service crypto platform with ELA trading, cards, and more",
    url: "https://crypto.com/",
    image: "/images/Ecosystem/Crypto.png"
  },
  {
    name: "Glide Finance",
    description: "DEX for ERC-20 token trading on Elastos Smart Chain",
    url: "https://glidefinance.io",
    image: "/images/Ecosystem/Glide Finance Website.png"
  },
  {
    name: "Gate.io",
    description: "Professional crypto exchange with ELA trading pairs",
    url: "https://www.gate.io/",
    image: "/images/Ecosystem/Gate.png"
  },
  {
    name: "KuCoin",
    description: "Major crypto exchange offering ELA trading with multiple pairs",
    url: "https://www.kucoin.com/",
    image: "/images/Ecosystem/Kucoin.png"
  }
];

export function ScalingSection2() {
  const [activeTab, setActiveTab] = useState('public');

  return (
    <div className="w-full bg-background dark:bg-[#171717] text-foreground py-32">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        ELA: The Fuel of Elastos
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
              Core Functions
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
              Trade ELA
            </button>
          </div>
        </div>

        {activeTab === 'public' ? (
          <div className="space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 lg:col-span-5 order-1 lg:order-1 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="/images/Glass Circles4.png"
                    alt="Elastos Mainchain"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-7 order-2 lg:order-2">
                <div className="h-full w-full flex flex-col items-start justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-sans">Bitcoin-Backed Protection & Reserve Asset</h3>
                    <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">SECURITY</span>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                      <li>ELA is secured through merged mining with Bitcoin, leveraging Bitcoin's immense hash power.</li>
                      <li>This makes Elastos one of the most secure blockchain networks in existence.</li>
                      <li>Transactions are validated using Auxiliary Proof-of-Work (AuxPoW), combining Bitcoin's security with Elastos' efficiency.</li>
                      <li>ELA acts as a reserve asset within the Elastos ecosystem, ensuring economic stability for decentralized applications and services.</li>
                    </ul>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/stats">
                      <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="/images/Glass Circles5.png"
                    alt="Governance & Decentralization"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-7 order-2 lg:order-1">
                <div className="h-full w-full flex flex-col items-start justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-sans">Governance & Decentralization</h3>
                    <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">VOTING</span>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                      <li>ELA is the governance token used in the Elastos DAO, Elastos' decentralized autonomous organization (DAO).</li>
                      <li>ELA holders can vote on proposals, fund projects, and participate in decision-making.</li>
                      <li>Anyone who wishes to become an elected council member must place 5,000 ELA down as collateral to participate in the yearly elections.</li>
                      <li>This ensures that Elastos evolves based on community consensus rather than centralized control.</li>
                    </ul>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/dao">
                      <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 lg:col-span-5 order-1 lg:order-1 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="/images/Glass Circles6.png"
                    alt="Digital Identity & Ownership"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-7 order-2 lg:order-2">
                <div className="h-full w-full flex flex-col items-start justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-sans">Digital Identity & Ownership</h3>
                    <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">ACCOUNTING</span>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                      <li>ELA enables the creation and management of Decentralized IDs (DIDs), allowing users to own and control their digital identity.</li>
                      <li>Every DID on Elastos is anchored on the blockchain, ensuring verifiable and tamper-proof credentials where ELA is the underlying gas fee.</li>
                    </ul>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/vision">
                      <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Web Services Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="/images/Glass Circles7.png"
                    alt="Fueling Transactions & dApps"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-7 order-2 lg:order-1">
                <div className="h-full w-full flex flex-col items-start justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-sans">Fueling Transactions & dApps</h3>
                    <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">GAS</span>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                      <li>ELA is used for gas fees on Elastos Smart Contract Chain (ESC), an Ethereum-compatible sidechain that supports dApps and DeFi.</li>
                      <li>Developers use ELA to deploy smart contracts and build decentralized applications (dApps).</li>
                      <li>Transactions on the Elastos network (e.g., token transfers, DID registrations) require ELA as a network fee.</li>
                      <li>Elastos is built to scale horizontally with multiple sidechains, such as ESC and DID, each with the ability to use ELA as gas for their economies.</li>
                    </ul>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/ecosystem">
                      <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Economy Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 lg:col-span-5 order-1 lg:order-1 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="/images/Glass Circles8.png"
                    alt="Digital Asset Management"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-7 order-2 lg:order-2">
                <div className="h-full w-full flex flex-col items-start justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-sans">Digital Asset Management</h3>
                    <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">TRADE</span>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                      <li>ELA can be used for peer-to-peer payments, digital asset purchases, and staking within the Elastos ecosystem.</li>
                      <li>Users and businesses can tokenize assets, manage royalties, and trade digital content using Elastos-powered platforms like Elacity.</li>
                      <li>ELA facilitates the ownership, trade, and monetization of digital assets without intermediaries.</li>
                      <li>DeFi capabilities, including borrowing, lending, and staking, are enabled within the Elastos ecosystem, expanding ELA's use beyond transactions into financial services.</li>
                    </ul>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/use-cases">
                      <button className="w-8 h-8 rounded-full border border-[#F6921A] bg-[#F6921A]/30 flex items-center justify-center transition-all hover:bg-[#F6921A]/50 hover:scale-110">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
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