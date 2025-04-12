import React from 'react';
import { format, differenceInDays } from 'date-fns';
import { Card, Flex, ProgressBar, DonutChart, AreaChart } from '@tremor/react';
import { cn } from '@/lib/utils';

const MAX_SUPPLY = 28000000;
const NEXT_HALVING = new Date('2024-05-01');

export function StatsGrid() {
  const now = new Date();
  const supplyProgress = (1000000 / MAX_SUPPLY) * 100;
  const btcSecurityPercent = 0.5;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <Flex>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Total Supply Progress</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{Math.round(supplyProgress)}% Complete</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Target: {MAX_SUPPLY.toLocaleString()} ELA</p>
          </div>
        </Flex>
      </Card>

      <Card>
        <Flex>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Bitcoin Security</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{btcSecurityPercent.toFixed(2)}% of BTC</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Secured by Bitcoin's hashpower</p>
          </div>
        </Flex>
      </Card>

      <Card>
        <Flex>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Current APY</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">3.29%</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Halving every 4 years until 2105</p>
          </div>
        </Flex>
      </Card>

      <Card>
        <Flex>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Next Halving</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{format(NEXT_HALVING, 'MMM d, yyyy')}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{differenceInDays(NEXT_HALVING, now)} days remaining</p>
          </div>
        </Flex>
      </Card>
    </div>
  );
}