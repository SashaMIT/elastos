import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export function ScalingSection2() {
  const [activeTab, setActiveTab] = useState('public');

  return (
    <div className="w-full bg-background dark:bg-[#171717] text-foreground py-32">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        ELA: The Fuel of Elastos
      </h2>
      <div className="container mx-auto px-4 lg:px-[180px] max-w-1xl">
        <div className="flex justify-center mb-16">
          <div className="rounded-full border-[0.5px] border-[#95B5FF]/30 bg-[#95B5FF]/10 dark:bg-[#95B5FF]/10 flex">
            <button
              onClick={() => setActiveTab('public')}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeTab === 'public' 
                  ? "bg-[#95B5FF] text-black" 
                  : "bg-transparent text-white dark:text-white hover:scale-105 hover:shadow-inner"
              )}
            >
              Core Functions
            </button>
            <button
              onClick={() => setActiveTab('ecosystem')}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeTab === 'ecosystem' 
                  ? "bg-[#95B5FF] text-black" 
                  : "bg-transparent text-white dark:text-white hover:scale-105 hover:shadow-inner"
              )}
            >
              Trade ELA
            </button>
          </div>
        </div>

        {activeTab === 'public' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#5C8EFF]/5 to-transparent border border-[#5C8EFF]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Secure & Decentralized
                </h3>
                <p className="text-gray-400 mb-4">
                  ELA is secured by Bitcoin's massive hashpower through merge mining, making it one of the most secure networks in crypto.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#5C8EFF]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5C8EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">HASH RATE SECURITY</div>
                    <div className="text-xl font-semibold text-white">60+ EH/s</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#5C8EFF]/5 to-transparent border border-[#5C8EFF]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Elastic & Scalable
                </h3>
                <p className="text-gray-400 mb-4">
                  ELA powers a multi-chain architecture that can scale to handle millions of transactions with specialized sidechains for different services.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#5C8EFF]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5C8EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">TPS CAPACITY</div>
                    <div className="text-xl font-semibold text-white">Thousands</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#5C8EFF]/5 to-transparent border border-[#5C8EFF]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Gas & Governance
                </h3>
                <p className="text-gray-400 mb-4">
                  ELA powers transactions across all Elastos chains and gives holders voting rights in the decentralized governance system.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#5C8EFF]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5C8EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">DAO TREASURY</div>
                    <div className="text-xl font-semibold text-white">1.24M ELA</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#5C8EFF]/5 to-transparent border border-[#5C8EFF]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Limited Supply
                </h3>
                <p className="text-gray-400 mb-4">
                  With a maximum supply of 28.2 million, ELA is a scarce digital asset with Bitcoin-like emission schedule and halvings.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#5C8EFF]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5C8EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">MAX SUPPLY</div>
                    <div className="text-xl font-semibold text-white">28.2M ELA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/ecosystem" className="px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm inline-flex">
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'ecosystem' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#F7921A]/5 to-transparent border border-[#F7921A]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Centralized Exchanges
                </h3>
                <p className="text-gray-400 mb-4">
                  Purchase ELA directly with fiat currency or other cryptocurrencies on trusted exchanges.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/Kucoin.png" alt="Kucoin" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">KuCoin</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/Gate.png" alt="Gate.io" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">Gate.io</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/HTX.png" alt="HTX" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">HTX</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F7921A]/5 to-transparent border border-[#F7921A]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Self-Custody Wallets
                </h3>
                <p className="text-gray-400 mb-4">
                  Store and manage your ELA with full control using these secure wallet options.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <img src="/images/Essentials.png" alt="Essentials" className="h-12 w-12 object-contain mb-1 rounded-xl" />
                    <span className="text-xs text-gray-400">Essentials</span>
                  </div>
                  <a href="https://elastos.info/essentials-the-super-wallet/" className="px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm">
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#F7921A]/5 to-transparent border border-[#F7921A]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Decentralized Exchanges
                </h3>
                <p className="text-gray-400 mb-4">
                  Swap tokens directly without intermediaries on these decentralized platforms.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/glide.png" alt="Glide" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">Glide</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/chainge.png" alt="Chainge" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">Chainge</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-2 rounded-lg">
                    <img src="/images/Uniswap.png" alt="Uniswap" className="h-8 w-8 object-contain mb-1" />
                    <span className="text-xs text-gray-400">Uniswap</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F7921A]/5 to-transparent border border-[#F7921A]/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Use Your ELA
                </h3>
                <p className="text-gray-400 mb-4">
                  Put your ELA to work in these DeFi protocols to earn passive income.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center p-2 bg-[#1A1A1A]/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/Cyber Republic.png" alt="DAO Staking" className="h-8 w-8 rounded-full" />
                      <span className="text-white">DAO Staking</span>
                    </div>
                    <div className="text-[#F6921A]">~3.29% APY</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-[#1A1A1A]/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/glide.png" alt="Glide Finance" className="h-8 w-8 rounded-full" />
                      <span className="text-white">Glide Pools</span>
                    </div>
                    <div className="text-[#F6921A]">Variable APY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}