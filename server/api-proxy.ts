
import fetch from 'node-fetch';
import { apiCache } from './cache';

// Configure fetch timeout
const fetchWithTimeout = async (url: string, options: any = {}, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

// Retry mechanism for external API calls
const fetchWithRetry = async (url: string, options: any = {}, maxRetries = 3, retryDelay = 1000) => {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[API Proxy] Attempt ${attempt}/${maxRetries} for ${url}`);
      const response = await fetchWithTimeout(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error: any) {
      lastError = error;
      console.error(`[API Proxy] Fetch error (attempt ${attempt}/${maxRetries})`, error.message);
      
      if (attempt === maxRetries) break;
      
      // Wait before trying again
      await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
    }
  }
  
  throw lastError || new Error('Max retries exceeded');
};

// API endpoints
export const apiServices = {
  // Bitcoin hashrate
  async getBitcoinHashrate() {
    const cacheKey = 'bitcoin-hashrate';
    const cachedData = apiCache.get(cacheKey);
    
    if (cachedData) {
      console.log('[API Proxy] Returning cached Bitcoin hashrate data');
      return cachedData;
    }
    
    try {
      const response = await fetchWithRetry('https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D');
      const data = await response.json();
      
      if (!data?.[0]?.network_hashrate) {
        throw new Error('Invalid API response: network_hashrate not found');
      }
      
      // Convert to EH/s
      const hashrate = Number(data[0].network_hashrate) / 1e18;
      
      // Cache for 5 minutes
      apiCache.set(cacheKey, hashrate, 5 * 60 * 1000);
      
      return hashrate;
    } catch (error) {
      console.error('[API Proxy] Bitcoin hashrate fetch error:', error);
      throw error;
    }
  },
  
  // Elastos hashrate
  async getElastosHashrate() {
    const cacheKey = 'elastos-hashrate';
    const cachedData = apiCache.get(cacheKey);
    
    if (cachedData) {
      console.log('[API Proxy] Returning cached Elastos hashrate data');
      return cachedData;
    }
    
    try {
      const response = await fetchWithRetry('https://ela.elastos.io/api/v1/data-statistics');
      const data = await response.json();
      
      if (!data?.networkHashps) {
        throw new Error('Invalid API response: networkHashps not found');
      }
      
      const hashrate = Number(data.networkHashps) / 1e18;
      
      // Cache for 5 minutes
      apiCache.set(cacheKey, hashrate, 5 * 60 * 1000);
      
      return hashrate;
    } catch (error) {
      console.error('[API Proxy] Elastos hashrate fetch error:', error);
      throw error;
    }
  },
  
  // Bitcoin price
  async getBitcoinPrice() {
    const cacheKey = 'bitcoin-price';
    const cachedData = apiCache.get(cacheKey);
    
    if (cachedData) {
      console.log('[API Proxy] Returning cached Bitcoin price data');
      return cachedData;
    }
    
    try {
      const response = await fetchWithRetry(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
      );
      const data = await response.json();
      
      if (!data?.bitcoin?.usd) {
        throw new Error('Invalid Bitcoin price data');
      }
      
      const priceData = {
        price: data.bitcoin.usd,
        change24h: Number((data.bitcoin.usd_24h_change ?? 0).toFixed(2))
      };
      
      // Cache for 2 minutes (price data changes frequently)
      apiCache.set(cacheKey, priceData, 2 * 60 * 1000);
      
      return priceData;
    } catch (error) {
      console.error('[API Proxy] Bitcoin price fetch error:', error);
      throw error;
    }
  },
  
  // ELA price
  async getELAPrice() {
    const cacheKey = 'ela-price';
    const cachedData = apiCache.get(cacheKey);
    
    if (cachedData) {
      console.log('[API Proxy] Returning cached ELA price data');
      return cachedData;
    }
    
    try {
      const response = await fetchWithRetry(
        'https://api.coingecko.com/api/v3/simple/price?ids=elastos&vs_currencies=usd&include_24hr_change=true'
      );
      const data = await response.json();
      
      if (!data?.elastos?.usd) {
        throw new Error('Invalid ELA price data');
      }
      
      const priceData = {
        price: data.elastos.usd,
        change24h: Number((data.elastos.usd_24h_change ?? 0).toFixed(2))
      };
      
      // Cache for 2 minutes
      apiCache.set(cacheKey, priceData, 2 * 60 * 1000);
      
      return priceData;
    } catch (error) {
      console.error('[API Proxy] ELA price fetch error:', error);
      throw error;
    }
  },
  
  // Bitcoin circulating supply
  async getBitcoinSupply() {
    const cacheKey = 'bitcoin-supply';
    const cachedData = apiCache.get(cacheKey);
    
    if (cachedData) {
      console.log('[API Proxy] Returning cached Bitcoin supply data');
      return cachedData;
    }
    
    try {
      const response = await fetchWithRetry('https://blockchain.info/q/totalbc');
      const data = await response.text();
      
      const bitcoinCirculatingSupply = parseInt(data) / 100000000; // Convert satoshis to BTC
      
      // Cache for 1 hour (supply changes slowly)
      apiCache.set(cacheKey, bitcoinCirculatingSupply, 60 * 60 * 1000);
      
      return bitcoinCirculatingSupply;
    } catch (error) {
      console.error('[API Proxy] Bitcoin supply fetch error:', error);
      // Fallback value
      return 19600000;
    }
  },
  
  // Market cap data
  async getMarketCapData() {
    try {
      // Combine data from other endpoints
      const [bitcoinPrice, elaPrice, bitcoinSupply] = await Promise.all([
        this.getBitcoinPrice(),
        this.getELAPrice(),
        this.getBitcoinSupply()
      ]);
      
      // Fallback Elastos supply (if API doesn't provide it)
      const elastosCirculatingSupply = 22381457;
      
      // Calculate market caps
      const bitcoinMarketCap = bitcoinPrice.price * bitcoinSupply;
      const elastosMarketCap = elaPrice.price * elastosCirculatingSupply;
      
      // Calculate market cap ratio
      const marketCapRatio = bitcoinMarketCap > 0 ? (elastosMarketCap / bitcoinMarketCap) : 0;
      
      return {
        bitcoinMarketCap,
        elastosMarketCap,
        bitcoinCirculatingSupply: bitcoinSupply,
        elastosCirculatingSupply,
        marketCapRatio
      };
    } catch (error) {
      console.error('[API Proxy] Market cap data error:', error);
      throw error;
    }
  },
  
  // Combined hashrate data
  async getHashrateData() {
    try {
      // Execute these requests in parallel
      const [bitcoinHashrate, elastosHashrate, bitcoinPriceData, elaPriceData] = await Promise.all([
        this.getBitcoinHashrate(),
        this.getElastosHashrate(),
        this.getBitcoinPrice(),
        this.getELAPrice()
      ]);
      
      return {
        bitcoinHashrate,
        elastosHashrate,
        bitcoinPrice: bitcoinPriceData.price,
        elaPrice: elaPriceData.price,
        bitcoinPriceChange24h: bitcoinPriceData.change24h,
        elaPriceChange24h: elaPriceData.change24h
      };
    } catch (error) {
      console.error('[API Proxy] Hashrate data error:', error);
      throw error;
    }
  }
};
