
import React from "react";
import { motion } from "framer-motion";

export function FeatureCards() {
  const features = [
    {
      title: "Re-Architecting the Internet",
      description: "The current internet architecture lacks native identity, ownership, and privacy. Elastos rebuilds these fundamentals from the ground up, creating a network where data can't be exploited because users control the keys to their digital lives."
    },
    {
      title: "Multi-Chain Architecture",
      description: "Elastos employs a multi-chain architecture that combines the security of a main chain (secured by Bitcoin) with the flexibility of sidechains for specialized functions. This approach allows for both rock-solid security and unlimited scalability."
    },
    {
      title: "Security Without Compromise",
      description: "Through merged mining with Bitcoin, Elastos achieves unprecedented security without additional energy consumption. This makes it one of the most eco-friendly yet secure blockchain platforms, utilizing Bitcoin's immense hashpower."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-[#5C8EFF]/[0.06] rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex-shrink-0 bg-[#24272f] p-4 rounded-full shadow-sm w-12 h-12 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={idx === 0 ? "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" : idx === 1 ? "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" : "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
