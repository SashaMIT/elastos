
import { useQuery } from '@tanstack/react-query';

interface NetworkStats {
  walletAddresses: number;
  stakedAmount: number;
}

interface StakeResponse {
  error: null | any;
  result: number;
  id: null | string;
  jsonrpc: string;
}

export const useNetworkStats = () => {
  return useQuery<NetworkStats>({
    queryKey: ['networkStats'],
    queryFn: async () => {
      try {
        // Fetch wallet addresses
        const statsResponse = await fetch('https://ela.elastos.io/api/v1/data-statistics/');
        const statsData = await statsResponse.json();

        // Fetch staked amount
        const stakeResponse = await fetch('https://api.elastos.io/ela', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            method: 'getreceivedbyaddress',
            params: {
              address: 'STAKEPooLXXXXXXXXXXXXXXXXXXXpP1PQ2',
              spendable: false
            }
          })
        });
        
        const stakeData: StakeResponse = await stakeResponse.json();
        const stakedAmount = stakeData.result ? Number(stakeData.result) / 100000000 : 0; // Convert SELA to ELA
        
        return {
          walletAddresses: statsData.walletAddresses || 0,
          stakedAmount: stakedAmount
        };
      } catch (error) {
        console.error('Error fetching network stats:', error);
        return {
          walletAddresses: 0,
          stakedAmount: 0
        };
      }
    },
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000 // Consider data stale after 1 minute
  });
};
