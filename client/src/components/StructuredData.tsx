
import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'FAQPage' | 'Article' | 'Product';
  data: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Helper for Organization data
export const OrganizationStructuredData: React.FC = () => {
  const orgData = {
    name: 'Elastos',
    url: 'https://elastos.org',
    logo: 'https://elastos.org/images/Elastos%20New%20Logo_Kit-03.png',
    sameAs: [
      'https://twitter.com/elastosinfo',
      'https://github.com/elastos',
      'https://medium.com/@elastos',
      'https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ'
    ],
    description: 'Elastos is building a decentralized internet infrastructure that gives you true digital ownership and privacy, secured by Bitcoin.'
  };

  return <StructuredData type="Organization" data={orgData} />;
};

// Helper for WebPage data
export const WebPageStructuredData: React.FC<{
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}> = ({ title, description, url, imageUrl, datePublished, dateModified }) => {
  const pageData = {
    name: title,
    description,
    url: `https://elastos.org${url}`,
    ...(imageUrl && { image: `https://elastos.org${imageUrl}` }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Elastos',
      logo: {
        '@type': 'ImageObject',
        url: 'https://elastos.org/images/Elastos%20New%20Logo_Kit-03.png'
      }
    }
  };

  return <StructuredData type="WebPage" data={pageData} />;
};
