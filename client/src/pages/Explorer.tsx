
import React from "react";
import { ExplorerPage } from "@/components/ExplorerPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Explorer() {
  return (
    <>
      <Helmet>
        {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-775BN8EH1L"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-775BN8EH1L');
          `}
        </script>
      </Helmet>
      
      <SEO 
        title="Elastos Blockchain Explorer | Track Transactions & Blocks"
        description="Explore the Elastos blockchain with our comprehensive explorer. Track transactions, view blocks, and monitor network activity across all Elastos chains."
        keywords="Elastos explorer, blockchain explorer, ESC explorer, EID explorer, Elastos transactions, block explorer, crypto explorer"
        ogImage="/images/Explorer.png"
        canonicalUrl="/explorer"
      />
      
      <WebPageStructuredData
        title="Elastos Blockchain Explorer | Track Transactions & Blocks"
        description="Explore the Elastos blockchain with our comprehensive explorer. Track transactions, view blocks, and monitor network activity."
        url="/explorer"
        imageUrl="/images/Explorer.png"
      />
      
      <ExplorerPage />
    </>
  );
}
