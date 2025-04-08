import { useQuery } from "@tanstack/react-query";

interface HashrateData {
  bitcoinHashrate: number;
  elastosHashrate: number;
  bitcoinPrice: number;
  elaPrice: number;
  bitcoinPriceChange24h: number;
  elaPriceChange24h: number;
  isLoading: boolean;
  error: Error | null;
}

export const useHashrateData = () => {
  return useQuery<HashrateData>({
    queryKey: ['hashrate-data'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/hashrate');

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        return {
          bitcoinHashrate: data.bitcoinHashrate || 0,
          elastosHashrate: data.elastosHashrate || 0,
          bitcoinPrice: data.bitcoinPrice || 0,
          elaPrice: data.elaPrice || 0,
          bitcoinPriceChange24h: data.bitcoinPriceChange24h || 0,
          elaPriceChange24h: data.elaPriceChange24h || 0,
          isLoading: false,
          error: null
        };
      } catch (error) {
        console.error('Failed to fetch hashrate data:', error);
        return {
          bitcoinHashrate: 0,
          elastosHashrate: 0,
          bitcoinPrice: 0,
          elaPrice: 0,
          bitcoinPriceChange24h: 0,
          elaPriceChange24h: 0,
          isLoading: false,
          error: error as Error
        };
      }
    },
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    refetchIntervalInBackground: true,
    retry: 2,
  });
};