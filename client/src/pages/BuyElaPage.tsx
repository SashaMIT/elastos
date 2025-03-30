import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Shield, Lock, Bitcoin, Star, Wallet, ExternalLink, CheckCircle, CheckCircle2, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHashrateData } from '../hooks/useHashrateData';
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const BuyElaPage = () => {
  const { data: hashrateData } = useHashrateData();
  const bitcoinHashrate = hashrateData?.bitcoinHashrate ?? 0;
  const elastosHashrate = hashrateData?.elastosHashrate ?? 0;
  const [animatedHashrate, setAnimatedHashrate] = useState(0);

  const COINGECKO_API = 'https://api.coingecko.com/api/v3';
  const ELASTOS_API = 'https://ela.elastos.io/api/v1/data-statistics';

  const realHashrateData = [
    { year: '2018', hashrate: 22, btcHashrate: 101, percentage: "21.8%" },
    { year: '2020', hashrate: 120, btcHashrate: 250, percentage: "48%" },
    { year: '2022', hashrate: 240, btcHashrate: 450, percentage: "53.3%" },
    { year: '2024', hashrate: elastosHashrate, btcHashrate: bitcoinHashrate, percentage: ((elastosHashrate/bitcoinHashrate) * 100).toFixed(1) + "%" }
  ];

  const exchanges = {
    cex: [
      { name: 'Coinbase', url: 'https://www.coinbase.com/en-gb/advanced-trade/spot/ELA-USD' },
      { name: 'KuCoin', url: 'https://www.kucoin.com/trade/ELA-USDT?rcode=e21sNJ' },
      { name: 'Gate.io', url: 'https://www.gate.io/trade/ELA_USDT?ref=3018394' },
      { name: 'Huobi', url: 'https://www.huobi.com/en-us/trade/ELA_USDT' },
      { name: 'Bitget', url: 'https://www.bitget.com/spot/ELAUSDT/?channelCode=42xn&vipCode=sq59&languageType=0' },
      { name: 'Crypto.com', url: 'https://crypto.com/exchange/trade/ELA_USD' }
    ],
    dex: [
      { 
        name: 'Uniswap', 
        url: 'https://app.uniswap.org/#/swap?outputCurrency=0xe6fd75ff38adca4b97fbcd938c86070c3dabd5b9',
        description: 'Trade ELA on Ethereum network'
      },
      { 
        name: 'Chainge Finance', 
        url: 'https://dapp.chainge.finance/',
        description: 'Cross-chain trading with Force Bridge'
      },
      { 
        name: 'Glide Finance', 
        url: 'https://glidefinance.io/swap',
        description: 'Elastos Sidechain DEX'
      }
    ]
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = elastosHashrate / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= elastosHashrate) {
        setAnimatedHashrate(elastosHashrate);
        clearInterval(timer);
      } else {
        setAnimatedHashrate(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [elastosHashrate]);

  return (
    <div className="w-full h-full bg-white dark:bg-[#171717] p-4">
      <Card className="max-w-4xl mx-auto dark:bg-[#171717] dark:text-white border-0">
        <CardHeader className="p-3 dark:bg-[#171717]">
          <CardTitle className="flex items-center gap-2 text-base dark:text-white">
            <Shield className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex flex-col">
              <span>Bitcoin-Secured Digital Reserve Asset</span>
              <span className="text-sm font-normal text-muted-foreground dark:text-gray-400">
                {elastosHashrate} EH/s Security | Fixed 28.22M Supply | {((elastosHashrate/bitcoinHashrate) * 100).toFixed(1)}% Bitcoin Security
              </span>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 dark:bg-[#171717] dark:text-white">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-blue-50 dark:bg-[#222] p-2 rounded-lg text-center dark:text-white">
              <div className="flex items-center justify-center gap-1">
                <Shield className="inline text-blue-500 h-4 w-4 mb-1" />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="touch-auto">
                      <Info className="w-4 h-4 text-muted-foreground dark:text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 touch-auto dark:bg-[#222] dark:text-white">
                      <div className="text-sm">
                        <a 
                          href={ELASTOS_API}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline p-1"
                        >
                          View data on Elastos Explorer
                        </a>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-sm font-bold">{animatedHashrate.toFixed(2)} EH/s</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Security Power</div>
            </div>
            <div className="bg-purple-50 dark:bg-[#222] p-2 rounded-lg text-center dark:text-white">
              <div className="flex items-center justify-center gap-1">
                <Lock className="inline text-purple-500 h-4 w-4 mb-1" />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="touch-auto">
                      <Info className="w-4 h-4 text-muted-foreground dark:text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 touch-auto dark:bg-[#222] dark:text-white">
                      <div className="text-sm">
                        <a 
                          href={`${COINGECKO_API}/coins/elastos`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline p-1"
                        >
                          View data on CoinGecko
                        </a>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-sm font-bold">28.22M</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Max Supply</div>
            </div>
            <div className="bg-green-50 dark:bg-[#222] p-2 rounded-lg text-center dark:text-white">
              <div className="flex items-center justify-center gap-1">
                <Star className="inline text-green-500 h-4 w-4 mb-1" />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="touch-auto">
                      <Info className="w-4 h-4 text-muted-foreground dark:text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 touch-auto dark:bg-[#222] dark:text-white">
                      <div className="text-sm space-y-0">
                        <a 
                          href={ELASTOS_API}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 text-blue-500 hover:text-blue-600 underline p-1"
                        >
                          View on Elastos Explorer
                        </a>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-sm font-bold">3.29%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">APY</div>
            </div>
            <div className="bg-orange-50 dark:bg-[#222] p-2 rounded-lg text-center dark:text-white">
              <div className="flex items-center justify-center gap-1">
                <CheckCircle className="inline text-orange-500 h-4 w-4 mb-1" />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="touch-auto">
                      <Info className="w-4 h-4 text-muted-foreground dark:text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 touch-auto dark:bg-[#222] dark:text-white">
                      <div className="text-sm space-y-2">
                        <a 
                          href="https://api.minerstat.com/v2/coins?list=BTC&query=%7B%22method%22:%22GET%22,%22isArray%22:true%7D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 text-blue-500 hover:text-blue-600 underline p-1"
                        >
                          View Bitcoin Data
                        </a>
                        <a 
                          href={ELASTOS_API}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 text-blue-500 hover:text-blue-600 underline p-1"
                        >
                          View Elastos Data
                        </a>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-sm font-bold">{((elastosHashrate/bitcoinHashrate) * 100).toFixed(1)}%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Security Share</div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-[#222] p-3 rounded-lg dark:text-white relative">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#5C8EFF]/10 blur-[50px]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#5C8EFF]/10 blur-[50px]"></div>
            
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <Wallet className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-medium">Download Essentials Wallet</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://apps.apple.com/us/app/web3-essentials-crypto-wallet/id1568931743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
              >
                <span>Essentials for iOS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
              <a
                href="https://download.elastos.io/app/elastos-essentials/Essentials.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
              >
                <span>Essentials for Android</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
              <a
                href="https://elastos.info/tutorial/bpos-staking-and-voting-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
              >
                <span>How to stake ELA</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-[#171717] p-3 rounded-lg dark:text-white relative">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#F7921A]/10 blur-[50px]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#8BABFF]/10 blur-[50px]"></div>
            
            <h3 className="text-sm font-medium text-black-700 dark:text-white mb-2 flex items-center gap-2 relative z-10">
              <Star className="w-4 h-4 text-green-500" />
              Buy ELA
            </h3>
            <div className="grid gap-3">
              <div>
                <h4 className="text-xs font-medium text-black-600 dark:text-gray-400 mb-1">Centralized Exchanges</h4>
                <div className="flex flex-wrap gap-2">
                  {exchanges.cex.map((exchange) => (
                    <a
                      key={exchange.name}
                      href={exchange.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-white dark:bg-[#171717] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 transition-colors"
                    >
                      {exchange.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-black-600 dark:text-gray-400 mb-1">Decentralized Exchanges</h4>
                <div className="flex flex-wrap gap-2">
                  {exchanges.dex.map((exchange) => (
                    <a
                      key={exchange.name}
                      href={exchange.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-white dark:bg-[#171717] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 transition-colors"
                    >
                      {exchange.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-[#5C8EFF] to-[#F7921A] text-white p-3 rounded-lg h-[300px] overflow-auto relative">
              {/* Background elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F7921A]/10 blur-[60px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#8BABFF]/10 blur-[60px]"></div>
              
              <h3 className="text-sm font-bold mb-2 relative z-10">Security & Supply Benefits</h3>
              <div className="grid gap-3 relative z-10">
                <div>
                  <h4 className="text-xs font-semibold mb-1">Security Leadership</h4>
                  <ul className="space-y-1">
                    {[
                      "Bitcoin-level security at fraction of energy cost",
                      `Highest merge-mining participation (${((elastosHashrate/bitcoinHashrate) * 100).toFixed(1)}%+)`,
                      `${elastosHashrate} EH/s of protection and growing`,
                      "6+ years of proven security"
                    ].map((point, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 shrink-0" />
                        <span className="text-xs opacity-90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-1">Supply Certainty</h4>
                  <ul className="space-y-1">
                    {[
                      "Fixed maximum supply of 28.22M tokens",
                      "Final supply reached by 2105",
                      "Mathematically guaranteed cap",
                      "Transparent emission schedule"
                    ].map((point, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 shrink-0" />
                        <span className="text-xs opacity-90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#171717] rounded-lg border dark:border-gray-700 p-2 h-[300px] relative">
              {/* Background elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F7921A]/10 blur-[60px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#8BABFF]/10 blur-[60px]"></div>
              
              <h3 className="text-sm font-medium mb-2 flex items-center gap-2 dark:text-white relative z-10">
                <Shield className="h-4 w-4 text-blue-500" />
                Security Integration
              </h3>
              <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={realHashrateData}>
                  <XAxis dataKey="year" tick={{fontSize: 10, fill: 'white'}} />
                  <YAxis tick={{fontSize: 10, fill: 'white'}} />
                  <RechartsTooltip />
                  <Area 
                    type="monotone" 
                    dataKey="btcHashrate" 
                    stroke="#f59e0b" 
                    fill="#f59e0b" 
                    fillOpacity={0.1}
                    name="Bitcoin Network"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="hashrate" 
                    stroke="#2563eb" 
                    fill="#2563eb"
                    fillOpacity={0.2}
                    name="Elastos Security"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>


        </CardContent>
      </Card>
    </div>
  );
};

export default BuyElaPage;