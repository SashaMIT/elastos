import React, { useEffect, useState } from 'react';
import MergeMiningAnimation from '../components/MergeMiningAnimation';
import { useHashrateData } from '../hooks/useHashrateData';
import { useMarketCapData } from '../hooks/useMarketCapData';
import { ChevronUp, ChevronDown, Info, AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

interface StatItem {
  label: string;
  value: string;
  change?: number;
  showChange?: boolean;
  subValue?: string;
  isHashrate?: boolean;
  percentage?: number;
}

const HomePage = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { data: hashrateData, fetchData: fetchHashrateData, isLoading: isHashrateLoading } = useHashrateData();
  const { data: marketCapData, fetchData: fetchMarketCapData, isLoading: isMarketCapLoading } = useMarketCapData();

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowDisclaimer(false);
  };
  
  const fetchAllData = () => {
    fetchHashrateData();
    fetchMarketCapData();
  };
  const bitcoinPrice = hashrateData?.bitcoinPrice ?? 0;
  const bitcoinHashrate = hashrateData?.bitcoinHashrate ?? 0;
  const elaPrice = hashrateData?.elaPrice ?? 0;
  const elastosHashrate = hashrateData?.elastosHashrate ?? 0;
  const bitcoinPriceChange = hashrateData?.bitcoinPriceChange24h ?? 0;
  const elaPriceChange = hashrateData?.elaPriceChange24h ?? 0;

  const formatMarketCap = (value: number, isElastos = false) => {
    if (isElastos) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    return `$${(value / 1e9).toFixed(2)}B`;
  };

const { data: marketCapData } = useMarketCapData();
const bitcoinMarketCap = marketCapData?.bitcoinMarketCap ?? 0;
const elastosMarketCap = marketCapData?.elastosMarketCap ?? 0;

const stats: StatItem[] = [
    // Top row - Bitcoin stats
    {
      label: "Bitcoin Price",
      value: `$${bitcoinPrice.toLocaleString()}`,
      change: bitcoinPriceChange,
      showChange: true
    },
    {
      label: "Bitcoin Supply",
      value: "21 Million",
      showChange: false
    },
    {
      label: "Bitcoin Market Cap",
      value: formatMarketCap(bitcoinMarketCap),
      showChange: false
    },
    {
      label: "Bitcoin Hashrate (EH/s)",
      value: bitcoinHashrate.toFixed(2),
      showChange: false
    },
    // Bottom row - Elastos stats
    {
      label: "Elastos Price",
      value: `$${elaPrice.toFixed(2)}`,
      change: elaPriceChange,
      showChange: true
    },
    {
      label: "Elastos Supply",
      value: "28.22 Million",
      showChange: false
    },
    {
      label: "Elastos Market Cap",
      value: formatMarketCap(elastosMarketCap, true),
      showChange: false
    },
    {
      label: "Elastos Hashrate (EH/s)",
      value: elastosHashrate.toFixed(2),
      subValue: `${((elastosHashrate/bitcoinHashrate) * 100).toFixed(1)}%`,
      showChange: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] flex flex-col items-center justify-start pt-0 p-0 sm:p-1">
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-[#151515] border-0 shadow-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Financial Disclaimer
            </DialogTitle>
            <DialogDescription>
              Please read this important disclaimer before proceeding
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 text-sm text-foreground dark:text-foreground font-[200]">
            <p>
              The information provided on this website is for general informational purposes only and should not be considered as financial advice.
            </p>
            <p>
              Cryptocurrency investments carry significant risks, including the possible loss of all invested capital. Historical performance is not indicative of future results.
            </p>
            <p>
              Always conduct your own research and consult with qualified financial advisors before making any investment decisions.
            </p>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleAcceptDisclaimer} 
              className="w-full rounded-full bg-primary hover:bg-primary/90 text-white dark:text-black"
            >
              I Understand and Accept
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="max-w-[1200px] w-full flex flex-col items-center space-y-0 px-1 mt-4">
        <div className="w-full flex flex-col items-center mt-8 mb-0">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl md:text-2xl font-[300] text-white">Network Statistics</h2>
            <button
              onClick={() => {
                // Scroll to stats section
                window.location.href = "#stats-section";
                
                // Fetch all data
                fetchAllData();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(246,146,26,0.15)] text-white font-[200] transition-all hover:bg-[rgba(246,146,26,0.25)] border border-[rgba(246,146,26,0.25)] ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
            </button>
          </div>
          <MergeMiningAnimation />
        </div>

        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 w-full px-1 sm:px-2 pt-2">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-accent/10 p-2 sm:p-3 lg:p-4 rounded-lg space-y-1 sm:space-y-2 text-center mx-auto w-full flex flex-col items-center dark:bg-[#1a1a1a]"
            >
              <div className="flex items-center gap-1">
                <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground dark:text-white font-[200]">
                  {stat.label}
                </div>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild className="touch-auto">
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground dark:text-white cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 touch-auto dark:bg-muted-foreground dark:text-white">
                      <div className="text-sm">
                        {(stat.label.includes("Price") || stat.label.includes("Market Cap") || 
                          stat.label.includes("Supply")) && (
                          <a 
                            href={stat.label.includes("Bitcoin") 
                              ? "https://www.coingecko.com/en/coins/bitcoin"
                              : "https://www.coingecko.com/en/coins/elastos"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 underline p-1 dark:text-blue-500"
                          >
                            View data on CoinGecko
                          </a>
                        )}
                        {stat.label.includes("Hashrate") && stat.label.includes("Bitcoin") && (
                          <a 
                            href="https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 underline p-1 dark:text-blue-500"
                          >
                            View data on Minerstat
                          </a>
                        )}
                        {stat.label.includes("Hashrate") && !stat.label.includes("Bitcoin") && (
                          <a 
                            href="https://ela.elastos.io/api/v1/data-statistics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 underline p-1 dark:text-blue-500"
                          >
                            View data on Elastos Explorer
                          </a>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center justify-center w-full">
                {stat.label.includes("Hashrate") ? (
                  <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
                    <span className="text-xs sm:text-sm text-muted-foreground dark:text-white font-[200]">{stat.value}</span>
                    <div className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-green-200 dark:bg-green-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 dark:bg-green-500 rounded-full transition-all duration-500"
                        style={{ 
                          width: stat.label.includes("Bitcoin") ? '100%' : `${(elastosHashrate/bitcoinHashrate) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm whitespace-nowrap text-black dark:text-white font-[200]">
                      {stat.label.includes("Bitcoin") ? "100%" : stat.subValue}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-lg text-black dark:text-white font-[200]">{stat.value}</span>
                    {stat.showChange && typeof stat.change === 'number' && (
                      <span className={`flex items-center text-sm font-[200] ${stat.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {stat.change >= 0 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        {Math.abs(stat.change)}%
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Footer */}
      <div className="mt-12 w-full">
        <StackedCircularFooter />
      </div>
    </div>
  );
};

export default HomePage;