
import React from "react";
import DaoPage from './DaoPage';
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

export default function Dao() {
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
        title="Elastos DAO | Decentralized Governance for the World Computer"
        description="Learn about Elastos DAO's community-powered governance system for a truly decentralized internet, with transparent proposals, voting, and ecosystem funding."
        keywords="Elastos DAO, crypto governance, decentralized autonomous organization, ELA staking, blockchain governance, Web3 DAO, Cyber Republic"
        ogImage="/images/ElastosDAO.png"
        canonicalUrl="/dao"
      />
      
      <WebPageStructuredData
        title="Elastos DAO | Decentralized Governance for the World Computer"
        description="Community-powered governance for a truly decentralized internet, where stakeholders shape the future through transparent proposals, voting, and funding."
        url="/dao"
        imageUrl="/images/ElastosDAO.png"
      />
      
      <DaoPage />
    </>
  );
}
