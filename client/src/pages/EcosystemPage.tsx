import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lens } from "@/components/ui/lens";
import { ExternalLink, Share2, Terminal, Wallet, Image, Building2 } from 'lucide-react';
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from 'react-helmet';
import { WebPageStructuredData } from "@/components/StructuredData";

type Project = {
  name: string;
  description: string;
  url: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  // Infra and Dev Tools
  {
    name: "Essentials",
    description: "Elastos SuperWallet with ELA staking, multi-chain, identity and CR governance",
    url: "https://essentials.elastos.org",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/Essentials.png"
  },
  {
    name: "Arbiter Portal",
    description: "Stake ELA to support BeL2's Bitcoin DeFi network and earn BTC fees",
    url: "https://arbiter.bel2.org",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/BeL2 Arbiter Portal.png"
  },
  {
    name: "BeL2 Lending Demo",
    description: "Test BeL2's Bitcoin DeFi capabilities (use with caution)",
    url: "https://lending.bel2.org",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BeL2 Lending dapp.png"
  },
  {
    name: "BeL2 SDKs",
    description: "Developer resources for BeL2's Native Bitcoin DeFi protocol",
    url: "https://docs.bel2.org",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/BeL2 SDKs.png"
  },
  {
    name: "BeL2 X Account",
    description: "Official BeL2 Infrastructure Team updates",
    url: "https://x.com/Elacityofficial",
    category: "Social",
    image: "/images/Ecosystem/BeL2 Twitter.png"
  },
  {
    name: "Bitget",
    description: "Buy, sell, and trade ELA/USDT with low fees",
    url: "https://www.bitget.com/spot/ELAUSDT/?channelCode=42xn&vipCode=sq59&languageType=0",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BitGet.png"
  },
  {
    name: "BunnyPunk",
    description: "DeFi and NFT staking tools",
    url: "https://app.bunnypunk.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BunnyPunk.png"
  },
  {
    name: "Chainge Finance",
    description: "Cross-chain DEX swaps from over 30+ blockchains",
    url: "https://dapp.chainge.finance",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Chainge Finance ELA.png"
  },
  {
    name: "CoinCreate",
    description: "No-code platform for launching blockchain projects",
    url: "https://coincreate.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/CoinCreate.png"
  },
  {
    name: "Coinbase",
    description: "Buy and trade ELA with USD on Coinbase Advanced",
    url: "https://www.coinbase.com/en-gb/advanced-trade/spot/ELA-USD",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Coinbase.png"
  },
  {
    name: "Crypto.com",
    description: "Trade ELA/USD on a trusted global exchange",
    url: "https://crypto.com/exchange/trade/ELA_USD",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Crypto.png"
  },
  {
    name: "Cyber Republic DAO",
    description: "A community-driven governance system for Elastos",
    url: "https://cyberrepublic.org",
    category: "Governance",
    image: "/images/Ecosystem/Cyber Republic.png"
  },
  {
    name: "Cyber Republic X",
    description: "Secretariat-run updates and governance communications",
    url: "https://x.com/Cyber__Republic",
    category: "Social",
    image: "/images/Ecosystem/Cyber Republic DAO X.png"
  },
  {
    name: "Dev Portal",
    description: "Documentation and tools for building on Elastos",
    url: "https://elastos.dev",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/Dev Portal.png"
  },
  {
    name: "Elacity",
    description: "Trade ERC-721 and ERC-1155 NFTs, tokenize IP into royalty-based assets",
    url: "https://ela.city",
    category: "Digital Assets and IP",
    image: "/images/Ecosystem/Elacity Market.png"
  },
  {
    name: "Elacity Telegram",
    description: "The official Elacity community Telegram",
    url: "https://t.me/elacity",
    category: "Social",
    image: "/images/Ecosystem/Elacity Official Telegram.png"
  },
  {
    name: "Elacity X",
    description: "Official ElacityLabs updates on decentralized digital assets",
    url: "https://x.com/Elacityofficial",
    category: "Social",
    image: "/images/Ecosystem/Elacity X.png"
  },
  {
    name: "Elastos Telegram",
    description: "The official Elastos community Telegram",
    url: "https://t.me/elastosgroup",
    category: "Social",
    image: "/images/Ecosystem/Elastos Official Telegram.png"
  },
  {
    name: "Elastos X",
    description: "Community-run updates and discussions via CRC DAO voting",
    url: "https://x.com/ElastosInfo",
    category: "Social",
    image: "/images/Ecosystem/Elastos Info X.png"
  },
  {
    name: "FilDA",
    description: "Decentralized lending and borrowing protocol",
    url: "https://filda.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/FilDA.png"
  },
  {
    name: "Gate.io",
    description: "Spot trading for ELA/USDT with deep liquidity",
    url: "https://www.gate.io/trade/ELA_USDT?ref=3018394",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Gate.png"
  },
  {
    name: "Glide Finance",
    description: "Bridge and DEX for ERC-20 token trading on Elastos Smart Chain",
    url: "https://glidefinance.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Glide Finance Website.png"
  },
  {
    name: "HTX (Huobi)",
    description: "Trade ELA/USDT on one of the largest exchanges",
    url: "https://www.htx.com/trade/ela_usdt?type=spot",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/HTX.png"
  },
  {
    name: "Identity Explorer",
    description: "Verifiable, user-owned Decentralized Identifiers (DIDs)",
    url: "https://eid.elastos.io",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/EID Explorer.png"
  },
  {
    name: "KuCoin",
    description: "Trade ELA/USDT with advanced trading tools",
    url: "https://www.kucoin.com/trade/ELA-USDT?rcode=e21sNJ",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Kucoin.png"
  },
  {
    name: "Mainchain Explorer",
    description: "Tracks Elastos' Bitcoin-merged mainchain and ELA issuance",
    url: "https://ela.elastos.io",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/ELA Mainchain Explorer.png"
  },
  {
    name: "NBW X",
    description: "Official NBW Team updates",
    url: "https://x.com/nbwinfo",
    category: "Social",
    image: "/images/Ecosystem/NBW X Twitter.png"
  },
  {
    name: "New Bretton Woods Labs",
    description: "Developing a Bitcoin-backed stablecoin on BeL2",
    url: "https://nbwlabs.org",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BeL2 Lending dapp.png"
  },
  {
    name: "Smartchain Explorer",
    description: "EVM-compatible explorer for smart contracts on Elastos",
    url: "https://esc.elastos.io",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/ESC Explorer.png"
  },
  {
    name: "Uniswap",
    description: "Swap ELA on Ethereum via Uniswap's decentralized exchange",
    url: "https://app.uniswap.org/explore/tokens/ethereum/0xe6fd75ff38adca4b97fbcd938c86b98772431867",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Uniswap.png"
  },
  {
    name: "Smartchain Explorer",
    description: "EVM-compatible explorer for smart contracts on Elastos",
    url: "https://esc.elastos.io",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/ESC Explorer.png"
  },
  {
    name: "Identity Explorer",
    description: "Verifiable, user-owned Decentralized Identifiers (DIDs)",
    url: "https://eid.elastos.io",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/EID Explorer.png"
  },
  {
    name: "Arbiter Portal",
    description: "Stake ELA to support BeL2's Bitcoin DeFi network and earn BTC fees",
    url: "https://arbiter.bel2.org",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/BeL2 Arbiter Portal.png"
  },
  {
    name: "Dev Portal",
    description: "Documentation and tools for building on Elastos",
    url: "https://elastos.dev",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/Dev Portal.png"
  },
  {
    name: "BeL2 SDKs",
    description: "Developer resources for BeL2's Native Bitcoin DeFi protocol",
    url: "https://docs.bel2.org",
    category: "Infra and Dev Tools",
    image: "/images/Ecosystem/BeL2 SDKs.png"
  },

  // Finance and DeFi
  {
    name: "Coinbase",
    description: "Buy and trade ELA with USD on Coinbase Advanced",
    url: "https://www.coinbase.com/en-gb/advanced-trade/spot/ELA-USD",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Coinbase.png"
  },
  {
    name: "KuCoin",
    description: "Trade ELA/USDT with advanced trading tools",
    url: "https://www.kucoin.com/trade/ELA-USDT?rcode=e21sNJ",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Kucoin.png"
  },
  {
    name: "Gate.io",
    description: "Spot trading for ELA/USDT with deep liquidity",
    url: "https://www.gate.io/trade/ELA_USDT?ref=3018394",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Gate.png"
  },
  {
    name: "HTX (Huobi)",
    description: "Trade ELA/USDT on one of the largest exchanges",
    url: "https://www.htx.com/trade/ela_usdt?type=spot",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/HTX.png"
  },
  {
    name: "Bitget",
    description: "Buy, sell, and trade ELA/USDT with low fees",
    url: "https://www.bitget.com/spot/ELAUSDT/?channelCode=42xn&vipCode=sq59&languageType=0",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BitGet.png"
  },
  {
    name: "Crypto.com",
    description: "Trade ELA/USD on a trusted global exchange",
    url: "https://crypto.com/exchange/trade/ELA_USD",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Crypto.png"
  },
  {
    name: "Uniswap",
    description: "Swap ELA on Ethereum via Uniswap's decentralized exchange",
    url: "https://app.uniswap.org/explore/tokens/ethereum/0xe6fd75ff38adca4b97fbcd938c86b98772431867",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Uniswap.png"
  },
  {
    name: "Glide Finance",
    description: "Bridge and DEX for ERC-20 token trading on Elastos Smart Chain",
    url: "https://glidefinance.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Glide Finance Website.png"
  },
  {
    name: "CoinCreate",
    description: "No-code platform for launching blockchain projects",
    url: "https://coincreate.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/CoinCreate.png"
  },
  {
    name: "FilDA",
    description: "Decentralized lending and borrowing protocol",
    url: "https://filda.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/FilDA.png"
  },
  {
    name: "BunnyPunk",
    description: "DeFi and NFT staking tools",
    url: "https://app.bunnypunk.io",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BunnyPunk.png"
  },
  {
    name: "Chainge Finance",
    description: "Cross-chain DEX swaps from over 30+ blockchains",
    url: "https://dapp.chainge.finance",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/Chainge Finance ELA.png"
  },

  // Digital Assets & IP
  {
    name: "Elacity",
    description: "Trade ERC-721 and ERC-1155 NFTs, tokenize IP into royalty-based assets",
    url: "https://ela.city",
    category: "Digital Assets and IP",
    image: "/images/Ecosystem/Elacity Market.png"
  },

  // BeL2 & Bitcoin DeFi
  {
    name: "New Bretton Woods Labs",
    description: "Developing a Bitcoin-backed stablecoin on BeL2",
    url: "https://nbwlabs.org",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BeL2 Lending dapp.png"
  },
  {
    name: "BeL2 Lending Demo",
    description: "Test BeL2's Bitcoin DeFi capabilities (use with caution)",
    url: "https://lending.bel2.org",
    category: "Finance and DeFi",
    image: "/images/Ecosystem/BeL2 Lending dapp.png"
  },

  // Governance
  {
    name: "Cyber Republic DAO",
    description: "A community-driven governance system for Elastos",
    url: "https://cyberrepublic.org",
    category: "Governance",
    image: "/images/Ecosystem/Cyber Republic.png"
  },

  // Social
  {
    name: "Elastos X",
    description: "Community-run updates and discussions via CRC DAO voting",
    url: "https://x.com/ElastosInfo",
    category: "Social",
    image: "/images/Ecosystem/Elastos Info X.png"
  },
  {
    name: "Cyber Republic X",
    description: "Secretariat-run updates and governance communications",
    url: "https://x.com/Cyber__Republic",
    category: "Social",
    image: "/images/Ecosystem/Cyber Republic DAO X.png"
  },
  {
    name: "Elacity X",
    description: "Official ElacityLabs updates on decentralized digital assets",
    url: "https://x.com/Elacityofficial",
    category: "Social",
    image: "/images/Ecosystem/Elacity X.png"
  },
  {
    name: "BeL2 X Account",
    description: "Official BeL2 Infrastructure Team updates",
    url: "https://x.com/Elacityofficial",
    category: "Social",
    image: "/images/Ecosystem/BeL2 Twitter.png"
  },
  {
    name: "Elastos Telegram",
    description: "The official Elastos community Telegram",
    url: "https://t.me/elastosgroup",
    category: "Social",
    image: "/images/Ecosystem/Elastos Official Telegram.png"
  },
  {
    name: "Elacity Telegram",
    description: "The official Elacity community Telegram",
    url: "https://t.me/elacity",
    category: "Social",
    image: "/images/Ecosystem/Elacity Official Telegram.png"
  },
  {
    name: "NBW X",
    description: "Official NBW Team updates",
    url: "https://x.com/nbwinfo",
    category: "Social",
    image: "/images/Ecosystem/NBW X Twitter.png"
  }
];

export default function EcosystemPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [hoveringCards, setHoveringCards] = useState<{[key: string]: boolean}>({});

  const categories = [
    "Infra and Dev Tools",
    "Finance and DeFi",
    "Digital Assets and IP",
    "Governance",
    "Social"
  ];

  // Remove duplicates by name
  const uniqueProjects = Array.from(new Map(projects.map(project => [project.name, project])).values());

  // Priority list
  const priorityOrder = ["Essentials", "Elacity", "BeL2 Lending Demo", "Cyber Republic DAO", "Glide Finance", "Coinbase", "Uniswap", "Chainge Finance"];

  // Filter and sort projects
  const filteredProjects = selectedCategory
    ? uniqueProjects.filter(project => project.category === selectedCategory)
    : uniqueProjects;

  // Sort projects to show priority items first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aIndex = priorityOrder.indexOf(a.name);
    const bIndex = priorityOrder.indexOf(b.name);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] text-black dark:text-white">
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
        title="Elastos Ecosystem | Bitcoin-Secured Web3 Applications & Partners"
        description="Discover the robust ecosystem of applications, tools, and partners building on Elastos' Bitcoin-secured infrastructure, from DeFi and digital identity to NFT platforms."
        keywords="Elastos ecosystem, Elastos dApps, Bitcoin-secured applications, Elacity, BeL2, Essentials wallet, Elastos partners, Web3 ecosystem, Bitcoin DeFi, decentralized identity"
        ogImage="/images/Elastosbanner.jpg"
        canonicalUrl="/ecosystem"
      />
      <WebPageStructuredData
        title="Elastos Ecosystem | Bitcoin-Secured Web3 Applications & Partners"
        description="Discover the robust ecosystem of applications, tools, and partners building on Elastos' Bitcoin-secured infrastructure."
        url="/ecosystem"
        imageUrl="/images/Elastosbanner.jpg"
      />
      <div className="flex flex-col lg:flex-row">
        {/* Mobile Category Selector */}
        <div className="lg:hidden p-4 pt-4 overflow-x-auto">
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              className={`flex-shrink-0 ${!selectedCategory ? 'bg-gray-200/50 dark:bg-white/10' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`flex-shrink-0 ${selectedCategory === category ? 'bg-gray-200/50 dark:bg-white/10' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#1a1a1a] p-6 pt-24 border-r border-gray-200 dark:border-white/10">
          <Button
            variant="ghost"
            className={`w-full justify-start mb-2 whitespace-nowrap ${!selectedCategory ? 'bg-gray-200/50 dark:bg-white/10' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            <Share2 className="mr-2 h-4 w-4" />
            All Projects
          </Button>
          {categories.map((category) => {
            const icon = {
              "Infra and Dev Tools": <Terminal className="mr-2 h-4 w-4" />,
              "Finance and DeFi": <Wallet className="mr-2 h-4 w-4" />,
              "Digital Assets and IP": <Image className="mr-2 h-4 w-4" />,
              "Governance": <Building2 className="mr-2 h-4 w-4" />,
              "Social": <Share2 className="mr-2 h-4 w-4" />
            }[category];

            return (
              <Button
                key={category}
                variant="ghost"
                className={`w-full justify-start mb-2 whitespace-nowrap ${selectedCategory === category ? 'bg-gray-200/50 dark:bg-white/10' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {icon}
                {category}
              </Button>
            );
          })}
        </div>

        <div className="w-full lg:ml-64 p-4 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {sortedProjects.map((project) => (
              <div 
                key={project.name} 
                className="w-full relative rounded-3xl overflow-hidden bg-white dark:bg-[#171717] p-4 sm:p-8 cursor-pointer transition-shadow" 
                onClick={() => window.open(project.url, '_blank')}
              >
                <div className="relative z-10">
                  <Lens 
                    hovering={hoveringCards[project.name]} 
                    setHovering={(state) => setHoveringCards(prev => ({...prev, [project.name]: state}))}
                  >
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                  </Lens>
                  <motion.div
                    animate={{
                      filter: hoveringCards[project.name] ? "blur(2px)" : "blur(0px)",
                    }}
                    className="mt-4"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      {project.name}
                      <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    </h3>
                    <p className="text-gray-700 dark:text-neutral-200 mb-4">{project.description}</p>
                    <div className="mt-auto">
                      <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-[#5C8EFF] dark:text-white rounded-full text-xs font-medium whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}