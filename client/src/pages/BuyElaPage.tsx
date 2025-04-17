import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Bitcoin, Star, Wallet, ExternalLink, CheckCircle, CheckCircle2, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHashrateData } from '../hooks/useHashrateData';
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { SEO } from "@/components/SEO";
import { Helmet } from 'react-helmet';
import { WebPageStructuredData } from '@/components/StructuredData';

const BuyElaPage = () => {
  const { data: hashrateData } = useHashrateData();
  const bitcoinHashrate = hashrateData?.bitcoinHashrate ?? 481;
  const elastosHashrate = hashrateData?.elastosHashrate ?? 924;
  const [animatedHashrate, setAnimatedHashrate] = useState(0);

  const COINGECKO_API = 'https://api.coingecko.com/api/v3';
  const ELASTOS_API = 'https://ela.elastos.io/api/v1/data-statistics';

  const realHashrateData = [
    { year: '2018', hashrate: 22, btcHashrate: 101, percentage: "21.8%" },
    { year: '2020', hashrate: 120, btcHashrate: 250, percentage: "48%" },
    { year: '2022', hashrate: 240, btcHashrate: 450, percentage: "53.3%" },
    { year: '2025', hashrate: elastosHashrate, btcHashrate: bitcoinHashrate, percentage: ((elastosHashrate/bitcoinHashrate) * 100).toFixed(1) + "%" }
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
      <Helmet>
        {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-775BN8EH1L"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-775BN8EH1L');
          `}
        </script>
      </Helmet>
      <SEO 
        title="Buy ELA | Bitcoin-Secured Digital Asset | Elastos Token"
        description="Learn how to buy ELA, the native Bitcoin-secured digital asset of the Elastos ecosystem. Discover exchanges, wallets, and staking options for this powerful Web3 utility token."
        keywords="buy ELA, Elastos token, ELA exchanges, Bitcoin-secured asset, how to purchase ELA, digital reserve asset, crypto staking, Web3 token, Bitcoin security token, digital asset investment"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/buy-ela"
      />
      <WebPageStructuredData
        title="Buy ELA | Bitcoin-Secured Digital Asset | Elastos Token"
        description="Learn how to buy ELA, the native token of the Elastos ecosystem, through exchanges, wallets, and other available methods."
        url="/buy-ela"
        imageUrl="/images/Elastosbanner.jpg"
      />
      <Card className="max-w-6xl mx-auto dark:bg-[#171717] dark:text-white border-0">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

          <div className="bg-blue-50 dark:bg-[#222] p-3 rounded-lg dark:text-white">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-medium">Download Essentials Wallet</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://apps.apple.com/us/app/web3-essentials-crypto-wallet/id1568931743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:bg-[#5C8EFF]/20"
              >
                Essentials for iOS
                <ExternalLink size={12} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:bg-[#5C8EFF]/20"
              >
                Essentials for Android
                <ExternalLink size={12} />
              </a>
              <a
                href="https://staking.elastos.net/staking-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:bg-[#5C8EFF]/20"
              >
                How to stake ELA
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-[#171717] p-3 rounded-lg dark:text-white">
            <h3 className="text-sm font-medium text-black-700 dark:text-white mb-2">
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
                      className="inline-flex items-center gap-1 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:bg-[#5C8EFF]/20"
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
                      className="inline-flex items-center gap-1 px-4 py-1 bg-[#F7921A]/10 border border-[#F7921A]/30 text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:bg-[#F7921A]/20"
                    >
                      {exchange.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full"
            >

              <h3 className="text-xl font-bold text-white mb-2">Security & Supply Benefits</h3>
              <p className="text-sm text-white/70">
                Bitcoin-level security with a fixed max supply of 28.22M tokens.
              </p>
              <div className="grid gap-3">
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
                        <CheckCircle className="h-3 w-3 shrink-0 text-[#F7921A]" />
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
                        <CheckCircle className="h-3 w-3 shrink-0 text-[#F7921A]" />
                        <span className="text-xs opacity-90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className="bg-white dark:bg-[#171717] rounded-lg border dark:border-gray-700 p-2 h-full">
              <h3 className="text-sm font-medium mb-2 dark:text-white flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Security Integration</span>
              </h3>
              <div style={{ height: "320px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={realHashrateData}>
                    <XAxis dataKey="year" tick={{fontSize: 10, fill: 'white'}} />
                    <YAxis tick={{fontSize: 10, fill: 'white'}} domain={[0, 800]} />
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
          </div>


        </CardContent>
      </Card>
      <StackedCircularFooter />
    </div>
  );
};

export default BuyElaPage;