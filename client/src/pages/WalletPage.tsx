
import React from "react";
import { motion } from "framer-motion";
import { CircleCheck, ExternalLink } from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function WalletPage() {
  return (
    <div className="bg-[#171717] min-h-screen text-white">
      {/* Hero Section */}
      <div className="pt-16 pb-8 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#F7921A]">Elastos</span>{" "}
            <span className="text-[#8BABFF]">Essentials</span>{" "}
            <span className="text-white">Wallet</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Experience the official Elastos wallet with native support for the entire Elastos ecosystem
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-8 md:p-10 border border-[#8BABFF]/20 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img 
                src="/images/elastos-essentials-phone.png" 
                alt="Elastos Essentials" 
                className="w-full max-w-[280px] rounded-xl shadow-lg shadow-black/20"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Complete Elastos Experience</h3>
              <div className="space-y-4 text-white/70">
                <p>Elastos Essentials is the native wallet and identity manager for the Elastos ecosystem. With Elastos Essentials, you get:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                    <span>Native support for all Elastos chains including Mainchain, ESC, and EID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                    <span>Integrated DID (Decentralized Identity) management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
                    <span>Secure digital asset management with multi-chain support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleCheck className="w-5 h-5 text-[#F7921A] mt-0.5 flex-shrink-0" />
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
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0355 12.4835C17.0172 9.76384 19.2242 8.59932 19.3223 8.53916C17.9316 6.51289 15.7893 6.24253 15.0373 6.22144C13.1354 6.02289 11.3261 7.30359 10.3635 7.30359C9.38169 7.30359 7.91545 6.23911 6.30591 6.27441C4.23959 6.30971 2.32591 7.48834 1.28329 9.32233C-0.876464 13.0575 0.758162 18.5454 2.86147 21.2298C3.91643 22.5422 5.14685 23.9964 6.75639 23.9317C8.3211 23.8635 8.89051 22.9356 10.7749 22.9356C12.6433 22.9356 13.1764 23.9317 14.817 23.8952C16.5025 23.8635 17.5683 22.5669 18.5766 21.2439C19.782 19.7336 20.2703 18.2409 20.2891 18.1656C20.2516 18.1515 17.0587 16.9164 17.0355 12.4835Z"/>
                      <path d="M14.0018 4.23874C14.8506 3.18376 15.4105 1.77428 15.2495 0.34375C14.0205 0.390112 12.5262 1.18544 11.6429 2.22631C10.8635 3.15537 10.1797 4.61602 10.3595 5.9989C11.7408 6.09027 13.1297 5.27961 14.0018 4.23874Z"/>
                    </svg>
                    <span className="text-white">App Store</span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.60667 2.1185C3.39347 2.21709 3.20777 2.36658 3.06547 2.55182C2.92318 2.73707 2.82893 2.95254 2.79 3.18L2.79 20.82C2.82893 21.0475 2.92318 21.2629 3.06547 21.4482C3.20777 21.6334 3.39347 21.7829 3.60667 21.8815L12.6508 12L3.60667 2.1185ZM16.4933 15.5325L5.11167 21.7143C5.23 21.75 5.355 21.7775 5.48333 21.795C5.61167 21.8123 5.74333 21.8198 5.875 21.817L19.3467 14.3523L16.4933 15.5325ZM21.2308 10.887C21.0686 10.5039 20.8275 10.16 20.5243 9.876C20.2212 9.59198 19.8636 9.375 19.4742 9.24L16.4933 8.46417L19.3467 9.64417L21.2367 11.1127C21.2427 11.0383 21.2458 10.9637 21.246 10.889C21.2458 10.8183 21.2427 10.7477 21.237 10.6773L21.2308 10.887ZM5.11167 2.28583L16.4933 8.46417L19.3467 9.64417L5.875 2.18333C5.74333 2.18 5.61167 2.1875 5.48333 2.205C5.355 2.2225 5.23 2.25 5.11167 2.28583Z" />
                    </svg>
                    <span className="text-white">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#F7921A]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7921A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
              <p className="text-white/70">Store your ELA and other digital assets with enterprise-grade security features and backup options.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#8BABFF]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8BABFF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Chain Support</h3>
              <p className="text-white/70">Manage assets across Elastos mainchain, ESC smart contract chain, and other popular blockchains.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#F7921A]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7921A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Identity Management</h3>
              <p className="text-white/70">Create and manage your decentralized identity (DID) to control your digital credentials and personal data.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#8BABFF]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8BABFF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">DApp Browser</h3>
              <p className="text-white/70">Access the growing ecosystem of Elastos decentralized applications directly from your wallet.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#F7921A]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7921A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Staking & Rewards</h3>
              <p className="text-white/70">Participate in staking, governance, and earn rewards by contributing to the security of the network.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#5C8EFF]/20">
              <div className="w-12 h-12 bg-[#8BABFF]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8BABFF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Privacy Focus</h3>
              <p className="text-white/70">Take control of your data with built-in privacy features that protect your financial information and identity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#F7921A]/20 to-[#8BABFF]/20 rounded-2xl p-8 text-center border border-[#5C8EFF]/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the complete Elastos ecosystem?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">Download Elastos Essentials now and join thousands of users already enjoying secure, decentralized digital ownership.</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#F7921A] hover:bg-[#F7921A]/80 transition-colors rounded-lg text-white"
            >
              <span>Download for iOS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.elastos.essentials.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#8BABFF] hover:bg-[#8BABFF]/80 transition-colors rounded-lg text-white"
            >
              <span>Download for Android</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
