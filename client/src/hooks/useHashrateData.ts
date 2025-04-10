import { useQuery } from '@tanstack/react-query';

interface HashrateData {
  elastosHashrate: number;
  bitcoinHashrate: number;
  securityPercentage: number;
}

// This hook fetches hashrate data for Elastos and Bitcoin
export const useHashrateData = () => {
  return useQuery<HashrateData>({
    queryKey: ['hashrateData'],
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

        // Attempt to fetch Bitcoin hashrate from blockchain.info API
        const bitcoinResponse = await fetchWithRetry('https://blockchain.info/q/hashrate');
        const bitcoinHashrateRaw = await bitcoinResponse!.text();
        // Convert from TH/s to EH/s (terahash to exahash)
        const bitcoinHashrate = parseFloat(bitcoinHashrateRaw) / 1000000;

        // For Elastos, we'll use a fixed percentage of Bitcoin's hashrate
        // In reality, Elastos is merge-mined with Bitcoin, so it's a percentage of Bitcoin's hashrate
        const elastosPercentage = 0.963; // Example value - this would come from an API in production
        const elastosHashrate = bitcoinHashrate * (elastosPercentage / 100);

        return {
          elastosHashrate,
          bitcoinHashrate,
          securityPercentage: elastosPercentage
        };
      } catch (error) {
        console.error('Error fetching hashrate data:', error);
        // Return default values if there's an error
        return {
          elastosHashrate: 5.12, // Default placeholder values
          bitcoinHashrate: 531.28,
          securityPercentage: 0.963
        };
      }
    },
    refetchInterval: false, // Disable automatic refetching
    staleTime: Infinity, // Prevent automatic refetching
    enabled: false, // Skip automatic fetching on component mount
  });
};