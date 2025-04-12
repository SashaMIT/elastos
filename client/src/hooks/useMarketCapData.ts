import { useQuery } from "@tanstack/react-query";

interface MarketCapData {
  bitcoinMarketCap: number;
  elastosMarketCap: number;
  marketCapRatio: number;
}

export const useMarketCapData = () => {
  return useQuery({
    queryKey: ["marketCap"],
    queryFn: async () => {
      const response = await fetch("/api/market-cap");
      if (!response.ok) {
        throw new Error("Failed to fetch market cap data");
      }
      return response.json() as Promise<MarketCapData>;
    },
  });
};
