
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  ExternalLink, 
  Fingerprint, 
  MoveRight, 
  Shield 
} from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-gradient-to-br from-[#F7921A]/10 to-transparent border border-[#F7921A]/20 p-8 hover:border-[#F7921A]/30 transition-all shadow-lg shadow-[#F7921A]/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7921A]/10 flex items-center justify-center border border-[#F7921A]/30">
                    <Shield className="w-6 h-6 text-[#F7921A]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Secure & Self-Custodial</h3>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#F7921A] mt-1 flex-shrink-0" />
                    <span>Your private keys remain on your device, ensuring complete control over your assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#F7921A] mt-1 flex-shrink-0" />
                    <span>Advanced encryption and biometric authentication options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#F7921A] mt-1 flex-shrink-0" />
                    <span>Backup and recovery using standard BIP39 seed phrases</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-3">
                    Essentials is the only wallet with full support for all Elastos chains
                  </p>
                </div>
              </motion.div>

              {/* Supported Networks Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-gradient-to-br from-[#8BABFF]/10 to-transparent border border-[#8BABFF]/20 p-8 hover:border-[#8BABFF]/30 transition-all shadow-lg shadow-[#8BABFF]/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#8BABFF]/10 flex items-center justify-center border border-[#8BABFF]/30">
                    <Code className="w-6 h-6 text-[#8BABFF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Multi-Chain Support</h3>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8BABFF] mt-1 flex-shrink-0" />
                    <span>Elastos Mainchain (ELA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8BABFF] mt-1 flex-shrink-0" />
                    <span>Elastos Smart Chain (ESC) - EVM compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8BABFF] mt-1 flex-shrink-0" />
                    <span>Elastos Identity Chain (EID)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8BABFF] mt-1 flex-shrink-0" />
                    <span>Bitcoin, Ethereum, Arbitrum, Heco, and more</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-3">
                    Seamlessly manage multiple blockchains in one application
                  </p>
                </div>
              </motion.div>

              {/* Get Started Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-8 hover:border-purple-500/30 transition-all shadow-lg shadow-purple-500/5 md:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
                    <Fingerprint className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Get Essentials</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Download the official Elastos Essentials wallet to manage all your digital assets, identity, and 
                  interact with Elastos dApps securely.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://elastos.io/essentials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <span className="text-white font-medium">Download for iOS</span>
                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://elastos.io/essentials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <span className="text-white font-medium">Download for Android</span>
                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                  <p className="text-sm text-white/60">
                    Official wallet from Elastos
                  </p>
                </div>
              </motion.div>
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

            {/* MetaMask setup guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">How to Add These Networks to MetaMask</h3>
              
              <ol className="list-decimal list-inside space-y-4 text-white/80 pl-4">
                <li>Open your MetaMask wallet and click on the network selector at the top of the extension</li>
                <li>Click "Add Network" and then "Add Network Manually"</li>
                <li>Enter the network details as listed above for either ESC or EID</li>
                <li>Click "Save" to add the network to your wallet</li>
                <li>You can now switch to the Elastos network from the network selector</li>
              </ol>
              
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">
                  <span className="text-[#F7921A] font-semibold">Note:</span> To use these networks, you'll need ELA in your wallet. You can transfer ELA from exchanges or bridge from other networks.
                </p>
              </div>
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
