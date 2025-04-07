import React, { useState } from "react";
import { motion } from "framer-motion";
import BlockTable from "@/components/BlockTable";
import BlockVisualizer from "@/components/BlockVisualizer";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function ExplorerPage() {
  const [activeTab, setActiveTab] = useState('blocks');

  return (
    <div className="min-h-screen bg-[#171717] overflow-hidden">
      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[350px] overflow-hidden -mt-16">
        <img 
          src="/images/Community/EEQmb19UYAApxrk.jpeg" 
          alt="Elastos Explorer" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6 pt-16"
              >
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-4">
                  Elastos Explorer
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                  Discover the multi-chain structure of Elastos, where Bitcoin-secured blockchain technology combines with purpose-built sidechains to deliver a comprehensive Web3 infrastructure
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Explorer Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="tabs flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'blocks'
                ? 'bg-[#5C8EFF] text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-colors`}
            onClick={() => setActiveTab('blocks')}
          >
            Latest Blocks
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'visualizer'
                ? 'bg-[#5C8EFF] text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-colors`}
            onClick={() => setActiveTab('visualizer')}
          >
            Block Visualizer
          </button>
        </div>

        <div className="explorer-content">
          {activeTab === 'blocks' ? (
            <div className="blocks-container">
              <BlockTable />
            </div>
          ) : (
            <div className="visualizer-container">
              <BlockVisualizer />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <StackedCircularFooter />
      </div>
    </div>
  );
}