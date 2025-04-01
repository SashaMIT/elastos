import React, { useState, useEffect } from 'react';
import HashrateVisualizer from '../components/HashrateVisualizer';
import { useHashrateData } from '@/hooks/useHashrateData';
import { Card, CardContent } from '@/components/ui/card';
import { Dots_v2 } from "@/components/ui/spinner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

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
      {isError ? (
        <Card className="max-w-4xl mx-auto dark:bg-[#151515] dark:border-neutral-800">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Data Loading Issue</h2>
            <p className="mb-4">We're having trouble fetching the security data at the moment.</p>
            <p className="text-sm text-muted-foreground">
              This could be due to API rate limits or temporary network issues.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 px-4 py-2 bg-primary text-white rounded-full"
            >
              Refresh Page
            </button>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex justify-center">
              <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
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