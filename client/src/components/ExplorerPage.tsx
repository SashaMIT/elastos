
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
import { cn } from "@/lib/utils";
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
    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
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
    description: "A Layer 2 Ethereum-compatible sidechain designed for smart contracts and dApp deployment",
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
    iconBg: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    icon: <Globe className="w-6 h-6 text-gray-400" />
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
    description: "Seamless asset transfers between chains with 1:1 mapping of ELA coins and tokens across the Elastos ecosystem",
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
    gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-500/20"
  }
];

export function ExplorerPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen bg-[#141414] overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Elastos <span className="text-[#5C8EFF]">Explorer</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Discover the multi-chain structure of Elastos, where Bitcoin-secured blockchain technology combines with purpose-built sidechains to deliver a comprehensive Web3 infrastructure
          </p>
        </div>

        {/* Chain Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {elastosChains.map((chain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-xl border p-5 overflow-hidden group",
                chain.borderColor
              )}
            >
              {/* Background gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-20",
                chain.color
              )} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "p-3 rounded-lg",
                    chain.glowColor
                  )}>
                    {chain.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium border border-[#5C8EFF]/20 bg-[#5C8EFF]/10 text-[#5C8EFF]">
                    {chain.shortName}
                  </div>
                </div>
                
                <h3 className={cn("text-xl font-semibold mb-2", chain.textColor)}>
                  {chain.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {chain.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-5">
                  {chain.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-[#5C8EFF]/70" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a
                  href={chain.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full justify-center rounded-lg py-2 px-3 bg-gradient-to-r border border-[#5C8EFF]/20 text-white transition-all duration-300 hover:bg-[#5C8EFF]/30"
                >
                  <span>{chain.ctaText}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="flex border-b border-gray-800 mb-8">
            <button
              onClick={() => handleTabChange(0)}
              className={cn(
                "py-3 px-5 text-sm font-medium relative",
                activeTab === 0 
                  ? "text-[#5C8EFF] border-b-2 border-[#5C8EFF]" 
                  : "text-gray-400 hover:text-gray-300"
              )}
            >
              Chain Architecture
            </button>
            <button
              onClick={() => handleTabChange(1)}
              className={cn(
                "py-3 px-5 text-sm font-medium relative",
                activeTab === 1 
                  ? "text-[#5C8EFF] border-b-2 border-[#5C8EFF]" 
                  : "text-gray-400 hover:text-gray-300"
              )}
            >
              ELA Across Chains
            </button>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {/* Architecture Tab */}
            {activeTab === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Multi-Chain Excellence
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Elastos employs a multi-chain architecture that combines the security of Bitcoin-merged mining with the flexibility of specialized sidechains. This approach allows for optimal performance, security, and functionality across different use cases.
                  </p>
                  
                  <div className="space-y-4">
                    {ecosystemFeatures.slice(0, 3).map((feature, index) => (
                      <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredFeature(index)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={cn(
                          "p-4 rounded-lg border transition-all duration-300",
                          feature.border,
                          hoveredFeature === index 
                            ? "bg-gradient-to-r " + feature.gradient 
                            : "bg-[#1A1A1A]/50"
                        )}
                      >
                        <div className="flex gap-3">
                          <div className="mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Ecosystem Advantages
                  </h3>
                  <p className="text-gray-400 mb-6">
                    The multi-chain design creates a comprehensive ecosystem where specialized chains work together, each optimized for specific functions while maintaining interoperability and security.
                  </p>
                  
                  <div className="space-y-4">
                    {ecosystemFeatures.slice(3).map((feature, index) => (
                      <motion.div
                        key={index + 3}
                        onMouseEnter={() => setHoveredFeature(index + 3)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={cn(
                          "p-4 rounded-lg border transition-all duration-300",
                          feature.border,
                          hoveredFeature === index + 3 
                            ? "bg-gradient-to-r " + feature.gradient 
                            : "bg-[#1A1A1A]/50"
                        )}
                      >
                        <div className="flex gap-3">
                          <div className="mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ELA Across Chains Tab */}
            {activeTab === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto">
                  ELA is the native asset of the Elastos ecosystem, functioning seamlessly across multiple chains with different implementations depending on the chain's purpose and technology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {elaTokens.map((token, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={cn(
                        "p-5 rounded-xl border bg-[#1A1A1A]/40",
                        token.borderColor
                      )}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "p-2 rounded-md",
                          token.iconBg
                        )}>
                          {token.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-white">{token.network}</h3>
                            {token.address && (
                              <div className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                                ERC20
                              </div>
                            )}
                          </div>
                          <p className="text-gray-500 text-xs">{token.tokenType}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {token.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-[#1D1D1D] rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">Chain ID</p>
                          <p className="text-sm text-gray-300">
                            {token.chainId}
                          </p>
                        </div>
                        <div className="bg-[#1D1D1D] rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">Decimals</p>
                          <p className="text-sm text-gray-300">
                            {token.decimals}
                          </p>
                        </div>
                      </div>
                      
                      <a
                        href={token.explorerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#5C8EFF] text-sm hover:underline"
                      >
                        <LinkIcon className="h-3 w-3" />
                        <span>View in Explorer</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Banner CTA */}
        <div className="rounded-xl bg-gradient-to-br from-[#5C8EFF]/20 to-[#5C8EFF]/5 border border-[#5C8EFF]/20 p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Ready to Explore Elastos Blockchains?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Visit the block explorers for each Elastos chain to view transactions, check balances, and verify smart contracts across the ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://blockchain.elastos.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg py-2 px-4 bg-[#F7921A]/20 text-[#F7921A] border border-[#F7921A]/30 hover:bg-[#F7921A]/30 transition-all"
            >
              <Box className="h-4 w-4" />
              <span>Mainchain Explorer</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://esc.elastos.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg py-2 px-4 bg-[#8BABFF]/20 text-[#8BABFF] border border-[#8BABFF]/30 hover:bg-[#8BABFF]/30 transition-all"
            >
              <Code className="h-4 w-4" />
              <span>ESC Explorer</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://eid.elastos.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg py-2 px-4 bg-[#8BABFF]/20 text-[#8BABFF] border border-[#8BABFF]/30 hover:bg-[#8BABFF]/30 transition-all"
            >
              <Fingerprint className="h-4 w-4" />
              <span>EID Explorer</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
