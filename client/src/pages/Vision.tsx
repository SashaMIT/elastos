
import { VisionPage } from "@/components/VisionPage";
import React from "react";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Vision() {
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
        title="Elastos Vision | The World Computer Secured by Bitcoin"
        description="Discover Elastos' vision for a truly decentralized internet - the Web3 World Computer infrastructure secured by Bitcoin's hashpower."
        keywords="Elastos vision, Web3 infrastructure, Bitcoin-secured, World Computer, digital sovereignty, decentralized internet"
        ogImage="/images/Elastos Vision World Computer.png"
        canonicalUrl="/vision"
      />
      
      <WebPageStructuredData
        title="Elastos Vision | The World Computer Secured by Bitcoin"
        description="Discover Elastos' vision for a truly decentralized internet - the Web3 World Computer infrastructure secured by Bitcoin's hashpower."
        url="/vision"
        imageUrl="/images/Elastos Vision World Computer.png"
      />
      
      <VisionPage />
    </>
  );
}

export default function Vision() {
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
        title="Elastos Vision | Own Your Digital Life – Secured by Bitcoin"
        description="Elastos is building a new paradigm for the internet—a Web3 infrastructure that gives you true digital ownership and privacy, secured by Bitcoin's hashpower, creating a decentralized SmartWeb ecosystem."
        keywords="Elastos vision, Web3 infrastructure, digital ownership, SmartWeb, Bitcoin security, decentralized internet, Web3 future, data ownership, Elastos technology, blockchain internet"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/vision"
      />
      <WebPageStructuredData
        title="Elastos Vision | Own Your Digital Life – Secured by Bitcoin"
        description="Elastos is building a new paradigm for the internet—a Web3 infrastructure that gives you true digital ownership and privacy, secured by Bitcoin."
        url="/vision"
        imageUrl="/images/Elastosbanner.jpg"
      />
      <VisionPage />
    </>
  );
}
