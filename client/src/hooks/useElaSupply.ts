
import { useQuery } from '@tanstack/react-query';

interface ElaSupplyResponse {
  total_supply: number;
}

export const useElaSupply = (enabled = false) => {
  return useQuery<number>({
    queryKey: ['elaSupply'],
    enabled: enabled,
    queryFn: async () => {
      try {
        const response = await fetch('https://api.elastos.io/widgets?q=total_supply');
        if (!response.ok) {
          throw new Error('Failed to fetch supply data');
        }
        const data: ElaSupplyResponse = await response.json();
        return data.total_supply || 25748861; // Fallback if API returns 0 or null
      } catch (error) {
        console.error('Error fetching ELA supply:', error);
        return 25748861; // Current supply fallback if API fails
      }
    },
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000, // Consider data stale after 1 minute
    retry: 3,
    retryDelay: 1000,
    initialData: 25748861, // Provide initial data while loading
  });
};
