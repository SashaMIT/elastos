
import React, { useState, useEffect } from 'react';
import { useHashrateData } from '@/hooks/useHashrateData';
import { useElaSupply } from '@/hooks/useElaSupply';
import { useMarketCapData } from '@/hooks/useMarketCapData';
import { useNetworkStats } from '@/hooks/useNetworkStats';
import { differenceInDays, format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

export const StatsGrid = () => {
  // State to track if data should be loaded from APIs
  const [loadApiData, setLoadApiData] = useState(false);
  
  // Only enable these queries when loadApiData is true
  const { data: hashrateData, isLoading: isHashrateLoading, refetch: refetchHashrate } = useHashrateData(loadApiData);
  const { data: totalSupply, isLoading: isSupplyLoading, refetch: refetchSupply } = useElaSupply(loadApiData);
  const { data: marketCapData, isLoading: isMarketCapLoading, refetch: refetchMarketCap } = useMarketCapData(loadApiData);
  const { data: networkStats, isLoading: isNetworkStatsLoading, refetch: refetchNetworkStats } = useNetworkStats(loadApiData);
  
  // Placeholder data (static values)
  const staticData = {
    elaPrice: 1.24,
    bitcoinPrice: 75000,
    elastosHashrate: 481,
    bitcoinHashrate: 924,
    elastosMarketCap: 28110000,
    bitcoinMarketCap: 1607220000000,
    marketCapRatio: 0.001749,
    stakedAmount: 5252197,
    walletAddresses: 235116,
    blockMiner: "ViaBTC"
  };
  
  // Track overall loading state
  const isLoading = loadApiData && (isHashrateLoading || isSupplyLoading || isMarketCapLoading || isNetworkStatsLoading);
  
  // Static supply values
  const MAX_SUPPLY = 28199999;
  const CURRENT_SUPPLY = 25748861;
  
  // Halving date calculations
  const NEXT_HALVING = new Date('2025-12-01');
  const LAST_HALVING = new Date('2021-12-01'); 
  const now = new Date();
  const daysRemaining = differenceInDays(NEXT_HALVING, now);
  const totalCycleDays = differenceInDays(NEXT_HALVING, LAST_HALVING);
  const daysElapsed = differenceInDays(now, LAST_HALVING);
  const cyclePercentComplete = (daysElapsed / totalCycleDays) * 100;
  
  // Helper function to format numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    } else {
      return num.toFixed(2);
    }
  };
  
  // Handle refresh/fetch data
  const handleRefresh = async () => {
    if (!loadApiData) {
      setLoadApiData(true);
    } else if (loadApiData) {
      // If data is already loaded, just refresh it
      await Promise.all([
        refetchHashrate(),
        refetchSupply(),
        refetchMarketCap(),
        refetchNetworkStats()
      ]);
    }
  };
  
  // Current block placeholder (static)
  const currentBlock = {
    hash: "0000000000000000000000000000000000000000000000000000000000000000",
    poolInfo: { poolName: "ViaBTC" }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-xl font-[300]">Queen ELA: Married to Bitcoin since 2018.</h2>
        <Button 
          variant={loadApiData ? "outline" : "default"}
          onClick={handleRefresh} 
          className="flex items-center gap-2 whitespace-nowrap bg-orange-500/80 hover:bg-orange-500 text-white dark:text-white"
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading && 'animate-spin'}`} />
          {loadApiData ? 'Refresh Stats' : 'Load Live Data'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Current Price */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Current Price</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">${loadApiData ? hashrateData?.elaPrice?.toFixed(2) || '0.00' : staticData.elaPrice}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Per ELA
              </p>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: `${((loadApiData ? hashrateData?.elaPrice || 0 : staticData.elaPrice) / 77 * 100)}%` }} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">1.6% from ATH ($77.00)</p>
            </>
          )}
        </div>

        {/* Total Supply */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Total Supply</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">28,199,999 ELA</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">91.31% mined</p>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
                <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: '91.31%' }} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{loadApiData ? totalSupply?.toLocaleString() || CURRENT_SUPPLY.toLocaleString() : CURRENT_SUPPLY.toLocaleString()} ELA currently</p>
            </>
          )}
        </div>

        {/* Market Cap */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Market Cap</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">${loadApiData ? formatNumber(marketCapData?.elastosMarketCap ?? 0) : formatNumber(staticData.elastosMarketCap)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">0.1749% of BTC</p>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
                <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ width: `${loadApiData ? ((marketCapData?.marketCapRatio ?? 0) * 100) : staticData.marketCapRatio * 100}%` }} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">${loadApiData ? formatNumber(marketCapData?.bitcoinMarketCap ?? 0) : formatNumber(staticData.bitcoinMarketCap)} BTC Cap</p>
            </>
          )}
        </div>

        {/* Current APR */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Current APR</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">3.29%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">5,252,197 ELA staked</p>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
                <div 
                  className="bg-[#F6921A] h-1.5 rounded-full" 
                  style={{ 
                    width: `${(staticData.stakedAmount / CURRENT_SUPPLY) * 100}%` 
                  }} 
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                20.4% of circulating supply
              </p>
            </>
          )}
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">
        {/* BTC Security */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">BTC Security</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">52.09%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {loadApiData 
                  ? `${Math.round(hashrateData?.elastosHashrate || 0)} EH/s of ${Math.round(hashrateData?.bitcoinHashrate || 0)} EH/s`
                  : `${staticData.elastosHashrate} EH/s of ${staticData.bitcoinHashrate} EH/s`
                }
              </p>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
                <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ 
                  width: loadApiData 
                    ? `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100)}%`
                    : `${(staticData.elastosHashrate / staticData.bitcoinHashrate * 100)}%`
                }} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">436.74 Frontier Supercomputers</p>
            </>
          )}
        </div>

        {/* Latest Block By */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Latest Block By</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">Mined by ViaBTC</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mining Pool</p>
              <div className="mt-4 pt-[2px] flex justify-center">
                <button 
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm justify-center"
                  onClick={() => window.open(`https://ela.elastos.io/`, '_blank')}
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

        {/* Next 4 Year Halving */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Next 4 Year Halving</h3>
          <p className="text-xl sm:text-2xl font-[200]">Dec 1, 2025</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">305d 17h 52m remaining</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
            <div className="bg-[#F6921A] h-1.5 rounded-full" style={{ 
              width: `${cyclePercentComplete}%` 
            }} />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">83.9% of cycle complete</p>
        </div>

        {/* Active Wallets */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Active Wallets</h3>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[120px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              <p className="text-xl sm:text-2xl font-[200]">
                {loadApiData ? networkStats?.walletAddresses?.toLocaleString() || '0' : staticData.walletAddresses.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Addresses</p>
              <div className="mt-4 pt-[2px] flex justify-center">
                <button 
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm justify-center"
                  onClick={() => window.open("https://ela.elastos.io/api/v1/data-statistics/", '_blank')}
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
      </div>
    </div>
  );
};
