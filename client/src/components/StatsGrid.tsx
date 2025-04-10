
import React from 'react';
import { Card, Text, Metric, Flex, ProgressBar, DonutChart, AreaChart } from '@tremor/react';
import { Shield, Bitcoin, Clock, LineChart } from 'lucide-react';
import { useHashrateData } from '@/hooks/useHashrateData';
import { useElaSupply } from '@/hooks/useElaSupply';
import { differenceInDays, format } from 'date-fns';
import { VerifyButton } from '@/components/ui/verify-button';
import { Button } from '@/components/ui/button';

export function StatsGrid() {
  const { data: hashrateData, fetchData: fetchHashrateData, isLoading: isHashrateLoading } = useHashrateData();
  const { data: currentSupply, fetchData: fetchSupply, isLoading: isSupplyLoading } = useElaSupply();

  // Placeholder values from landing page
  const PLACEHOLDER_SUPPLY = 25748861;
  const PLACEHOLDER_HASHRATE_ELASTOS = 481; // EH/s
  const PLACEHOLDER_HASHRATE_BITCOIN = 924; // EH/s
  const PLACEHOLDER_WALLET_ADDRESSES = 235116;

  const MAX_SUPPLY = 28199999;
  const NEXT_HALVING = new Date('2025-12-01');
  const LAST_HALVING = new Date('2021-12-01');
  const now = new Date();

  const getHalvingProgress = () => {
    const totalDuration = NEXT_HALVING.getTime() - LAST_HALVING.getTime();
    const elapsed = now.getTime() - LAST_HALVING.getTime();
    return Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
  };

  const halvingProgress = getHalvingProgress();

  // Use placeholder values if data hasn't been fetched yet
  const supplyValue = currentSupply ?? PLACEHOLDER_SUPPLY;
  const supplyProgress = (supplyValue / MAX_SUPPLY) * 100;
  
  const elastosHashrate = hashrateData?.elastosHashrate ?? PLACEHOLDER_HASHRATE_ELASTOS;
  const bitcoinHashrate = hashrateData?.bitcoinHashrate ?? PLACEHOLDER_HASHRATE_BITCOIN;
  const btcSecurityPercent = (elastosHashrate / bitcoinHashrate) * 100;

  const formatHashrate = (hashrate: number) => `${hashrate.toFixed(2)} EH/s`;

  const handleRefresh = () => {
    fetchHashrateData();
    fetchSupply();
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-6">
        <Button 
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(246,146,26,0.15)] text-white font-[200] transition-all hover:bg-[rgba(246,146,26,0.25)] border border-[rgba(246,146,26,0.25)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
          </svg>
          Refresh Stats
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Supply Progress Card */}
        <Card decoration="top" decorationColor="blue">
          <Flex>
            <Bitcoin className="w-6 h-6" />
            <div>
              <Text fontWeight="200">Total Supply Progress</Text>
              <Metric fontWeight="200">{Math.round(supplyProgress)}% Complete</Metric>
              <Text fontWeight="200" className="mt-2">Target: {MAX_SUPPLY.toLocaleString()} ELA</Text>
              <ProgressBar value={supplyProgress} className="mt-2" />
              <Text fontWeight="200" className="text-sm text-gray-500 mt-2">Current: {supplyValue.toLocaleString()} ELA</Text>
            </div>
          </Flex>
          <VerifyButton />
        </Card>

        {/* Bitcoin Security Card */}
        <Card decoration="top" decorationColor="green">
          <Flex>
            <Shield className="w-6 h-6" />
            <div>
              <Text fontWeight="200">Bitcoin Security</Text>
              <Metric fontWeight="200">{btcSecurityPercent.toFixed(2)}% of BTC</Metric>
              <Text fontWeight="200" className="mt-2">
                Protected by {formatHashrate(elastosHashrate)} of {formatHashrate(bitcoinHashrate)}
              </Text>
              <DonutChart
                className="mt-2 h-20"
                data={[
                  { name: 'Secured', value: btcSecurityPercent },
                  { name: 'Remaining', value: 100 - btcSecurityPercent }
                ]}
                category="value"
                index="name"
                colors={["green", "gray"]}
                variant="pie"
              />
            </div>
          </Flex>
        </Card>

        {/* APY Card */}
        <Card decoration="top" decorationColor="orange">
          <Flex>
            <LineChart className="w-6 h-6" />
            <div>
              <Text fontWeight="200">Current APY</Text>
              <Metric fontWeight="200">3.29%</Metric>
              <Text fontWeight="200" className="mt-2">5,252,197 ELA staked (20.4%)</Text>
              <AreaChart
                className="mt-2 h-20"
                data={[
                  { date: '2024', value: 3.29 },
                  { date: '2025', value: 1.645 },
                  { date: '2029', value: 0.82 },
                  { date: '2033', value: 0.41 }
                ]}
                categories={['value']}
                index="date"
                colors={["orange"]}
                showXAxis={false}
                showYAxis={false}
                showLegend={false}
              />
            </div>
          </Flex>
        </Card>

        {/* Halving Countdown Card */}
        <Card decoration="top" decorationColor="purple">
          <Flex>
            <Clock className="w-6 h-6" />
            <div>
              <Text fontWeight="200">Next Halving</Text>
              <Metric fontWeight="200">{format(NEXT_HALVING, 'MMM d, yyyy')}</Metric>
              <Text fontWeight="200" className="mt-2">{differenceInDays(NEXT_HALVING, now)} days remaining</Text>
              <ProgressBar value={halvingProgress} className="mt-2" />
              <Text fontWeight="200" className="text-sm text-gray-500 mt-2">{halvingProgress.toFixed(1)}% of cycle complete</Text>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
}
