import React from 'react';
import { useHashrateData } from '@/hooks/useHashrateData';

export function SecurityStats() {
  const { data: hashrateData, isLoading } = useHashrateData();

  const formatHashrate = (hashrate?: number) => {
    return hashrate ? `${hashrate.toFixed(2)} EH/s` : 'Loading...';
  };

  return (
    <div className="bg-[#262626] rounded-lg p-4 shadow-sm border-0 w-full max-w-lg dark:bg-[#171717]">
      <div className="flex items-center gap-4">
        <p className="text-gray-200 font-medium dark:text-gray-200">Protected by {formatHashrate(hashrateData?.elastosHashrate)} ({((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100).toFixed(2)}%) of Bitcoin's {formatHashrate(hashrateData?.bitcoinHashrate)} hashpower</p>
        <div className="flex-1">
          <div className="w-full bg-gray-700 rounded-full h-1.5 dark:bg-gray-800">
            <div 
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500 dark:bg-blue-500"
              style={{ width: `${((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1) * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}