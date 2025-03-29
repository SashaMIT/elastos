import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  IconLock, 
  IconFingerprint, 
  IconServer, 
  IconDatabase 
} from "@tabler/icons-react";

export function WhyTheWorldNeedsThis() {
  const [activeTab, setActiveTab] = useState('digital-ownership');

  const reasons = [
    {
      id: "digital-ownership",
      title: "Ownership",
      description: "Your data is owned by corporations, not you.",
      longDescription: "In today's digital landscape, your personal data, digital identities, and online assets are controlled by big tech companies. These corporations monetize your information while you have little say over how it's used. Elastos gives you true ownership and control over your digital life.",
      icon: <IconLock className="h-8 w-8 text-[#F6921A]" />,
      color: "#24272f" 
    },
    {
      id: "identity-theft",
      title: "Identity",
      description: "Our digital identities are increasingly vulnerable.",
      longDescription: "Identity theft affects millions yearly, with personal data regularly exposed in breaches. The Elastos DID (Decentralized Identity) gives you a self-sovereign identity verified on the blockchain, letting you prove who you are without exposing personal data to countless third parties.",
      icon: <IconFingerprint className="h-8 w-8 text-[#F6921A]" />,
      color: "#24272f" 
    },
    {
      id: "centralized-control",
      title: "Control",
      description: "A few powerful entities control what we see and do online.",
      longDescription: "A handful of tech giants act as gatekeepers to the internet, deciding what content gets promoted, censored, or monetized. Elastos creates a peer-to-peer internet infrastructure where users can interact directly without intermediaries controlling the flow of information.",
      icon: <IconServer className="h-8 w-8 text-[#F6921A]" />,
      color: "#24272f" 
    },
    {
      id: "bitcoin-future",
      title: "Freedom",
      description: "The original internet lacks critical identity and ownership layers.",
      longDescription: "The internet was built for information sharing, not digital ownership or secure identities. Elastos adds these missing layers by combining Bitcoin's security with a modern multi-chain architecture, creating a complete platform for a truly decentralized digital economy.",
      icon: <IconDatabase className="h-8 w-8 text-[#F6921A]" />,
      color: "#24272f" 
    }
  ];

  const selectedReason = reasons.find(r => r.id === activeTab) || reasons[0];

  return (
    <div className="w-full py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why the World Needs This</h2>

        <div className="flex justify-center mb-8">
          <div className="rounded-full border-[0.5px] border-[#95B5FF]/30 bg-[#95B5FF]/10 dark:bg-[#95B5FF]/10 flex overflow-x-auto">
            {reasons.map((reason, index) => (
              <button
                key={reason.id}
                onClick={() => setActiveTab(reason.id)}
                className={cn(
                  "px-4 md:px-6 py-2 rounded-full transition-all whitespace-nowrap",
                  activeTab === reason.id 
                    ? "bg-[#95B5FF] text-black" 
                    : "bg-transparent text-white dark:text-white hover:scale-105 hover:shadow-inner"
                )}
              >
                {reason.title}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`bg-transparent border-0 shadow-none p-4 md:p-8`} 
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 bg-[#24272f] p-4 rounded-full shadow-sm mx-auto md:mx-0" style={{ width: 'fit-content' }}>
              {selectedReason.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{selectedReason.title}</h3>
              <p className="text-lg font-medium text-black dark:text-white mb-4">{selectedReason.description}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedReason.longDescription}</p>

              {selectedReason.id === "bitcoin-future" && (
                <div className="mt-6 bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg border-0">
                  <p className="font-medium text-[#F6921A]">Elastos uniquely leverages Bitcoin's security while avoiding its scalability limitations.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}