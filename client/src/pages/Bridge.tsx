
import React from "react";
import { BridgePage } from "./BridgePage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Bridge() {
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
        title="Elastos Bridge Guide | Transfer ELA Between Chains"
        description="Learn how to easily transfer ELA tokens between different blockchains with this comprehensive guide to native chain bridging and ERC-20 token bridging options."
        keywords="Elastos bridge, ELA bridge, cross-chain transfers, native bridge, ERC-20 bridge, crypto bridging, token transfer, Elastos Smart Chain"
        ogImage="/images/Roadmap/Community crowd.png"
        canonicalUrl="/bridge"
      />
      
      <WebPageStructuredData
        title="Elastos Bridge Guide | Transfer ELA Between Chains"
        description="Comprehensive guide to transferring ELA tokens across different blockchains in the Elastos ecosystem."
        url="/bridge"
        imageUrl="/images/Roadmap/Community crowd.png"
      />
      
      <BridgePage />
    </>
  );
}
