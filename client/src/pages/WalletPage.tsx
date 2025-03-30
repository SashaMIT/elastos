import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, ExternalLink, Wallet, CheckCircle } from "lucide-react";

const WalletPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
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
                <span className="text-[#F7921A]">Elastos</span>{" "}
                <span className="text-[#8BABFF]">Essentials</span> Wallet
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
                    src="/images/Essentials.png" 
                    alt="Elastos Essentials" 
                    className="w-full max-w-[350px] rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/350x700?text=Elastos+Essentials";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Complete Elastos Experience</h3>
                  <div className="space-y-4 text-white/70">
                    <p>Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Integrated DID (Decentralized Identity) management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                        <span>Secure digital asset management with multi-chain support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
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
                        <Download className="w-5 h-5" />
                        <span className="text-white">App Store</span>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                      >
                        <Download className="w-5 h-5" />
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

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-3">
              Features that give you control
            </h2>
            <p className="text-xl text-white/70">
              Your gateway to Web3.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Digital Asset and Staking Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full"
            >
              <div className="rounded-full bg-[#F7921A]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F7921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Digital Assets and Staking</h3>
              <p className="text-white/70">
                Manage assets and stake tokens across Elastos and multiple blockchains.
              </p>
            </motion.div>

            {/* Decentralized ID (DID) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#8BABFF]/10 via-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/20 h-full"
            >
              <div className="rounded-full bg-[#8BABFF]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8BABFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized ID (DID)</h3>
              <p className="text-white/70">
                Create self-sovereign digital identities to control your online presence.
              </p>
            </motion.div>

            {/* Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full"
            >
              <div className="rounded-full bg-[#F7921A]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F7921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Contacts</h3>
              <p className="text-white/70">
                Connect via verified DIDs from Elastos' identity ledger.
              </p>
            </motion.div>

            {/* Decentralized Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#8BABFF]/10 via-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/20 h-full"
            >
              <div className="rounded-full bg-[#8BABFF]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8BABFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized Applications</h3>
              <p className="text-white/70">
                Access social, NFT, and other Elastos ecosystem dApps through a unified gateway.
              </p>
            </motion.div>

            {/* Decentralized Storage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/5 to-transparent rounded-xl p-6 border border-[#F7921A]/20 h-full"
            >
              <div className="rounded-full bg-[#F7921A]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F7921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20" />
                  <path d="M5 20V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13" />
                  <path d="M13 20V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Decentralized Storage</h3>
              <p className="text-white/70">
                Store data in DID-secured Hive vaults with complete user control.
              </p>
            </motion.div>

            {/* Secure Communication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#8BABFF]/10 via-[#F7921A]/5 to-transparent rounded-xl p-6 border border-[#8BABFF]/20 h-full"
            >
              <div className="rounded-full bg-[#8BABFF]/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8BABFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 17.25a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25" />
                  <path d="M16 21h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2" />
                  <path d="M14 7V5c0-2.8-2.2-5-5-5S4 2.2 4 5v2" />
                  <rect x="4" y="7" width="16" height="14" rx="2" />
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

  );
};

export default WalletPage;