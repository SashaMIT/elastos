
import React, { useState, useEffect } from "react";
import { Network, Lock, Wallet, Zap, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
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
            className="font-[200] font-telegraf-ultralight text-sm sm:text-base md:text-lg" // Changed font weight to 200
          />
        </div>
        <div className="py-8">
          <GlowingEffectDemo />
        </div>

        <div className="my-16">
          <div className="motion-section text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
              Explore ELA
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover the utility and capabilities of Elastos' native digital asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Stats Card */}
            <div className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <h3 className="text-lg font-bold text-black dark:text-white">Stats</h3>
                    <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                      ${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')} Per ELA
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                    <div className="text-3xl font-[200] text-white mb-1">
                      {networkStats?.walletAddresses ? formatNumber(networkStats.walletAddresses) : 'Loading...'}
                    </div>
                    <div className="text-xs text-gray-400">Active Wallets</div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                    Track real-time metrics for Elastos blockchain performance and user adoption.
                  </p>

                  <div className="flex justify-start relative z-10">
                    <Link to="/stats" className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm hover:bg-[rgba(92,142,255,0.15)]">
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <h3 className="text-lg font-bold text-black dark:text-white">Security</h3>
                    <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                      {isHashrateLoading ? '...' : `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%`} Share of BTC
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                    <div className="text-3xl font-[200] text-white mb-1">
                      {isHashrateLoading ? '...' : `${(hashrateData?.elastosHashrate ?? 0).toFixed(2)} EH/s`}
                    </div>
                    <div className="text-xs text-gray-400">Bitcoin Security</div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                    Explore how ELA maintains Bitcoin-level security and protects your assets.
                  </p>

                  <div className="flex justify-start relative z-10">
                    <Link to="/security" className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm hover:bg-[rgba(92,142,255,0.15)]">
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Supply Card */}
            <div className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <h3 className="text-lg font-bold text-black dark:text-white">Supply</h3>
                    <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                      {isSupplyLoading ? '...' : formatNumber(totalSupply)} Circulating
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                    <div className="text-3xl font-[200] text-white mb-1">28.2M</div>
                    <div className="text-xs text-gray-400">Max Supply</div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                    Understand ELA's tokenomics, emission schedule, and circulation metrics.
                  </p>

                  <div className="flex justify-start relative z-10">
                    <Link to="/supply" className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm hover:bg-[rgba(92,142,255,0.15)]">
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy ELA Card */}
            <div className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <h3 className="text-lg font-bold text-black dark:text-white">Buy ELA</h3>
                    <div className="px-2 py-1 bg-[#F6921A]/10 border border-[#F6921A]/30 text-[#F6921A] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                      {isMarketCapLoading ? '...' : formatNumber(marketCapData?.elastosMarketCap)} MarketCap
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mb-3 relative z-10">
                    <div className="text-3xl font-[200] text-white mb-1">${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')}</div>
                    <div className="text-xs text-gray-400">Current Price</div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 relative z-10">
                    Get ELA on leading exchanges and decentralized platforms for easy access.
                  </p>

                  <div className="flex justify-start relative z-10">
                    <Link to="/buy-ela" className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm hover:bg-[rgba(92,142,255,0.15)]">
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <ScalingSection2 />
      </div>

      <div className="my-16">
        <div className="motion-section text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
            Use Your ELA
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Engage with the ecosystem and earn rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Staking Component */}
          <div className="group min-h-[14rem] list-none">
            <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/5 blur-[80px]"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F7921A]/3 blur-[80px]"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              
                <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
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
            </div>
          </div>

          {/* Governance Component */}
          <div className="group min-h-[14rem] list-none">
            <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/5 blur-[80px]"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F7921A]/3 blur-[80px]"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              
                <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
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
                        <div className="text-[#5C8EFF] text-xl font-bold">73+</div>
                        <div className="text-white/60 text-xs">Funded Proposals</div>
                      </div>
                      <div className="bg-[#1A1A1A]/50 p-3 rounded-lg">
                        <div className="text-[#5C8EFF] text-xl font-bold">1.24M</div>
                        <div className="text-white/60 text-xs">Treasury (ELA)</div>
                      </div>
                    </div>

                    <Link to="/dao" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm">
                      <span>Explore DAO</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full max-w-7xl mx-auto">
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

            <div className="group min-h-[14rem]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#5C8EFF]/[0.15] to-[#5C8EFF]/[0.03] p-10 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]"
                >
                  {/* Background blur elements */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/5 blur-[80px]"></div>
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#F7921A]/3 blur-[100px]"></div>
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5C8EFF]/3 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

                  <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
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
                            <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                            <span>Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                            <span>Integrated DID (Decentralized Identity) management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                            <span>Secure digital asset management with multi-chain support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
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
                            className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                          >
                            <span>Google Play</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                              <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCarouselDemo />
      <StackedCircularFooter />
    </>
  );
}
