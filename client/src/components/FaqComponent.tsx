import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const faqItems = [
  {
    id: "1",
    title: "What is Elastos?",
    content: "Elastos is a decentralized internet infrastructure that enables users to own their data, identity, and digital assets, all secured by Bitcoin's security through merged mining. It combines blockchain, decentralized identity (DID), storage, and P2P communication to create a trustless, censorship-resistant World Computer."
  },
  {
    id: "2",
    title: "What problem does Elastos solve?",
    content: "The current internet is controlled by centralized entities that exploit user data, censor content, and compromise security. Elastos returns control to users by enabling true digital sovereignty, where individuals own their identities, assets, and interactions without middlemen."
  },
  {
    id: "3",
    title: "What is the Elastos World Computer?",
    content: "The Elastos World Computer is a decentralized computing infrastructure for secure, serverless applications under blockchain governance. It integrates Identity, P2P communication, decentralized storage, secure execution, and a blockchain-based trust layer for a new digital economy to emerge. Secured through Bitcoin merge-mining, it leverages Bitcoin's hash power without extra energy use, ensuring unmatched security while rewarding miners with ELA. DAO governance lets ELA holders elect delegates annually to oversee network decisions, funding, and development, uniting miners, developers, and token holders in a self-sustaining, censorship-resistant ecosystem."
  },
  {
    id: "4",
    title: "How is Elastos different from other blockchains?",
    content: "Unlike most blockchains that focus on DeFi or NFTs alone, Elastos provides a complete decentralized World Computer framework, including: Decentralized ID (DID), Elastos Carrier for P2P communication, Elastos Hive for decentralized storage, Elastos Runtime for secure dApp execution, Smart Contracts (EVM-Compatible) for finance and rights management, Bitcoin-Level Security, and BeL2 (Bitcoin Elastos Layer-2)."
  },
  {
    id: "4",
    title: "How does Elastos use Bitcoin for security?",
    content: "Elastos uses Auxiliary Proof-of-Work (AuxPoW), meaning it is merged-mined with Bitcoin. This allows Bitcoin miners to secure Elastos without extra energy consumption, leveraging Bitcoin's immense hashpower for security."
  },
  {
    id: "5",
    title: "What is BeL2 (Bitcoin Elastos Layer-2)?",
    content: "BeL2 is Elastos's Layer-2 scaling solution for Bitcoin, designed to bring decentralized identity (DID), smart contracts, and secure data management to the Bitcoin network. It allows for fast, low-cost transactions and dApp functionality while still benefiting from Bitcoin's unmatched security."
  },
  {
    id: "6",
    title: "What is Elastos DID?",
    content: "Elastos Decentralized ID (DID) is a self-sovereign identity system where users own and control their digital identities without relying on Google, Facebook, or governments. Your DID is stored on the blockchain, allowing you to authenticate yourself privately and securely across applications."
  },
  {
    id: "7",
    title: "How does Elastos protect user privacy?",
    content: "Elastos protects privacy through: 1) No central servers – Everything runs P2P via Elastos Carrier, 2) No third-party tracking – DID authentication removes the need for password-based logins, 3) Data belongs to you – Files are stored in Elastos Hive, meaning no platform can take them away."
  }
];

interface FaqComponentProps {
  className?: string;
  showButtons?: boolean;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ className = "", showButtons = true }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <Card className={`w-full overflow-hidden bg-card dark:bg-[#171717] border-0 shadow-none mt-0 ${className}`} style={{ boxShadow: 'none' }}>
      <CardHeader className="p-6 pl-0 pb-2">
        <div className="flex flex-row items-center justify-between mb-2">
          <CardTitle className="text-2xl md:text-3xl font-[400] text-foreground dark:text-foreground mb-0" style={{ fontWeight: 400 }}>Your Questions</CardTitle>
          {showButtons && (
            <a 
              href="https://chatgpt.com/g/g-j1VMlnktX-elastos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-transparent text-[#5C8EFF] px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium border border-[#5C8EFF] hover:bg-[#5C8EFF]/10 transition-colors gap-1 md:gap-2"
              style={{ whiteSpace: 'nowrap' }}
            >
              Talk with AI
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#5C8EFF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 pl-0 pt-0">
        <Accordion type="single" collapsible className="w-full" defaultValue="1">
          {faqItems.map((item) => (
            <AccordionItem 
              value={item.id} 
              key={item.id} 
              className="py-2 border-b border-border dark:border-neutral-800"
            >
              <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-semibold text-foreground dark:text-foreground [&>svg]:hidden">
                <span className="flex-grow pr-4">{item.title}</span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                  <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                    {item.id === openItem ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqComponent;