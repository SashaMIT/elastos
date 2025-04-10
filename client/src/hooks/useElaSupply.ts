import { useQuery } from '@tanstack/react-query';

interface ElaSupplyResponse {
  total_supply: number;
}

interface UseElaSupplyOptions {
  enabled?: boolean;
}

export const useElaSupply = () => {
  return useQuery<number>({
    queryKey: ['elaSupply'],
    queryFn: async () => {
      try {
        // Use multiple attempts to handle potential API failures
        const fetchWithRetry = async (url: string, attempts = 3) => {
          for (let i = 0; i < attempts; i++) {
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`HTTP error ${response.status}`);
              return response;
            } catch (error) {
              console.log(`Fetch error (attempt ${i+1}/${attempts})`, error);
              if (i === attempts - 1) throw error;
            }
          }
          throw new Error('All fetch attempts failed');
        };

        // Attempt to fetch the current ELA supply
        const response = await fetchWithRetry('https://ela.elastos.io/api/v1/circulatingsupply');
        const data = await response!.json();
        return parseFloat(data);
      } catch (error) {
        console.error('Error fetching ELA supply data:', error);
        return 23500000; // Default fallback if API is unreachable
      }
    },
    refetchInterval: false, // Disable automatic refetching
    staleTime: Infinity, // Prevent automatic refetching
    enabled: false, // Skip automatic fetching on component mount
  });
};