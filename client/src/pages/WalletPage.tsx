import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, ExternalLink, Wallet } from "lucide-react";

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

            <div className="bg-gradient-to-br from-[#F7921A]/10 to-[#F7921A]/5 rounded-xl overflow-hidden shadow-2xl border border-[#F7921A]/20">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <img 
                      src="/assets/wallet-mockup.png" 
                      alt="Elastos Essentials Wallet App"
                      className="max-w-full h-auto mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x600?text=Wallet+App";
                      }}
                    />
                  </motion.div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#F7921A]/20 flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-[#F7921A]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#F7921A]">
                        The Complete Elastos Experience
                      </h3>
                    </div>
                    <p className="text-white/70 mb-6">
                      Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Native support for all Elastos chains including Mainchain, ESC, and EID",
                        "Integrated DID (Decentralized Identity) management",
                        "Secure digital asset management with multi-chain support",
                        "Built-in DApp browser and credential manager"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7921A] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex space-x-4 mt-8">
                      <a 
                        href="https://apps.apple.com/app/elastos-essentials/id1552952763" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-[#333] rounded-md hover:bg-[#444] transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"></path>
                          <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"></path>
                        </svg>
                        <span className="text-white">App Store</span>
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-[#333] rounded-md hover:bg-[#444] transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.26 3.2l5.74 10.54-5.74 10.05-1.2-.69c-.62-.35-1.06-1.02-1.06-1.78V5.69c0-.76.43-1.43 1.06-1.78l1.2-.71z"></path>
                          <path d="M19.94 12L5.26 3.2l7.54 8.8z"></path>
                          <path d="M12.8 12l7.14 8.06c.55-.3.91-.87.91-1.52-.01-1.65 0-12.97 0-12.97 0-.64-.36-1.21-.91-1.52L12.8 12z"></path>
                          <path d="M5.26 23.79L12.8 12 5.26 3.2z"></path>
                        </svg>
                        <span className="text-white">Google Play</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
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
                    "bg-[#232323] p-6 rounded-xl",
                    index === 1 ? "border border-[#8BABFF]/30" : "border border-transparent"
                  )}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletPage;