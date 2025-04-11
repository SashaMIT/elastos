
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Export the FAQ items as a constant so it doesn't get recreated on each render
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
    id: "5",
    title: "How does Elastos use Bitcoin for security?",
    content: "Elastos uses Auxiliary Proof-of-Work (AuxPoW), meaning it is merged-mined with Bitcoin. This allows Bitcoin miners to secure Elastos without extra energy consumption, leveraging Bitcoin's immense hashpower for security."
  },
  {
    id: "6",
    title: "What is BeL2 (Bitcoin Elastos Layer-2)?",
    content: "BeL2 is Elastos's Layer-2 scaling solution for Bitcoin, designed to bring decentralized identity (DID), smart contracts, and secure data management to the Bitcoin network. It allows for fast, low-cost transactions and dApp functionality while still benefiting from Bitcoin's unmatched security."
  },
  {
    id: "7",
    title: "What is Elastos DID?",
    content: "Elastos Decentralized ID (DID) is a self-sovereign identity system where users own and control their digital identities without relying on Google, Facebook, or governments. Your DID is stored on the blockchain, allowing you to authenticate yourself privately and securely across applications."
  },
  {
    id: "8",
    title: "How does Elastos protect user privacy?",
    content: "Elastos protects privacy through: 1) No central servers – Everything runs P2P via Elastos Carrier, 2) No third-party tracking – DID authentication removes the need for password-based logins, 3) Data belongs to you – Files are stored in Elastos Hive, meaning no platform can take them away."
  }
];

interface FaqComponentProps {
  className?: string;
  showButtons?: boolean;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ className = "", showButtons = true }) => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  
  // Using a memoized handler to prevent unnecessary renders
  const handleValueChange = React.useCallback((value: string) => {
    setOpenItem(prevValue => prevValue === value ? undefined : value);
  }, []);
  
  // Render the component with optimized performance
  return (
    <Card className={`w-full overflow-hidden bg-card dark:bg-[#171717] border-0 shadow-none mt-8 ${className}`} style={{ boxShadow: 'none' }}>
      <CardHeader className="p-6 pl-0 pb-2">
        <div className="flex flex-row items-center justify-between mb-2">
          <CardTitle className="text-2xl md:text-3xl font-[400] text-foreground dark:text-foreground mb-0" style={{ fontWeight: 400 }}>Your Questions</CardTitle>
          {showButtons && (
            <a 
              href="https://chatgpt.com/g/g-j1VMlnktX-elastos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
            >
              <span>Talk with AI</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
              </svg>
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 pl-0 pt-0">
        <Accordion 
          type="single" 
          collapsible 
          className="w-full" 
          value={openItem}
          onValueChange={handleValueChange}
        >
          {faqItems.map((item) => (
            <AccordionItem 
              value={item.id} 
              key={item.id}
              className="py-2 border-b border-border dark:border-neutral-800"
            >
              <AccordionTrigger className="flex flex-1 items-center py-2 text-left text-[15px] font-[200] text-foreground dark:text-foreground [&>svg]:hidden">
                <span className="flex-grow pr-4">{item.title}</span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F6921A] flex items-center justify-center">
                  <div className="w-4 h-4 text-[#F6921A]" data-state-icon>
                    {item.id === openItem ? 
                      <Minus className="h-4 w-4" /> : 
                      <Plus className="h-4 w-4" />
                    }
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-2 text-muted-foreground dark:text-muted-foreground will-change-transform">
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
