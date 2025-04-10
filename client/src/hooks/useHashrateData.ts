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

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const fetchWithRetry = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const maxRetries = 3;
  const retryDelay = 1000;
  const timeoutDuration = 10000; // Increased timeout to 10 seconds
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Create a new AbortController for each attempt
      const controller = new AbortController();
      
      // Set up timeout that will abort the fetch
      const timeoutId = setTimeout(() => {
        try {
          controller.abort();
        } catch (e) {
          console.warn("Error when aborting fetch:", e);
        }
      }, timeoutDuration);
      
      console.log(`Attempting fetch for ${url} (attempt ${attempt}/${maxRetries})`);
      
      // Use a try-finally to ensure timeout is cleared
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Don't send Origin header as it can cause CORS issues
            ...options.headers,
          },
          mode: 'cors',
          credentials: 'omit',
          signal: controller.signal,
          // Add cache control to avoid caching issues
          cache: 'no-cache'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response;
      } finally {
        // Always clear the timeout
        clearTimeout(timeoutId);
      }
    } catch (error: any) {
      lastError = error;
      console.error(`Fetch error (attempt ${attempt}/${maxRetries})`, error);
      
      // If we've reached max retries, break out
      if (attempt === maxRetries) break;
      
      // Wait before trying again
      console.log(`Retrying in ${retryDelay * attempt}ms...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
    }
  }
  
  throw lastError || new Error('Max retries exceeded');
};

const fetchHashrate = async (): Promise<number> => {
  const response = await fetchWithRetry('https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D');
  const data = await response.json();

  if (!data?.[0]?.network_hashrate) {
    throw new Error('Invalid API response: network_hashrate not found');
  }

  // Convert to EH/s
  const hashrate = Number(data[0].network_hashrate) / 1e18;
  return hashrate;
};

const fetchElastosHashrate = async (): Promise<number> => {
  try {
    const response = await fetch('https://ela.elastos.io/api/v1/data-statistics', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      cache: 'no-cache'
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    if (!data.networkHashps) {
      throw new Error('Invalid API response: networkHashps not found');
    }

    const hashrate = Number(data.networkHashps) / 1e18;
    return hashrate;
  } catch (error) {
    console.error('Elastos hashrate fetch error:', error);
    throw error; // Let React Query handle retries
  }
};

const fetchBitcoinPrice = async (): Promise<{ price: number; change24h: number }> => {
  const response = await fetchWithRetry(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
  );
  const data = await response.json();

  if (!data.bitcoin?.usd) {
    throw new Error('Invalid Bitcoin price data');
  }

  return {
    price: data.bitcoin.usd,
    change24h: Number((data.bitcoin.usd_24h_change ?? 0).toFixed(2))
  };
};

const fetchELAPrice = async (): Promise<{ price: number; change24h: number }> => {
  const response = await fetchWithRetry(
    'https://api.coingecko.com/api/v3/simple/price?ids=elastos&vs_currencies=usd&include_24hr_change=true'
  );
  const data = await response.json();

  if (!data.elastos?.usd) {
    throw new Error('Invalid ELA price data');
  }

  return {
    price: data.elastos.usd,
    change24h: Number((data.elastos.usd_24h_change ?? 0).toFixed(2))
  };
};

interface UseHashrateDataOptions {
  enabled?: boolean;
}

export const useHashrateData = (options?: UseHashrateDataOptions) => {
  return useQuery<HashrateData>({
    queryKey: ['hashrate-and-price'],
    queryFn: async () => {
      try {
        const [bitcoinHashrate, bitcoinPriceData, elaPriceData, elastosHashrate] = await Promise.all([
          fetchHashrate(),
          fetchBitcoinPrice(),
          fetchELAPrice(),
          fetchElastosHashrate()
        ]);

        // Validate elastosHashrate
        if (!elastosHashrate || elastosHashrate <= 0) {
          throw new Error('Invalid Elastos hashrate value');
        }

        return {
          bitcoinHashrate,
          elastosHashrate,
          bitcoinPrice: bitcoinPriceData.price,
          elaPrice: elaPriceData.price,
          bitcoinPriceChange24h: bitcoinPriceData.change24h,
          elaPriceChange24h: elaPriceData.change24h,
          isLoading: false,
          error: null
        };
      } catch (error) {
        console.error('Failed to fetch data:', error);
        return {
          bitcoinHashrate: 0,
          elastosHashrate: 0,
          bitcoinPrice: 0,
          elaPrice: 0,
          bitcoinPriceChange24h: 0,
          elaPriceChange24h: 0,
          isLoading: false,
          error: error as Error
        }; // Return error state instead of throwing
      }
    },
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    refetchIntervalInBackground: true,
    retry: MAX_RETRIES,
    // If enabled is explicitly provided, use it; otherwise, default to true
    enabled: options?.enabled !== undefined ? options.enabled : true,
  });
};