
import { useQuery } from '@tanstack/react-query';
import { useHashrateData } from './useHashrateData';

interface MarketCapData {
  bitcoinMarketCap: number;
  elastosMarketCap: number;
  bitcoinCirculatingSupply: number;
  elastosCirculatingSupply: number;
  marketCapRatio: number;
}

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const FALLBACK_ELASTOS_SUPPLY = 22381457; // Fallback circulating supply from elastos.io

const fetchWithRetry = async (url: string, retries = 3): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    try {
      // Add timeout to fetch requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch(url, { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) return response;
      console.warn(`Retry ${i+1}/${retries} for ${url}: Status ${response.status}`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    } catch (error) {
      console.warn(`Fetch error (attempt ${i+1}/${retries})`, error);
      // Don't immediately throw on any error except the last attempt
      if (i === retries - 1) {
        console.error(`All ${retries} fetch attempts failed for ${url}`);
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
  throw new Error('Max retries reached');
};

export const useMarketCapData = (enabled = true) => {
  const { data: hashrateData, isLoading: isHashrateLoading, error: hashrateError } = useHashrateData(enabled);

  const fetchMarketCapData = async (): Promise<MarketCapData> => {
    try {
      // Bitcoin circulating supply from blockchain.info API with retry
      let bitcoinCirculatingSupply = 0;
      try {
        const btcSupplyResponse = await fetchWithRetry('https://blockchain.info/q/totalbc');
        const btcSupplyData = await btcSupplyResponse.text();
        bitcoinCirculatingSupply = parseInt(btcSupplyData) / 100000000; // Convert satoshis to BTC
      } catch (error) {
        console.error('Failed to fetch Bitcoin supply, using default:', error);
        bitcoinCirculatingSupply = 19600000; // Fallback to approximate circulating supply
      }

      // Calculate Bitcoin market cap
      const bitcoinPrice = hashrateData?.bitcoinPrice ?? 0;
      const bitcoinMarketCap = bitcoinPrice * bitcoinCirculatingSupply;

      // Initialize Elastos market data variables
      let elastosMarketCap = 0;
      let elastosCirculatingSupply = FALLBACK_ELASTOS_SUPPLY;

      // Try to fetch Elastos data from CoinGecko API
      try {
        console.log('Attempting to fetch Elastos data from CoinGecko API');
        const elaMarketDataResponse = await fetchWithRetry(
          `${COINGECKO_API}/simple/price?ids=elastos&vs_currencies=usd&include_market_cap=true&include_circulating_supply=true`
        );
        const elaMarketData = await elaMarketDataResponse.json();
        
        if (elaMarketData && elaMarketData.elastos) {
          elastosMarketCap = elaMarketData.elastos.usd_market_cap;
          elastosCirculatingSupply = elaMarketData.elastos.circulating_supply || FALLBACK_ELASTOS_SUPPLY;
          console.log('Successfully fetched Elastos data from CoinGecko');
        } else {
          throw new Error('Invalid response format from CoinGecko');
        }
      } catch (error) {
        console.error('Failed to fetch Elastos data from CoinGecko, using fallback calculation:', error);
        
        // Fallback calculation using known supply and current price
        const elaPrice = hashrateData?.elaPrice ?? 0;
        elastosMarketCap = elaPrice * FALLBACK_ELASTOS_SUPPLY;
        console.log('Using fallback calculation with price:', elaPrice, 'and supply:', FALLBACK_ELASTOS_SUPPLY);
      }

      // Calculate market cap ratio with safeguard against division by zero
      const marketCapRatio = bitcoinMarketCap > 0 ? (elastosMarketCap / bitcoinMarketCap) * 100 : 0;

      // Return data with fallback to 0 for any NaN values
      return {
        bitcoinMarketCap: bitcoinMarketCap || 0,
        elastosMarketCap: elastosMarketCap || 0,
        bitcoinCirculatingSupply: bitcoinCirculatingSupply || 0,
        elastosCirculatingSupply: elastosCirculatingSupply || 0,
        marketCapRatio: marketCapRatio || 0
      };
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
  };

  return useQuery<MarketCapData>({
    queryKey: ['marketCapData', hashrateData],
    queryFn: fetchMarketCapData,
    enabled: enabled && !isHashrateLoading && !hashrateError,
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000, // Consider data stale after 1 minute
    retry: 3, // Allow 3 retries for the entire query
    refetchOnWindowFocus: false, // Prevent excessive requests on window focus
    onError: (error) => {
      console.error('Market Cap Query Error:', error);
    },
    fallbackData: {
      // Provide reasonable fallback data that won't break the UI
      bitcoinMarketCap: 1_200_000_000_000, // $1.2T
      elastosMarketCap: 50_000_000, // $50M
      bitcoinCirculatingSupply: 19_600_000,
      elastosCirculatingSupply: FALLBACK_ELASTOS_SUPPLY,
      marketCapRatio: 0.000042 // ~0.004%
    }
  });
};
