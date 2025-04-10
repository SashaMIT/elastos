
import React, { useState } from 'react';
import { StatsGrid } from "@/components/StatsGrid";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

function StatsPage() {
  const [fetchLiveData, setFetchLiveData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleFetchData = () => {
    setIsLoading(true);
    setFetchLiveData(true);
    // The loading indicator will be handled in the StatsGrid component
  };
  
  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-[200] text-center">Elastos Network Statistics</h1>
          <Button 
            onClick={handleFetchData}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(246,146,26,0.15)] text-white font-[200] transition-all hover:bg-[rgba(246,146,26,0.25)] border border-[rgba(246,146,26,0.25)] mt-4 sm:mt-0"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2"></div>
            ) : (
              <RefreshCcw size={18} />
            )}
            Update Stats
          </Button>
        </div>
        <StatsGrid fetchLiveData={fetchLiveData} onDataLoaded={() => setIsLoading(false)} />
      </div>
      <StackedCircularFooter />
    </div>
  );
}

export default StatsPage;
