import React from 'react';
import { Card, Text, Metric, Flex, ProgressBar, DonutChart, AreaChart } from '@tremor/react';
import { Shield, Bitcoin, Clock, LineChart } from 'lucide-react';
import { useHashrateData } from '@/hooks/useHashrateData';
import { useElaSupply } from '@/hooks/useElaSupply';
import { differenceInDays, format } from 'date-fns';
import { VerifyButton } from '@/components/ui/verify-button'; // Import VerifyButton


export function StatsGrid() {
  const { data: hashrateData } = useHashrateData();
  const { data: currentSupply } = useElaSupply();

  const MAX_SUPPLY = 28199999;
  const NEXT_HALVING = new Date('2025-12-01');
  const LAST_HALVING = new Date('2021-12-01'); // Added last halving date
  const now = new Date();

  const getHalvingProgress = () => {
    const totalDuration = NEXT_HALVING.getTime() - LAST_HALVING.getTime();
    const elapsed = now.getTime() - LAST_HALVING.getTime();
    return Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
  };

  const halvingProgress = getHalvingProgress();


  const supplyProgress = ((currentSupply ?? 0) / MAX_SUPPLY) * 100;
  const btcSecurityPercent = ((hashrateData?.elastosHashrate ?? 0) / (hashrateData?.bitcoinHashrate ?? 1)) * 100;

  const formatHashrate = (hashrate?: number) => hashrate ? `${hashrate.toFixed(2)} EH/s` : 'Loading...';

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Supply Progress Card */}
        <Card decoration="top" decorationColor="blue">
          <Flex>
            <Bitcoin className="w-6 h-6" />
            <div>
              <Text>Total Supply Progress</Text>
              <Metric>{Math.round(supplyProgress)}% Complete</Metric>
              <Text className="mt-2">Target: {MAX_SUPPLY.toLocaleString()} ELA</Text>
              <ProgressBar value={supplyProgress} className="mt-2" />
            </div>
          </Flex>
          <VerifyButton /> {/* Added VerifyButton */}
        </Card>

        {/* Bitcoin Security Card */}
        <Card decoration="top" decorationColor="green">
          <Flex>
            <Shield className="w-6 h-6" />
            <div>
              <Text>Bitcoin Security</Text>
              <Metric>{btcSecurityPercent.toFixed(2)}% of BTC</Metric>
              <Text className="mt-2">
                Protected by {formatHashrate(hashrateData?.elastosHashrate)} of {formatHashrate(hashrateData?.bitcoinHashrate)}
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
          {/* Removed VerifyButton */}
        </Card>

        {/* APY Card */}
        <Card decoration="top" decorationColor="orange">
          <Flex>
            <LineChart className="w-6 h-6" />
            <div>
              <Text>Current APY</Text>
              <Metric>3.29%</Metric>
              <Text className="mt-2">Halving every 4 years until 2105</Text>
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
          {/* Removed VerifyButton */}
        </Card>

        {/* Halving Countdown Card */}
        <Card decoration="top" decorationColor="purple">
          <Flex>
            <Clock className="w-6 h-6" />
            <div>
              <Text>Next Halving</Text>
              <Metric>{format(NEXT_HALVING, 'MMM d, yyyy')}</Metric>
              <Text className="mt-2">{differenceInDays(NEXT_HALVING, now)} days remaining</Text>
              <ProgressBar value={halvingProgress} className="mt-2" />
            </div>
          </Flex>
          {/* Removed VerifyButton */}
        </Card>
      </div>
    </div>
  );
}