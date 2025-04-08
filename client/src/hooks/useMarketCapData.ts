import { useQuery } from '@tanstack/react-query';
import { useHashrateData } from './useHashrateData';

interface MarketCapData {
  bitcoinMarketCap: number;
  elastosMarketCap: number;
  bitcoinCirculatingSupply: number;
  elastosCirculatingSupply: number;
  marketCapRatio: number;
}

export const useMarketCapData = () => {
  const { isLoading: isHashrateLoading, error: hashrateError } = useHashrateData();

  return useQuery<MarketCapData>({
    queryKey: ['market-cap-data'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/market-cap');

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error in fetchMarketCapData:', error);
        // Return safe default values instead of throwing
        return {
          bitcoinMarketCap: 0,
          elastosMarketCap: 0,
          bitcoinCirculatingSupply: 0,
          elastosCirculatingSupply: 0,
          marketCapRatio: 0
        };
      }
    },
    enabled: !isHashrateLoading && !hashrateError,
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000, // Consider data stale after 1 minute
    retry: 2,
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.error('Market Cap Query Error:', error);
    },
    fallbackData: {
      bitcoinMarketCap: 1_200_000_000_000, // $1.2T
      elastosMarketCap: 50_000_000, // $50M
      bitcoinCirculatingSupply: 19_600_000,
      elastosCirculatingSupply: 22381457,
      marketCapRatio: 0.000042 // ~0.004%
    }
  });
};