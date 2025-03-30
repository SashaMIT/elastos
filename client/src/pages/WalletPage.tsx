
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
