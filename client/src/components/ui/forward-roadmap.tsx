
import React from 'react';
import { motion } from "framer-motion";

export const ForwardRoadmap = () => {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q1-Q2 2025',
      items: [
        {
          title: 'Elastos 2.0 Launch',
          details: 'Complete infrastructure upgrade with enhanced security and scalability features'
        },
        {
          title: 'DID 2.0 Integration',
          details: 'Advanced decentralized identity system with improved verification mechanisms'
        },
        {
          title: 'Smart Contract Updates',
          details: 'Implementation of new contract standards and optimization protocols'
        }
      ]
    },
    {
      year: '2025',
      quarter: 'Q3-Q4 2025',
      items: [
        {
          title: 'Cross-Chain Bridge',
          details: 'Improved interoperability with major blockchain networks'
        },
        {
          title: 'Developer Tools Expansion',
          details: 'New SDKs and comprehensive documentation for developers'
        },
        {
          title: 'ESC Protocol Upgrade',
          details: 'Enhanced throughput and reduced transaction costs'
        }
      ]
    },
    {
      year: '2026',
      quarter: '2026',
      items: [
        {
          title: 'Web3 OS Integration',
          details: 'Full integration of decentralized operating system features'
        },
        {
          title: 'Global Adoption Push',
          details: 'Strategic partnerships and mainstream integration initiatives'
        },
        {
          title: 'Enterprise Solutions',
          details: 'Specialized features for business and institutional users'
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#171717] font-sans md:px-1 relative">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-[200]">
          Forward Roadmap
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-xl bg-[#1E1E1E] p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-[#5C8EFF]/10 p-2">
                  <div className="h-8 w-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5C8EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-[200] text-white">{milestone.quarter}</h3>
                  <p className="text-sm text-white/50 font-[200]">Development Phase</p>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {milestone.items.map((item, idx) => (
                  <div key={idx} className="relative">
                    <h4 className="font-[200] text-md mb-1 text-[#5C8EFF]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70 font-[200]">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
