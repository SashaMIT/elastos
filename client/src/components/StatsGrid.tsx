
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { RefreshCw } from 'lucide-react';
import { useHashrateData } from '@/hooks/useHashrateData';
import { useMarketCapData } from '@/hooks/useMarketCapData';
import { useNetworkStats } from '@/hooks/useNetworkStats';
import { useElaSupply } from '@/hooks/useElaSupply';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';

export const StatsGrid = () => {
  // State to track if data should be loaded from APIs
  const [loadApiData, setLoadApiData] = useState(false);
  
  // Only enable these queries when loadApiData is true
  const { data: hashrateData, isLoading: isHashrateLoading, refetch: refetchHashrate } = useHashrateData(loadApiData);
  const { data: marketCapData, isLoading: isMarketCapLoading, refetch: refetchMarketCap } = useMarketCapData(loadApiData);
  const { data: networkStats, isLoading: isNetworkStatsLoading, refetch: refetchNetworkStats } = useNetworkStats(loadApiData);
  const { data: supplyData, isLoading: isSupplyLoading, refetch: refetchSupply } = useElaSupply(loadApiData);

  // Static data (placeholder values from the provided image)
  const staticData = {
    currentPrice: "$1.24",
    priceFromATH: "1.6% from ATH ($77.00)",
    totalSupply: "28,199,999 ELA",
    minedPercentage: "91.31% mined",
    currentlyMined: "25,748,861 ELA currently",
    marketCap: "$28.11M",
    btcPercentage: "0.1749% of BTC",
    btcCap: "$1607.22B BTC Cap",
    currentAPR: "3.29%",
    elaStaked: "5,252,197 ELA staked",
    stakedPercentage: "20.4% of circulating supply",
    btcSecurity: "52.09%",
    hashrate: "481 EH/s of 924 EH/s",
    frontierComputers: "436.74 Frontier Supercomputers",
    latestBlockBy: "Mined by ViaBTC",
    miningPool: "Mining Pool",
    nextHalving: "Dec 1, 2025",
    timeRemaining: "305d 17h 52m remaining",
    cycleComplete: "83.9% of cycle complete",
    activeWallets: "235,116",
    totalAddresses: "Total Addresses"
  };

  // Function to handle refresh
  const handleRefresh = async () => {
    setLoadApiData(true);
    // Refetch all data
    await Promise.all([
      refetchHashrate(),
      refetchMarketCap(),
      refetchNetworkStats(),
      refetchSupply()
    ]);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-[300]">Queen ELA: Married to Bitcoin since 2018.</h2>
        <Button 
          variant="outline" 
          onClick={handleRefresh} 
          className="flex items-center gap-2"
          disabled={isHashrateLoading || isMarketCapLoading || isNetworkStatsLoading || isSupplyLoading}
        >
          <RefreshCw className={`h-4 w-4 ${(isHashrateLoading || isMarketCapLoading || isNetworkStatsLoading || isSupplyLoading) && 'animate-spin'}`} />
          {loadApiData ? 'Refresh Stats' : 'Load Live Data'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Price */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Current Price</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? (isHashrateLoading ? <Skeleton className="h-8 w-24" /> : `$${hashrateData?.elaPrice.toFixed(2)}`) : staticData.currentPrice}
            </div>
            <div className="text-sm text-gray-400 mt-1">Per ELA</div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {loadApiData ? 
                (isHashrateLoading ? <Skeleton className="h-4 w-48" /> : `${hashrateData?.elaPriceChange24h.toFixed(2)}% 24h change`) : 
                staticData.priceFromATH}
            </div>
          </div>
        </Card>

        {/* Total Supply */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Total Supply</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? (isSupplyLoading ? <Skeleton className="h-8 w-24" /> : `${supplyData?.maxSupply.toLocaleString()} ELA`) : staticData.totalSupply}
            </div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '91%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {staticData.minedPercentage}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {loadApiData ? 
                (isSupplyLoading ? <Skeleton className="h-4 w-48" /> : `${Math.round(supplyData?.currentSupply || 0).toLocaleString()} ELA currently`) : 
                staticData.currentlyMined}
            </div>
          </div>
        </Card>

        {/* Market Cap */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Market Cap</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? 
                (isMarketCapLoading ? <Skeleton className="h-8 w-24" /> : `$${(marketCapData?.elastosMarketCap / 1000000).toFixed(2)}M`) : 
                staticData.marketCap}
            </div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '0.2%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {loadApiData ? 
                (isMarketCapLoading ? <Skeleton className="h-4 w-48" /> : `${(marketCapData?.marketCapRatio * 100).toFixed(4)}% of BTC`) : 
                staticData.btcPercentage}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {loadApiData ? 
                (isMarketCapLoading ? <Skeleton className="h-4 w-48" /> : `$${(marketCapData?.bitcoinMarketCap / 1000000000).toFixed(2)}B BTC Cap`) : 
                staticData.btcCap}
            </div>
          </div>
        </Card>

        {/* Current APR */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Current APR</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? <Skeleton className="h-8 w-24" /> : staticData.currentAPR}
            </div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {loadApiData ? <Skeleton className="h-4 w-48" /> : staticData.elaStaked}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {loadApiData ? <Skeleton className="h-4 w-48" /> : staticData.stakedPercentage}
            </div>
          </div>
        </Card>

        {/* BTC Security */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">BTC Security</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? 
                (isHashrateLoading ? <Skeleton className="h-8 w-24" /> : `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%`) : 
                staticData.btcSecurity}
            </div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '52%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {loadApiData ? 
                (isHashrateLoading ? <Skeleton className="h-4 w-48" /> : `${hashrateData?.elastosHashrate.toFixed(2)} EH/s of ${hashrateData?.bitcoinHashrate.toFixed(2)} EH/s`) : 
                staticData.hashrate}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {staticData.frontierComputers}
            </div>
          </div>
        </Card>

        {/* Latest Block By */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Latest Block By</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? <Skeleton className="h-8 w-36" /> : staticData.latestBlockBy}
            </div>
            <div className="text-sm text-gray-400 mt-6">
              {staticData.miningPool}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="text-xs">
                <span className="mr-1">Verify</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </Card>

        {/* Next 4 Year Halving */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Next 4 Year Halving</h3>
            <div className="text-3xl font-[300] text-white">
              {staticData.nextHalving}
            </div>
            <div className="mt-2 h-1 bg-[#2A2E3B] rounded-full w-full">
              <div className="h-1 bg-[#F6921A] rounded-full" style={{ width: '84%' }}></div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {staticData.timeRemaining}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {staticData.cycleComplete}
            </div>
          </div>
        </Card>

        {/* Active Wallets */}
        <Card className="bg-[#171B26] border-[#232634] relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-gray-400 mb-2">Active Wallets</h3>
            <div className="text-3xl font-[300] text-white">
              {loadApiData ? 
                (isNetworkStatsLoading ? <Skeleton className="h-8 w-24" /> : `${networkStats?.walletAddresses.toLocaleString()}`) : 
                staticData.activeWallets}
            </div>
            <div className="text-sm text-gray-400 mt-6">
              {staticData.totalAddresses}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="text-xs">
                <span className="mr-1">Verify</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
