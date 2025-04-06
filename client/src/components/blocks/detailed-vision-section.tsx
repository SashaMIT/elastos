import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Layers, Shield, Globe, Network } from "lucide-react";

export function DetailedVisionSection() {
  return (
    <div className="py-0 max-w-5xl mx-auto px-4">
      <div className="mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 space-y-4 font-[200]"
        >
          <p>
            Elastos is creating the SmartWeb—an open, programmable internet where users own their data, identity, and assets, powered by the most secure blockchain infrastructure in existence, Bitcoin.
          </p>

          <p>
            This isn't just a blockchain or a smart contract platform. It's the missing layer of the internet: a complete re-architecture of how information, applications, and value move across the web. The SmartWeb integrates decentralized computation, identity, storage, and communication—all governed by its users, not corporations.
          </p>

          <p>
            A platform designed for full-stack decentralization, Elastos combines Bitcoin-backed security with modular Web3 infrastructure, empowering anyone to build sovereign apps and launch their own digital economies.
          </p>
        </motion.div>
      </div>
    </div>
  );
}