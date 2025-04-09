
import { VisionPage } from "@/components/VisionPage";
import React from "react";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Vision() {
  return (
    <>
      <SEO 
        title="Elastos Vision - Own Your Digital Life Secured by Bitcoin"
        description="Elastos is building a decentralized internet infrastructure that gives you true digital ownership and privacy, secured by Bitcoin."
        keywords="Elastos vision, Web3 infrastructure, Bitcoin security, digital ownership, decentralized internet"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/vision"
      />
      <WebPageStructuredData
        title="Elastos Vision - Own Your Digital Life"
        description="Elastos creates a decentralized internet where users control their digital identities and assets, free from surveillance and exploitation."
        url="/vision"
        imageUrl="/images/Elastosbanner.jpg"
      />
      <VisionPage />
    </>
  );
}
