
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
        description="Learn how to bridge ELA tokens between Elastos chains and other blockchains. Step-by-step guide for secure token transfers."
        keywords="Elastos bridge, ELA token bridge, cross-chain, token transfer, Elastos Smart Chain, ERC-20 ELA, crypto bridge"
        ogImage="/images/Bridge/Community crowd.png"
        canonicalUrl="/bridge"
      />
      
      <WebPageStructuredData
        title="Elastos Bridge Guide | Transfer ELA Between Chains"
        description="Learn how to bridge ELA tokens between Elastos chains and other blockchains."
        url="/bridge"
        imageUrl="/images/Bridge/Community crowd.png"
      />
      
      <BridgePage />
    </>
  );
}
