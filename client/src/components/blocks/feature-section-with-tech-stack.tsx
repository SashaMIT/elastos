import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconLock,
  IconArrowsSplit,
  IconNetwork,
  IconFingerprint,
  IconDatabase,
  IconUsers
} from "@/lib/icons";

export function FeaturesSectionWithTechStack() {
  const features = [
    {
      title: "Trustless by Design",
      description: "Secured by Bitcoin's hashpower via merged mining, Elastos offers the most secure base layer in the Web3 ecosystem.",
      icon: <IconLock className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Owned by the User",
      description: "Through Elastos' Decentralized Identity (DID), every person, asset, and device has a self-sovereign ID, verifiable on-chain and owned by its rightful holder.",
      icon: <IconFingerprint className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 border-b dark:border-neutral-800"
    },
    {
      title: "Programmable by All",
      description: "Developers can build across a horizontally scalable multi-chain architecture, launching EVM-compatible dApps and smart contracts powered by ELA.",
      icon: <IconArrowsSplit className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 border-b md:border-r dark:border-neutral-800"
    },
    {
      title: "Peer-to-Peer by Default",
      description: "Elastos Carrier enables encrypted, decentralized messaging and networking without centralized servers.",
      icon: <IconNetwork className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 border-b dark:border-neutral-800"
    },
    {
      title: "Persistent and Sovereign Data",
      description: "With Elastos Hive, users store, serve, and monetize their data in private cloud vaults that they own—not Big Tech.",
      icon: <IconDatabase className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 border-b md:border-r md:border-b-0 dark:border-neutral-800"
    },
    {
      title: "Governed by Its People",
      description: "Through the Elastos DAO, the ecosystem evolves based on transparent, community-led governance—enabling anyone to propose, fund, and build.",
      icon: <IconUsers className="h-12 w-12 text-[#F6921A]" />,
      className: "col-span-1 md:col-span-2 dark:border-neutral-800"
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white">
        Core Tenets of the World Computer
      </h2>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col h-full"
              >
                <div className="mb-4">{feature.icon}</div>
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-300">
      {children}
    </p>
  );
};
