import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, ExternalLink, Wallet, CheckCircle, Fingerprint } from "lucide-react";

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletPage;