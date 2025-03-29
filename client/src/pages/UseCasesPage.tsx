import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { Button } from "@/components/ui/button";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/ui/code-block";
import { UseCaseModal } from "@/components/UseCaseModal";

interface UseCase {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  modalContent: string; // Added modalContent property
}

const UseCasesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null); // Added state for selected use case
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Added modal open state

  useEffect(() => {
    // Simulate loading for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Sample use cases data with modal content
  const useCases: UseCase[] = [
    {
      id: 1,
      title: "Digital Identity Management",
      description: "Self-sovereign identity solutions powered by Elastos DID allow users to control their personal data, authorize access, and maintain privacy across web interactions.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Digital+Identity+Management",
      category: "Identity",
      link: "https://elastos.info/did/",
      modalContent: "Digital Identity Management Modal Content" // Add modal content here
    },
    {
      id: 2,
      title: "Data Marketplaces",
      description: "Decentralized platforms where users can monetize their data by setting permissions and prices, creating a fair data economy where individuals benefit from their digital footprints.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Data+Marketplaces",
      category: "Data",
      link: "#",
      modalContent: "Data Marketplaces Modal Content" // Add modal content here
    },
    {
      id: 3,
      title: "NFT Platforms",
      description: "Marketplaces for creating, buying, and selling NFTs with verifiable authenticity, true ownership, and royalty structures that benefit creators across secondary sales.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=NFT+Platforms",
      category: "Assets",
      link: "https://elacity.io",
      modalContent: "NFT Platforms Modal Content" // Add modal content here
    },
    {
      id: 4,
      title: "Decentralized Social Media",
      description: "Social platforms built on user-owned identity and content, offering censorship-resistance, data portability, and direct monetization without relying on advertising or algorithms.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Social",
      link: "#",
      modalContent: `🗣 Decentralized Social Media
Own your audience. Own your content.
Elastos enables serverless, censorship-resistant social media, where users are verified via DID, posts are stored via Hive, and interactions flow P2P via Carrier. No ads. No exploitation.

💡 What You Can Build:

Twitter-style platforms where no central party can delete or shadowban posts.
Creators owning their followership with portable DIDs across social dApps.
Voice chat apps where connections are encrypted and peer-to-peer.
Messaging dApps that store message history in personal Hive vaults.

🔧 Tech Used:
Carrier (P2P communication), DID (user identity), Hive (content storage), ESC (tipping or governance).`
    },
    {
      id: 7,
      title: "Secure IoT Networks",
      description: "IoT devices with verifiable identities that can securely communicate, share data, and perform micropayments without centralized servers or vulnerability to network attacks.",
      image: "/images/usecases/usecase-default.jpg",
      category: "IoT",
      link: "#",
      modalContent: `📡 Secure IoT Networks
The internet of trusted devices.
Elastos lets you assign DIDs to IoT devices, enabling secure machine-to-machine interactions and autonomous microtransactions. Carrier allows P2P comms without centralized servers. DIDs let devices prove who they are—no spoofing, no hijacking.

💡 What You Can Build:

Smart home networks where devices talk to each other securely without cloud relays.
Supply chain IoT sensors with verifiable identities and tamper-proof data.
Industrial control systems that prevent rogue device injection.
Automated vehicles that transact tolls or energy payments in real time.

🔧 Tech Used:
DID (device identity), Carrier (mesh networking), ESC (payment logic), ELA (value transfer).`
    },
    {
      id: 8,
      title: "Decentralized Governance",
      description: "DAO frameworks for community-led decision making, with transparent voting mechanisms secured by Elastos DID for authentication and verification of participants.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Governance",
      link: "https://www.cyberrepublic.org",
      modalContent: `🗳 Decentralized Governance
Transparent decisions. Verified voters. Immutable records.
Elastos DAO infrastructure lets you build governance systems with real identity, not bots. Use DID to authenticate voters, ESC to manage proposals, and Hive to store minutes or on-chain referenda.

💡 What You Can Build: Local or national governance tools for communities, DAOs, or NGOs. Protocol DAOs with anti-sybil voting and smart contract-controlled treasuries. Alumni or membership orgs where verified identity enables trusted participation. Funding DAOs that allow creators to raise capital and report progress to token holders.

🔧 Tech Used:
DID (voter verification), ESC (DAO logic), Hive (record-keeping), ELA (collateral/staking).`
    },
    {
      id: 9,
      title: "Verifiable Credentials",
      description: "Issue and verify digital credentials for education, professional certifications, and identity documents without relying on centralized authorities.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Identity",
      link: "#",
      modalContent: `🎓 Verifiable Credentials
Issue, hold, and verify digital credentials—no middlemen needed.
Using Elastos DID, institutions can issue tamper-proof certificates that are easily verified on-chain but stored privately off-chain by users.

What You Can Build:

University diplomas that can be instantly verified by employers.
Professional licenses (law, medicine, trades) with cryptographic proof.
Event tickets or certifications that can't be forged or transferred without rules.
Citizen IDs with selective data disclosure (e.g., prove you're over 18 without showing DOB).

🔧 Tech Used:
DID (issuer + holder), Hive (credential storage), ESC (rules + revocation), ELA (fee/payment).`
    },
    {
      id: 10,
      title: "Digital Content Marketplace",
      description: "Platforms for creators to distribute digital content directly to consumers with verifiable ownership, built-in royalty mechanisms, and protection against unauthorized copying.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Content",
      link: "#",
      modalContent: "Digital Content Marketplace Modal Content" // Add modal content here
    },
    {
      id: 11,
      title: "Decentralized Storage Solutions",
      description: "Secure, encrypted storage networks where users maintain ownership of their data while benefiting from distributed redundancy and access control.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Storage",
      link: "#",
      modalContent: "Decentralized Storage Solutions Modal Content" // Add modal content here
    },
    {
      id: 12,
      title: "Supply Chain Tracking",
      description: "End-to-end visibility in supply chains with immutable records of product journeys, enabling verification of authenticity, origin, and handling conditions.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Enterprise",
      link: "#",
      modalContent: "Supply Chain Tracking Modal Content" // Add modal content here
    },
    {
      id: 6,
      title: "Decentralized Finance",
      description: "Financial applications that operate without centralized intermediaries, offering transparent and permissionless access to financial services.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Finance",
      link: "#",
      modalContent: `💸 Decentralized Finance
Unbanked. Unchained. Unstoppable.
Elastos ESC is an Ethereum-compatible smart contract chain secured by Bitcoin's hashpower. Build lending markets, liquidity pools, and stable assets with confidence. DID gives identity. Hive gives storage. ELA powers it all.

💡 What You Can Build:

Peer-to-peer lending platforms with identity-based credit scoring.
Decentralized savings products for users in emerging markets.
Insurance DAOs that payout based on smart oracles.
Cross-chain bridges to Bitcoin and other assets, secured by merged mining.

🔧 Tech Used:
ESC (DeFi logic), DID (user identity), ELA (gas, staking, collateral), Hive (off-chain data), BTC (security via AuxPoW).`
    }
  ];

  const openModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUseCase(null);
  };

  // Extract unique categories from use cases
  const categories = Array.from(new Set(useCases.map(useCase => useCase.category)));

  // Filter use cases by selected category
  const filteredUseCases = selectedCategory
    ? useCases.filter(useCase => useCase.category === selectedCategory)
    : useCases;

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717]">
      <Layout>
        <div className="w-full relative">
          <BackgroundCells className="bg-slate-950 h-[50vh] -mt-60 pt-0">
            <div className="relative flex flex-col items-center justify-center h-full text-center" style={{ zIndex: 5 }}>
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <SplashCursor />
              </div>
              <div className="w-full mt-[3rem] space-y-4 px-4 md:px-0">
                <h1 className="text-4xl md:text-6xl font-telegraf-ultralight font-extralight leading-tight text-white tracking-tight text-center">
                  Elastos Use Cases
                </h1>
                <p className="text-md md:text-xl font-telegraf-ultralight text-white/70 max-w-3xl mx-auto">
                  Transforming digital identity, ownership, and connectivity across industries.
                </p>
              </div>
            </div>
          </BackgroundCells>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20 pt-0">
          <div className="text-center max-w-3xl mx-auto mb-16">

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span
                className={`px-4 py-2 ${!selectedCategory ? 'bg-[#F6921A]/10 border border-[#F6921A]/30' : 'bg-[#5C8EFF]/10 border border-[#5C8EFF]/30'} text-white rounded-full text-base font-medium cursor-pointer`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </span>
              {categories.map(category => (
                <span
                  key={category}
                  className={`px-4 py-2 ${selectedCategory === category ? 'bg-[#F6921A]/10 border border-[#F6921A]/30' : 'bg-[#5C8EFF]/10 border border-[#5C8EFF]/30'} text-white rounded-full text-base font-medium cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUseCases.map(useCase => (
              <Card key={useCase.id} className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">
                    {useCase.category}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {useCase.description}
                  </CardDescription>
                  <div className="mt-4">
                    <button
                      className="px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm justify-start"
                      onClick={() => openModal(useCase)}
                    >
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 p-8 bg-gradient-to-br from-[#5C8EFF]/10 to-[#F6921A]/10 rounded-2xl border border-[#5C8EFF]/30 text-center max-w-5xl mx-auto">
            <div className="py-10"> {/* Added padding here */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Build Your Own Elastos Application</h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to build the next revolutionary dApp? Elastos provides comprehensive SDKs, tools, and infrastructure to bring your vision to life. Plus, you can apply for funding through the Cyber Republic DAO to accelerate your project.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button
                      className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                      onClick={() => window.open("https://elastos.dev/sdk/welcome/", "_blank")}
                    >
                      <span>Explore SDKs</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025" />
                      </svg>
                    </button>
                    <button
                      className="px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                      onClick={() => window.open("https://cyberrepublic.org", "_blank")}
                    >
                      <span>Apply for Funding</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 p-4 bg-black/5 dark:bg-white/5 rounded-lg shadow-inner">
                  <CodeBlock language="jsx" filename="ElastosExample.jsx" code={`// Sample code using Elastos SDKs
import { DID } from '@elastosfoundation/did-js-sdk';
import { Hive } from '@elastosfoundation/hive-js-sdk';

// Create a decentralized identity
const mnemonic = DID.generateMnemonic();
const identity = DID.createIdentity(mnemonic);

// Connect to decentralized storage
const vault = await Hive.createVault(identity);

export default function App() {
  return <YourAwesomeApp />;
}`} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-16">
            <LogoCarouselDemo />
          </div>
          <UseCaseModal isOpen={isModalOpen} useCase={selectedUseCase} onClose={closeModal} /> {/* Updated UseCaseModal */}
        </div>
      </Layout>
    </div>
  );
};

export default UseCasesPage;