import { cn } from "@/lib/utils";
import {
  IconFingerprint,
  IconNetwork,
  IconDatabase,
  IconShieldLock,
  IconCode,
  IconWallet
} from "@/lib/icons";
import React, { ReactNode } from 'react';

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Elastos Blockchain",
      description: "Security & trust layer secured by Bitcoin merge mining",
      icon: <IconShieldLock className="w-6 h-6" />,
      tag: "ACCOUNTING"
    },
    {
      title: "Elastos DID",
      description: "Identity & authentication layer for true data ownership",
      icon: <IconFingerprint className="w-6 h-6" />,
      tag: "IDENTITY"
    },
    {
      title: "Elastos Carrier",
      description: "P2P communication layer for direct data exchange",
      icon: <IconNetwork className="w-6 h-6" />,
      tag: "NETWORKING"
    },
    {
      title: "Elastos Hive",
      description: "Decentralized storage layer for secure data persistence",
      icon: <IconDatabase className="w-6 h-6" />,
      tag: "STORAGE"
    },
    {
      title: "Elastos Runtime",
      description: "Decentralized execution layer for secure dApp operations",
      icon: <IconCode className="w-6 h-6" />,
      tag: "COMPUTING"
    },
    {
      title: "Elastos Essentials",
      description: "Super wallet & dApp gateway for simple interaction",
      icon: <IconWallet className="w-6 h-6" />,
      tag: "WALLET"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  tag,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  tag: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 flex justify-between items-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#F6921A] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
        <span className="px-3 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap">
          {tag}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};