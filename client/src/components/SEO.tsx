
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Elastos - Web3 Infrastructure Secured by Bitcoin",
  description = "Elastos is building a decentralized internet infrastructure that gives you true digital ownership and privacy, secured by Bitcoin.",
  keywords = "Elastos, blockchain, bitcoin, Web3, digital ownership, merged mining, decentralized identity, ELA",
  ogImage = "/images/Elastosbanner.jpg",
  ogType = "website",
  canonicalUrl,
}) => {
  const siteUrl = "https://elastos.org";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}
    </Helmet>
  );
};
