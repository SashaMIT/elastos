import React from "react";
import SupplyPage from "@/pages/SupplyPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Supply() {
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
        title="ELA Token Supply | Elastos Tokenomics and Inflation Schedule"
        description="Explore Elastos ELA token supply details, including current circulation, maximum supply, halving schedule, and long-term inflation model through 2105."
        keywords="ELA token supply, Elastos tokenomics, ELA maximum supply, ELA halving, ELA inflation, cryptocurrency supply, ELA circulation"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/supply"
      />
      
      <WebPageStructuredData
        title="ELA Token Supply | Elastos Tokenomics and Inflation Schedule"
        description="Detailed information about the Elastos (ELA) token supply, including circulating tokens, maximum supply, and inflation schedule."
        url="/supply"
        imageUrl="/images/Elastosbanner.jpg"
      />
      
      <SupplyPage />
    </>
  );
}