import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  ArrowLeft,
  Box, 
  CircleCheck, 
  Code, 
  Coins, 
  ExternalLink, 
  Fingerprint, 
  Globe, 
  Layers, 
  LinkIcon, 
  LucideProps, 
  MoveRight, 
  Network, 
  Shield, 
  Workflow 
} from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

// Custom arrow component based on the provided SVG
const CircleArrow = (props: LucideProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 35 34" 
    fill="none"
    {...props}
  >
    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="1.5"/>
    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="1.5"/>
  </svg>
);

// Elastos chains data - using official brand colors
const elastosChains = [
  {
    name: "Elastos Mainchain",
    description: "The Layer 1 blockchain of the Elastos ecosystem, secured by merged mining with Bitcoin",
    icon: <Box className="w-10 h-10 text-[#F7921A]" />,
    features: [
      "Secured by BTC hashpower",
      "Consensus via AuxPoW + DPoS",
      "UTXO-based transaction model",
      "Native ELA coins",
      "Provides root of trust for sidechains",
      "Cross-chain interoperability"
    ],
    explorerUrl: "https://blockchain.elastos.io/",
    ctaText: "MC Explorer",
    color: "from-[#F7921A]/10 to-[#F7921A]/5",
    borderColor: "border-[#F7921A]/20",
    textColor: "text-[#F7921A]",
    gradientColors: "from-[#F7921A] to-[#F7921A]/70",
    glowColor: "bg-[#F7921A]/20",
    shortName: "MC"
  },
  {
    name: "Elastos ESC",
    description: "A Layer 2 Ethereum-compatible sidechain designed for smart contracts and dApp's",
    icon: <Code className="w-10 h-10 text-[#8BABFF]" />,
    features: [
      "EVM compatibility",
      "Smart contract platform",
      "Support for Solidity",
      "Web3 API compatibility",
      "Fast block times (~5 seconds)",
      "Low transaction fees"
    ],
    explorerUrl: "https://esc.elastos.io/",
    ctaText: "ESC Explorer",
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5",
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]",
    gradientColors: "from-[#8BABFF] to-[#8BABFF]/70",
    glowColor: "bg-[#8BABFF]/20",
    shortName: "ESC"
  },
  {
    name: "Elastos EID",
    description: "A Layer 2 specialized sidechain focused on decentralized identity solutions",
    icon: <Fingerprint className="w-10 h-10 text-[#8BABFF]" />,
    features: [
      "W3C DID compliant",
      "Verifiable credentials",
      "Self-sovereign identity",
      "Privacy preservation",
      "Identity verification",
      "Credential management"
    ],
    explorerUrl: "https://eid.elastos.io/",
    ctaText: "EID Explorer",
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5", 
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]",
    gradientColors: "from-[#8BABFF] to-[#4758A8]",
    glowColor: "bg-[#8BABFF]/20",
    shortName: "EID"
  }
];

// ELA data across chains - using official brand colors
const elaTokens = [
  {
    network: "Elastos Mainchain",
    tokenType: "Native coin",
    description: "A UTXO-model chain in which ELA coins are used to pay transaction fees, stake, register a validator, and participate in governance. The mainchain is the trust zone for the ecosystem on account of it being secured by Bitcoin.",
    decimals: 8,
    chainId: "Mainchain",
    explorerUrl: "https://blockchain.elastos.io/",
    iconBg: "bg-[#F7921A]/10",
    borderColor: "border-[#F7921A]/20",
    icon: <Box className="w-6 h-6 text-[#F7921A]" />
  },
  {
    network: "Elastos ESC",
    tokenType: "Native asset",
    description: "An EVM-compatible chain in which ELA is used to execute smart contracts. ESC is the primary place to deploy dApps (DeFi, NFTs, etc.).",
    decimals: 18,
    chainId: "20",
    explorerUrl: "https://esc.elastos.io/",
    iconBg: "bg-[#8BABFF]/10",
    borderColor: "border-[#8BABFF]/20",
    icon: <Code className="w-6 h-6 text-[#8BABFF]" />
  },
  {
    network: "Elastos EID",
    tokenType: "Native asset",
    description: "An EVM-compatible chain specifically designed to support W3C compliant decentralized identifiers (DIDs).",
    decimals: 18,
    chainId: "22",
    explorerUrl: "https://eid.elastos.io/",
    iconBg: "bg-[#8BABFF]/10",
    borderColor: "border-[#8BABFF]/20",
    icon: <Fingerprint className="w-6 h-6 text-[#8BABFF]" />
  },
  {
    network: "Ethereum",
    tokenType: "ERC20 token",
    description: "A wrapped version of ELA available on Ethereum (created by bridging ELA from ESC to the Ethereum blockchain).",
    decimals: 18,
    chainId: "1",
    address: "0xe6fd75ff38adca4b97fbcd938c86b98772431867",
    explorerUrl: "https://etherscan.io/token/0xe6fd75ff38adca4b97fbcd938c86b98772431867",
    iconBg: "bg-[#8BABFF]/10",
    borderColor: "border-[#8BABFF]/20",
    icon: <Globe className="w-6 h-6 text-[#8BABFF]" />
  }
];

// Feature cards for the ecosystem
const ecosystemFeatures = [
  {
    title: "Security First",
    description: "Benefit from Bitcoin's security with merged mining while specialized chains manage specific functions",
    icon: <Shield className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-500/20"
  },
  {
    title: "Scalability",
    description: "Parallel processing across multiple chains enables higher throughput and efficient resource allocation",
    icon: <Layers className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    border: "border-indigo-500/20"
  },
  {
    title: "Specialization",
    description: "Each chain is optimized for specific functions, creating an efficient ecosystem of complementary blockchains",
    icon: <Workflow className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    border: "border-purple-500/20"
  },
  {
    title: "Interoperability",
    description: "Easy asset transfers between chains with 1:1 mapping of ELA coins and tokens across the Elastos ecosystem",
    icon: <Network className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-500/20"
  },
  {
    title: "Digital Identity",
    description: "Self-sovereign identity infrastructure with W3C compliant DIDs and verifiable credentials",
    icon: <Fingerprint className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
    border: "border-emerald-500/20"
  },
  {
    title: "Economy",
    description: "A unified economy with ELA coins on the mainchain and related tokens on sidechains and external networks",
    icon: <Coins className="w-6 h-6 text-[#5C8EFF]" />,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    border: "border-amber-500/20"
  }
];

  const LearnMoreButton = () => (
    <div className="mt-8 flex justify-center">
      <a href="/vision" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm">
        <span>Learn More</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
          <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
        </svg>
      </a>
    </div>
  );

  export function ExplorerPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen bg-[#171717] overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Elastos Explorer
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Discover the multi-chain structure of Elastos, where Bitcoin-secured blockchain technology combines with purpose-built sidechains to deliver a comprehensive Web3 infrastructure
          </p>
        </div>

        {/* Chains Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {elastosChains.map((chain, index) => (
            <motion.div
              key={chain.name}
              className={`relative rounded-xl overflow-hidden border ${chain.borderColor} bg-gradient-to-br ${chain.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className={`w-10 h-10 rounded-full ${chain.glowColor} flex items-center justify-center mb-4`}>
                  {React.cloneElement(chain.icon, { className: "w-5 h-5" })}
                </div>
                <h2 className={`text-xl font-bold mb-2 ${chain.textColor}`}>{chain.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{chain.description}</p>
                <div className="space-y-2 mb-6">
                  {chain.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CircleCheck className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={chain.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex px-3 py-2 ${
                    chain.name.includes("ESC") || chain.name.includes("EID") 
                      ? "bg-[rgba(92,142,255,0.15)] text-white border-[rgba(92,142,255,0.25)]" 
                      : "bg-[rgba(246,146,26,0.15)] text-white border-[rgba(246,146,26,0.25)]"
                  } rounded-full font-[200] transition-all items-center gap-1 border border-opacity-25 text-sm`}
                >
                  <span>{chain.ctaText}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke={chain.name.includes("ESC") || chain.name.includes("EID") ? "#5C8EFF" : "#F6921A"} strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill={chain.name.includes("ESC") || chain.name.includes("EID") ? "#5C8EFF" : "#F6921A"}/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke={chain.name.includes("ESC") || chain.name.includes("EID") ? "#5C8EFF" : "#F6921A"} strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <div className="text-5xl font-bold">{chain.shortName}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ELA Across Chains */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            ELA Across <span className="text-[#F7921A]">Chains</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elaTokens.map((token, index) => (
              <motion.div
                key={token.network}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full ${token.iconBg} flex items-center justify-center mr-3 ${token.borderColor}`}>
                      {token.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{token.network}</h3>
                      <p className="text-gray-400 text-sm">{token.tokenType}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{token.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Decimals: {token.decimals}</span>
                    <span>Chain ID: {token.chainId}</span>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <a
                      href={token.explorerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#5C8EFF] hover:underline"
                    >
                      <span className="text-sm">View on Explorer</span>
                      <LinkIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ecosystem Features */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            Ecosystem <span className="text-[#5C8EFF]">Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`feature-card bg-[#1A1A1A] border ${feature.border} rounded-xl overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
                <div 
                  className={`h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-500 ease-in-out`}
                  style={{ 
                    width: hoveredFeature === index ? '100%' : '0%',
                    opacity: hoveredFeature === index ? 1 : 0
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
          <LearnMoreButton />
        </div>

        {/* Elastos Testnets Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Elastos <span className="text-[#F7921A]">Testnets</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Explore and build on Elastos test environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.a 
              href="https://esc-testnet.elastos.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#171717] border border-[#5C8EFF]/20 rounded-xl p-6 hover:border-[#5C8EFF]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">Elastos ESC Testnet</h3>
              <p className="text-gray-400 mb-4">Test your smart contracts and dApps on the Elastos Smart Contract chain</p>
              <div className="flex items-center text-[#5C8EFF]">
                <span>Visit Testnet</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </motion.a>
            <motion.a 
              href="https://eid-testnet.elastos.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#171717] border border-[#5C8EFF]/20 rounded-xl p-6 hover:border-[#5C8EFF]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">Elastos EID Testnet</h3>
              <p className="text-gray-400 mb-4">Develop and test applications with Elastos Identity on the testnet</p>
              <div className="flex items-center text-[#5C8EFF]">
                <span>Visit Testnet</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </motion.a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#5C8EFF]/10 to-[#F6921A]/10 rounded-2xl p-8 sm:p-12 border border-[#5C8EFF]/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Explore the Elastos Ecosystem?</h2>
              <p className="text-gray-400 mb-8">Visit our blockchain explorers to track transactions, view smart contracts, and monitor network activity</p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://blockchain.elastos.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm"
                >
                  <span>Mainchain Explorer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>

                <a
                  href="https://esc.elastos.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                >
                  <span>ESC Explorer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>

                <a
                  href="https://eid.elastos.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                >
                  <span>EID Explorer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}