import React from "react";
import { motion } from "framer-motion";

export function WorldComputerBanner() {
  return (
    <div className="w-full py-20 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-[200] mb-6 text-white"
        >
          A SmartWeb for Everyone
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 font-[200]"
        >
          Elastos is more than an ecosystem—it's an internet built on open values:
        </motion.p>

        <div className="flex flex-col items-center mb-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="px-6 py-2 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-sm font-[200] whitespace-nowrap">No centralized control.</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="px-6 py-2 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-sm font-[200] whitespace-nowrap">No surveillance capitalism.</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-6 py-2 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-sm font-[200] whitespace-nowrap">No compromise on security.</span>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-lg mb-10 font-[200]"
        >
          ELA is the oil of this machine—the single asset that <br></br>powers the SmartWeb economy, governance, and trust.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-xl font-[200]">Own your identity. Own your data. Own your internet.</p>
          <p className="text-2xl font-[200] text-white">Build on Elastos. Power the SmartWeb.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a 
            href="/ela-utility" 
            className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm"
          >
            <span>ELA Utility</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
              <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
            </svg>
          </a>
          <a 
            href="https://elastos.dev/sdk/welcome/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
          >
            <span>Start Building</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
              <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}