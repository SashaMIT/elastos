import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  UserRoundCog, 
  Database, 
  Server,
  Lock
} from "lucide-react";

export function WhyTheWorldNeedsThis() {
  const reasons = [
    {
      title: "Data Ownership",
      icon: <Database className="w-10 h-10 text-[#5C8EFF]" />,
      description: "Users own their data, not corporations. Store your files, messages, and digital assets on decentralized storage where only you control access."
    },
    {
      title: "Privacy by Design",
      icon: <Shield className="w-10 h-10 text-[#5C8EFF]" />,
      description: "End surveillance capitalism with encryption and decentralized identity. Your online activity can't be tracked, profiled, or monetized without consent."
    },
    {
      title: "Self-Sovereign Identity",
      icon: <UserRoundCog className="w-10 h-10 text-[#5C8EFF]" />,
      description: "Take control of your digital identity. No more creating accounts across hundreds of services that can be hacked or compromised."
    },
    {
      title: "Censorship Resistance",
      icon: <Lock className="w-10 h-10 text-[#5C8EFF]" />,
      description: "Applications that can't be shut down by any central authority, ensuring freedom of expression and access to information."
    },
    {
      title: "Infrastructure Resilience",
      icon: <Server className="w-10 h-10 text-[#5C8EFF]" />,
      description: "A network that can't be taken offline. Distributed processing and storage means no single point of failure for critical online services."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Why the World Needs Elastos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Elastos addresses fundamental problems with today's internet that threaten our digital rights and freedoms
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{reason.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}