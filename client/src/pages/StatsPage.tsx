
import React from 'react';
import { StatsGrid } from "@/components/StatsGrid";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

function StatsPage() {
  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-[200] mb-8 text-center">Elastos Network Statistics</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          The statistics below use placeholder data. Click the Refresh button to fetch live data.
        </p>
        <StatsGrid />
      </div>
      <StackedCircularFooter />
    </div>
  );
}

export default StatsPage;
