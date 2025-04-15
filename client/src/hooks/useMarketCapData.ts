import { useQuery } from "@tanstack/react-query";

interface MarketCapData {
  bitcoinMarketCap: number;
  elastosMarketCap: number;
  marketCapRatio: number;
}

interface UseMarketCapOptions {
  enabled?: boolean;
}

export const useMarketCapData = (options?: UseMarketCapOptions) => {
  return useQuery({
    queryKey: ["marketCap"],
    queryFn: async () => {
      const response = await fetch("/api/market-cap");
      if (!response.ok) {
        throw new Error("Failed to fetch market cap data");
      }
      return response.json() as Promise<MarketCapData>;
    },
    enabled: options?.enabled !== undefined ? options.enabled : false,
  });
};
