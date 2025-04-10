
import React from "react";
import WalletPage from "@/pages/WalletPage";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Wallet() {
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
        title="Elastos Wallets | Manage Your ELA & Digital Assets"
        description="Learn about Elastos Essentials wallet and other wallet solutions for managing your ELA tokens and digital assets across the Elastos ecosystem."
        keywords="Elastos wallet, ELA wallet, Elastos Essentials, crypto wallet, digital identity wallet, DID wallet, ELA token storage"
        ogImage="/images/Community/EEQmb19UYAApxrk.jpeg"
        canonicalUrl="/wallet"
      />
      
      <WebPageStructuredData
        title="Elastos Wallets | Manage Your ELA & Digital Assets"
        description="Learn about Elastos Essentials wallet and other wallet solutions for managing your ELA tokens and digital assets."
        url="/wallet"
        imageUrl="/images/Community/EEQmb19UYAApxrk.jpeg"
      />
      
      <WalletPage />
    </>
  );
}
