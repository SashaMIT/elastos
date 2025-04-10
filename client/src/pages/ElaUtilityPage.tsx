import React, { useState, useEffect } from "react";
import { Network, Lock, Wallet, Zap, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import { InViewDemo } from "@/components/InViewDemo";
import { ScalingSection2 } from "@/components/ScalingSection2";
import { SparklesPreview } from "@/components/ui/sparkles-preview"; // Added import
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { useHashrateData } from "@/hooks/useHashrateData";
import { useMarketCapData } from "@/hooks/useMarketCapData"; // Added import
import { useElaSupply } from "@/hooks/useElaSupply"; // Added import
import { Dots_v2 } from "@/components/ui/spinner"; // Import Dots_v2 spinner component


interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#5C8EFF]/[0.06] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-lg leading-[1.25rem] font-normal font-telegraf-ultralight text-white tracking-wide mb-4 md:text-xl md:leading-[1.5rem] text-balance">
                {title}
              </h3>
              <h2 className="font-normal font-telegraf-ultralight text-white/90 leading-relaxed tracking-wide text-base">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};




function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Zap className="h-4 w-4 text-white" />}
        title="A Token With Real Utility"
        description="Unlike speculative tokens, ELA is a functional asset that powers an entire decentralized internet infrastructure."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Lock className="h-4 w-4 text-white" />}
        title="Strong Security Backing"
        description="With Bitcoin merge-mining, ELA transactions benefit from the world's most secure blockchain network."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Network className="h-4 w-4 text-white" />}
        title="Decentralized, Not Corporate-Controlled"
        description="ELA holders collectively shape the future of the Smart Web, ensuring no single entity controls the network."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Wallet className="h-4 w-4 text-white" />}
        title="Enabling the Digital Rights & DeFi Economy"
        description="From identity to ownership, payments, and governance, ELA is the fuel of Web3's next evolution, supporting DeFi, swaps, lending, and the monetization of digital assets."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4" />}
        title="Fueling Interconnected Digital Economies"
        description="ELA powers Elastos' sidechains as a unified gas asset, enabling scalable, interoperable digital economies across services and applications."
      />
    </ul>
  );
}

export default function ElaUtilityPage() {
  const { data: hashrateData, isLoading: isHashrateLoading } = useHashrateData();
  const { data: marketCapData, isLoading: isMarketCapLoading } = useMarketCapData();
  const { data: totalSupply, isLoading: isSupplyLoading } = useElaSupply();
  const [networkStats, setNetworkStats] = useState<{ stakedAmount?: number, walletAddresses?: number } | null>(null);
  const [isStatsLoading, setIsStatsLoading] = useState(true);
  
  return (
    <>
      <SEO 
        title="ELA Token Utility | Elastos Native Digital Asset"
        description="Explore the utility of ELA, the native digital asset that fuels the Elastos ecosystem, providing security, governance, and utility across the Web3 infrastructure."
        keywords="ELA token utility, Elastos coin, Web3 token, Bitcoin-secured currency, digital asset, blockchain utility, staking rewards, governance token"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/ela-utility"
      />

  useEffect(() => {
    const fetchNetworkStats = async () => {
      try {
        const response = await fetch('https://ela.elastos.io/api/v1/data-statistics/');
        const data = await response.json();
        setNetworkStats(data);
        setIsStatsLoading(false);
      } catch (error) {
        console.error("Error fetching network stats:", error);
        setIsStatsLoading(false);
      }
    };

    fetchNetworkStats();
  }, []);

  const formatHashrate = (hashrate?: number) => {
    return hashrate ? `${hashrate.toFixed(2)} EH/s` : 'Loading...';
  };

  const formatNumber = (num?: number): string => {
    if (!num) return 'Loading...';
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
    return num.toLocaleString();
  };

  return (
    <>
      <SEO 
        title="ELA Token Utility | Elastos Native Digital Asset"
        description="Explore the utility of ELA, the native digital asset that fuels the Elastos ecosystem, providing security, governance, and utility across the Web3 infrastructure."
        keywords="ELA token utility, Elastos coin, Web3 token, Bitcoin-secured currency, digital asset, blockchain utility, staking rewards, governance token"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/ela-utility"
      />
      <div className="container mx-auto px-4">
        <SparklesPreview />
        <div className="text-center" id="text-effect-trigger">
          <TextGenerateEffect
            words="ELA is the native digital asset that fuels Elastos, providing security, governance, and utility across the World Computer. Merged-mined with Bitcoin, there will only ever be 28,219,999 total by 2105."
            className="font-[200] font-telegraf-ultralight text-sm sm:text-base md:text-lg" // Changed font weight to 200
          />
        </div>
        <div className="py-8">
          <GlowingEffectDemo />
        </div>

        <div className="my-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-[200] text-black dark:text-white">
              Explore ELA
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 font-[200]">
              Discover the utility and capabilities of Elastos' native digital asset
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:border rounded-md dark:border-neutral-800">
              {/* Stats Card */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
                <div className="mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Network Stats</h3>
                <div className="text-base text-neutral-600 dark:text-neutral-300 font-[200] mb-3">
                  Track real-time metrics for Elastos blockchain performance and user adoption.
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Active Wallets</span>
                    <span className="text-sm font-[200] text-black dark:text-white">{networkStats?.walletAddresses ? formatNumber(networkStats.walletAddresses) : 'Loading...'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Current APY</span>
                    <span className="text-sm font-[200] text-black dark:text-white">3.29%</span>
                  </div>
                </div>

                <a href="/stats" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm mt-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>

              {/* Security Card */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
                <div className="mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Bitcoin-Level Security</h3>
                <div className="text-base text-neutral-600 dark:text-neutral-300 font-[200] mb-3">
                  Explore how ELA maintains Bitcoin-level security and protects your assets.
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Hashrate</span>
                    <span className="text-sm font-[200] text-black dark:text-white">{isHashrateLoading ? '...' : `${(hashrateData?.elastosHashrate ?? 0).toFixed(2)} EH/s`}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">BTC Security Share</span>
                    <span className="text-sm font-[200] text-black dark:text-white">{isHashrateLoading ? '...' : `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%`}</span>
                  </div>
                </div>

                <a href="/security" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm mt-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>

              {/* Supply Card */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
                <div className="mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Token Supply</h3>
                <div className="text-base text-neutral-600 dark:text-neutral-300 font-[200] mb-3">
                  Understand ELA's tokenomics, emission schedule, and circulation metrics.
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Circulating Supply</span>
                    <span className="text-sm font-[200] text-black dark:text-white">{isSupplyLoading ? '...' : formatNumber(totalSupply)} ELA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Max Supply</span>
                    <span className="text-sm font-[200] text-black dark:text-white">28.2M ELA</span>
                  </div>
                </div>

                <a href="/supply" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm mt-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>

              {/* Buy ELA Card */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-none dark:border-neutral-800">
                <div className="mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Markets & Exchanges</h3>
                <div className="text-base text-neutral-600 dark:text-neutral-300 font-[200] mb-3">
                  Get ELA on leading exchanges and decentralized platforms for easy access.
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Current Price</span>
                    <span className="text-sm font-[200] text-black dark:text-white">${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Market Cap</span>
                    <span className="text-sm font-[200] text-black dark:text-white">${isMarketCapLoading ? '...' : formatNumber(marketCapData?.elastosMarketCap)}</span>
                  </div>
                </div>

                <a href="/buy-ela" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm mt-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>


        <ScalingSection2 />
      </div>

      <div className="my-16 relative z-20">
        <div className="text-center mb-6 px-4">
          <h2 className="text-2xl md:text-3xl font-[200] text-black dark:text-white mb-2">
            Use Your ELA
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300 font-[200] max-w-2xl mx-auto">
            Engage with the ecosystem and earn rewards
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:border rounded-md dark:border-neutral-800">
            {/* Staking Card */}
            <div className="p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
              <div className="mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-[200] text-black dark:text-white">Stake & Earn</h3>
              </div>

              <div className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-300 font-[200] text-base mb-3">
                  ELA staking offers a secure way to earn up to 3.29% APY while supporting the network's security and decentralization.
                </p>
              </div>

              {isHashrateLoading ? (
                <div className="flex justify-center items-center py-6">
                  <div className="text-[#5C8EFF]">
                    <Dots_v2 /> {/* Assumed Dots_v2 component exists */}
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <div className="flex justify-between text-base mb-1">
                      <span className="text-neutral-500 dark:text-neutral-400">Current APY</span>
                      <span className="font-[200] text-black dark:text-[#5C8EFF]">3.29%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 dark:bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#5C8EFF] to-[#F6921A] rounded-full" style={{ width: '32.9%' }}></div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="flex justify-between text-base mb-1">
                      <span className="text-neutral-500 dark:text-neutral-400">Security Power</span>
                      <span className="font-[200] text-black dark:text-[#5C8EFF]">{`${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(1)}%`}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 dark:bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#5C8EFF] to-[#F6921A] rounded-full" style={{ width: `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100)}%` }}></div>
                    </div>
                  </div>
                </>
              )}

              <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                <span>Learn How to Stake</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>

            {/* Governance Card */}
            <div className="p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-none dark:border-neutral-800">
              <div className="mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-[200] text-black dark:text-white">Shape the Future</h3>
              </div>

              <div className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-300 font-[200] text-base mb-3">
                  Participate in Elastos DAO governance with your ELA tokens. Elect council members and help determine the future direction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-neutral-100 dark:bg-[#1A1A1A]/50 p-3 rounded-lg">
                  <div className="text-[#F6921A] dark:text-[#5C8EFF] text-xl font-bold">73+</div>
                  <div className="text-neutral-500 dark:text-white/60 text-sm">Funded Proposals</div>
                </div>
                <div className="bg-neutral-100 dark:bg-[#1A1A1A]/50 p-3 rounded-lg">
                  <div className="text-[#F6921A] dark:text-[#5C8EFF] text-xl font-bold">1.24M</div>
                  <div className="text-neutral-500 dark:text-white/60 text-sm">Treasury (ELA)</div>
                </div>
              </div>

              <a href="/dao" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm">
                <span>Explore DAO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >

              <h2 className="text-4xl font-bold text-white mb-4">
                Elastos Essentials Wallet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the official Elastos wallet with native support for the entire Elastos ecosystem
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-10 border border-[#8BABFF]/20 w-full mx-auto relative overflow-hidden"
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
                  <h3 className="text-2xl font-[200] text-white mb-3">The Complete Elastos Experience</h3>
                  <div className="space-y-4 text-white/70">
                    <p className="text-base font-[200]">Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Integrated DID (Decentralized Identity) management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Secure digital asset management with multi-chain support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Built-in DApp browser and credential manager</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                      >
                        <span>App Store</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm"
                      >
                        <span>Google Play</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
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

      <LogoCarouselDemo />
      <StackedCircularFooter />
    </>
  );
}