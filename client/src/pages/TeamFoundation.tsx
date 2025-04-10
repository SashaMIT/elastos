
import React from "react";
import TeamFoundationPage from "./TeamFoundationPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function TeamFoundation() {
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
        title="Elastos Team & Foundation | Key Contributors"
        description="Meet the visionaries and builders behind Elastos. Learn about the team and key contributors who have shaped the Elastos ecosystem."
        keywords="Elastos team, Elastos foundation, Rong Chen, Sunny Feng Han, Yipeng Su, blockchain team, crypto foundation"
        ogImage="/images/Community/Div4TBUWsAYmcEq.jpeg"
        canonicalUrl="/team-foundation"
      />
      
      <WebPageStructuredData
        title="Elastos Team & Foundation | Key Contributors"
        description="Meet the visionaries and builders behind Elastos. Learn about the team and key contributors who have shaped the Elastos ecosystem."
        url="/team-foundation"
        imageUrl="/images/Community/Div4TBUWsAYmcEq.jpeg"
      />
      
      <TeamFoundationPage />
    </>
  );
}
