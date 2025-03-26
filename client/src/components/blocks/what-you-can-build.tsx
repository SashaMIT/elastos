
import React from "react";
import { motion } from "framer-motion";
import { Layout, Globe, Store, BadgeDollarSign, Share2 } from "lucide-react";

export function WhatYouCanBuild() {
  const buildOptions = [
    {
      icon: <Layout className="h-8 w-8 text-[#5C8EFF]" />,
      title: "Decentralized Apps",
      description: "dApps with native DID login, secure storage, and encrypted communication."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#5C8EFF]" />,
      title: "Digital Nations",
      description: "Communities, platforms, and networks that govern themselves via DAO infrastructure."
    },
    {
      icon: <Store className="h-8 w-8 text-[#5C8EFF]" />,
      title: "Decentralized Marketplaces",
      description: "Platforms like Elacity where creators tokenize and control access to their digital work."
    },
    {
      icon: <BadgeDollarSign className="h-8 w-8 text-[#5C8EFF]" />,
      title: "DeFi Platforms",
      description: "Borrowing, lending, staking, and on-chain economies secured by ELA and DID."
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#5C8EFF]" />,
      title: "P2P Web Services",
      description: "User-hosted websites, APIs, and cloud services shared via Elastos Carrier."
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-[#111] w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white">
          What You Can Build With Elastos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {buildOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-[#5C8EFF]/10 rounded-full">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
