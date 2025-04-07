import React, { useState, useEffect } from 'react';
import { VerifyButton } from '@/components/ui/verify-button';
import { Link } from 'react-router-dom';
import { VideoPlayerDemo } from "@/components/VideoPlayerDemo";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { ScalingSection } from "@/components/ScalingSection";
import { CenteredSpinner } from "@/components/ui/centered-spinner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ImageZoom } from "@/components/ui/zoomable-image";

import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Vortex } from '@/components/ui/vortex';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import { MarqueeDemo2 } from '@/components/MarqueeDemo2';
import { NewsSection } from '@/components/NewsSection';
import FaqComponent from '@/components/FaqComponent';
import { useHashrateData } from '../hooks/useHashrateData';
import { useMarketCapData } from '../hooks/useMarketCapData';
import { useElaSupply } from '../hooks/useElaSupply';
import { Shield, Lock, Bitcoin, Star, ArrowUpRight, ArrowDownRight, Wallet, ChartBar, Server, Clock, X } from 'lucide-react';
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { SecurityStats } from "@/components/SecurityStats";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowingStarsBackgroundCardPreview } from "@/components/ui/glowing-stars";
import { InViewDemo } from "@/components/InViewDemo";
import { StarBorder } from "@/components/ui/star-border";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { cn } from '@/lib/utils';
import BlockTable from '@/components/BlockTable';
import { Dots_v2, Spinner, RoundSpinner } from "@/components/ui/spinner"; // Import spinner components


interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
};

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Total Supply" value="28,199,999 ELA (91.31% mined)" progress={91.31} />
      <StatCard title="BTC Security" value="50%" gaugeValue={50} />
      <StatCard title="Current APY" value="3.29%" />
      <StatCard title="Next Halving" value="Dec 1, 2025 (305d 17h 52m)" countdown={true} />
      <StatCard title="Halving Progress" value="79.1% complete" progress={79.1} circular={true}/>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  progress?: number;
  gaugeValue?: number;
  countdown?: boolean;
  circular?: boolean;
  subValue?: string;
}

const StatCard = ({ title, value, progress, gaugeValue, countdown, circular, subValue }: StatCardProps) => {
  const [timeLeft, setTimeLeft] = React.useState("");

  React.useEffect(() => {
    if (countdown) {
      const timer = setInterval(() => {
        const now = new Date();
        const target = new Date('2025-12-01');
        const diff = target.getTime() - now.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`(${days}d ${hours}h ${minutes}m)`);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  const getProgressDetails = () => {
    switch(title) {
      case "Total Supply":
        return "25,748,861 ELA currently";
      case "BTC Security":
        return "396 EH/s of 808 EH/s";
      case "Current APY":
        return "2,574,886 ELA staked";
      case "Next Halving":
        return "Block height: 1,460,000";
      case "Halving Progress":
        return "1,154,340 blocks completed";
      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-3 sm:p-6", {"dark:bg-[#5C8EFF]/[0.06]": true})}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="text-xl sm:text-2xl font-bold">{value}</div>
      {subValue && <div className="text-sm text-muted-foreground">{subValue}</div>}
      {progress !== undefined && !circular && <div className="h-2 rounded-full bg-gray-200 mt-2">
                  <div className={`h-full rounded-full bg-[#F6921A]`} style={{ width: `${progress}%` }} />
                </div>}
      {gaugeValue && <div className="mt-2">Gauge Chart Placeholder ({gaugeValue}%)</div>}
      {countdown && <div className="mt-2 text-sm text-purple-600">{timeLeft}</div>}
      {circular && <div className="mt-2">Circular Progress Placeholder ({progress}%)</div>}
      <div className="text-xs text-gray-500 mt-2">{getProgressDetails()}</div>
      {title !== "Next 4 Year Halving" && <div className="mt-2">
        <VerifyButton />
      </div>}
    </Card>
  );
};

const LandingPage = () => {
  const { data: hashrateData, isLoading: isHashrateLoading } = useHashrateData();
  const { data: marketCapData, isLoading: isMarketCapLoading } = useMarketCapData();
  const { data: totalSupply, isLoading: isSupplyLoading } = useElaSupply();
  interface NetworkStats {
    stakedAmount?: number;
    walletAddresses?: number;
    [key: string]: any;
  }

  interface BlockInfo {
    hash?: string;
    height?: number;
    time?: number;
    txlength?: number;
    poolInfo?: {
      poolName?: string;
    };
    hashrate?: string;
    [key: string]: any;
  }

  const [networkStats, setNetworkStats] = React.useState<NetworkStats | null>(null);
  const [currentBlock, setCurrentBlock] = React.useState<BlockInfo | null>(null);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Skip initial loading spinner on homepage
  React.useEffect(() => {
    // Set initial loading to false immediately
    setIsInitialLoading(false);
  }, []);


  React.useEffect(() => {
    const fetchNetworkStats = async () => {
      try {
        const response = await fetch('https://ela.elastos.io/api/v1/data-statistics/');
        const data = await response.json();
        setNetworkStats(data);
      } catch (error) {
        console.error("Error fetching network stats:", error);
      }
    };

    const fetchCurrentBlock = async () => {
      try {
        const newBlockResponse = await fetch('https://ela.elastos.io/api/v1/newblock/');
        const newBlockData = await newBlockResponse.json();

        const blockResponse = await fetch(`https://ela.elastos.io/api/v1/block/${newBlockData.hash}`);
        const blockData = await blockResponse.json();

        setCurrentBlock({
          hash: blockData.hash,
          height: blockData.height,
          time: blockData.time,
          txlength: blockData.tx.length,
          poolInfo: { poolName: blockData.poolInfo?.poolName || 'Unknown' },
          hashrate: (blockData.networkhashps / 1e18).toFixed(2) + ' EH/s'
        });
      } catch (error) {
        console.error('Error fetching block data:', error);
        setCurrentBlock({poolInfo: {poolName: "Error fetching" }});
      }
    };

    fetchNetworkStats();
    fetchCurrentBlock();

  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
    return num.toLocaleString();
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const stats = [
    {
      icon: <Bitcoin className="h-4 w-4 text-orange-500" />,
      title: "ELA Price",
      value: formatPrice(hashrateData?.elaPrice ?? 0),
      change: hashrateData?.elaPriceChange24h,
      loading: isHashrateLoading
    },
    {
      icon: <Star className="h-4 w-4 text-purple-500" />,
      title: "Market Cap",
      value: `$${formatNumber(marketCapData?.elastosMarketCap ?? 0)}`,
      subValue: `${((marketCapData?.marketCapRatio ?? 0) * 100).toFixed(4)}% of BTC`,
      loading: isMarketCapLoading
    },
    {
      icon: <Shield className="h-4 w-4 text-blue-500" />,
      title: "Security",
      value: `${(hashrateData?.elastosHashrate ?? 0).toFixed(2)} EH/s`,
      subValue: `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(1)}% of BTC`,
      loading: isHashrateLoading
    },
    {
      icon: <Wallet className="h-4 w-4 text-green-500" />,
      title: "Supply",
      value: `${formatNumber(totalSupply ?? 0)} ELA`,
      subValue: `${((totalSupply ?? 0) / 28220000 * 100).toFixed(2)}% of max`,
      loading: isSupplyLoading
    },
    {
      icon: <Clock className="h-4 w-4 text-cyan-500" />,
      title: "Market",
      value: `${((marketCapData?.elastosMarketCap ?? 0) / (marketCapData?.bitcoinMarketCap ?? 1) * 100).toFixed(6)}%`,
      subValue: "of crypto market",
      loading: isMarketCapLoading
    }
  ];

  return (
    <div className="flex flex-col gap- w-full">

      {/* Hero Section */}
      <div className="w-full px-2 mt-[-20px]">
        <div className="relative w-full h-[700px] overflow-hidden rounded-3xl">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/Hero image.png"
          >
            <source src="/videos/Elastos Hero Video2.mp4" type="video/mp4" />
          </video>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4 sm:p-8">
            <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-4 px-2">
              Own Your Digital Life, Secured by Bitcoin.
            </h1>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-center mb-8 text-white max-w-[90vw] md:max-w-none px-2 font-[200]">
              Elastos puts you in control of your identity, data, and digital assets.
            </p>
            <div className="flex gap-4">
              <a 
                href="/vision"
                className="inline-flex px-4 py-2 bg-[#21293a] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm min-w-[130px]"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>

            {/* Learn More Modal */}
            <Dialog open={isLearnMoreOpen} onOpenChange={setIsLearnMoreOpen}>
              <DialogContent className="sm:max-w-5xl max-h-[80vh] overflow-y-auto bg-background border-none shadow-lg p-0">
                <div className="absolute right-4 top-4 z-50">
                  <button 
                    onClick={() => setIsLearnMoreOpen(false)}
                    className="rounded-full w-8 h-8 inline-flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-xs text-muted-foreground absolute right-14 top-4 hidden sm:block">Click image to view full size</div>
                <DialogHeader className="p-6 pb-2">
                  <DialogTitle className="text-xl sm:text-2xl font-bold">Elastos: The Internet of the Future</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/Elastos Architecture.png" 
                        alt="Elastos Architecture" 
                        className="w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                        style={{ maxWidth: "100%", maxHeight: "60vh", objectFit: "contain" }}
                        onClick={() => window.open("/images/Elastos Architecture.png", "_blank")}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center max-w-2xl md:max-w-none">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Elastos re-decentralizes the internet by giving individuals true control over their data and identity. It leverages Bitcoin-level security and financial interoperability, a flexible multi-chain architecture, and DAO governance, alongside decentralized computing, storage, and peer-to-peer networking. Powered by the ELA token, it enables developers to build secure, transparent, and user-centric decentralized applications.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div
        className="w-screen py-0 relative"
        style={{
          left: "0",
          right: "0",
          margin: "0",
          padding: "0",
        }}
      >
        <MarqueeDemo />
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <GlowingStarsBackgroundCardPreview />
        <div className="mt-0 mb-24">
          <FeaturesCarousel />
        </div>

      <div className="mt-32">
          <ScalingSection />
        </div>


        <div className="container mx-auto mt-32 mb-26 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <img 
              src="/images/Elastos New Logo_Kit-03.png" 
              alt="Elastos Logo" 
              className="h-8 w-auto mb-3 sm:mb-0"
            />
            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white">
              Queen ELA: Married to Bitcoin since 2018.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Current Price</h3>
              {isHashrateLoading ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">${hashrateData?.elaPrice?.toFixed(2) || '0.00'}</p>
                  <p className={`text-sm ${hashrateData?.elaPriceChange24h >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'} mb-4`}>
                    {(hashrateData?.elaPriceChange24h >= 0 ? '+' : '') + (hashrateData?.elaPriceChange24h || 0).toFixed(2)}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: `${((hashrateData?.elaPrice || 0) / 77 * 100)}%` }} />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{((hashrateData?.elaPrice || 0) / 77 * 100).toFixed(1)}% from ATH ($77.00)</p>
                </>
              )}
            </div>

            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Total Supply</h3>
              {isSupplyLoading ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">28,199,999 ELA</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">91.31% mined</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                    <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: '91.31%' }} />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{(totalSupply || 0).toLocaleString()} ELA currently</p>
                </>
              )}
            </div>





            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Market Cap</h3>
              {isMarketCapLoading ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">${formatNumber(marketCapData?.elastosMarketCap ?? 0)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{((marketCapData?.marketCapRatio ?? 0) * 100).toFixed(4)}% of BTC</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                    <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: `${((marketCapData?.marketCapRatio ?? 0) * 100)}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">${formatNumber(marketCapData?.bitcoinMarketCap ?? 0)} BTC Cap</p>
                </>
              )}
            </div>





            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Current APR</h3>
              {!networkStats ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">3.29%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{(networkStats?.stakedAmount || 0).toLocaleString()} ELA staked</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                    <div 
                      className="bg-[#F6921A] h-1.5 rounded-full" 
                      style={{ 
                        width: `${((networkStats?.stakedAmount || 0) / (totalSupply || 28199999)) * 100}%` 
                      }} 
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {((networkStats?.stakedAmount || 0) / (totalSupply || 28199999) * 100).toFixed(1)}% of circulating supply
                  </p>
                </>
              )}
            </div>




          </div>

          {/* Second Row */}


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">



            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">BTC Security</h3>
              {isHashrateLoading ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">{((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{Math.round(hashrateData?.elastosHashrate || 0)} EH/s of {Math.round(hashrateData?.bitcoinHashrate || 0)} EH/s</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                    <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100)}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{((hashrateData?.elastosHashrate ?? 0) / 1.102).toFixed(2)} Frontier Supercomputers</p>
                </>
              )}
            </div>


            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Latest Block By</h3>
              {!currentBlock ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">{currentBlock?.poolInfo?.poolName || 'Unknown'}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mining Pool</p>
                  <div className="mt-4 pt-[2px] flex justify-center">
                    <button 
                      className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm justify-center"
                      onClick={() => window.open(`https://ela.elastos.io/api/v1/block/${currentBlock?.hash}`, '_blank')}
                    >
                      <span>Verify</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>









            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Next 4 Year Halving</h3>
              {/* Halving info is static, no need for a loader */}
              <p className="text-xl sm:text-2xl font-[200]">Dec 1, 2025</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">305d 17h 52m remaining</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ 
                  width: `${((365 * 4 - 305) / (365 * 4)) * 100}%` 
                }} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{((new Date().getTime() - new Date('2021-12-01').getTime()) / (new Date('2025-12-01').getTime() - new Date('2021-12-01').getTime()) * 100).toFixed(1)}% of cycle complete</p>
            </div>


            <div className="bg-[#ececec] dark:bg-[#5C8EFF]/[0.06] rounded-lg p-3 sm:p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Active Wallets</h3>
              {!networkStats ? (
                <div className="flex flex-col items-center justify-center h-[120px]">
                  <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-[200]">{networkStats?.walletAddresses?.toLocaleString() || '0'}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Addresses</p>
                  <div className="mt-4 pt-[2px] flex justify-center">
                    <button 
                      className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm justify-center"
                      onClick={() => window.open("https://ela.elastos.io/api/v1/data-statistics/", '_blank')}
                    >
                      <span>Verify</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none"><circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

        </div>

      {/* Spacer div to add more distance */}
      <div className="py-10 md:py-10"></div>
      
      {/* News Section */}
      <div className="px-4 md:px-0">
        <NewsSection />
      </div>

      {/* Spacer div to add more distance */}
      <div className="py-5 md:py-5"></div>

      {/* Testimonials Section */}
      <div className="w-full bg-background dark:bg-[#171717]">
        <div className="container mx-auto px-4 md:px-0 mb-0">
          <div className="flex flex-row items-center justify-between mb-0">
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-[400] leading-tight text-left mb-0 text-black dark:text-white">
            Join the Movement
          </h3>
            <a 
              href="https://t.me/elastosgroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm mt-0 md:mt-0"
            >
              <span>Talk with Community</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
        <TestimonialsSection 
          title="" 
          description=""
          testimonials={[
            {
              author: {
                name: "Igor",
                handle: "DAO Council Member",
                avatar: "/images/Testimonials/Igor.jpg"
              },
              text: "Elastos spoke to me as a vision of the internet where privacy, security, and data ownership aren't optional features, but the foundation...",
              fullText: "Elastos spoke to me as a vision of the internet where privacy, security, and data ownership aren't optional features, but the foundation. It's through this journey that I've come to believe the future of AI belongs to local models running on personal devices, beyond the reach of centralized power. Elastos isn't just enabling this, it's actively building it, and I'm proud to be part of it as an Elastos DAO member."
            },
            {
              author: {
                name: "Fake Fake",
                handle: "Community Member",
                avatar: "/images/Testimonials/Fake Fake.jpg"
              },
              text: "I joined Elastos in 2018, inspired by its powerful vision of a truly decentralized internet. Watching it now returning to its roots with the World Computer...",
              fullText: "I joined Elastos in 2018, inspired by its powerful vision of a truly decentralized internet. Watching it now returning to its roots with the World Computer reignites my excitement. Together with Elacity and BeL2, it's unlocking the tools we need to truly own our digital lives. I believe in building a better, user-owned web—and Elastos is leading the way."
            },
            {
              author: {
                name: "Hayley",
                handle: "BPoS Node Validator",
                avatar: "/images/Testimonials/Hayley.jpg"
              },
              text: "I first noticed Elastos on GitHub, and was blown away by their extensive work building a decentralised internet OS where I could control my data and assets...",
              fullText: "I first noticed Elastos on GitHub, and was blown away by their extensive work building a decentralised internet OS where I could control my data and assets. Now it's even bigger! With Elacity, BeL2, DIDs, carrier and storage. The 'World Computer' idea is around the corner and it's so ridiculously exciting! I totally adore the Elastos community too, some of the most passionate, friendly and welcoming people."
            },
            {
              author: {
                name: "Crypto Shmate",
                handle: "Community Member",
                avatar: "/images/Testimonials/Crypto Shmate.jpg"
              },
              text: "The idea of a new age of internet intrigued me. The background of the founders instilled confidence, and the innovation thus far has kept me...",
              fullText: "The idea of a new age of internet intrigued me. The background of the founders instilled confidence, and the innovation thus far has kept me. Elastos will forever be a project I stick behind. A small dive will show you why it stands out from the rest."
            },
            {
              author: {
                name: "BigP",
                handle: "BPoS Node Validator",
                avatar: "/images/Testimonials/BigP.jpg"
              },
              text: "Like many others, back in 2017, I was captivated by the infamous Blockchain Brad interview with Elastos founder Rong Chen. As a libertarian at heart...",
              fullText: "Like many others, back in 2017, I was captivated by the infamous Blockchain Brad interview with Elastos founder Rong Chen. As a libertarian at heart, the concept of a decentralized internet completely blew my mind. I believe that owning your own data is essential to any truly free society. Ever since, I've been hooked on Elastos and genuinely excited about what the future holds."
            },
            {
              author: {
                name: "Stephan",
                handle: "Community Member",
                avatar: "/images/Testimonials/Stephan.jpg"
              },
              text: "The continuous progress of the Elastos team initially drew me in, while their real Web 3.0 vision and innovative tech like BeL2 truly captivated me...",
              fullText: "The continuous progress of the Elastos team initially drew me in, while their real Web 3.0 vision and innovative tech like BeL2 truly captivated me. It reshaped how I see crypto—not just as assets, but as a foundation for digital freedom and ownership. Elastos changed my perspective completely."
            },
            {
              author: {
                name: "Yagami",
                handle: "Community Member",
                avatar: "/images/Testimonials/Yagami.jpg"
              },
              text: "After researching over 500 projects, I made a bold decision to go all in on Elastos. Only this project can achieve true Web3.",
              fullText: "After researching over 500 projects, I made a bold decision to go all in on Elastos. Only this project can achieve true Web3."
            },
            {
              author: {
                name: "Yew",
                handle: "BPoS Node Validator",
                avatar: "/images/Testimonials/Yew.jpg"
              },
              text: "Sasha's passion towards Elacity, Rong's vision of the World Computer and Sunny's goal in building BeL2 will attract literally anyone to be excited and invested in Elastos.",
              fullText: "Sasha's passion towards Elacity, Rong's vision of the World Computer and Sunny's goal in building BeL2 will attract literally anyone to be excited and invested in Elastos."
            }
          ]}
        />

        {/* Community Image Grid */}
        <div className="container mx-auto px-4 mt-16 md:mt-0">
          <div className="grid grid-cols-3 md:grid-cols-12 gap-6">
            <ImageZoom
              key="1"
              src="/images/Roadmap/Elastos Members.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="2"
              src="/images/Roadmap/Sash as speaker in Bitcoin2024.jpeg"
              alt="Sash as speaker in Bitcoin2024"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="3"
              src="/images/Roadmap/Rong Chen and kevin Zhang hosted a meetup in London.jpeg"
              alt="Elastos Community Gathering"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="4"
              src="/images/Community/Elastos Celebration.png"
              alt="Elastos Celebration"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="5"
              src="/images/Community/FmIGJV0XkA4B7wA.jpeg"
              alt="Elastos Community Gathering"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="6"
              src="/images/Roadmap/Elastos hosted a meetup in Hong Kong.jpeg"
              alt="Elastos hosted a meetup in Hong Kong"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="7"
              src="/images/Community/EiJX5nNVoAEe9pX.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="8"
              src="/images/Roadmap/BeL2 booth in Bitcoin 2024.jpeg"
              alt="BeL2 booth in Bitcoin 2024"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="9"
              src="/images/Community/E4b9vKPXIAYJ1s_.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="10"
              src="/images/Roadmap/Sunny Feng Han at Teamz Web Summit in Tokyo.jpeg"
              alt="Sunny Feng Han at Teamz Web Summit in Tokyo"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="11"
              src="/images/Community/EdJmPJ-U4AAU8F7.jpeg"
              alt="Elastos Community Gathering"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="12"
              src="/images/Roadmap/Cyber Republic DAO meetup.jpeg"
              alt="Cyber Republic DAO meetup"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="13"
              src="/images/Community/Div4TBUWsAYmcEq.jpeg"
              alt="Elastos Community Meetup"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="14"
              src="/images/Roadmap/Rong Chen and Kevin Zhang hosted a meetup in Barcelona.jpeg"
              alt="Rong Chen and Kevin Zhang hosted a meetup in Barcelona"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="15"
              src="/images/Community/EfLML37U0AMxc-e.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="16"
              src="/images/Roadmap/Elastos in Couinstore event.jpeg"
              alt="Elastos in Couinstore event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="17"
              src="/images/Community/DVM2La_VwAEeq-U.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="18"
              src="/images/Roadmap/Sunny Feng Han in DACA event.jpg"
              alt="Sunny Feng Han in DACA event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="19"
              src="/images/Roadmap/Elastos 1 Year.jpeg"
              alt="Elastos 1 Year"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="20"
              src="/images/Community/Ezbt41dUUAAjX4p.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="21"
              src="/images/Community/F6EWQCJXoAAfGlY.jpeg"
              alt="Elastos Community Gathering"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="22"
              src="/images/Community/D35ZHIUUYAA2xKO.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="23"
              src="/images/Roadmap/Rong Pomp.png"
              alt="Rong Chen with Pomp"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
            <ImageZoom
              key="24"
              src="/images/Community/Ecp2XbVUYAAlUeC.jpeg"
              alt="Elastos Community Event"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>


      {/* Spacer div to add more distance */}
        <div className="py-12 md:py-12"></div>


      {/* FAQ Section */}
      <div className="w-full py-0 bg-background dark:bg-[#171717]">
        <div className="container mx-auto px-4 md:px-0">
          <FaqComponent showButtons={true} className="max-w-full" />
        </div>
      </div>

      {/* LogoCarouselDemo moved to bottom of page */}
      <div className="container mx-auto px-4 md:px-0 py-12">
        <LogoCarouselDemo />
      </div>

      <StackedCircularFooter />
    </div>
  );
};

export default LandingPage;