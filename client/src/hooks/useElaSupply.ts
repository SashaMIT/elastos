
import { useState, useEffect, useCallback } from 'react';

export function useElaSupply() {
  const [data, setData] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Placeholder value from the landing page
  const placeholderSupply = 25748861;

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

      // Fetch Elastos circulating supply
      try {
        const elastosData = await fetchWithRetry('https://ela.elastos.io/api/v1/data-statistics');
        if (elastosData && elastosData.CirculatingSupply) {
          setData(elastosData.CirculatingSupply);
        } else {
          throw new Error('Invalid data structure from API');
        }
      } catch (e) {
        console.error('Failed to fetch Elastos supply, using default:', e);
        setData(placeholderSupply);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unknown error occurred'));
      }
      console.error('Error fetching Elastos supply data:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data: data || placeholderSupply,
    isLoading,
    error,
    fetchData
  };
}
