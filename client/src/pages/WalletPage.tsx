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
                    className="w-full max-w-[250px] rounded-xl shadow-lg shadow-black/20"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/250x500?text=Elastos+Essentials";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">All-in-One Super Wallet</h3>
                  <p className="text-white/70 mb-6">
                    Elastos Essentials is your gateway to complete digital ownership. More than just a crypto wallet, it's a comprehensive toolkit for the decentralized internet—featuring digital identity management, secure communication, and dApp access all in one intuitive interface.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-[#F7921A] hover:bg-[#F7921A]/80 text-white py-2 px-4 rounded-md transition duration-300">
                      Download Now
                    </button>
                    <button className="bg-transparent border border-[#8BABFF] text-[#8BABFF] hover:bg-[#8BABFF]/10 py-2 px-4 rounded-md transition duration-300">
                      Learn More
                    </button>
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
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Features that give you control
            </h2>
            <p className="text-lg text-white/70">
              The road to Web3 begins here
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#F7921A]/20 shadow-lg hover:shadow-[#F7921A]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F7921A]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F7921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Digital Asset Management</h3>
              <p className="text-sm text-white/70">
                Seamlessly manage, stake, and transact with ELA and other blockchain assets through a secure, user-friendly interface.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#8BABFF]/20 shadow-lg hover:shadow-[#8BABFF]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#8BABFF]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8BABFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Decentralized ID (DID)</h3>
              <p className="text-sm text-white/70">
                Create and manage your digital identity with just a few clicks, giving you true ownership in the metaverse.
              </p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#F7921A]/20 shadow-lg hover:shadow-[#F7921A]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F7921A]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F7921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Secure Contacts</h3>
              <p className="text-sm text-white/70">
                Connect with friends using DIDs, with contact information securely stored on Elastos' public identity ledger.
              </p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#8BABFF]/20 shadow-lg hover:shadow-[#8BABFF]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#8BABFF]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8BABFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">dApp Ecosystem</h3>
              <p className="text-sm text-white/70">
                Access and interact with Elastos ecosystem dApps from social media to NFT marketplaces, all in one place.
              </p>
            </motion.div>

            {/* Feature Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#F7921A]/20 shadow-lg hover:shadow-[#F7921A]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F7921A]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F7921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Decentralized Storage</h3>
              <p className="text-sm text-white/70">
                Choose where your data lives with Elastos Hive, secured by your decentralized identity through simple vault management.
              </p>
            </motion.div>

            {/* Feature Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#171717] to-[#1E1E1E] rounded-xl p-5 border border-[#8BABFF]/20 shadow-lg hover:shadow-[#8BABFF]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#8BABFF]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8BABFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Private Communication</h3>
              <p className="text-sm text-white/70">
                Connect to Elastos Carrier's P2P network for truly private messaging without third-party intermediaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Wallet Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Multi-Chain Support",
                  description: "Manage your assets across Elastos Smart Chain, Elastos Identity Chain, and other popular networks like Ethereum, BSC, and HECO."
                },
                {
                  title: "Decentralized Identity",
                  description: "Create and manage your decentralized identity (DID) that gives you complete control of your digital credentials."
                },
                {
                  title: "DApp Browser",
                  description: "Discover and interact with decentralized applications directly from within the Elastos Essentials wallet."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={cn(
                    "bg-gradient-to-br from-[#1E1E1E] to-[#252525] p-6 rounded-xl border border-[#333]/30",
                    index === 1 ? "border-[#8BABFF]/30" : "border-transparent"
                  )}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Links Section */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1A] to-[#171717]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Download Elastos Essentials Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
            >
              Take full control of your digital identity and assets with the official Elastos wallet
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F7921A] to-[#F7921A]/80 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                iOS <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8BABFF] to-[#8BABFF]/80 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Android <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletPage;