import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Network, 
  Fingerprint, 
  Database, 
  Users, 
  GitBranch 
} from "lucide-react";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Digital Sovereignty & User Ownership",
      description: "Own your data, identity, and digital assets without centralized intermediaries.",
      icon: <ShieldCheck className="h-5 w-5 stroke-[1.5] text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Bitcoin-Backed Security",
      description: "Utilize Bitcoin's PoW hashpower via merged mining for trustless validation.",
      icon: <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[1.5] text-[#F6921A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" opacity="0.4" />
              </svg>
            </div>,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Decentralized Infrastructure",
      description: "P2P interactions without third-party control or data breaches.",
      icon: <Network className="h-5 w-5 stroke-[1.5] text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800"
    },
    {
      title: "Self-Sovereign Identity",
      description: "Verifiable identity for every person, device, and digital asset.",
      icon: <Fingerprint className="h-5 w-5 stroke-[1.5] text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Rights Management",
      description: "Decentralized ownership and trading for creators and businesses.",
      icon: <Database className="h-5 w-5 stroke-[1.5] text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Modular Web3 Ecosystem",
      description: "EVM-compatible sidechain for easy dApp development.",
      icon: <Users className="h-5 w-5 stroke-[1.5] text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b md:border-none dark:border-neutral-800"
    }
  ];

  return (
    <div className="relative z-20 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
          Core Technology Stack
        </h2>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col h-full"
              >
                <div className="mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#24272f]">
                    {feature.icon}
                  </div>
                </div>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </motion.div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-xs text-neutral-600 dark:text-neutral-300">
      {children}
    </p>
  );
};