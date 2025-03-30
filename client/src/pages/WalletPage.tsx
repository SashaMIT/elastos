import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, ExternalLink, Wallet, CheckCircle } from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const WalletPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Essentials Super-Wallet
                </h1>
                <p className="text-xl text-white/70 mb-8">
                  Your gateway to the new decentralized internet. Manage assets, identities, and dApps in one secure application.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://elastos.info/essentialswallet/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#F6921A] to-[#F6921A]/80 text-white rounded-lg font-medium">
                      Learn More
                    </button>
                  </a>
                  <a href="https://elastos.info/downloads/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium border border-white/20">
                      Download App
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* App Image */}
            <div className="flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full max-w-md"
              >
                <div className="bg-gradient-to-b from-[#F6921A]/20 to-[#5C8EFF]/20 rounded-[40px] p-1">
                  <img
                    src="/images/essentials-wallet-preview.png"
                    alt="Essentials Wallet Preview"
                    className="w-full h-auto rounded-[36px] border border-white/10"
                  />
                </div>
                <div className="absolute -z-10 inset-0 blur-3xl bg-[#F6921A]/20 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Features that give you control
            </h2>
            <p className="text-xl text-white/70">
              Your gateway to Web3.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Digital Asset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#F6921A] to-[#F6921A]/60 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Digital Asset and Staking Support</h3>
              <p className="text-white/70">
                Manage assets and stake tokens across Elastos and multiple blockchains.
              </p>
            </motion.div>

            {/* Card 2: DID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5C8EFF] to-[#5C8EFF]/60 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized ID (DID)</h3>
              <p className="text-white/70">
                Create self-sovereign digital identities to control your online presence.
              </p>
            </motion.div>

            {/* Card 3: Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#F6921A] to-[#5C8EFF] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <circle cx="12" cy="10" r="2"></circle>
                  <line x1="8" x2="8" y1="2" y2="4"></line>
                  <line x1="16" x2="16" y1="2" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Contacts</h3>
              <p className="text-white/70">
                Connect via verified DIDs from Elastos' identity ledger for secure messaging.
              </p>
            </motion.div>

            {/* Card 4: dApps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5C8EFF] to-[#5C8EFF]/60 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="12" x2="12" y1="9" y2="15"></line>
                  <line x1="9" x2="15" y1="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized Applications</h3>
              <p className="text-white/70">
                Access social, NFT, and other Elastos ecosystem dApps through a unified gateway.
              </p>
            </motion.div>

            {/* Card 5: Storage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#F6921A] to-[#F6921A]/60 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 8H3"></path>
                  <path d="M21 12H3"></path>
                  <path d="M21 16H3"></path>
                  <path d="M6 4v16"></path>
                  <path d="M18 4v16"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized Storage</h3>
              <p className="text-white/70">
                Store data in DID-secured Hive vaults with complete user control.
              </p>
            </motion.div>

            {/* Card 6: Communication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5C8EFF] to-[#F6921A] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M8 13h2"></path>
                  <path d="M8 17h2"></path>
                  <path d="M14 13h2"></path>
                  <path d="M14 17h2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure Communication</h3>
              <p className="text-white/70">
                Exchange end-to-end encrypted messages via Carrier's P2P network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default WalletPage;