
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

export default function ExplorerRedesignedPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen bg-[#141414] overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img
              src="/elastos-logo-dark.png"
              alt="Elastos"
              className="h-10 w-auto"
            />
            <button className="px-4 py-2.5 bg-gradient-to-r from-[#F7921A]/20 to-[#8BABFF]/20 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-white/10 text-sm hover:bg-white/5 hover:scale-105 shadow-lg shadow-black/20">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Dynamic background with brand colors */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F7921A]/10 blur-[150px] opacity-40 animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#8BABFF]/10 blur-[180px] opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#8BABFF]/5 blur-[120px] opacity-20"></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animation: 'pulse 4s infinite'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 text-center"
            >
              <div className="inline-block mb-5 px-4 py-1.5 bg-gradient-to-r from-[#F7921A]/20 to-[#8BABFF]/20 rounded-full border border-white/10">
                <span className="text-sm font-medium text-white/80">Explore the Elastos Chains</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7921A] to-[#F7921A]/80">Elastos</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8BABFF] to-[#8BABFF]/80">Blockchain</span>{" "}
                <span className="relative">
                  Explorers
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F7921A] to-[#8BABFF]/80"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  ></motion.div>
                </span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/70 mt-6 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Access real-time data across the Elastos mainchain-sidechain architecture — track transactions, verify smart contracts, and explore the networks!
              </motion.p>
              
              {/* Quick links to explorers */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {elastosChains.map((chain, index) => (
                  <a 
                    key={index}
                    href={chain.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2.5 ${chain.textColor} rounded-full font-medium flex items-center gap-2 border ${chain.borderColor} hover:bg-white/5 transition-all`}
                  >
                    <span>{chain.shortName} Explorer</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Chain Explorer Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.00] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            The <span className="text-[#8BABFF]">Elastos</span> Mainchain-Sidechain Architecture
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto"
          >
            Explore the specialized blockchains that make up the Elastos ecosystem
          </motion.p>

          {/* Tabs for chain selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex rounded-lg bg-white/5 p-2 backdrop-blur-sm border border-white/5 shadow-xl shadow-black/30">
              {elastosChains.map((chain, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`px-5 py-3 rounded-lg font-medium transition-all flex flex-col items-center gap-2 ${
                    activeTab === index
                      ? `${chain.glowColor} ${chain.textColor} border ${chain.borderColor}`
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full ${activeTab === index ? chain.textColor : 'text-white/50'} flex items-center justify-center`}>
                    {index === 0 ? (
                      <Box className="w-4 h-4" />
                    ) : index === 1 ? (
                      <Code className="w-4 h-4" />
                    ) : (
                      <Fingerprint className="w-4 h-4" />
                    )}
                  </div>
                  {activeTab === index ? (
                    <div className="relative">
                      <span>{chain.shortName}</span>
                      <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r ${chain.gradientColors}`}></div>
                    </div>
                  ) : (
                    <span>{chain.shortName}</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Chain Content */}
          <div className="max-w-6xl mx-auto">
            {elastosChains.map((chain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ 
                  opacity: activeTab === index ? 1 : 0,
                  x: activeTab === index ? 0 : (index % 2 === 0 ? -20 : 20),
                  display: activeTab === index ? "flex" : "none"
                }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8 items-start"
              >
                {/* Chain Icon/Visual */}
                <div className="md:col-span-1">
                  <div className={`rounded-2xl bg-gradient-to-b ${chain.color} p-8 flex items-center justify-center ${chain.borderColor} border relative group overflow-hidden`}>
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5C8EFF]/0 via-[#5C8EFF]/10 to-[#5C8EFF]/0 -translate-x-full group-hover:translate-x-full transition-all duration-1500"></div>
                    
                    <div className="w-32 h-32 rounded-full bg-[#141414] flex items-center justify-center border border-[#5C8EFF]/30 relative z-10">
                      <div className="w-24 h-24 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
                        {chain.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chain Details */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                    {chain.name}
                    <span className="ml-3 px-2 py-1 bg-[#5C8EFF]/10 text-[#5C8EFF] text-sm rounded-full">
                      {index === 0 ? "Layer 1" : "Layer 2"}
                    </span>
                  </h3>
                  <p className="text-white/70 text-lg mb-8">
                    {chain.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {chain.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-lg bg-white/5 border ${chain.borderColor} flex items-start gap-3`}
                      >
                        <div className={`w-5 h-5 rounded-full ${chain.textColor} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                          <CircleCheck className="w-4 h-4" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explorer Button */}
                  <a 
                    href={chain.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${chain.textColor} rounded-xl font-medium transition-all border ${chain.borderColor} hover:bg-white/5 shadow-lg`}
                  >
                    <span>{chain.ctaText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-[#F7921A]">Elastos</span> <span className="text-[#8BABFF]">Essentials</span> Wallet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the official Elastos wallet with native support for the entire Elastos ecosystem
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-10 border border-[#8BABFF]/20 max-w-5xl mx-auto relative overflow-hidden"
            >
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>
              
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/elastos-essentials-phone-new.png" 
                    alt="Elastos Essentials" 
                    className="w-full max-w-[250px] rounded-xl shadow-lg shadow-black/20"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Complete Elastos Experience</h3>
                  <div className="space-y-4 text-white/70">
                    <p>Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Integrated DID (Decentralized Identity) management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Secure digital asset management with multi-chain support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Built-in DApp browser and credential manager</span>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                      >
                        <img src="/apple-logo.svg" alt="App Store" className="w-5 h-5" />
                        <span className="text-white">App Store</span>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                      >
                        <img src="/google-play.svg" alt="Google Play" className="w-5 h-5" />
                        <span className="text-white">Google Play</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELA Token Information - Reimagined */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-[#8BABFF]">ELA</span> Across Networks
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                ELA exists as native coins on the Mainchain and as tokens on sidechains and external networks
              </p>
            </motion.div>

            {/* Card-based token display instead of table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {elaTokens.map((token, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl bg-gradient-to-br from-white/5 to-transparent border ${token.borderColor} p-6 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${token.iconBg} flex items-center justify-center shrink-0 border ${token.borderColor}`}>
                      {index === 0 ? (
                        <Box className="w-6 h-6 text-[#FF9900]" />
                      ) : index === 1 ? (
                        <Code className="w-6 h-6 text-[#6371C7]" />
                      ) : index === 2 ? (
                        <Fingerprint className="w-6 h-6 text-[#C75DC4]" />
                      ) : (
                        <Globe className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-white">{token.network}</h3>
                        <span className="px-2 py-1 bg-[#5C8EFF]/10 text-[#5C8EFF] text-xs rounded-full">
                          {token.tokenType}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mb-4">{token.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-white/50 text-sm">
                          <span className="text-white/80">{token.chainId}</span>
                        </div>
                        <a 
                          href={token.explorerUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 border text-xs hover:bg-opacity-15 ${
                            index === 0 
                            ? "bg-orange-500/10 text-orange-400 border-orange-500/30" 
                            : index === 1 
                              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" 
                              : index === 2
                                ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          <span>View</span>
                          <CircleArrow className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ethereum Token Info - More dynamic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 rounded-xl bg-gradient-to-br from-[#5C8EFF]/10 to-transparent p-8 border border-[#5C8EFF]/20 relative overflow-hidden"
            >
              {/* Background elements */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#5C8EFF]/5 blur-[50px]"></div>
              <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#5C8EFF]/5 blur-[30px]"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5C8EFF]/20 to-emerald-500/10 flex items-center justify-center shrink-0 border border-[#5C8EFF]/30 shadow-lg shadow-[#5C8EFF]/5">
                  <LinkIcon className="w-8 h-8 text-[#5C8EFF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">ELA on Ethereum</h3>
                  <p className="text-white/70 mb-6">
                    ELA on Ethereum is a bridged version of Elastos' native coin that operates on the Ethereum blockchain as an ERC20 token. 
                    It allows ELA to be used in Ethereum's DeFi ecosystem, enabling cross-chain interactions and broader utility for Elastos assets.
                  </p>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-sm text-white/60 mb-1">ERC-20 Contract Address</div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#5C8EFF] break-all font-mono text-sm md:text-base">0xe6fd75ff38adca4b97fbcd938c86b98772431867</div>
                      <a 
                        href="https://etherscan.io/token/0xe6fd75ff38adca4b97fbcd938c86b98772431867" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="ml-4 shrink-0 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full font-medium transition-all flex items-center gap-1 border border-emerald-500/30 text-xs hover:bg-emerald-500/15"
                      >
                        <span>View on Etherscan</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414] to-[#141414] z-0"></div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#5C8EFF]/5 blur-[80px]"></div>
          <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Why <span className="text-[#8BABFF]">Mainchain-Sidechain</span> Architecture
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto"
          >
            Elastos combines the strengths of multiple specialized blockchains to create a powerful ecosystem
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{ y: -5 }}
                className={`rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 border ${feature.border} relative overflow-hidden transition-all duration-300`}
              >
                {/* Animated highlight on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full transition-transform duration-700 ease-in-out ${hoveredFeature === index ? 'translate-x-0' : '-translate-x-full'}`}></div>
                
                <div className="w-14 h-14 rounded-xl bg-[#5C8EFF]/10 flex items-center justify-center mb-6 border border-[#5C8EFF]/20 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">{feature.title}</h3>
                <p className="text-white/70 relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wallet Setup Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.01] to-white/[0.00] z-0"></div>
        
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#F7921A]/5 blur-[150px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#8BABFF]/5 blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Setting Up <span className="text-[#8BABFF]">ESC & EID</span> on External Wallets
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Configure MetaMask or other compatible wallets to connect with Elastos networks
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ESC Network Setup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-gradient-to-br from-[#8BABFF]/10 to-transparent border border-[#8BABFF]/20 p-8 hover:border-[#8BABFF]/30 transition-all shadow-lg shadow-[#8BABFF]/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#8BABFF]/10 flex items-center justify-center border border-[#8BABFF]/30">
                    <Code className="w-6 h-6 text-[#8BABFF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Elastos Smart Chain (ESC)</h3>
                </div>
                
                <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                  <p className="text-sm text-white/60 mb-1">Layer 2 of Elastos Mainchain</p>
                  <p className="text-white/80 text-sm">ESC is the Ethereum-compatible sidechain focused on smart contracts and dApp development</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Network Name</span>
                      <span className="text-white font-medium">ESC (Main)</span>
                    </div>
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Chain ID</span>
                      <span className="text-white font-medium">0x14 (Hex) or 20 (Decimal)</span>
                    </div>
                  </div>
                  
                  <div className="px-4 py-3 bg-white/5 rounded-lg">
                    <span className="text-xs text-white/60 block mb-1">RPC URL</span>
                    <span className="text-[#8BABFF] font-mono text-sm break-all">https://api.elastos.io/eth</span>
                    <span className="text-white/50 text-xs block mt-1">(Asia)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Currency Symbol</span>
                      <span className="text-white font-medium">ELA</span>
                    </div>
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Block Explorer URL</span>
                      <a 
                        href="https://esc.elastos.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8BABFF] hover:underline text-sm break-all"
                      >
                        https://esc.elastos.io/
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* EID Network Setup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-gradient-to-br from-[#8BABFF]/10 to-transparent border border-[#8BABFF]/20 p-8 hover:border-[#8BABFF]/30 transition-all shadow-lg shadow-[#8BABFF]/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#8BABFF]/10 flex items-center justify-center border border-[#8BABFF]/30">
                    <Fingerprint className="w-6 h-6 text-[#8BABFF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Elastos Identity Chain (EID)</h3>
                </div>
                
                <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                  <p className="text-sm text-white/60 mb-1">Layer 2 of Elastos Mainchain</p>
                  <p className="text-white/80 text-sm">EID is a specialized sidechain for decentralized identity solutions</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Network Name</span>
                      <span className="text-white font-medium">EID (Main)</span>
                    </div>
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Chain ID</span>
                      <span className="text-white font-medium">22</span>
                    </div>
                  </div>
                  
                  <div className="px-4 py-3 bg-white/5 rounded-lg">
                    <span className="text-xs text-white/60 block mb-1">RPC URL</span>
                    <span className="text-[#8BABFF] font-mono text-sm break-all">https://api.elastos.io/eid</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Currency Symbol</span>
                      <span className="text-white font-medium">ELA</span>
                    </div>
                    <div className="px-4 py-3 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/60 block mb-1">Block Explorer URL</span>
                      <a 
                        href="https://eid.elastos.io/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#8BABFF] hover:underline text-sm break-all"
                      >
                        https://eid.elastos.io/
                      </a>

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Token Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-white/80 space-y-4">
                <p>
                  The Elastos mainchain-sidechain architecture is designed in such a way that ELA is the native token on the mainchain and all supported sidechains. ELA can be mapped between the mainchain and its various sidechains at a 1:1 ratio.
                </p>
                <p>
                  In addition, wrapped versions of ELA may be available on other public blockchains. The table above lists the different existing versions of ELA.
                </p>
                <p className="text-[#F7921A]/90 font-medium">
                  Note: ERC-20 ELA is a bridge token and not native to the Elastos ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Elevated */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-white/[0.00] z-0"></div>
        
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#8BABFF]/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8BABFF]/5 blur-[150px]"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-12 border border-[#8BABFF]/20 relative overflow-hidden"
            >
              {/* Background shapes */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Start Building on <span className="text-[#8BABFF]">Elastos</span> Today
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join the Elastos ecosystem and build the next generation of Web3 applications with secure identity, scalable smart contracts, and mainchain-sidechain capabilities
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F7921A] to-[#8BABFF] text-white font-medium rounded-full hover:bg-[#8BABFF]/90 transition-colors shadow-lg shadow-[#8BABFF]/20"
                >
                  <span>Developer Portal</span>
                  <MoveRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { ExplorerPage } from "@/components/ExplorerPage";

export default function Explorer() {
  return <ExplorerPage />;
}
