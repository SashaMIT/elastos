
import React from "react";
import StatsPage from "@/pages/StatsPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Stats() {
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
        title="Elastos Network Statistics | Real-Time Blockchain Metrics"
        description="View real-time statistics and metrics for the Elastos blockchain network, including hashrate, transaction volume, active nodes, and more."
        keywords="Elastos statistics, ELA blockchain metrics, Elastos hashrate, Elastos network data, blockchain analytics, ELA metrics"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/stats"
      />
      
      <WebPageStructuredData
        title="Elastos Network Statistics | Real-Time Blockchain Metrics"
        description="View real-time statistics and metrics for the Elastos blockchain network."
        url="/stats"
        imageUrl="/images/Elastosbanner.jpg"
      />
      
      <StatsPage />
    </>
  );
}
