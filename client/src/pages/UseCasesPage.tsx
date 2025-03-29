
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

const UseCasesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample use cases data with modal content
  const useCases: UseCase[] = [
    {
      id: 1,
      title: "Digital Identity Management",
      description: "Self-sovereign identity solutions powered by Elastos DID allow users to control their personal data, authorize access, and maintain privacy across web interactions.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Digital+Identity+Management",
      category: "Identity",
      link: "https://elastos.info/did/",
      modalContent: `🔐 Digital Identity Management
Empower a world where users control their digital lives.
Elastos DID is not just a decentralized login—it's a verifiable, self-sovereign identity system for people, devices, and assets. Unlike third-party OAuth systems, Elastos DID gives users complete control over how their data is shared across applications.

💡 What You Can Build:

Passwordless login systems that authenticate users via blockchain-anchored DID.
Platforms where users own and control their personal profiles—porting them across apps.
Subscription services that authenticate users via verifiable credentials, not email-password pairs.
KYC/AML-compliant apps that respect privacy through selective disclosure.
🔧 Tech Used:
Elastos DID, Hive (for storing verifiable credentials), Carrier (for DID-based comms), ESC (for permissioning access via smart contracts).`
    },
    {
      id: 2,
      title: "Data Marketplaces",
      description: "Decentralized platforms where users can monetize their data by setting permissions and prices, creating a fair data economy where individuals benefit from their digital footprints.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Data+Marketplaces",
      category: "Data",
      link: "#",
      modalContent: `📊 Data Marketplaces
Turn personal data into a personal asset.
Using Elastos DID + Hive, users can selectively package, price, and sell their own data. Buyers verify data provenance via DID, while Hive ensures it's stored securely and off-chain.

💡 What You Can Build:

Marketplaces where users license their health or fitness data to researchers.
AI training datasets with verifiable origin and usage rights tied to creators.
Anonymous web browsing where attention data is paid for in ELA.
Zero-party marketing platforms where users opt in to share insights with brands.
🔧 Tech Used:
Hive (personal vaults), DID (ownership/auth), ESC (settlement), ELA (payments).`
    },
    {
      id: 3,
      title: "NFT Platforms",
      description: "Marketplaces for creating, buying, and selling NFTs with verifiable authenticity, true ownership, and royalty structures that benefit creators across secondary sales.",
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=NFT+Platforms",
      category: "Assets",
      link: "https://elacity.io",
      modalContent: `🎨 NFT Platforms
Go beyond ownership—build programmable digital rights.
Elastos NFTs are not just tokens—they're tied to verifiable creators via DID and powered by a full rights system. Integrate DRM, fractional ownership, or time-based access to digital goods using ESC and smart contracts.

💡 What You Can Build:

NFT marketplaces with auto-enforced royalties and DID-authenticated creators.
Music platforms where fans buy limited access to tracks, albums, or live sessions.
Film or eBook platforms where NFTs unlock access instead of downloads.
Games where in-game items are truly user-owned, tradable, and provably scarce.
🔧 Tech Used:
DID (authorship), ESC (NFT logic), Hive (media hosting), Elacity Runtime (playback rules).`
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
      id: 5,
      title: "Secure IoT Networks",
      description: "Internet of Things solutions where devices have secure digital identities, enabling trustworthy machine-to-machine communication and autonomous transactions.",
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
    },
    {
      id: 7,
      title: "Privacy-Preserving Services",
      description: "Applications that respect user privacy by design, allowing selective disclosure of information and giving users control over their digital footprint.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Privacy",
      link: "#",
      modalContent: `🛡️ Privacy-Preserving Services
Privacy by design, control by default.
Using Elastos' DID and Hive architecture, build services where users control what data is shared, with whom, and for how long. Leverage zero-knowledge proofs for validation without revealing underlying data.

💡 What You Can Build:

Healthcare apps where patient data remains private but verifiable.
Dating platforms with verified attributes but protected personal details.
Anonymous voting systems with cryptographic integrity.
Selective disclosure identity verification without exposing full credentials.
🔧 Tech Used:
DID (identity management), Hive (private storage), Carrier (encrypted communications), ESC (zero-knowledge validation).`
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

💡 What You Can Build:

Local or national governance tools for communities, DAOs, or NGOs.
Protocol DAOs with anti-sybil voting and smart contract-controlled treasuries.
Alumni or membership orgs where verified identity enables trusted participation.
Funding DAOs that allow creators to raise capital and report progress to token holders.
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

💡 What You Can Build:

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
      modalContent: `📺 Digital Content Marketplace
Creators distribute and monetize with total control.
With Elastos, content isn't streamed from centralized servers—it's stored in Hive, verified with DID, and monetized via ESC smart contracts or ELA payments. Elacity makes this easy with tools for access control, licensing, and dynamic pricing.

💡 What You Can Build:

A Spotify alternative where artists publish and get paid instantly, per stream.
eBook platforms where ownership is NFT-based, not platform-locked.
Video marketplaces where viewers pay per view or rent content directly.
Content subscription services where credentials control access tiers.
🔧 Tech Used:
Hive (media hosting), DID (creator + consumer identity), ESC (access rights), Elacity Runtime, ELA (settlement).`
    },
    {
      id: 11,
      title: "Decentralized Storage Solutions",
      description: "Secure, encrypted storage networks where users maintain ownership of their data while benefiting from distributed redundancy and access control.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Storage",
      link: "#",
      modalContent: `🗄 Decentralized Storage Solutions
Own your data vault. Choose your host. Control your access.
Elastos Hive allows users and developers to store data in personal, permissioned vaults—with end-to-end encryption and total data portability. Hive can be self-hosted, trusted-hosted, or decentralized across community nodes.

💡 What You Can Build:

Decentralized Dropbox alternatives.
Messaging apps where chat histories are user-owned, not cloud-controlled.
Decentralized CRMs or productivity suites where no provider sees your files.
Healthcare apps where patient records live with the patient.
🔧 Tech Used:
Hive (data storage), DID (access control), Carrier (data routing), ESC (payment/token gating).`
    },
    {
      id: 12,
      title: "Supply Chain Tracking",
      description: "End-to-end visibility in supply chains with immutable records of product journeys, enabling verification of authenticity, origin, and handling conditions.",
      image: "/images/usecases/usecase-default.jpg",
      category: "Enterprise",
      link: "#",
      modalContent: `📦 Supply Chain Tracking
Transparency you can verify, not just trust.
Elastos enables every item or actor in a supply chain to carry a DID, log their touchpoints immutably on-chain, and report status/data via secure protocols.

💡 What You Can Build:

Food traceability systems from farm to fork.
Anti-counterfeit platforms for luxury goods or pharmaceuticals.
Shipment tracking for eCommerce with real-time updates via IoT + Hive.
ESG compliance dashboards that show full product lifecycle data.
🔧 Tech Used:
DID (actor/item IDs), Hive (data logs), Carrier (device comms), ESC (traceability tokens).`
    },
  ];

  const categories = ["All", ...Array.from(new Set(useCases.map((useCase) => useCase.category)))];

  const filteredUseCases = selectedCategory === "All"
    ? useCases
    : useCases.filter((useCase) => useCase.category === selectedCategory);

  const handleOpenModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUseCase(null);
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-white dark:bg-[#171717]">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundCells className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Use Cases
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Elastos provides the infrastructure for a new generation of decentralized applications
              that prioritize user ownership, privacy, and interoperability.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUseCases.map((useCase) => (
              <Card key={useCase.id} className="overflow-hidden bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {useCase.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <Button 
                      onClick={() => handleOpenModal(useCase)}
                      variant="outline"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Learn More
                    </Button>
                    {useCase.link !== "#" && (
                      <a
                        href={useCase.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm flex items-center gap-1"
                      >
                        Visit
                        <span className="inline-block transform rotate-45">↗</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Code Section */}
          <div className="mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">
              Developer Resources
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started building on Elastos with these code examples. Our SDKs provide simple interfaces to powerful decentralized protocols.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#1f1f1f] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-2">Elastos DID Example</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Create and verify a decentralized identity:</p>
                <CodeBlock
                  language="javascript"
                  value={`// Create a new DID
import { DID } from '@elastosfoundation/did-js-sdk';

const mnemonic = DID.generateMnemonic();
const rootIdentity = RootIdentity.createFromMnemonic(
  mnemonic, '', true, passphrase
);

const did = rootIdentity.newDid(passphrase);
console.log("New DID created:", did.toString());

// Publish to the blockchain
const didDocument = did.createDocument();
const signedDoc = didDocument.sign(did, passphrase);
await signedDoc.publish();`}
                />
              </div>

              <div className="bg-white dark:bg-[#1f1f1f] rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-2">Elastos Hive Storage Example</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Store and retrieve data from a user's vault:</p>
                <CodeBlock
                  language="javascript"
                  value={`// Initialize Hive client with user's DID
import { Vault } from '@elastosfoundation/hive-js-sdk';

const userDid = 'did:elastos:YOUR_USER_DID';
const appDid = 'did:elastos:YOUR_APP_DID';
const vault = new Vault({
  userDid,
  appDid,
  vaultUrl: 'https://hive1.trinity-tech.io'
});

// Store data
await vault.getDatabase().insertOne({
  collection: 'profile',
  document: {
    name: 'Alice',
    email: 'alice@example.com',
    preferences: { theme: 'dark' }
  }
});

// Retrieve data
const result = await vault.getDatabase().findOne({
  collection: 'profile',
  filter: { name: 'Alice' }
});
console.log(result);`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <LogoCarouselDemo />
          <StackedCircularFooter />
        </div>
      </div>

      {/* Modal */}
      <UseCaseModal
        isOpen={isModalOpen}
        useCase={selectedUseCase}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default UseCasesPage;
