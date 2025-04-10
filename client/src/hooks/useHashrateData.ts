import { useState, useEffect, useCallback } from 'react';

interface HashrateData {
  elastosHashrate: number;
  bitcoinHashrate: number;
  elaPrice: number;
  bitcoinPrice: number;
  elaPriceChange24h: number;
  bitcoinPriceChange24h: number;
}

export function useHashrateData() {
  const [data, setData] = useState<HashrateData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Placeholder values from the landing page
  const placeholderData: HashrateData = {
    elastosHashrate: 481,
    bitcoinHashrate: 924,
    elaPrice: 1.24,
    bitcoinPrice: 81728,
    elaPriceChange24h: 0.5,
    bitcoinPriceChange24h: 1.2
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Function to retry fetch
      const fetchWithRetry = async (url: string, maxRetries = 3) => {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
          } catch (e) {
            console.log(`Fetch error (attempt ${attempt}/${maxRetries})`, e);
            if (attempt === maxRetries) throw e;
          }
        }
      };

      // Fetch Bitcoin hashrate
      let bitcoinHashrate = 0;
      try {
        const bitcoinData = await fetchWithRetry('https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D');
        bitcoinHashrate = bitcoinData[0].network_hashrate / 1e18; // Convert to EH/s
      } catch (e) {
        console.error('Failed to fetch Bitcoin hashrate, using default:', e);
        bitcoinHashrate = placeholderData.bitcoinHashrate;
      }

      // Fetch Elastos hashrate
      let elastosHashrate = 0;
      try {
        const elastosData = await fetchWithRetry('https://ela.elastos.io/api/v1/data-statistics');
        elastosHashrate = elastosData.Hashrate / 1e18; // Convert to EH/s
      } catch (e) {
        console.error('Failed to fetch Elastos hashrate, using default:', e);
        elastosHashrate = placeholderData.elastosHashrate;
      }

      // Fetch ELA price from CoinGecko
      let elaPrice = 0;
      let elaPriceChange24h = 0;
      try {
        const elaMarketData = await fetchWithRetry('https://api.coingecko.com/api/v3/coins/elastos');
        elaPrice = elaMarketData.market_data.current_price.usd;
        elaPriceChange24h = elaMarketData.market_data.price_change_percentage_24h;
      } catch (e) {
        console.error('Failed to fetch ELA price, using default:', e);
        elaPrice = placeholderData.elaPrice;
        elaPriceChange24h = placeholderData.elaPriceChange24h;
      }

      // Fetch Bitcoin price from CoinGecko
      let bitcoinPrice = 0;
      let bitcoinPriceChange24h = 0;
      try {
        const bitcoinMarketData = await fetchWithRetry('https://api.coingecko.com/api/v3/coins/bitcoin');
        bitcoinPrice = bitcoinMarketData.market_data.current_price.usd;
        bitcoinPriceChange24h = bitcoinMarketData.market_data.price_change_percentage_24h;
      } catch (e) {
        console.error('Failed to fetch Bitcoin price, using default:', e);
        bitcoinPrice = placeholderData.bitcoinPrice;
        bitcoinPriceChange24h = placeholderData.bitcoinPriceChange24h;
      }

      setData({
        elastosHashrate,
        bitcoinHashrate,
        elaPrice,
        bitcoinPrice,
        elaPriceChange24h,
        bitcoinPriceChange24h
      });
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unknown error occurred'));
      }
      console.error('Error fetching hashrate data:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data: data || placeholderData,
    isLoading,
    error,
    fetchData
  };
}