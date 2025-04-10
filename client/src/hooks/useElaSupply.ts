import { useQuery } from '@tanstack/react-query';

// Default placeholder data
export const PLACEHOLDER_SUPPLY_DATA = {
  currentSupply: 25748861,
  lastUpdated: new Date().toISOString()
};

export const useElaSupply = (enableAutoFetch = false) => {
  const fetchElaSupply = async () => {
    try {
      const response = await fetch('https://api.elastos.io/widgets?q=total_supply');
      const data = await response.json();

      return {
        currentSupply: data.total_supply,
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      console.error("Error fetching ELA supply data:", error);
      throw error;
    }
  };

  return useQuery({
    queryKey: ['elaSupply'],
    queryFn: fetchElaSupply,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: enableAutoFetch, // Only auto-fetch if enableAutoFetch is true
  });
};