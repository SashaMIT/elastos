import React from "react";
import ExplorerRedesignedPage from "./Explorer";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function ExplorerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#171717]">
      <SEO 
        title="Elastos Block Explorers - Network Activity"
        description="Access Elastos blockchain explorers to view transactions, blocks, addresses, and network activity across the Elastos ecosystem."
        keywords="Elastos explorer, blockchain explorer, ESC explorer, ELA mainchain explorer, blockchain transactions, block explorer"
        ogImage="/images/Explorer.png"
        canonicalUrl="/explorer"
      />
      <WebPageStructuredData
        title="Elastos Blockchain Explorers and Network Data"
        description="Comprehensive tools for exploring and analyzing transactions, blocks, and network activity on the various chains in the Elastos ecosystem."
        url="/explorer"
        imageUrl="/images/Explorer.png"
      />
      <ExplorerRedesignedPage />
    </div>
  );
}