import React, { useState, useEffect } from 'react';
import HashrateVisualizer from '../components/HashrateVisualizer';
import { useHashrateData } from '@/hooks/useHashrateData';
import { Card, CardContent } from '@/components/ui/card';
import { Dots_v2 } from "@/components/ui/spinner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import SEO from '@/components/SEO'; // Import the SEO component

// Placeholder Breadcrumbs component
const Breadcrumbs = () => <nav>Placeholder Breadcrumbs</nav>;


const SecurityPage = () => {
  const { data: hashrateData, isLoading, error } = useHashrateData();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Set error state if we get an error from the hook or after 10 seconds of loading
    if (error) {
      setIsError(true);
    }

    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsError(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [error, isLoading]);

  return (
    <div className="min-h-screen bg-background dark:bg-[#171717] p-4 sm:p-6 md:p-8">
      <SEO 
        title="Elastos Security | Bitcoin-Level Protection"
        description="Discover how Elastos leverages Bitcoin's hashpower through merged mining to create one of the most secure blockchain networks in existence."
        keywords="Elastos security, Bitcoin merged mining, blockchain security, hashrate, ELA security"
        ogImage="/images/Security.png"
        canonicalUrl="/security"
      /> {/* Added SEO component here */}
      <div className="container mx-auto pt-20"> {/* Added breadcrumbs container */}
        <Breadcrumbs /> {/* Added Breadcrumbs component */}
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
              onClick={() => window.location.reload()} 
              className="mt-6 px-4 py-2 bg-[#F6921A] hover:bg-[#F6921A]/90 text-white rounded-full"
            >
              Refresh Page
            </button>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full border-4 border-[#F6921A]/30 border-t-[#F6921A] animate-spin"></div>
            <p className="text-muted-foreground">Loading security data...</p>
          </div>
        </div>
      ) : (
        <HashrateVisualizer />
      )}
      <StackedCircularFooter />
    </div>
  );
};

export default SecurityPage;