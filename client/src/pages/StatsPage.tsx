import React from 'react';
import { StatsGrid } from "@/components/StatsGrid";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { SEO } from "@/components/SEO"; // Import the SEO component
import { WebPageStructuredData } from '@/components/WebPageStructuredData';


function StatsPage() {
  return (
    <div className="font-[200]">
      <div className="container mx-auto px-4 py-12">
        <SEO 
          title="Elastos Network Statistics"
          description="View real-time statistics and metrics about the Elastos network, including hashrate, price, market cap, staking data, and more."
          keywords="Elastos statistics, blockchain metrics, network data, ELA price, hashrate stats, blockchain analytics"
          ogImage="/images/Elastosbanner.jpg"
          canonicalUrl="/stats"
        />
        <WebPageStructuredData
          title="Elastos Network Statistics and Metrics"
          description="Dashboard of key metrics and statistics about the Elastos blockchain network, including security, adoption, and economic indicators."
          url="/stats"
          imageUrl="/images/Elastosbanner.jpg"
        />
        <h1 className="text-3xl font-[200] mb-8 text-center">Elastos Network Statistics</h1>
        <StatsGrid />
      </div>
      <StackedCircularFooter />
    </div>
  );
}

export default StatsPage;