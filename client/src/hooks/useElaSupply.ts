
import { useQuery } from '@tanstack/react-query';

interface SupplyData {
  currentSupply: number;
  maxSupply: number;
  percentageMined: number;
}

export const useElaSupply = (enabled = false) => {
  return useQuery<SupplyData>({
    queryKey: ['elaSupply'],
    queryFn: async () => {
      try {
        const response = await fetch('https://api.elastos.io/ela/v1/totalcirculation');
        const data = await response.json();
        
        if (!data.Result) {
          throw new Error('Invalid API response from ELA supply endpoint');
        }
        
        const currentSupply = parseFloat(data.Result) / 100000000; // Convert from SELA to ELA
        const maxSupply = 28220587; // Max supply is fixed
        const percentageMined = (currentSupply / maxSupply) * 100;
        
        return {
          currentSupply,
          maxSupply,
          percentageMined
        };
      } catch (error) {
        console.error('Error fetching ELA supply data:', error);
        return {
          currentSupply: 25748861, // Fallback value
          maxSupply: 28220587,
          percentageMined: 91.31
        };
      }
    },
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000, // Consider data stale after 1 minute
    enabled: enabled
  });
};
