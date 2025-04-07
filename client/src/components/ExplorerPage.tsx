import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { BlockTable } from "./BlockTable";
import { NetworkSphere } from "./NetworkSphere";
import { BlockVisualizer } from "./BlockVisualizer";
import { MergeMiningViz } from "./MergeMiningViz";
import { HashScaleViz } from "./HashScaleViz";
import { ArrowRight, ArrowUpRight, ArrowLeft, Box, CircleCheck, Code, Coins, ExternalLink, Fingerprint, Globe, Layers, LinkIcon, LucideProps, MoveRight, Network, Shield, Workflow } from "lucide-react";
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
    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="1.5" />
    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="1.5" />
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
    <a href="/vision" className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
        <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A" />
        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    </a>
  </div>
);

export default function ExplorerPage() {
  return (
    <div className="min-h-screen bg-[#171717] overflow-hidden">
      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[350px] overflow-hidden -mt-16">
        <img
          src="/images/Explorer.png"
          alt="Elastos Explorer"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6 pt-16"
              >
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-4">
                  Elastos Explorer
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                  Discover the multi-chain structure of Elastos, where Bitcoin-secured blockchain technology combines with purpose-built sidechains to deliver a comprehensive Web3 infrastructure.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Explorer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto bg-black/30 rounded-3xl p-1">
              <TabsTrigger
                value="architecture"
                className="data-[state=active]:bg-[#171717] data-[state=active]:text-white rounded-3xl py-2"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger
                value="mainchain"
                className="data-[state=active]:bg-[#171717] data-[state=active]:text-white rounded-3xl py-2"
              >
                Mainchain
              </TabsTrigger>
              <TabsTrigger
                value="sidechains"
                className="data-[state=active]:bg-[#171717] data-[state=active]:text-white rounded-3xl py-2"
              >
                Sidechains
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-[#171717] data-[state=active]:text-white rounded-3xl py-2"
              >
                Security
              </TabsTrigger>
            </TabsList>

            {/* Architecture Tab */}
            <TabsContent value="architecture" className="py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Elastos Network Sphere
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Explore the interconnected architecture of the Elastos network, including the Bitcoin-backed mainchain and purpose-built sidechains.
                  </p>
                  <div className="h-[400px] flex items-center justify-center">
                    <NetworkSphere />
                  </div>
                </div>

                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Multi-Chain Design
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Elastos uses a multi-chain architecture with specialized sidechains for different functions, all secured by the Bitcoin-backed mainchain.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#21212B]/40 p-4 rounded-lg flex items-center">
                      <div className="w-12 h-12 bg-[#F6921A]/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#F6921A]">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Elastos Mainchain (ELA)</h4>
                        <p className="text-gray-400 text-sm">Secured by Bitcoin hashpower</p>
                      </div>
                    </div>
                    <div className="bg-[#21212B]/40 p-4 rounded-lg flex items-center">
                      <div className="w-12 h-12 bg-[#5C8EFF]/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#5C8EFF]">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Smart Contract Chain (ESC)</h4>
                        <p className="text-gray-400 text-sm">EVM-compatible for dApps and DeFi</p>
                      </div>
                    </div>
                    <div className="bg-[#21212B]/40 p-4 rounded-lg flex items-center">
                      <div className="w-12 h-12 bg-[#7B4AE2]/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#7B4AE2]">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Identity Chain (EID)</h4>
                        <p className="text-gray-400 text-sm">Self-sovereign identity services</p>
                      </div>
                    </div>
                    <div className="bg-[#21212B]/40 p-4 rounded-lg flex items-center">
                      <div className="w-12 h-12 bg-[#00BFA6]/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#00BFA6]">4</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Carrier Network</h4>
                        <p className="text-gray-400 text-sm">P2P communication infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Mainchain Tab */}
            <TabsContent value="mainchain" className="py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Recent Blocks
                  </h3>
                  <BlockTable />
                </div>

                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Block Visualizer
                  </h3>
                  <BlockVisualizer />
                </div>
              </div>
            </TabsContent>

            {/* Sidechains Tab */}
            <TabsContent value="sidechains" className="py-6">
              <div className="grid grid-cols-1 gap-8 mt-4">
                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Elastos Sidechains
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Elastos uses specialized sidechains for different functions, all secured by the Bitcoin-backed mainchain.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#21212B]/40 p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Elastos Smart Chain (ESC)</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        EVM-compatible blockchain for smart contracts and DeFi applications
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">TPS:</span>
                        <span className="text-white">~100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Block Time:</span>
                        <span className="text-white">5s</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Gas Token:</span>
                        <span className="text-white">ELA</span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://escscan.elastos.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5C8EFF] text-sm hover:underline"
                        >
                          View Explorer →
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#21212B]/40 p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Elastos Identity Chain (EID)</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Specialized sidechain for self-sovereign identity and verifiable credentials
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Function:</span>
                        <span className="text-white">DID/VC</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Block Time:</span>
                        <span className="text-white">2m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Consensus:</span>
                        <span className="text-white">DPoS</span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://eid.elastos.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5C8EFF] text-sm hover:underline"
                        >
                          View Explorer →
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#21212B]/40 p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">BeL2</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        A Bitcoin Layer-2 solution for DeFi and smart contracts powered by Elastos
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Function:</span>
                        <span className="text-white">Bitcoin DeFi</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-white">In Development</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Bridge:</span>
                        <span className="text-white">Two-way</span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://bel2.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5C8EFF] text-sm hover:underline"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Merge Mining with Bitcoin
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Elastos is secured through merged mining with Bitcoin, inheriting Bitcoin's security without additional energy costs.
                  </p>
                  <div className="h-[300px]">
                    <MergeMiningViz />
                  </div>
                </div>

                <div className="bg-[#11111B]/40 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Hashrate Security
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Elastos typically secures over 50% of Bitcoin's total hashrate, making it one of the most secure blockchain networks.
                  </p>
                  <div className="h-[300px]">
                    <HashScaleViz />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <StackedCircularFooter />
    </div>
  );
}