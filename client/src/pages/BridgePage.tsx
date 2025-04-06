import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowDownCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Layers,
  Repeat,
  Shield,
  Smartphone,
  WalletCards,
  ExternalLink,
  AlertTriangle,
  Clock,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Timer,
  Shuffle,
  Plus,
  Minus
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function BridgePage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [shadowStep, setShadowStep] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>("native");

  const handleNextStep = () => {
    if (activeStepIndex < nativeBridgeSteps.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  // Native Bridge Steps
  const nativeBridgeSteps = [
    {
      title: "Open Elastos Essentials App",
      description: "Launch the Elastos Essentials App on your phone and access your wallet.",
      tips: [
        "Make sure you already have a wallet set up",
        "Check which network you are on by looking at the top right of the screen"
      ],
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "View Your Wallet Details",
      description: "Tap on your wallet name/identity area to see your ELA balance and wallet address.",
      tips: [
        "Verify you have enough ELA to transfer",
        "Confirm which chain your ELA is currently on"
      ],
      icon: <WalletCards className="w-8 h-8" />
    },
    {
      title: "Start a Transfer",
      description: "Tap on your ELA balance for the specific chain.",
      tips: [],
      icon: <Repeat className="w-8 h-8" />
    },
    {
      title: "Set Up the Transfer",
      description: "Tap the Transfer option at the bottom left. You'll see a screen showing that you are transferring from one chain to another.",
      tips: [
        "The transfer option is specifically for cross-chain transfers",
        "Regular send options won't bridge between chains"
      ],
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "Enter Amount & Confirm",
      description: "Type in the amount of ELA you wish to transfer, then tap Transfer and confirm the transaction.",
      tips: [
        "Double-check the amount and destination address",
        "To send to your own wallet: Leave the address as is",
        "To send to another address: Tap 'Use a custom destination address' and enter the new address"
      ],
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  const handleSectionToggle = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="relative w-full font-[200] min-h-screen text-white">
      {/* Full-width hero image with gradient overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img
          src="/images/Roadmap/Community crowd.png"
          alt="Elastos Bridge"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F7921A] to-[#8BABFF]">
                  ELA Bridge Guide
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                  Learn how to easily transfer your ELA between different blockchains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative pb-8 bg-[#171717]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* ELA Types Explanation */}
            <motion.div
              className="mb-12 bg-white/5 border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-[200] mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-[#F7921A]" />
                Understanding ELA Token Types
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="text-xl font-[200] mb-3 text-[#F7921A]">Native ELA</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#F7921A] mt-2 mr-2"></span>
                      <span className="text-base"><strong>Elastos Main Chain ELA</strong> - Layer 1 merged-mined chain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#F7921A] mt-2 mr-2"></span>
                      <span className="text-base"><strong>Elastos Smart Chain (ESC) ELA</strong> - Layer 2 smart contract chain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#F7921A] mt-2 mr-2"></span>
                      <span className="text-base"><strong>Elastos Identity Chain ELA</strong> - Layer 2 identity chain</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="text-xl font-[200] mb-3 text-[#8BABFF]">ERC-20 ELA</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#8BABFF] mt-2 mr-2"></span>
                      <span className="text-base"><strong>ELA on Ethereum</strong> - The ERC-20 version of ELA that runs on the Ethereum blockchain</span>
                    </li>
                    <li className="mt-4 text-white/70 italic text-base">
                      Note: ERC-20 ELA is a bridge token, not native to the Elastos ecosystem.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-start mb-4">
                  <Smartphone className="w-6 h-6 mr-3 text-[#F7921A] flex-shrink-0 mt-1" />
                  <p className="text-xl text-white/90 font-[200] leading-relaxed">For all transactions, you will need the Elastos Essentials App, available on iOS and Android.</p>
                </div>

                <div className="flex flex-wrap justify-center mt-4 gap-4">
                  <a
                    href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                  >
                    <img src="/images/Bridge/apple-logo.svg" alt="App Store" className="w-5 h-5" />
                    <span className="text-white">App Store</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    <span className="text-white">Google Play</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bridge Types Selector */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <motion.button
                  className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                    expandedSection === "native"
                      ? "bg-gradient-to-r from-[#F7921A]/20 to-[#F7921A]/10 border-[#F7921A]/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  } flex-1`}
                  onClick={() => handleSectionToggle("native")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#F7921A]/20 flex items-center justify-center mr-4">
                      <Repeat className="w-6 h-6 text-[#F7921A]" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-[200] text-xl">Native ELA Chain Bridging</h3>
                      <p className="text-base text-white/80 font-[200]">Between Elastos Main Chain, Smart Chain, and Identity Chain</p>
                    </div>
                  </div>
                  {expandedSection === "native" ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </motion.button>

                <motion.button
                  className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                    expandedSection === "erc20"
                      ? "bg-gradient-to-r from-[#8BABFF]/20 to-[#8BABFF]/10 border-[#8BABFF]/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  } flex-1`}
                  onClick={() => handleSectionToggle("erc20")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-[#8BABFF]" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-[200] text-xl">ERC-20 Bridging</h3>
                      <p className="text-base text-white/80 font-[200]">Between Elastos Smart Chain ELA and ERC-20 ELA</p>
                    </div>
                  </div>
                  {expandedSection === "erc20" ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </motion.button>
              </div>

              {/* Native Chain Bridging Section */}
              {expandedSection === "native" && (
                <motion.div
                  className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#F7921A]/20 flex items-center justify-center mr-3">
                      <Repeat className="w-5 h-5 text-[#F7921A]" />
                    </div>
                    <h2 className="text-2xl font-[200]">Native Chain Bridging Guide</h2>
                  </div>

                  <div className="mb-6 bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="text-lg font-[200] mb-2 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-[#F7921A]" />
                      What You Need:
                    </h3>
                    <ul className="space-y-2 text-white/80 font-[200]">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#F7921A] mr-2 mt-1" />
                        <span>Elastos Essentials App (make sure you already have a wallet)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#F7921A] mr-2 mt-1" />
                        <span>ELA in either Elastos Main Chain or Elastos Smart Chain (or Identity Chain)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Interactive Steps Section */}
                  <div className="border border-white/10 rounded-xl overflow-hidden">
                    {/* Progress Bar */}
                    <div className="bg-white/5 p-4 border-b border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-[200]">Progress</h3>
                        <span className="text-sm text-white/60 font-[200]">Step {activeStepIndex + 1} of {nativeBridgeSteps.length}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#F7921A] to-[#8BABFF]"
                          initial={{ width: `${(activeStepIndex / (nativeBridgeSteps.length - 1)) * 100}%` }}
                          animate={{ width: `${(activeStepIndex / (nativeBridgeSteps.length - 1)) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Steps Display */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Steps Sidebar */}
                        <div className="md:border-r md:border-white/10 pr-6">
                          <h4 className="font-[200] mb-4">All Steps</h4>
                          <div className="space-y-2">
                            {nativeBridgeSteps.map((step, index) => (
                              <button
                                key={index}
                                onClick={() => setActiveStepIndex(index)}
                                className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                                  index === activeStepIndex
                                    ? "bg-[#F7921A]/20 border border-[#F7921A]/30"
                                    : "hover:bg-white/5"
                                }`}
                              >
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                                  index === activeStepIndex
                                    ? "bg-[#F7921A]/30 text-[#F7921A]"
                                    : "bg-white/10 text-white/60"
                                }`}>
                                  {index + 1}
                                </div>
                                <span className={index === activeStepIndex ? "font-[200]" : "text-white/60 font-[200] "}>
                                  {step.title}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Active Step Details */}
                        <div className="md:col-span-2">
                          <motion.div
                            key={activeStepIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-9 h-9 rounded-full bg-[#F7921A]/20 flex items-center justify-center mr-3">
                                <div className="scale-75">
                                  {nativeBridgeSteps[activeStepIndex].icon}
                                </div>
                              </div>
                              <h3 className="text-xl font-[200]">
                                {nativeBridgeSteps[activeStepIndex].title}
                              </h3>
                            </div>

                            <div className="mb-8">
                              <p className="text-white/80 mb-4 font-[200]">
                                {nativeBridgeSteps[activeStepIndex].description}
                              </p>

                              {/* Step Screenshot */}
                              <div className="rounded-lg border border-white/10 overflow-hidden mb-6 shadow-lg max-w-sm mx-auto md:max-w-[35%]">
                                <img
                                  src={`/images/Bridge/${activeStepIndex + 1}.jpg`}
                                  alt={`Step ${activeStepIndex + 1} - ${nativeBridgeSteps[activeStepIndex].title}`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>

                              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <h4 className="text-sm font-[200] uppercase text-white/60 mb-2">Tips</h4>
                                <ul className="space-y-2 font-[200]">
                                  {nativeBridgeSteps[activeStepIndex].tips.map((tip, i) => (
                                    <li key={i} className="flex items-start">
                                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F7921A] mt-2 mr-2"></span>
                                      <span className="text-white/80">{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <button
                                onClick={handlePrevStep}
                                disabled={activeStepIndex === 0}
                                className={`inline-flex px-3 py-2 items-center gap-1 rounded-full font-[200] transition-all text-sm ${
                                  activeStepIndex === 0
                                    ? "bg-white/5 text-white/40 cursor-not-allowed"
                                    : "bg-[rgba(92,142,255,0.15)] text-white border border-[rgba(92,142,255,0.25)] hover:bg-[rgba(92,142,255,0.25)]"
                                }`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                </svg>
                                <span>Previous</span>
                              </button>

                              <button
                                onClick={handleNextStep}
                                disabled={activeStepIndex === nativeBridgeSteps.length - 1}
                                className={`inline-flex px-3 py-2 items-center gap-1 rounded-full font-[200] transition-all text-sm ${
                                  activeStepIndex === nativeBridgeSteps.length - 1
                                    ? "bg-white/5 text-white/40 cursor-not-allowed"
                                    : "bg-[rgba(92,142,255,0.15)] text-white border border-[rgba(92,142,255,0.25)] hover:bg-[rgba(92,142,255,0.25)]"
                                }`}
                              >
                                <span>Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-[#F7921A]/10 p-4 rounded-lg border border-[#F7921A]/30 flex items-start">
                    <Info className="w-5 h-5 mr-3 text-[#F7921A] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-[200] mb-1 text-[#F7921A]">Important Note</h4>
                      <p className="text-base text-white/90 font-[200] leading-relaxed">
                        The transaction will take 15 to 25 minutes. During this time, you might not see the funds on both chains.
                        Don't worry—the funds will appear after the process is complete.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ERC-20 Bridging Section */}
              {expandedSection === "erc20" && (
                <motion.div
                  className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#8BABFF]/20 flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-[#8BABFF]" />
                    </div>
                    <h2 className="text-2xl font-[200]">ERC-20 Bridging Guide</h2>
                  </div>

                  <div className="mb-6 bg-[#8BABFF]/10 p-4 rounded-lg border border-[#8BABFF]/20 flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-white/90 font-[200]">
                      <span className="font-[200]">Important:</span> Bridging here uses third-party services. Please bridge at your own risk.
                    </p>
                  </div>

                  <div className="mb-6 bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="text-lg font-[200] mb-2 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-[#8BABFF]" />
                      What You Need:
                    </h3>
                    <ul className="space-y-2 text-white/80 font-[200]">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-1" />
                        <span>Elastos Essentials App or Elastos Essentials Wallet</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-1" />
                        <span>For bridging from Smart Chain to ERC-20 ELA (or ELA on Ethereum): Some ETH in your Ethereum wallet (to cover transaction fees)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-1" />
                        <span>ELA on Elastos Smart Chain or ERC-20 ELA (depending on which direction you're bridging)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <Tabs defaultValue="shadow">
                      <TabsList className="w-full mb-4 bg-white/5">
                        <TabsTrigger value="shadow" className="flex-1 data-[state=active]:bg-[#8BABFF]/20 data-[state=active]:text-white font-[200]">
                          Shadow Token Bridge via Glide Finance
                        </TabsTrigger>
                        <TabsTrigger value="change" className="flex-1 data-[state=active]:bg-[#8BABFF]/20 data-[state=active]:text-white font-[200]">
                          Chainge Finance Bridge
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="shadow" className="border border-white/10 rounded-lg p-4">
                        <div className="space-y-4">
                          <div className="mb-4">
                            <h3 className="text-xl font-[200] mb-3 flex items-center">
                              <span className="mr-2 font-[200]">Shadow Token Bridge via</span>
                              <a href="https://glidefinance.io/bridge" target="_blank" rel="noopener noreferrer" className="text-[#8BABFF] hover:underline flex items-center font-[200]">
                                Glide Finance
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </a>
                            </h3>
                            <p className="text-white/80 mb-3 text-base leading-relaxed font-[200]">
                              Use the Glide Finance bridge powered by Shadowtokens protocol to securely move assets between Elastos Smart Chain, Ethereum, BSC, and Heco chains with minimal fees.
                            </p>
                          </div>

                          <div className="bg-white/5 rounded-xl border border-white/10 p-5 mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-[200] text-lg flex items-center mb-3">
                                  <ArrowDownCircle className="w-5 h-5 text-[#8BABFF] mr-2" />
                                  Minimum Requirements
                                </h4>
                                <div className="bg-white/5 p-3 rounded-md border border-white/5 mb-2">
                                  <div className="flex items-center">
                                    <ArrowDown className="w-4 h-4 text-[#8BABFF] mr-2" />
                                    <span>
                                      <span className="text-sm text-white/60 font-[200]">From ESC to ETH: </span>
                                      <span className="font-[200]">Minimum of 1000 ELA</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-md border border-white/5">
                                  <div className="flex items-center">
                                    <ArrowUp className="w-4 h-4 text-[#8BABFF] mr-2" />
                                    <span>
                                      <span className="text-sm text-white/60 font-[200]">From ETH to ESC: </span>
                                      <span className="font-[200]">Minimum of 1 ELA</span>
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-[200] text-lg flex items-center mb-3">
                                  <Clock className="w-5 h-5 text-[#8BABFF] mr-2" />
                                  Transaction Timing
                                </h4>
                                <div className="bg-white/5 p-3 rounded-md border border-white/5 mb-2">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 text-[#8BABFF] mr-2" />
                                    <span>
                                      <span className="text-sm text-white/60 font-[200]">Large Transactions: </span>
                                      <span className="font-[200]">Up to 24 hours for $10,000+</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-md border border-white/5">
                                  <div className="flex items-center">
                                    <Timer className="w-4 h-4 text-[#8BABFF] mr-2" />
                                    <span>
                                      <span className="text-sm text-white/60 font-[200]">Standard Transactions: </span>
                                      <span className="font-[200]">Minutes to hours for under $10,000</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-center mb-6">
                            <a
                              href="https://glidefinance.io/bridge"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                            >
                              Open Glide Finance Bridge
                            </a>
                          </div>

                          <div className="border border-white/10 rounded-xl overflow-hidden">
                            {/* Progress Bar */}
                            <div className="bg-white/5 p-4 border-b border-white/10">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="font-[200]">Progress</h3>
                                <span className="text-sm text-white/60 font-[200]">Step-by-step guide</span>
                              </div>
                              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-[#8BABFF] to-[#6495ED]"
                                  style={{ width: `${(shadowStep + 1) * 100 / 7}%` }}
                                />
                              </div>
                            </div>

                            {/* Steps Display */}
                            <div className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:border-r md:border-white/10 pr-6">
                                  <h4 className="font-[200] mb-4">All Steps</h4>
                                  <div className="space-y-2">
                                    {[
                                      "Select Networks",
                                      "Select Token",
                                      "Enter Amount",
                                      "Enable Token",
                                      "Bridge Token",
                                      "View Token",
                                      "After Bridging"
                                    ].map((step, index) => (
                                      <button
                                        key={index}
                                        onClick={() => setShadowStep(index)}
                                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                                          index === shadowStep
                                            ? "bg-[#8BABFF]/20 border border-[#8BABFF]/30"
                                            : "hover:bg-white/5"
                                        }`}
                                      >
                                        <div className="w-6 h-6 rounded-full bg-[#8BABFF]/30 flex items-center justify-center mr-3 text-xs text-[#8BABFF]">{index + 1}</div>
                                        <span className="text-sm font-[200]">{step}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Step Content */}
                                <div className="col-span-2">
                                  {shadowStep === 0 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <Shield className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">Select Networks for Bridge Direction</h3>
                                          <p className="text-white/60 font-[200]">Step 1 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            First, select the networks you'd like to bridge to and from. One of the networks must be Elastos as the Glide bridge doesn't support bridging ETH → Heco or Heco → ETH.
                                          </p>
                                          <div className="rounded-lg overflow-hidden border border-white/10 md:max-w-[52%] md:mx-auto">
                                            <img src="/images/Bridge/step1.png" alt="Select networks" className="w-full" />
                                          </div>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Tips
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>Make sure you're connected to the correct wallet address</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>Verify you have enough balance on the origin chain</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(1)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 1 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <Shuffle className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">Select Token to Bridge</h3>
                                          <p className="text-white/60 font-[200]">Step 2 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            Choose the token you wish to bridge. For this guide, we're selecting ELA.
                                          </p>
                                          <div className="rounded-lg overflow-hidden border border-white/10 md:max-w-[52%] md:mx-auto">
                                            <img src="/images/Bridge/step2.png" alt="Select ELA token" className="w-full" />
                                          </div>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Tips
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>Search for "ELA" in the dropdown if it doesn't appear immediately</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>The token list will only show tokens compatible with the selected networks</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(0)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <button
                                          onClick={() => setShadowStep(2)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 2 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <ArrowDownCircle className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">Enter the Amount to Bridge</h3>
                                          <p className="text-white/60 font-[200]">Step 3 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            Enter the amount of ELA you wish to bridge. Remember the minimum requirements from ESC to ETH is 1000 ELA.
                                          </p>
                                          <div className="rounded-lg overflow-hidden border border-white/10 md:max-w-[52%] md:mx-auto">
                                            <img src="/images/Bridge/step3.png" alt="Enter amount" className="w-full" />
                                          </div>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Important Information
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>From ESC to ETH: Minimum is 1000 ELA</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>From ETH to ESC: Minimum is 1 ELA</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>You can click "Max" to use your entire balance</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(1)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.075L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <button
                                          onClick={() => setShadowStep(3)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 3 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <RefreshCw className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">Enable Token (If First Time)</h3>
                                          <p className="text-white/60 font-[200]">Step 4 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            If this is your first time bridging this token, you'll need to enable it. Click the "Enable" button and confirm the transaction in your wallet.
                                          </p>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Tips
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>This step allows the bridge contract to interact with your tokens</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>You only need to do this once per token on each network</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>If you've bridged this token before, you might not see this step</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(2)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.075L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <button
                                          onClick={() => setShadowStep(4)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Next Step</span>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 4 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <Shield className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">Bridge Your Token</h3>
                                          <p className="text-white/60 font-[200]">Step 5 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            Click the "Bridge" button to initiate the bridge transaction. You'll need to confirm this transaction in your wallet.
                                          </p>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                                            Important Notes
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>Double-check all details before confirming the transaction</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>For large amounts (over $10,000), transactions may take up to 24 hours</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>When bridging to Ethereum, make sure you have enough ETH to cover gas fees</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(3)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <button
                                          onClick={() => setShadowStep(5)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 5 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <WalletCards className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">View Your Bridged Tokens</h3>
                                          <p className="text-white/60 font-[200]">Step 6 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            After your transaction is confirmed, you'll see it listed in your history. The tokens will arrive in your destination wallet once the bridge process is complete.
                                          </p>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Tips
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>The "History" tab shows all your past and pending transactions</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>You can check the status of your bridge operation here</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(4)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <button
                                          onClick={() => setShadowStep(6)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <span>Next Step</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}

                                  {shadowStep === 6 && (
                                    <div>
                                      <div className="flex items-start mb-5">
                                        <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                          <CheckCircle2 className="w-5 h-5 text-[#8BABFF]" />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-[200] mb-1">After Bridging</h3>
                                          <p className="text-white/60 font-[200]">Step 7 of 7</p>
                                        </div>
                                      </div>

                                      <div className="mb-6">
                                        <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                          <p className="text-base text-white/80 mb-4 font-[200]">
                                            Once the bridge process is complete, you'll see your tokens in your destination wallet. For ERC-20 tokens on Ethereum, you may need to add the token to your wallet to see the balance.
                                          </p>
                                        </div>

                                        <div className="bg-[#8BABFF]/10 rounded-lg border border-[#8BABFF]/20 p-4">
                                          <h4 className="flex items-center text-[#8BABFF] font-[200] mb-2">
                                            <Info className="w-4 h-4 mr-2" />
                                            Final Notes
                                          </h4>
                                          <ul className="space-y-2 text-sm font-[200]">
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>Larger transactions may take longer to complete</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>If you don't see your tokens on the destination chain, wait a bit longer</span>
                                            </li>
                                            <li className="flex items-start">
                                              <CheckCircle2 className="w-4 h-4 text-[#8BABFF] mr-2 mt-0.5" />
                                              <span>For issues, check the transaction history on both chains before contacting support</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="flex justify-between space-x-3 pt-4 border-t border-white/10">
                                        <button
                                          onClick={() => setShadowStep(5)}
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none" className="rotate-180">
                                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                                          </svg>
                                          <span>Previous</span>
                                        </button>
                                        <a
                                          href="https://glidefinance.io/bridge"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                                        >
                                          Go to Glide Bridge
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="change" className="border border-white/10 rounded-lg p-4">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-[200] mb-2 flex items-center">
                                <a href="https://chainge.finance" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center font-[200]">
                                  Chainge Finance Bridge
                                  <ExternalLink className="w-4 h-4 ml-1" />
                                </a>
                              </h3>
                              <p className="text-white/70 font-[200]">
                                An alternative option for bridging your ELA tokens between chains
                              </p>
                            </div>
                          </div>

                          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                              src="/images/Bridge/Chainge Finance.png"
                              alt="Chainge Finance Interface"
                              className="w-full object-cover"
                            />
                          </div>

                          <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                            <h4 className="text-lg font-[200] mb-4 flex items-center">
                              <Info className="w-5 h-5 mr-2 text-[#8BABFF]" />
                              About Chainge Finance
                            </h4>
                            <p className="text-white/80 mb-4 leading-relaxed font-[200]">
                              Chainge Finance provides a user-friendly cross-chain bridge that allows you to transfer ELA between Elastos Smart Chain and multiple other blockchains, including Ethereum. Their DCRM technology ensures secure and fast cross-chain transfers.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-4">
                              <a
                                href="https://chainge.finance"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                              >
                                Go to Chainge Finance
                              </a>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-[200]">Use at Your Own Risk</h4>
                      <p className="text-sm text-white/70 font-[200]">
                        Especially for ERC-20 bridging, third-party services are used. Make sure you understand the risks involved.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* FAQ Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-full overflow-hidden bg-card dark:bg-[#171717] border-0 shadow-none mt-8" style={{ boxShadow: 'none' }}>
                <div className="p-6 pl-0 pb-2">
                  <div className="flex flex-row items-center justify-between mb-2">
                    <h2 className="text-2xl md:text-3xl font-[400] text-foreground dark:text-foreground mb-0" style={{ fontWeight: 400 }}>Your Questions</h2>
                  </div>
                </div>
                <div className="p-6 pl-0 pt-0">
                  <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem
                      value="item-1"
                      key="item-1"
                      className="py-2 border-b border-border dark:border-neutral-800"
                    >
                      <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                        <span className="flex-grow pr-4">How long does bridging between native chains take?</span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                          <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground font-[200]">
                        Bridging between Elastos native chains (Main Chain, Smart Chain, and Identity Chain) usually takes between 15 to 25 minutes. During this time, you might not see your funds on either chain, but they will appear once the process is complete.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-2"
                      key="item-2"
                      className="py-2 border-b border-border dark:border-neutral-800"
                    >
                      <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                        <span className="flex-grow pr-4">What are the minimum amounts for bridging to ERC-20 ELA?</span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                          <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground font-[200]">
                        When using the Shadow Token Bridge, you need a minimum of 1000 ELA to bridge from Elastos Smart Chain to Ethereum (ERC-20 ELA). For the reverse direction, from Ethereum to Elastos Smart Chain, the minimum is just 1 ELA.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-3"
                      key="item-3"
                      className="py-2 border-b border-border dark:border-neutral-800"
                    >
                      <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                        <span className="flex-grow pr-4">Why do I need ETH for bridging to Ethereum?</span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                          <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground font-[200]">
                        When bridging to Ethereum, you need some ETH in your wallet to pay for the transaction fees (gas fees) on the Ethereum network. These fees vary based on network congestion and are required for any transaction on Ethereum.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-4"
                      key="item-4"
                      className="py-2 border-b border-border dark:border-neutral-800"
                    >
                      <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                        <span className="flex-grow pr-4">Is ERC-20 ELA the same as native ELA?</span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                          <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground font-[200]">
                        No, ERC-20 ELA is a bridge token that represents ELA on the Ethereum blockchain. It is not native to the Elastos ecosystem but allows ELA to be used within Ethereum's ecosystem. Native ELA exists on Elastos Main Chain, Smart Chain, and Identity Chain.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-5"
                      key="item-5"
                      className="py-2 border-b border-border dark:border-neutral-800"
                    >
                      <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                        <span className="flex-grow pr-4">Which wallet should I use for bridging?</span>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                          <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground font-[200]">
                        The Elastos Essentials App is recommended for all bridging operations as it provides a seamless experience for managing ELA across different chains. It's available on both iOS and Android.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </motion.div>

            {/* Additional Help Section */}
            <motion.div
              className="bg-gradient-to-r from-[#F7921A]/20 to-[#8BABFF]/20 border border-white/10 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-[200] mb-2">Need More Help?</h2>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto font-[200]">
                If you have any questions or need additional assistance with bridging your ELA tokens, join the Elastos community channels for support.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://t.me/elastosgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/15 rounded-lg transition-all font-[200]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span>Telegram Community</span>
                </a>

                <a
                  href="https://discord.gg/elastos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/15 rounded-lg transition-all font-[200]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  <span>Discord Channel</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}