import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, WalletCards, Repeat, Layers, CreditCard, Send, ShieldCheck, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

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
      icon: <Smartphone className="w-6 h-6 text-[#F7921A]" />
    },
    {
      title: "View Your Wallet Details",
      description: "Tap on your wallet name/identity area to see your ELA balance and wallet address.",
      tips: [
        "Verify you have enough ELA to transfer",
        "Confirm which chain your ELA is currently on"
      ],
      icon: <WalletCards className="w-6 h-6 text-[#F7921A]" />
    },
    {
      title: "Start a Transfer",
      description: "Tap on your ELA balance for the specific chain.",
      tips: [],
      icon: <Repeat className="w-6 h-6 text-[#F7921A]" />
    },
    {
      title: "Set Up the Transfer",
      description: "Tap the Transfer option at the bottom left. You'll see a screen showing that you are transferring from one chain to another.",
      tips: [
        "The transfer option is specifically for cross-chain transfers",
        "Regular send options won't bridge between chains"
      ],
      icon: <Layers className="w-6 h-6 text-[#F7921A]" />
    },
    {
      title: "Enter Amount & Confirm",
      description: "Type in the amount of ELA you wish to transfer, then tap Transfer and confirm the transaction.",
      tips: [
        "Make sure to leave enough for transaction fees",
        "Double-check the receiving address before confirming"
      ],
      icon: <CreditCard className="w-6 h-6 text-[#F7921A]" />
    }
  ];

  // Shadow Token Bridge Steps
  const shadowBridgeSteps = [
    {
      title: "Connect Your Wallet",
      description: "Go to the Glide Finance bridge page and connect your wallet.",
      tips: [
        "Make sure you're using a compatible wallet like MetaMask or Elastos Essentials",
        "Ensure you have the correct network selected in your wallet"
      ],
      image: "/images/Bridge/glide-bridge-steps/step1.png"
    },
    {
      title: "Select Chains",
      description: "Choose the source chain (where your tokens currently are) and the destination chain (where you want to bridge them to).",
      tips: [
        "Popular pairs include Elastos Smart Chain (ESC) to Ethereum and vice versa",
        "Make sure both chains are properly configured in your wallet"
      ],
      image: "/images/Bridge/glide-bridge-steps/step2.png"
    },
    {
      title: "Select Token",
      description: "Choose the token you want to bridge from the dropdown menu.",
      tips: [
        "Not all tokens are available for bridging",
        "Some tokens may have minimum and maximum bridge amounts"
      ],
      image: "/images/Bridge/glide-bridge-steps/step3.png"
    },
    {
      title: "Enter Amount",
      description: "Enter the amount of tokens you wish to bridge to the destination chain.",
      tips: [
        "Be aware of the bridge fees which vary by token and network congestion",
        "Ensure you have enough native tokens (ETH, ELA, etc.) for gas fees"
      ],
      image: "/images/Bridge/glide-bridge-steps/step4.png"
    },
    {
      title: "Bridge Your Token",
      description: "Click the 'Bridge' button to initiate the bridge transaction. You'll need to confirm this transaction in your wallet.",
      tips: [
        "This step will require a signature from your wallet",
        "Never share your wallet seed phrase or private keys with anyone"
      ],
      image: "/images/Bridge/glide-bridge-steps/step5.png"
    },
    {
      title: "Confirmation & Waiting",
      description: "After confirming the transaction, you'll see a confirmation screen with the transaction status.",
      tips: [
        "The bridging process can take several minutes to complete",
        "You can check the transaction status on the respective block explorers"
      ],
      image: "/images/Bridge/glide-bridge-steps/step6.png"
    },
    {
      title: "Completion",
      description: "Once the bridge process is complete, you'll see the tokens in your wallet on the destination chain.",
      tips: [
        "You may need to add the token to your wallet manually on the destination chain",
        "If tokens don't appear after a significant time, check the transaction on a block explorer"
      ],
      image: "/images/Bridge/glide-bridge-steps/step7.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#171717] text-white pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F7921A] to-[#F7921A]/70">
            Bridge Your ELA
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Move your ELA tokens between different chains in the Elastos ecosystem. Choose your preferred method below.
          </p>
        </div>

        {/* Bridge Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Native Bridge Option */}
          <div 
            className={cn(
              "bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden transition-all duration-300",
              expandedSection === "native" ? "col-span-2" : ""
            )}
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => setExpandedSection(expandedSection === "native" ? null : "native")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7921A]/20 flex items-center justify-center">
                    <Repeat className="w-6 h-6 text-[#F7921A]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Native Bridge</h2>
                    <p className="text-white/60">Bridge ELA between Elastos mainchain and sidechains</p>
                  </div>
                </div>
                <div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${expandedSection === "native" ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {expandedSection === "native" && (
              <div className="px-6 pb-6">
                <div className="bg-[#252525] rounded-xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-[#2a2a2a] rounded-xl p-4 h-full">
                        <h3 className="font-medium mb-4">What you'll need:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#F7921A]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">Elastos Essentials App</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#F7921A]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">ELA tokens on source chain</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#F7921A]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">Small amount for gas fees</span>
                          </li>
                        </ul>

                        <div className="mt-8">
                          <h3 className="font-medium mb-2">Download App:</h3>
                          <div className="flex gap-2 mt-4">
                            <a 
                              href="https://apps.apple.com/us/app/elastos-essentials/id1568931743" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-[#333] rounded-md px-3 py-2 hover:bg-[#444] transition"
                            >
                              <img src="/images/Bridge/apple-logo.svg" alt="Apple App Store" className="w-5 h-5" />
                              <span className="text-sm">App Store</span>
                            </a>
                            <a 
                              href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-[#333] rounded-md px-3 py-2 hover:bg-[#444] transition"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                              </svg>
                              <span className="text-sm">Play Store</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Steps Display */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Steps Sidebar */}
                        <div className="md:border-r md:border-white/10 pr-6">
                          <h4 className="font-medium mb-4">All Steps</h4>
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
                                <span className={index === activeStepIndex ? "font-medium" : "text-white/60"}>
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
                              <div className="w-12 h-12 rounded-full bg-[#F7921A]/20 flex items-center justify-center mr-4">
                                {nativeBridgeSteps[activeStepIndex].icon}
                              </div>
                              <h3 className="text-xl font-semibold">
                                {nativeBridgeSteps[activeStepIndex].title}
                              </h3>
                            </div>

                            <div className="mb-8">
                              <p className="text-white/80 mb-4">
                                {nativeBridgeSteps[activeStepIndex].description}
                              </p>

                              <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
                                <img 
                                  src={`/images/Bridge/${activeStepIndex + 1}.jpg`} 
                                  alt={`Step ${activeStepIndex + 1}`} 
                                  className="w-full"
                                />
                              </div>

                              {nativeBridgeSteps[activeStepIndex].tips.length > 0 && (
                                <div className="bg-[#2a2a2a] rounded-lg p-4">
                                  <h4 className="text-sm font-medium text-[#F7921A] mb-2">Tips</h4>
                                  <ul className="space-y-1">
                                    {nativeBridgeSteps[activeStepIndex].tips.map((tip, i) => (
                                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                        <div className="rounded-full bg-[#F7921A]/20 p-1 mt-0.5 flex-shrink-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F7921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                          </svg>
                                        </div>
                                        {tip}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between">
                              <button 
                                onClick={handlePrevStep}
                                className={`px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 ${
                                  activeStepIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/5"
                                }`}
                                disabled={activeStepIndex === 0}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="19" y1="12" x2="5" y2="12"></line>
                                  <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Previous
                              </button>

                              <button 
                                onClick={handleNextStep}
                                className={`px-4 py-2 rounded-lg bg-[#F7921A] text-black flex items-center gap-2 ${
                                  activeStepIndex === nativeBridgeSteps.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F7921A]/90"
                                }`}
                                disabled={activeStepIndex === nativeBridgeSteps.length - 1}
                              >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shadow Token Bridge */}
          <div 
            className={cn(
              "bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden transition-all duration-300",
              expandedSection === "shadow" ? "col-span-2" : ""
            )}
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => setExpandedSection(expandedSection === "shadow" ? null : "shadow")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#8BABFF]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Shadow Token Bridge</h2>
                    <p className="text-white/60">Bridge ERC-20 assets via Glide Finance</p>
                  </div>
                </div>
                <div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${expandedSection === "shadow" ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {expandedSection === "shadow" && (
              <div className="px-6 pb-6">
                <div className="bg-[#252525] rounded-xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-[#2a2a2a] rounded-xl p-4 h-full">
                        <h3 className="font-medium mb-4">What you'll need:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#8BABFF]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8BABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">Web3 wallet (MetaMask, etc.)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#8BABFF]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8BABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">Tokens on source chain</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-[#8BABFF]/20 p-1 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8BABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-white/70 text-sm">Gas fees in native token</span>
                          </li>
                        </ul>

                        <div className="mt-8">
                          <h3 className="font-medium mb-2">Bridge Providers:</h3>
                          <div className="space-y-2 mt-4">
                            <a 
                              href="https://glidefinance.io/bridge" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-[#333] rounded-md px-3 py-2 hover:bg-[#444] transition w-full"
                            >
                              <img src="/images/glide.png" alt="Glide Finance" className="w-5 h-5 rounded-full" />
                              <span className="text-sm">Glide Finance</span>
                            </a>
                            <a 
                              href="https://chainge.finance/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-[#333] rounded-md px-3 py-2 hover:bg-[#444] transition w-full"
                            >
                              <img src="/images/chainge.png" alt="Chainge Finance" className="w-5 h-5 rounded-full" />
                              <span className="text-sm">Chainge Finance</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Steps Display */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Steps Sidebar */}
                        <div className="md:border-r md:border-white/10 pr-6">
                          <h4 className="font-medium mb-4">All Steps</h4>
                          <div className="space-y-2">
                            {shadowBridgeSteps.map((step, index) => (
                              <button
                                key={index}
                                onClick={() => setShadowStep(index)}
                                className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                                  index === shadowStep 
                                    ? "bg-[#8BABFF]/20 border border-[#8BABFF]/30" 
                                    : "hover:bg-white/5"
                                }`}
                              >
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                                  index === shadowStep 
                                    ? "bg-[#8BABFF]/30 text-[#8BABFF]" 
                                    : "bg-white/10 text-white/60"
                                }`}>
                                  {index + 1}
                                </div>
                                <span className={index === shadowStep ? "font-medium" : "text-white/60"}>
                                  {step.title}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Active Step Details */}
                        <div className="md:col-span-2">
                          <motion.div
                            key={shadowStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 border border-[#8BABFF]/30 flex items-center justify-center mr-4">
                                <Shield className="w-5 h-5 text-[#8BABFF]" />
                              </div>
                              <div>
                                <h3 className="text-xl font-medium mb-1">{shadowBridgeSteps[shadowStep].title}</h3>
                                <p className="text-white/60">Step {shadowStep + 1} of {shadowBridgeSteps.length}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <div className="bg-white/5 rounded-lg border border-white/10 p-5 mb-4">
                                <p className="text-base text-white/80 mb-4">
                                  {shadowBridgeSteps[shadowStep].description}
                                </p>
                                <div className="rounded-lg overflow-hidden border border-white/10">
                                  <img src={shadowBridgeSteps[shadowStep].image} alt={shadowBridgeSteps[shadowStep].title} className="w-full" />
                                </div>
                              </div>

                              {shadowBridgeSteps[shadowStep].tips.length > 0 && (
                                <div className="bg-[#2a2a2a] rounded-lg p-4">
                                  <h4 className="text-sm font-medium text-[#8BABFF] mb-2">Tips</h4>
                                  <ul className="space-y-1">
                                    {shadowBridgeSteps[shadowStep].tips.map((tip, i) => (
                                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                        <div className="rounded-full bg-[#8BABFF]/20 p-1 mt-0.5 flex-shrink-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8BABFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                          </svg>
                                        </div>
                                        {tip}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between">
                              <button 
                                onClick={() => setShadowStep(prev => prev > 0 ? prev - 1 : prev)}
                                className={`px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 ${
                                  shadowStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/5"
                                }`}
                                disabled={shadowStep === 0}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="19" y1="12" x2="5" y2="12"></line>
                                  <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Previous
                              </button>

                              <button 
                                onClick={() => setShadowStep(prev => prev < shadowBridgeSteps.length - 1 ? prev + 1 : prev)}
                                className={`px-4 py-2 rounded-lg bg-[#8BABFF] text-black flex items-center gap-2 ${
                                  shadowStep === shadowBridgeSteps.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8BABFF]/90"
                                }`}
                                disabled={shadowStep === shadowBridgeSteps.length - 1}
                              >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokecurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Third-Party Bridges (Optional) */}
          <div className="bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden col-span-2">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Third-Party Bridges</h2>
                  <p className="text-white/60">Additional options for bridging ELA tokens</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://chainge.finance/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#252525] rounded-lg p-4 hover:bg-[#2a2a2a] transition-all border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src="/images/chainge.png" alt="Chainge Finance" className="w-8 h-8 rounded-full" />
                    <h3 className="font-medium">Chainge Finance</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-3">
                    Chainge Finance offers cross-chain solutions for moving assets between multiple blockchains including Elastos.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Multiple chains supported</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>

                <a 
                  href="https://github.com/elastos/Elastos.ELA.SideChain.CrossChain" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#252525] rounded-lg p-4 hover:bg-[#2a2a2a] transition-all border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-8 h-8 text-white/70" />
                    <h3 className="font-medium">CrossChain Documentation</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-3">
                    Technical documentation for developers about Elastos cross-chain functionality and implementation.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">For developers</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div className="bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium">What is the difference between native and shadow token bridges?</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-white/70">
                <p>
                  The native bridge moves the actual ELA token between the Elastos mainchain and its sidechains. Shadow token bridges (like Glide Finance) create wrapped representations of tokens on different chains, enabling cross-chain functionality for ERC-20 tokens.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium">How long do bridge transactions typically take?</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-white/70">
                <p>
                  Native bridge transactions usually take 2-5 minutes to complete. Shadow token bridge transactions can vary depending on network congestion, typically ranging from 5-30 minutes. During periods of high network activity, transactions may take longer.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium">Are there any fees for bridging tokens?</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-white/70">
                <p>
                  Yes, there are typically two types of fees:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Network gas fees for transactions on both the source and destination chains</li>
                  <li>Bridge service fees (varies by provider, typically 0.1%-0.5% of the transaction amount)</li>
                </ul>
                <p className="mt-2">
                  Native bridge transactions generally have lower fees compared to third-party bridge providers.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-[#1c1c1c] rounded-xl border border-[#333333] overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium">What should I do if my bridged tokens don't arrive?</h3>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-white/70">
                <p>
                  If your tokens don't arrive after the expected time:
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>First, check the transaction status on the respective blockchain explorers</li>
                  <li>Verify that you've added the correct token contract address to your wallet on the destination chain</li>
                  <li>Check if the bridge provider has a transaction history or status page</li>
                  <li>Contact the bridge provider's support with your transaction details</li>
                </ol>
                <p className="mt-2">
                  In most cases, tokens are not lost but might be delayed due to network congestion or technical issues.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}