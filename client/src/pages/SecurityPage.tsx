import React, { useState, useEffect } from 'react';
import HashrateVisualizer from '../components/HashrateVisualizer';
import { useHashrateData } from '@/hooks/useHashrateData';
import { Card, CardContent } from '@/components/ui/card';
import { Dots_v2 } from "@/components/ui/spinner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { SEO } from '@/components/SEO'; // Import the SEO component
import { Helmet } from 'react-helmet';
import { WebPageStructuredData } from '@/components/StructuredData';
import { RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityPage = () => {
  // Don't auto-fetch, start with isLoading false
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [fetchRequested, setFetchRequested] = useState(false);
  const { data: hashrateData, isLoading, error, refetch } = useHashrateData(false);
  const [isError, setIsError] = useState(false);

  // Skip initial loading on page load
  useEffect(() => {
    setIsInitialLoading(false);
  }, []);

  const handleFetchData = async () => {
    setIsInitialLoading(true);
    setFetchRequested(true);
    setIsError(false);
    try {
      await refetch();
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    // Set error state if we get an error from the hook or after 10 seconds of loading
    if (error) {
      setIsError(true);
    }

    const timeout = setTimeout(() => {
      if (isLoading && fetchRequested) {
        setIsError(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [error, isLoading, fetchRequested]);

  return (
    <div className="min-h-screen bg-background dark:bg-[#171717] p-4 sm:p-6 md:p-8">
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
        title="Elastos Security | Bitcoin-Level Protection through Merged Mining"
        description="Discover how Elastos leverages Bitcoin's immense hashpower through merged mining to create one of the most secure blockchain networks in existence, providing unparalleled security without additional energy costs."
        keywords="Elastos security, Bitcoin merged mining, blockchain security, hashrate, ELA security, Bitcoin hashpower, Bitcoin-backed security, secure blockchain, Elastos protection"
        ogImage="/images/Security.png"
        canonicalUrl="/security"
      />
      <WebPageStructuredData
        title="Elastos Security | Bitcoin-Level Protection"
        description="Discover how Elastos leverages Bitcoin's hashpower through merged mining to create one of the most secure blockchain networks in existence."
        url="/security"
        imageUrl="/images/Security.png"
      />
      
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <Button 
          onClick={handleFetchData}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(246,146,26,0.15)] text-white font-[200] transition-all hover:bg-[rgba(246,146,26,0.25)] border border-[rgba(246,146,26,0.25)]"
        >
          <RefreshCcw size={18} />
          Update Security Stats
        </Button>
      </div>
      {isError ? (
        <Card className="max-w-4xl mx-auto dark:bg-[#151515] dark:border-neutral-800">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-[200] mb-4">Data Loading Issue</h2>
            <p className="mb-4 font-[200]">We're having trouble fetching the security data at the moment.</p>
            <p className="text-sm text-muted-foreground font-[200]">
              This could be due to API rate limits or temporary network issues.
            </p>
            <button 
              onClick={handleFetchData} 
              className="mt-6 px-4 py-2 bg-[#F6921A] hover:bg-[#F6921A]/90 text-white rounded-full"
            >
              Try Again
            </button>
          </CardContent>
        </Card>
      ) : isInitialLoading && isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full border-4 border-[#F6921A]/30 border-t-[#F6921A] animate-spin"></div>
            <p className="text-muted-foreground">Loading security data...</p>
          </div>
        </div>
      ) : (
        <HashrateVisualizer usePlaceholder={!fetchRequested} hashrateData={hashrateData} />
      )}
      <StackedCircularFooter />
    </div>
  );
};

export default SecurityPage;