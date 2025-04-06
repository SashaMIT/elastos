
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







function GlowingEffectDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/10 flex flex-col h-full"
      >
        <div className="mb-4 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
          <Zap className="h-5 w-5 text-[#5C8EFF]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">A Token With Real Utility</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">
          Unlike speculative tokens, ELA is a functional asset that powers an entire decentralized internet infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/10 flex flex-col h-full"
      >
        <div className="mb-4 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
          <Lock className="h-5 w-5 text-[#5C8EFF]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Strong Security Backing</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">
          With Bitcoin merge-mining, ELA transactions benefit from the world's most secure blockchain network.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/10 flex flex-col h-full"
      >
        <div className="mb-4 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
          <Network className="h-5 w-5 text-[#5C8EFF]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Decentralized Control</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">
          ELA holders collectively shape the future of the Smart Web, ensuring no single entity controls the network.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/10 flex flex-col h-full"
      >
        <div className="mb-4 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
          <Wallet className="h-5 w-5 text-[#5C8EFF]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Digital Rights & DeFi Economy</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">
          From identity to ownership, payments, and governance, ELA is the fuel of Web3's next evolution.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/10 flex flex-col h-full"
      >
        <div className="mb-4 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
          <Search className="h-5 w-5 text-[#5C8EFF]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Interconnected Digital Economies</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">
          ELA powers Elastos' sidechains as a unified gas asset, enabling scalable, interoperable digital economies.
        </p>
      </motion.div>
    </div>
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
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Current Price</span>
                    <span className="text-sm font-[200] text-black dark:text-white">${isHashrateLoading ? '...' : (hashrateData?.elaPrice?.toFixed(2) || '0.00')}</span>
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

                    <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer" className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                      <span>Learn How to Stake</span>
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
          </div>
        </div>
      </section>

      <LogoCarouselDemo />
      <StackedCircularFooter />
    </>
  );
}
