
import React from 'react';
import { StatsGrid } from "@/components/StatsGrid";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

function StatsPage() {
  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-[200] mb-8 text-center">Elastos Network Statistics</h1>
        <StatsGrid />
      </div>
      <StackedCircularFooter />
    </div>
  );
}

export default StatsPage;
