import React, { useState, useEffect } from "react";
import { Network, Lock, Wallet, Zap, Search } from "lucide-react";
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
              <h2 className="font-normal font-telegraf-ultralight text-white/90 leading-relaxed tracking-wide text-xs md:text-sm">
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
      <div className="container mx-auto px-4">
        <SparklesPreview />
        <div className="text-center" id="text-effect-trigger">
          <TextGenerateEffect
            words="ELA is the native digital asset that fuels Elastos, providing security, governance, and utility across the World Computer. Merged-mined with Bitcoin, there will only ever be 28,219,999 total by 2105."
            className="font-normal font-telegraf-ultralight"
          />
        </div>
        <div className="py-8">
          <GlowingEffectDemo />
        </div>

        <div className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Explore ELA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Card */}
            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="rounded-full bg-[#5C8EFF]/10 p-3 mb-4 text-center">
                <p className="font-mono text-lg font-bold text-[#5C8EFF]">
                  {isHashrateLoading ? 'Loading...' : `$${hashrateData?.elaPrice?.toFixed(2) || '0.00'}`}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Current ELA Price</p>
              </div>
              <h3 className="font-semibold text-lg mb-2">Stats</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Track real-time metrics for Elastos blockchain performance and user adoption.</p>
              <a href="/stats" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Security Card */}
            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="rounded-full bg-[#5C8EFF]/10 p-3 mb-4 text-center">
                <p className="font-mono text-lg font-bold text-[#5C8EFF]">
                  {isHashrateLoading ? 'Loading...' : `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%`}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">BTC Security Level</p>
              </div>
              <h3 className="font-semibold text-lg mb-2">Security</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Explore how ELA maintains Bitcoin-level security and protects your assets.</p>
              <a 
                href="/security"
                className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Supply Card */}
            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="rounded-full bg-[#5C8EFF]/10 p-3 mb-4 text-center">
                <p className="font-mono text-lg font-bold text-[#5C8EFF]">
                  {isSupplyLoading ? 'Loading...' : formatNumber(totalSupply)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Circulating Supply</p>
              </div>
              <h3 className="font-semibold text-lg mb-2">Supply</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Understand ELA's tokenomics, emission schedule, and circulation metrics.</p>
              <a href="/supply" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Buy ELA Card */}
            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="rounded-full bg-[#5C8EFF]/10 p-3 mb-4 text-center">
                <p className="font-mono text-lg font-bold text-[#5C8EFF]">
                  {isMarketCapLoading ? 'Loading...' : formatNumber(marketCapData?.elastosMarketCap)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">ELA Market Cap</p>
              </div>
              <h3 className="font-semibold text-lg mb-2">Buy ELA</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Get ELA on leading exchanges and decentralized platforms for easy access.</p>
              <a 
                href="/buy-ela"
                className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <ScalingSection2 />
      </div>
      <LogoCarouselDemo />
      <StackedCircularFooter />
    </>
  );
}