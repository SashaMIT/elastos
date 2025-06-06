import { ArrowRight, BookCopy, Box, Code, DownloadIcon, FileText, LucideIcon, Share2, Shield, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import React from "react";
import { SEO } from "@/components/SEO";
import { Helmet } from 'react-helmet';
import { WebPageStructuredData } from "@/components/StructuredData";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const WhitepaperPage = () => {
  return (
    <Layout>
      <Helmet>
        {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-775BN8EH1L"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-775BN8EH1L');
          `}
        </script>
      </Helmet>
      <SEO 
        title="Elastos Whitepaper & Technical Documentation | Bitcoin-Secured Protocols"
        description="Access the official Elastos whitepapers, technical specifications, and developer documents that define the foundation of Elastos' Bitcoin-secured smart web architecture."
        keywords="Elastos whitepaper, Elastos litepaper, technical documentation, Bitcoin merged mining, Web3 infrastructure, blockchain security, decentralized identity"
        ogImage="/images/whitepapers/litepaper-cover.png"
        canonicalUrl="/whitepaper"
      />
      <WebPageStructuredData
        title="Elastos Whitepaper & Technical Documentation | Bitcoin-Secured Protocols"
        description="Access the official Elastos whitepapers and technical documentation."
        url="/whitepaper"
        imageUrl="/images/whitepapers/litepaper-cover.png"
      />
      <div className="relative w-full">
        {/* Full-width hero image with gradient overlay */}
        <div className="relative w-full h-[350px] overflow-hidden -mt-32">
          <img 
            src="/images/Roadmap/Elastos 1 Year.jpeg" 
            alt="Elastos Documentation" 
            className="w-full h-full object-cover opacity-100"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

          {/* Hero content overlay */}
          <div className="absolute inset-0 flex items-center justify-center mt-10">
            <div className="container mx-auto px-4">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-0">
                  <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-3">
                    Elastos Documentation
                  </h1>
                  <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                    Explore the technical documentation, whitepapers, and litepapers that define the Elastos ecosystem.
                    These documents serve as the foundation for understanding how Elastos is building the modern internet
                    infrastructure secured by Bitcoin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 bg-[#171717]">
          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Whitepaper Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
              <div className="h-60 bg-gray-200 dark:bg-gray-700 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/whitepapers/Elastos 2018 Whitepaper.png" 
                  alt="Elastos Whitepaper Cover"
                  className="h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x200?text=Elastos+Whitepaper";
                  }}
                />
              </div>
              <CardHeader className="pb-3 relative">
                <span className="absolute top-5 right-5 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">2018</span>
                <CardTitle className="text-white">Elastos Whitepaper</CardTitle>
                <CardDescription>Original Vision & Technical Architecture</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    The original whitepaper outlining the foundational concepts behind Elastos,
                    including the architecture of the Elastos Carrier, Runtime, and Blockchain.
                  </p>
                  <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Smart Web powered by blockchain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Bitcoin merge-mined security model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Digital identity & data ownership</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0 -mt-5">
                <a href="https://www.elastos.org/downloads/elastos_whitepaper_en.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm">
                    <span>View</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                      <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                      <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </a>
              </CardFooter>
            </Card>

            {/* DAO Whitepaper Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
              <div className="h-60 bg-gray-200 dark:bg-gray-700 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/ElastosDAO.png" 
                  alt="Elastos DAO Whitepaper Cover"
                  className="h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x200?text=Elastos+DAO+Whitepaper";
                  }}
                />
              </div>
              <CardHeader className="pb-3 relative">
                <span className="absolute top-5 right-5 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">2025</span>
                <CardTitle className="text-white">Elastos DAO Whitepaper</CardTitle>
                <CardDescription>Decentralized Governance & Community</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    This whitepaper details the Elastos DAO governance model, community-driven development initiatives, and the role of the DAO in shaping the future of the Elastos ecosystem.
                  </p>
                  <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Decentralized governance framework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Community proposal and voting system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Funding allocation and treasury management</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0 -mt-5">
                <a href="https://www.cyberrepublic.org/whitepaper" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm">
                    <span>View</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                      <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                      <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </a>
              </CardFooter>
            </Card>

            {/* CoinTelegraph Report Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
              <div className="h-60 bg-gray-200 dark:bg-gray-700 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/Roadmap/CoinTelegraph Report.png" 
                  alt="CoinTelegraph Report Cover"
                  className="h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x200?text=CoinTelegraph+Report";
                  }}
                />
              </div>
              <CardHeader className="pb-3 relative">
                <span className="absolute top-5 right-5 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">2025</span>
                <CardTitle className="text-white">CoinTelegraph Report</CardTitle>
                <CardDescription>Bitcoin-Secured Architecture for DeFi</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Independent analysis of Elastos' role in BTCFi, combining Bitcoin's security with smart contract functionality and cross-chain DeFi.
                  </p>
                  <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Merged mining with Bitcoin for network security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>Elastic Consensus for scalability and governance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F6921A] mr-2">•</span>
                      <span>BTCFi use cases powered by BeL2 and zk-proofs</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0 -mt-5">
                <a href="https://s3.cointelegraph.com/Elastos-Examining-a-Bitcoin-Secured-Framework-for-Decentralized-Finance-2025-Report.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm">
                    <span>View</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                      <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                      <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Additional Resources Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:border rounded-md dark:border-neutral-800">
                {/* Security Card */}
                <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
                  <div className="flex flex-col h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C8EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">Hashrate</span>
                    </div>
                    <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Elastos Security</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-[200] mb-4">
                      Bitcoin-Backed Protection
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Explore how Elastos achieves unprecedented blockchain security through Bitcoin merge-mining for transactions and assets.
                    </p>
                    <div>
                      <a href="/security" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                          <span>View Stats</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Technical Portal Card */}
                <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-r dark:border-neutral-800">
                  <div className="flex flex-col h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C8EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">Docs</span>
                    </div>
                    <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Technical Portal</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-[200] mb-4">
                      Developer Resources & APIs
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Access comprehensive technical documentation for developers building on Elastos, including APIs, SDKs, and integration guides.
                    </p>
                    <div>
                      <a href="https://elastos.dev/docs/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                          <span>View Documentation</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Community Resources Card */}
                <div className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 border-b md:border-none dark:border-neutral-800">
                  <div className="flex flex-col h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C8EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">Talk</span>
                    </div>
                    <h3 className="text-lg font-[200] mb-1 text-black dark:text-white">Community Resources</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-[200] mb-4">
                      Connect with the community
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Join forums, chat channels, and social media groups to connect with other Elastos enthusiasts, developers, and team members.
                    </p>
                    <div>
                      <a href="https://elastos.info/community/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm">
                          <span>Join Community</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                            <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                            <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                            <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoCarouselDemo />
      <StackedCircularFooter />
    </Layout>
  );
};

export default WhitepaperPage;