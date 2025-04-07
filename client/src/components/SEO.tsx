import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// Memoize the component to avoid unnecessary re-renders
const SEO: React.FC<SEOProps> = memo(({
  title = "Elastos - Web3 Infrastructure Secured by Bitcoin",
  description = "Elastos is building a decentralized internet infrastructure that gives you true digital ownership and privacy, secured by Bitcoin.",
  image = "/images/Elastosbanner.jpg",
  url,
}) => {
  const siteUrl = "https://elastos.org";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={fullUrl} />}
    </Helmet>
  );
});

export default SEO;