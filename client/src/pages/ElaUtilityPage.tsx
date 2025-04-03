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
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
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
            className="font-normal font-telegraf-ultralight text-sm sm:text-base md:text-lg" // Added responsiveness
          />
        </div>
        <div className="py-8">
          <GlowingEffectDemo />
        </div>

        <div className="my-16">
          <div className="motion-section text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
              Explore <span className="text-[#F6921A]">ELA</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover the utility and capabilities of Elastos' native digital asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Stats Card */}
            <div className="group bg-gradient-to-br from-[#5C8EFF]/5 via-[#5C8EFF]/3 to-transparent rounded-xl p-4 border border-[#5C8EFF]/20 transition-all hover:shadow-lg hover:border-[#5C8EFF]/40 cursor-pointer relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-bold text-black dark:text-white">Stats</h3>
                <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                  ${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')} Per ELA
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                <div className="text-3xl font-bold text-white mb-1">
                  {networkStats?.walletAddresses ? formatNumber(networkStats.walletAddresses) : 'Loading...'}
                </div>
                <div className="text-xs text-gray-400">Active Wallets</div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                Track real-time metrics for Elastos blockchain performance and user adoption.
              </p>

              <a href="/stats" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm relative z-10 hover:bg-[rgba(246,146,26,0.15)]">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Security Card */}
            <div className="group bg-gradient-to-br from-[#5C8EFF]/5 via-[#5C8EFF]/3 to-transparent rounded-xl p-4 border border-[#5C8EFF]/20 transition-all hover:shadow-lg hover:border-[#5C8EFF]/40 cursor-pointer relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-bold text-black dark:text-white">Security</h3>
                <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                  {isHashrateLoading ? '...' : `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%`} Share of BTC
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                <div className="text-3xl font-bold text-white mb-1">
                  {isHashrateLoading ? '...' : `${(hashrateData?.elastosHashrate ?? 0).toFixed(2)} EH/s`}
                </div>
                <div className="text-xs text-gray-400">Bitcoin Security</div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                Explore how ELA maintains Bitcoin-level security and protects your assets.
              </p>

              <a href="/security" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm relative z-10 hover:bg-[rgba(246,146,26,0.15)]">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Supply Card */}
            <div className="group bg-gradient-to-br from-[#5C8EFF]/5 via-[#5C8EFF]/3 to-transparent rounded-xl p-4 border border-[#5C8EFF]/20 transition-all hover:shadow-lg hover:border-[#5C8EFF]/40 cursor-pointer relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-bold text-black dark:text-white">Supply</h3>
                <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                  {isSupplyLoading ? '...' : formatNumber(totalSupply)} Circulating
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                <div className="text-3xl font-bold text-white mb-1">28.2M</div>
                <div className="text-xs text-gray-400">Max Supply</div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                Understand ELA's tokenomics, emission schedule, and circulation metrics.
              </p>

              <a href="/supply" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm relative z-10 hover:bg-[rgba(246,146,26,0.15)]">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>

            {/* Buy ELA Card */}
            <div className="group bg-gradient-to-br from-[#5C8EFF]/5 via-[#5C8EFF]/3 to-transparent rounded-xl p-4 border border-[#5C8EFF]/20 transition-all hover:shadow-lg hover:border-[#5C8EFF]/40 cursor-pointer relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-bold text-black dark:text-white">Buy ELA</h3>
                <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                  {isMarketCapLoading ? '...' : formatNumber(marketCapData?.elastosMarketCap)} MarketCap
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                <div className="text-3xl font-bold text-white mb-1">${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')}</div>
                <div className="text-xs text-gray-400">Current Price</div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                Get ELA on leading exchanges and decentralized platforms for easy access.
              </p>

              <a href="/buy-ela" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm relative z-10 hover:bg-[rgba(246,146,26,0.15)]">
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

      <div className="my-16">
        <div className="motion-section text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
            <span className="text-[#5C8EFF]">Use</span> Your ELA
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Engage with the ecosystem and earn rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Staking Component */}
          <div className="bg-gradient-to-br from-[#5C8EFF]/5 to-transparent rounded-xl p-6 border border-[#5C8EFF]/20 transition-all hover:shadow-lg hover:border-[#5C8EFF]/40 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/5 blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F7921A]/3 blur-[80px]"></div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/5 relative z-10">
                <img 
                  src="/images/Essentials.png" 
                  alt="Elastos Staking" 
                  className="w-full max-w-[180px] mx-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-3/5 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Stake & Earn</h3>
                <p className="text-white/70 text-sm mb-4">
                  ELA staking offers a secure way to earn up to 3.29% APY while supporting the network's security and decentralization. It also grants voting rights in the DAO governance.
                </p>
                <div className="mb-5">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/80">Current APY</span>
                    <span className="text-[#5C8EFF]">3.29%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#5C8EFF] to-[#F7921A] rounded-full" style={{ width: '32.9%' }}></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/80">Network Staked</span>
                    <span className="text-[#5C8EFF]">{networkStats?.stakedAmount ? formatNumber(networkStats.stakedAmount) : 'Loading...'} ELA</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#5C8EFF] to-[#F7921A] rounded-full" style={{ width: `${((networkStats?.stakedAmount || 0) / (totalSupply || 1)) * 100}%` }}></div>
                  </div>
                </div>

                <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm">
                  <span>Learn How to Stake</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Governance Component */}
          <div className="bg-gradient-to-br from-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 transition-all hover:shadow-lg hover:border-[#F7921A]/40 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/5 blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px]"></div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/5 relative z-10">
                <img 
                  src="/images/Ecosystem/Cyber Republic.png" 
                  alt="Elastos DAO" 
                  className="w-full max-w-[180px] mx-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-3/5 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Shape the Future</h3>
                <p className="text-white/70 text-sm mb-4">
                  Participate in Elastos DAO governance with your ELA tokens. Elect and run as a council member, and help determine the future direction of the Elastos.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#1A1A1A]/50 p-3 rounded-lg">
                    <div className="text-[#F7921A] text-xl font-bold">73+</div>
                    <div className="text-white/60 text-xs">Funded Proposals</div>
                  </div>
                  <div className="bg-[#1A1A1A]/50 p-3 rounded-lg">
                    <div className="text-[#F7921A] text-xl font-bold">1.24M</div>
                    <div className="text-white/60 text-xs">Treasury (ELA)</div>
                  </div>
                </div>

                <a href="/dao" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
                  <span>Explore DAO</span>
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
      </div>

      {/* Elastos Essentials Wallet CTA */}
      <div className="my-20 bg-gradient-to-br from-[#5C8EFF]/5 via-[#F7921A]/3 to-transparent rounded-xl p-8 border border-[#5C8EFF]/20 relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F7921A]/5 blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#5C8EFF]/5 blur-[100px]"></div>

        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/images/Essentials.png" 
              alt="Elastos Essentials" 
              className="w-full max-w-[280px] rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-white mb-4">Get Started with <span className="text-[#F7921A]">Elastos Essentials</span> Wallet</h3>
            <p className="text-white/80 text-base mb-6">
              The all-in-one gateway to the Elastos ecosystem. Store and stake your ELA, access dApps, manage your decentralized identity, and participate in governance—all from a single secure application.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#1A1A1A]/50 p-3 rounded-lg text-center">
                <div className="text-[#5C8EFF] text-xl font-bold">Multi-Chain</div>
                <div className="text-white/60 text-xs">Support</div>
              </div>
              <div className="bg-[#1A1A1A]/50 p-3 rounded-lg text-center">
                <div className="text-[#5C8EFF] text-xl font-bold">DID</div>
                <div className="text-white/60 text-xs">Integration</div>
              </div>
              <div className="bg-[#1A1A1A]/50 p-3 rounded-lg text-center">
                <div className="text-[#5C8EFF] text-xl font-bold">Staking</div>
                <div className="text-white/60 text-xs">Rewards</div>
              </div>
              <div className="bg-[#1A1A1A]/50 p-3 rounded-lg text-center">
                <div className="text-[#5C8EFF] text-xl font-bold">dApp</div>
                <div className="text-white/60 text-xs">Browser</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://apps.apple.com/us/app/elastos-essentials/id1568931743" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-[rgba(92,142,255,0.15)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(92,142,255,0.50)] text-sm hover:bg-[rgba(92,142,255,0.25)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 1v10"></path>
                  <path d="m16 5-4-4-4 4"></path>
                </svg>
                <span>App Store</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=io.web3essentials.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-[rgba(246,146,26,0.15)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(246,146,26,0.50)] text-sm hover:bg-[rgba(246,146,26,0.25)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h14a1 1 0 0 1 1 1v15l-4-3.5-3 1-3-1-4 3.5V5a1 1 0 0 1 1-1z"></path>
                  <path d="M10 8.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z"></path>
                  <path d="M12 7v3"></path>
                  <path d="M10.5 9.5h3"></path>
                </svg>
                <span>Google Play</span>
              </a>
              <a 
                href="https://elastos.info/guides/essentials-wallet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-[rgba(255,255,255,0.1)] text-white rounded-full font-medium transition-all items-center gap-2 border border-white/20 text-sm hover:bg-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 7.8A6 6 0 0 0 6 6m0 0a6 6 0 0 0 1 10.22m11-5.54a6 6 0 0 1-1 4.32"></path>
                  <path d="M15.8 20.2a6 6 0 0 1-9.8-2"></path>
                  <path d="m4 8-2 2 2 2"></path>
                  <path d="m20 18 2-2-2-2"></path>
                </svg>
                <span>Setup Guide</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <LogoCarouselDemo />
      <StackedCircularFooter />
    </>
  );
}