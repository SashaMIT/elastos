import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { StatsGrid } from "@/components/StatsGrid";

function StatsPage() {
  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-[200] mb-8 text-center">Elastos Network Statistics</h1>
        <StatsGrid />
      </div>
      <div className="mt-12">
        <StackedCircularFooter />
      </div>
    </div>
  );
}

export default StatsPage;