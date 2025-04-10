
import { useState, useEffect, useCallback } from 'react';

interface NetworkStats {
  walletAddresses: number;
  stakedAmount: number;
}

export function useNetworkStats() {
  const [data, setData] = useState<NetworkStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Placeholder values from the landing page
  const placeholderStats: NetworkStats = {
    walletAddresses: 235116,
    stakedAmount: 5252197 // From the landing page APR card
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Function to retry fetch
      const fetchWithRetry = async (url: string, maxRetries = 3) => {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
          } catch (e) {
            console.log(`Fetch error (attempt ${attempt}/${maxRetries})`, e);
            if (attempt === maxRetries) throw e;
          }
        }
      };

      // Fetch network stats
      try {
        const networkData = await fetchWithRetry('https://ela.elastos.io/api/v1/data-statistics');
        if (networkData) {
          setData({
            walletAddresses: networkData.Addresses || placeholderStats.walletAddresses,
            stakedAmount: networkData.StakedAmount || placeholderStats.stakedAmount
          });
        } else {
          throw new Error('Invalid data structure from API');
        }
      } catch (e) {
        console.error('Failed to fetch network stats, using default:', e);
        setData(placeholderStats);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unknown error occurred'));
      }
      console.error('Error fetching network stats:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data: data || placeholderStats,
    isLoading,
    error,
    fetchData
  };
}
