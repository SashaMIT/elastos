
import React from 'react';
import { StatsGrid } from "@/components/StatsGrid";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { useHashrateData } from '@/hooks/useHashrateData';
import { useElaSupply } from '@/hooks/useElaSupply';
import { useNetworkStats } from '@/hooks/useNetworkStats';

function StatsPage() {
  const { refetch: refetchHashrate } = useHashrateData();
  const { refetch: refetchSupply } = useElaSupply();
  const { refetch: refetchNetworkStats } = useNetworkStats();

  const fetchAllData = () => {
    refetchHashrate();
    refetchSupply();
    refetchNetworkStats();
  };

  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-[200] mb-4 text-center">Elastos Network Statistics</h1>
          <div className="flex items-center">
            <p className="text-center text-gray-500 dark:text-gray-400">
              The statistics below use placeholder data. Click the Refresh button to fetch live data.
            </p>
            <button 
              onClick={fetchAllData}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(246,146,26,0.15)] text-white font-[200] transition-all hover:bg-[rgba(246,146,26,0.25)] border border-[rgba(246,146,26,0.25)] ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
            </button>
          </div>
        </div>
        <StatsGrid />
      </div>
      <StackedCircularFooter />
    </div>
  );
}

export default StatsPage;
