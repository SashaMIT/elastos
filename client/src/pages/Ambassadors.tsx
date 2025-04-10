import React from "react";
import AmbassadorsPage from "@/pages/AmbassadorsPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Ambassadors() {
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
        title="Elastos Ambassador Program | Join Our Global Community"
        description="Become an Elastos Ambassador and help grow our global community. Learn about benefits, roles, and how to apply to represent Elastos in your region."
        keywords="Elastos ambassador, blockchain ambassador, crypto community, Elastos advocate, Web3 ambassador, blockchain community, Elastos ecosystem"
        ogImage="/images/Roadmap/Community crowd.png"
        canonicalUrl="/ambassadors"
      />
      
      <WebPageStructuredData
        title="Elastos Ambassador Program | Join Our Global Community"
        description="Join the Elastos community as an ambassador and help us build the decentralized internet of the future."
        url="/ambassadors"
        imageUrl="/images/Roadmap/Community crowd.png"
      />
      
      <AmbassadorsPage />
    </>
  );
}