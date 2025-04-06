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
      modalContent: `<b>Digital Identity Management</b>
  Redefine trust online — with a decentralized ID you truly own.

  Elastos DID is a blockchain-native, self-sovereign identity framework for people, devices, and organizations. It removes the need for centralized logins and allows users to authorize access to data, services, and apps on their own terms.

  <b>What You Can Build:</b>
  <ul>
  <li>Passwordless login systems for apps and platforms.</li>
  <li>Unified user identities that travel across dApps and ecosystems.</li>
  <li>Auth flows for Web3 wallets, games, and DAO participation.</li>
  <li>Role-based access control systems in enterprises or private networks.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>DID for secure, verifiable identity.</li>
  <li>ESC for on-chain permissions or access logic.</li>
  <li>Hive for storing credentials or proofs.</li>
  <li>Carrier for encrypted, DID-authenticated communication.</li>
  </ul>`
    },
    {
      id: 2,
      title: "Data Marketplaces",
      description: "Decentralized platforms where users can monetize their data by setting permissions and prices, creating a fair data economy where individuals benefit from their digital footprints.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Data+Marketplaces",
      category: "Data",
      link: "#",
      modalContent: `<b>Data Marketplaces</b>
  Flip the surveillance model — let users profit from their data.

  Elastos empowers a new type of digital economy where individuals own, control, and monetize their personal data. With DID and Hive, users can package datasets, control access with smart contracts, and receive payments in ELA — all without relying on third-party aggregators.

  <b>What You Can Build:</b>
  <ul>
  <li>Data exchanges where users set terms and price for access.</li>
  <li>Wearable/health data platforms that reward contributors.</li>
  <li>Decentralized ad networks that pay users for attention metrics.</li>
  <li>Analytics tools with zero-party data and DID-authenticated consent.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>DID to prove data ownership and consent.</li>
  <li>Hive to store and serve data from personal vaults.</li>
  <li>ESC to enforce licensing terms and settle payments.</li>
  <li>ELA for frictionless, on-chain settlement.</li>
  </ul>`
    },
    {
      id: 3,
      title: "NFT Platforms",
      description: "Marketplaces for creating, buying, and selling NFTs with verifiable authenticity, true ownership, and royalty structures that benefit creators across secondary sales.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=NFT+Platforms",
      category: "Assets",
      link: "https://elacity.io",
      modalContent: `<b>NFT Platforms</b>
  Go beyond JPEGs — enable programmable ownership and real-world rights.

  Elastos elevates NFTs with native creator identity, access controls, and built-in economic rules. Every asset is tied to a verifiable DID, access is managed via smart contracts, and content can be delivered securely through Hive or streamed via Elacity Runtime.

  <b>What You Can Build:</b>
  <ul>
  <li>NFT marketplaces with auto-royalties and verified creator identities.</li>
  <li>Music and video NFTs with timed unlocks or license terms.</li>
  <li>Digital memberships, event passes, or tokenized IP rights.</li>
  <li>In-game items with portable ownership and secondary sales tracking.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>DID for creator/authorship proof.</li>
  <li>ESC for NFT logic and marketplace contracts.</li>
  <li>Hive for storing unlockable content or previews.</li>
  <li>Elacity Runtime for access enforcement.</li>
  </ul>`
    },
    {
      id: 4,
      title: "Decentralized Social Media",
      description: "Social platforms built on user-owned identity and content, offering censorship-resistance, data portability, and direct monetization without relying on advertising or algorithms.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Social",
      link: "#",
      modalContent: `<b>Decentralized Social Media</b>
  Own your audience. Own your content.
  Elastos enables serverless, censorship-resistant social media, where users are verified via DID, posts are stored via Hive, and interactions flow P2P via Carrier. No ads. No exploitation.

  <b>What You Can Build:</b>
  <ul>
  <li>Twitter-style platforms where no central party can delete or shadowban posts.</li>
  <li>Creators owning their followership with portable DIDs across social dApps.</li>
  <li>Voice chat apps where connections are encrypted and peer-to-peer.</li>
  <li>Messaging dApps that store message history in personal Hive vaults.</li>
  </ul>

  <b>Tech Used:</b>
  <ul>
  <li>Carrier (P2P communication)</li>
  <li>DID (user identity)</li>
  <li>Hive (content storage)</li>
  <li>ESC (tipping or governance)</li>
  </ul>`
    },
    {
      id: 7,
      title: "Secure IoT Networks",
      description: "IoT devices with verifiable identities that can securely communicate, share data, and perform micropayments without centralized servers or vulnerability to network attacks.",
      image: "/images/usecases/usecase-default.jpg",
      category: "IoT",
      link: "#",
      modalContent: `<b>Secure IoT Networks</b>
  The internet of trusted devices.
  Elastos lets you assign DIDs to IoT devices, enabling secure machine-to-machine interactions and autonomous microtransactions. Carrier allows P2P comms without centralized servers. DIDs let devices prove who they are—no spoofing, no hijacking.

  <b>What You Can Build:</b>
  <ul>
  <li>Smart home networks where devices talk to each other securely without cloud relays.</li>
  <li>Supply chain IoT sensors with verifiable identities and tamper-proof data.</li>
  <li>Industrial control systems that prevent rogue device injection.</li>
  <li>Automated vehicles that transact tolls or energy payments in real time.</li>
  </ul>

  <b>Tech Used:</b>
  <ul>
  <li>DID (device identity)</li>
  <li>Carrier (mesh networking)</li>
  <li>ESC (payment logic)</li>
  <li>ELA (value transfer)</li>
  </ul>`
    },
    {
      id: 8,
      title: "Decentralized Governance",
      description: "DAO frameworks for community-led decision making, with transparent voting mechanisms secured by Elastos DID for authentication and verification of participants.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Governance",
      link: "https://www.cyberrepublic.org",
      modalContent: `<b>Decentralized Governance</b>
  Transparent decisions. Verified voters. Immutable records.
  Elastos DAO infrastructure lets you build governance systems with real identity, not bots. Use DID to authenticate voters, ESC to manage proposals, and Hive to store minutes or on-chain referenda.

  <b>What You Can Build:</b>
  <ul>
  <li>Local or national governance tools for communities, DAOs, or NGOs.</li>
  <li>Protocol DAOs with anti-sybil voting and smart contract-controlled treasuries.</li>
  <li>Alumni or membership orgs where verified identity enables trusted participation.</li>
  <li>Funding DAOs that allow creators to raise capital and report progress to token holders.</li>
  </ul>

  <b>Tech Used:</b>
  <ul>
  <li>DID (voter verification)</li>
  <li>ESC (DAO logic)</li>
  <li>Hive (record-keeping)</li>
  <li>ELA (collateral/staking)</li>
  </ul>`
    },
    {
      id: 9,
      title: "Verifiable Credentials",
      description: "Issue and verify digital credentials for education, professional certifications, and identity documents without relying on centralized authorities.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Identity",
      link: "#",
      modalContent: `<b>Verifiable Credentials</b>
  Issue, hold, and verify digital credentials—no middlemen needed.
  Using Elastos DID, institutions can issue tamper-proof certificates that are easily verified on-chain but stored privately off-chain by users.

  <b>What You Can Build:</b>
  <ul>
  <li>University diplomas that can be instantly verified by employers.</li>
  <li>Professional licenses (law, medicine, trades) with cryptographic proof.</li>
  <li>Event tickets or certifications that can't be forged or transferred without rules.</li>
  <li>Citizen IDs with selective data disclosure (e.g., prove you're over 18 without showing DOB).</li>
  </ul>

  <b>Tech Used:</b>
  <ul>
  <li>DID (issuer + holder)</li>
  <li>Hive (credential storage)</li>
  <li>ESC (rules + revocation)</li>
  <li>ELA (fee/payment)</li>
  </ul>`
    },
    {
      id: 10,
      title: "Digital Content Marketplace",
      description: "Platforms for creators to distribute digital content directly to consumers with verifiable ownership, built-in royalty mechanisms, and protection against unauthorized copying.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Content",
      link: "#",
      modalContent: `<b>Digital Content Marketplace</b>
  Let creators distribute and earn — without giving up control.

  With Elastos, creators can publish music, videos, ebooks, code, and more — assigning fine-grained access rights, streaming permissions, and royalty models. Unlike Web2 platforms, ownership and payment flows are transparent and fully programmable.

  <b>What You Can Build:</b>
  <ul>
  <li>Music or video platforms that pay creators per stream or unlock.</li>
  <li>Token-gated libraries or knowledge-sharing communities.</li>
  <li>eBook marketplaces where NFTs replace DRM.</li>
  <li>Multi-format content hubs (audio, video, documents) with tiered access.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>DID to verify creator and consumer identity.</li>
  <li>Hive to store and stream the actual content.</li>
  <li>ESC to handle licenses, subscriptions, or per-access payments.</li>
  <li>ELA as the medium of exchange and staking.</li>
  </ul>`
    },
    {
      id: 11,
      title: "Decentralized Storage Solutions",
      description: "Secure, encrypted storage networks where users maintain ownership of their data while benefiting from distributed redundancy and access control.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Storage",
      link: "#",
      modalContent: `<b>Decentralized Storage Solutions</b>
  Free your data from the cloud — and take full control.

  Elastos Hive allows users and apps to store data in personal or trusted cloud vaults, fully encrypted and accessible only through DID-based authentication. No central servers, no single point of failure — just sovereign, user-owned storage.

  <b>What You Can Build:</b>
  <ul>
  <li>Personal cloud storage that users own, access, and back up.</li>
  <li>Encrypted chat apps that store histories per user vault.</li>
  <li>Productivity tools where documents are owned by contributors.</li>
  <li>Any dApp requiring off-chain storage — with full control and privacy.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>Hive for encrypted, distributed file storage.</li>
  <li>DID for authentication and permissioning.</li>
  <li>ESC for access rules, versioning, and marketplace features.</li>
  <li>Carrier for secure file transfers without central relays.</li>
  </ul>`
    },
    {
      id: 12,
      title: "Supply Chain Tracking",
      description: "End-to-end visibility in supply chains with immutable records of product journeys, enabling verification of authenticity, origin, and handling conditions.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Enterprise",
      link: "#",
      modalContent: `<b>Supply Chain Tracking</b>
  Trust every step — from origin to delivery.

  Using Elastos DID, Hive, and smart contracts, supply chain actors can create verifiable, timestamped records at every phase of a product's journey. Provenance, ownership, handling conditions, and transfer logs can be authenticated and stored immutably.

  <b>What You Can Build:</b>
  <ul>
  <li>Track-and-trace platforms for food, pharma, luxury goods.</li>
  <li>Authenticity verification systems using DIDs for producers and shippers.</li>
  <li>Condition logging for cold-chain or high-value deliveries.</li>
  <li>Real-time logistics dashboards with data stored in Hive and verified on-chain.</li>
  </ul>

  <b>Elastos Stack:</b>
  <ul>
  <li>DID for identifying suppliers, products, and handlers.</li>
  <li>ESC to anchor events and automate processes.</li>
  <li>Hive for storing metadata and documents.</li>
  <li>Carrier for real-time device communication or peer updates.</li>
  </ul>`
    },
    {
      id: 6,
      title: "Decentralized Finance",
      description: "Financial applications that operate without centralized intermediaries, offering transparent and permissionless access to financial services.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Finance",
      link: "#",
      modalContent: `<b>Decentralized Finance</b>
  Unbanked. Unchained. Unstoppable.
  Elastos ESC is an Ethereum-compatible smart contract chain secured by Bitcoin's hashpower. Build lending markets, liquidity pools, and stable assets with confidence. DID gives identity. Hive gives storage. ELA powers it all.

  <b>What You Can Build:</b>
  <ul>
  <li>Peer-to-peer lending platforms with identity-based credit scoring.</li>
  <li>Decentralized savings products for users in emerging markets.</li>
  <li>Insurance DAOs that payout based on smart oracles.</li>
  <li>Cross-chain bridges to Bitcoin and other assets, secured by merged mining.</li>
  </ul>

  <b>Tech Used:</b>
  <ul>
  <li>ESC (DeFi logic)</li>
  <li>DID (user identity)</li>
  <li>ELA (gas, staking, collateral)</li>
  <li>Hive (off-chain data)</li>
  <li>BTC (security via AuxPoW)</li>
  </ul>`
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
                className={`px-4 py-2 ${!selectedCategory ? 'bg-[#F6921A]/10 border border-[#F6921A]/30' : 'bg-[#5C8EFF]/10 border border-[#5C8EFF]/30'} text-white rounded-full text-base font-[200] cursor-pointer`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </span>
              {categories.map(category => (
                <span
                  key={category}
                  className={`px-4 py-2 ${selectedCategory === category ? 'bg-[#F6921A]/10 border border-[#F6921A]/30' : 'bg-[#5C8EFF]/10 border border-[#5C8EFF]/30'} text-white rounded-full text-base font-[200] cursor-pointer`}
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
                      className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm justify-start"
                      onClick={() => openModal(useCase)}
                    >
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 p-8 bg-gradient-to-br from-[#5C8EFF]/10 to-[#5C8EFF]/5 rounded-2xl border border-[#5C8EFF]/30 text-center w-full">
            <div className="py-10"> {/* Added padding here */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Build Your Own Elastos Application</h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to build the next revolutionary dApp? Elastos provides comprehensive SDKs, tools, and infrastructure to bring your vision to life. Plus, you can apply for funding through the Cyber Republic DAO to accelerate your project.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button
                      className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                      onClick={() => window.open("https://elastos.dev/sdk/welcome/", "_blank")}
                    >
                      <span>Explore SDKs</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5" />
                      </svg>
                    </button>
                    <button
                      className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.25)] text-sm"
                      onClick={() => window.open("https://cyberrepublic.org", "_blank")}
                    >
                      <span>Apply for Funding</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                        <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5" />
                        <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A" />
                        <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5" />
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
        <StackedCircularFooter />
      </Layout>
    </div>
  );
};

export default UseCasesPage;