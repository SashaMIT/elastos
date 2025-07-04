import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, ExternalLink, Wallet, CheckCircle, Fingerprint } from "lucide-react";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const WalletPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[350px] overflow-hidden -mt-16">
        <img 
          src="/images/Community/EEQmb19UYAApxrk.jpeg" 
          alt="Elastos Wallets" 
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
                  Elastos Essentials Wallet
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                  Experience the official Elastos wallet with native support for the entire Elastos ecosystem
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-10 border border-[#8BABFF]/20 w-full mx-auto relative overflow-hidden"
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
                  <h3 className="text-2xl font-[200] text-white mb-3">The Complete Elastos Experience</h3>
                  <div className="space-y-4 text-white/70">
                    <p className="text-base font-[200]">Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Integrated DID (Decentralized Identity) management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Secure digital asset management with multi-chain support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Built-in DApp browser and credential manager</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-4 py-3 min-h-[48px] bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm hover:bg-[rgba(92,142,255,0.25)] active:bg-[rgba(92,142,255,0.35)] relative z-10 cursor-pointer touch-auto min-w-[120px] justify-center"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <span>App Store</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-4 py-3 min-h-[48px] bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)] active:bg-[rgba(246,146,26,0.35)] relative z-10 cursor-pointer touch-auto min-w-[120px] justify-center"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <span>Google Play</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
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
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-[200] text-white mb-3">
              Features that give you control
            </h2>
            <p className="text-lg text-white/70 font-[200]">
              Your gateway to Web3.
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:border rounded-md dark:border-neutral-800">
              {/* Digital Asset and Staking Support */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Digital Assets and Staking
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Manage assets and stake tokens across Elastos and multiple blockchains.
                  </p>
                </motion.div>
              </div>

              {/* Decentralized ID (DID) */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Decentralized ID (DID)
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Create self-sovereign digital identities to control your online presence.
                  </p>
                </motion.div>
              </div>

              {/* Contacts */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Contacts
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Connect via verified DIDs from Elastos' identity ledger.
                  </p>
                </motion.div>
              </div>

              {/* Decentralized Applications */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Decentralized Applications
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Access social, NFT, and other Elastos ecosystem dApps through a unified gateway.
                  </p>
                </motion.div>
              </div>

              {/* Decentralized Storage */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M2 20h20" />
                        <path d="M5 20V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13" />
                        <path d="M13 20V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Decentralized Storage
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Store data in DID-secured Hive vaults with complete user control.
                  </p>
                </motion.div>
              </div>

              {/* Secure Communication */}
              <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-none dark:border-neutral-800">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 17.25a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25" />
                        <path d="M16 21h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2" />
                        <path d="M14 7V5c0-2.8-2.2-5-5-5S4 2.2 4 5v2" />
                        <rect x="4" y="7" width="16" height="14" rx="2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-[200] mb-1 text-white">
                    Secure Communication
                  </h3>
                  <p className="text-base text-neutral-300 font-[200]">
                    Exchange end-to-end encrypted messages via Carrier's P2P network.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
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
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Setting Up ESC & EID on External Wallets
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
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Logo Carousel */}
      <div className="w-full py-16">
        <LogoCarouselDemo />
      </div>

      {/* Footer */}
      <div className="w-full bg-background dark:bg-[#171717]">
        <StackedCircularFooter />
      </div>
    </div>
  );
};

export default WalletPage;