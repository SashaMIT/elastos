import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Vote, 
  Building2, 
  ScrollText, 
  Coins, 
  ShieldCheck, 
  Users, 
  FileText, 
  History,
  CheckCircle,
  CircleDollarSign,
  CalendarDays,
  Wallet,
  ExternalLink,
  Fingerprint,
  Code,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";

// Circle arrow component for buttons
const CircleArrow = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 35 34" 
    fill="none"
  >
    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
  </svg>
);

// Blue circle arrow component for buttons
const BlueCircleArrow = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 35 34" 
    fill="none"
  >
    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
  </svg>
);

// Core components data
const coreComponents = [
  {
    title: "CR Council",
    icon: <Building2 className="w-4 h-4 text-[#8BABFF]" />,
    description: "A 12-seat, community-elected council responsible for overseeing development, approving proposals, and distributing DAO funds.",
    details: [
      "Elected by ELA stakers",
      "5,000 ELA as collateral",
      "Annual elections",
      "Manages treasury",
      "Approves/rejects proposals",
      "Oversees ecosystem development"
    ],
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5",
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]"
  },
  {
    title: "Proposal System",
    icon: <ScrollText className="w-4 h-4 text-[#8BABFF]" />,
    description: "Any verified DID holder can submit ecosystem suggestions—ranging from tech development, marketing campaigns, dApps, or DAO upgrades.",
    details: [
      "Open to all DID holders",
      "Universal suggestions",
      "Transparent review process",
      "Community feedback periods",
      "Smart contract-based execution",
      "Milestone-based funding"
    ],
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5",
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]"
  },
  {
    title: "Elections",
    icon: <Vote className="w-4 h-4 text-[#8BABFF]" />,
    description: "Held annually. ELA holders vote using their staked tokens to elect trusted representatives to the council. Everything is on-chain and transparent.",
    details: [
      "Annual council elections",
      "Vote weight = staked ELA",
      "DID-verified participation",
      "Transparent, on-chain results",
      "Self-nomination period",
      "Community debates & AMAs"
    ],
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5",
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]"
  },
  {
    title: "Treasury",
    icon: <Coins className="w-4 h-4 text-[#8BABFF]" />,
    description: "The Elastos DAO treasury is funded through a portion of ELA token inflation and ecosystem revenue. It supports community-led initiatives.",
    details: [
      "Transparent, on-chain funds",
      "Ecosystem growth funding",
      "Bounties & grants",
      "Infrastructure support",
      "Multi-sig protection",
      "Community oversight"
    ],
    color: "from-[#8BABFF]/10 to-[#8BABFF]/5",
    borderColor: "border-[#8BABFF]/20",
    textColor: "text-[#8BABFF]"
  }
];

// Timeline data
const timelineEvents = [
  {
    year: "2018",
    title: "Elastos DAO Founded",
    description: "Elastos DAO is established as Elastos' community growth and governance initiative.",
    icon: <History className="w-5 h-5 text-[#F7921A]" />
  },
  {
    year: "2019",
    title: "First DAO Council Election",
    description: "The first DAO Council election is held. Community begins funding real-world dApps and initiatives.",
    icon: <Vote className="w-5 h-5 text-[#8BABFF]" />
  },
  {
    year: "2020",
    title: "Full DAO Implementation",
    description: "Full DAO framework implemented. The Elastos DAO takes full control under the Elastos banner.",
    icon: <Building2 className="w-5 h-5 text-[#8BABFF]" />
  },
  {
    year: "2021",
    title: "Delaware LLC Registration",
    description: "Elastos DAO was legally registered as a DAO LLC in Delaware, establishing initial legal status.",
    icon: <FileText className="w-5 h-5 text-[#F7921A]" />
  },
  {
    year: "2022-2023",
    title: "Ecosystem Growth",
    description: "DAO expands support for ecosystem projects and development initiatives across the Elastos network.",
    icon: <Building2 className="w-5 h-5 text-[#8BABFF]" />
  },
  {
    year: "2024",
    title: "Marshall Islands Registration",
    description: "Elastos DAO transitioned from Delaware to the Marshall Islands, establishing enhanced legal status in a more crypto-friendly jurisdiction.",
    icon: <ArrowRight className="w-5 h-5 text-[#F7921A]" />
  }
];

// Why it matters data
const whyItMatters = [
  {
    title: "Truly Democratic",
    description: "One of the only DAOs where real identity (via DID) meets transparent on-chain voting.",
    icon: <Vote className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-500/20"
  },
  {
    title: "Global Participation",
    description: "Anyone with ELA and a verified DID can help shape the network's future.",
    icon: <Users className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    border: "border-indigo-500/20"
  },
  {
    title: "Funding for Builders",
    description: "Developers, creators, and community leaders can get funded to build on Elastos.",
    icon: <Coins className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    border: "border-purple-500/20"
  },
  {
    title: "Security by Design",
    description: "Every vote, credential, and transaction is verified, immutable, and transparent.",
    icon: <ShieldCheck className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-500/20"
  },
  {
    title: "Built for Scalability",
    description: "Govern not just a blockchain—but a full-stack Web3 infrastructure and its expanding ecosystem.",
    icon: <Building2 className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-emerald-500/10 via-green-500/5 to-transparent",
    border: "border-emerald-500/20"
  },
  {
    title: "Legal Recognition",
    description: "Registered as a DAO LLC in the Marshall Islands, providing legal protection and recognition for governance participants.",
    icon: <FileText className="w-8 h-8 text-[#5C8EFF]" />,
    gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-500/20"
  }
];

// DAO in Action stats
const daoStats = {
  treasuryBalance: "1,245,000 ELA",
  proposalsFunded: "73",
  activeVoters: "2,430",
  recentProjects: [
    {
      name: "Elastos Essentials Wallet Upgrade",
      link: "https://cyberrepublic.org/proposals/123"
    },
    {
      name: "BeL2 Bitcoin DeFi Infrastructure",
      link: "https://cyberrepublic.org/proposals/456"
    },
    {
      name: "Web3 Education Platform",
      link: "https://cyberrepublic.org/proposals/789"
    },
    {
      name: "Elastos Africa Community Expansion",
      link: "https://cyberrepublic.org/proposals/101"
    }
  ]
};

// Get involved steps
const getInvolved = [
  {
    title: "Vote",
    icon: <Vote className="w-6 h-6 text-white" />,
    steps: [
      "Stake your ELA",
      "Connect with your DID",
      "Participate in elections and voting"
    ],
    color: "bg-gradient-to-br from-[#F7921A] to-[#F7921A]/70",
    borderColor: "border-[#F7921A]/20"
  },
  {
    title: "Submit a Proposal",
    icon: <FileText className="w-6 h-6 text-white" />,
    steps: [
      "Have an idea that benefits Elastos?",
      "Write and submit a suggestion",
      "If approved, receive support"
    ],
    color: "bg-gradient-to-br from-[#8BABFF] to-[#8BABFF]/70",
    borderColor: "border-[#8BABFF]/20"
  },
  {
    title: "Run for Council",
    icon: <Users className="w-6 h-6 text-white" />,
    steps: [
      "Stake 5,000 ELA as collateral",
      "Share your vision and campaign",
      "Earn a seat to shape the future"
    ],
    color: "bg-gradient-to-br from-[#F7921A] to-[#F7921A]/70",
    borderColor: "border-[#F7921A]/20"
  }
];

const DaoPage: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Full-width hero image with gradient overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos DAO" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6">
                    Elastos DAO: Governance for the World Computer
                  </h1>
                  <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                    Community-powered governance for a truly decentralized internet, where stakeholders shape the future through transparent proposals, voting, and funding.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <a
                      href="https://cyberrepublic.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                    >
                      <span>Visit DAO Portal</span>
                      <CircleArrow />
                    </a>
                    <a
                      href="https://cyberrepublic.org/proposals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                    >
                      <span>View Current Proposals</span>
                      <BlueCircleArrow />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is Elastos DAO Section */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              What is Elastos DAO?
            </h2>
            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10 shadow-lg">
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-[200]">
                The Elastos DAO is the decentralized autonomous organization that governs the development, direction, and funding of the Elastos ecosystem. It puts ELA holders in control, letting them participate in elections, submit proposals, fund projects, and maintain ecosystem integrity—without corporate gatekeepers. Elastos DAO is not just governance for a blockchain—it is governance for a new internet.
              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-[200]">
              Core Components
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-[200]">
              The foundation of Elastos' decentralized governance system
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:border rounded-md dark:border-neutral-800 max-w-6xl mx-auto">
              {coreComponents.map((component, index) => (
                <div 
                  key={component.title} 
                  className={`p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 ${
                    index < coreComponents.length - 4 ? 'border-b dark:border-neutral-800' : ''
                  } ${
                    index % 4 !== 3 ? 'md:border-r dark:border-neutral-800' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1E1E1E]">
                        {component.icon}
                      </div>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${component.textColor} font-[200]`}>
                      {component.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4 font-[200]">
                      {component.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {component.details.slice(0, 3).map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-xs font-[200]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Elastos Technology */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-[200]">
              Powered by Elastos Technology
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-[200]">
              Leveraging the full Elastos tech stack for secure, transparent governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 py-4 max-w-5xl mx-auto">
            {[
              {
                title: "DID (Decentralized Identity)",
                description: "Every participant in the DAO—voters, proposers, and council members—is verifiably identified using a self-sovereign DID.",
                icon: <Fingerprint className="w-6 h-6" />,
                tag: "IDENTITY"
              },
              {
                title: "Mainchain (Secured by Bitcoin)",
                description: "The core blockchain of Elastos is secured through merged mining with Bitcoin, providing unprecedented security to the entire ecosystem.",
                icon: <Shield className="w-6 h-6" />,
                tag: "SECURITY"
              },
              {
                title: "ELA Token",
                description: "The native Elastos token is used for staking, voting, and DAO budgeting across the ecosystem.",
                icon: <CircleDollarSign className="w-6 h-6" />,
                tag: "GOVERNANCE"
              }
            ].map((tech, index) => (
              <div
                key={tech.title}
                className={cn(
                  "flex flex-col py-8 relative group dark:border-neutral-800",
                  index !== 2 ? "lg:border-r dark:border-neutral-800" : ""
                )}
              >
                <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#F7921A]/10 to-transparent pointer-events-none" />

                <div className="mb-4 relative z-10 px-6 text-[#F7921A]">
                  {tech.icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-6 flex justify-between items-center font-[200]">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover:bg-[#F7921A] transition-all duration-200" />
                  <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-100 text-base font-[200]">
                    {tech.title}
                  </span>
                  <span className="px-3 py-1 bg-[#F7921A]/10 border border-[#F7921A]/30 text-white rounded-full text-xs font-medium whitespace-nowrap font-[200]">
                    {tech.tag}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 relative z-10 px-6 font-[200]">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-[200]">
              Why It Matters
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-[200]">
              The unique advantages of Elastos DAO governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-6xl mx-auto">
            {whyItMatters.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "flex flex-col py-10 relative group dark:border-neutral-800",
                  (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
                  index % 3 !== 2 && "lg:border-r dark:border-neutral-800",
                  index < 3 && "lg:border-b dark:border-neutral-800"
                )}
              >
                {index < 3 && (
                  <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
                )}
                {index >= 3 && (
                  <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
                )}
                <div className="mb-4 relative z-10 px-10 text-neutral-400">
                  {feature.icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10 flex items-center font-[200]">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover:bg-[#F6921A] transition-all duration-200 origin-center" />
                  <span className="group-hover:translate-x-2 transition duration-200 inline-block text-white font-[200]">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10 font-[200]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-[200]">
              Elastos DAO Evolution
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-[200]">
              A journey of decentralized governance evolution
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:border rounded-md dark:border-neutral-800">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year} 
                  className={`p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300 ${
                    index < timelineEvents.length - 2 ? 'border-b dark:border-neutral-800' : ''
                  } ${
                    index % 2 === 0 ? 'md:border-r dark:border-neutral-800' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-3 gap-2 text-[#F7921A]">
                      {event.icon}
                      <div className="text-lg font-[200]">{event.year}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white font-[200]">
                      {event.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-[200]">
                      {event.description}
                    </p>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#F7921A]/30 to-transparent rounded-full"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* How to Get Involved */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-[200]">
              How to Get Involved
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-[200]">
              Join the community shaping the future of the decentralized internet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 relative xl:border rounded-md dark:border-neutral-800 max-w-5xl mx-auto overflow-hidden">
            {getInvolved.map((item, index) => (
              <div 
                key={item.title}
                className={`relative ${
                  index % 3 !== 2 ? 'md:border-r dark:border-neutral-800' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 sm:p-6 relative overflow-hidden group hover:bg-neutral-900 transition-colors duration-300"
                >
                  <div className="mb-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-[#F7921A]/10' : 'bg-[#8BABFF]/10'
                    }`}>
                      <div className="w-6 h-6">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-6 ${
                    index % 2 === 0 ? 'text-[#F7921A]' : 'text-[#8BABFF]'
                  } font-[200] `}>
                    {item.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          index % 2 === 0 ? 'bg-[#F7921A]/10 text-[#F7921A]' : 'bg-[#8BABFF]/10 text-[#8BABFF]'
                        } font-[200]`}>
                          {idx + 1}
                        </span>
                        <span className="text-gray-300 text-sm font-[200]">{step}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    {item.title === "Vote" && (
                      <a
                        href="https://cyberrepublic.org/council/election"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-[200] transition-all items-center justify-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                      >
                        <span>How to Vote</span>
                        <CircleArrow />
                      </a>
                    )}
                    {item.title === "Submit a Proposal" && (
                      <a
                        href="https://cyberrepublic.org/proposals/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-[200] transition-all items-center justify-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                      >
                        <span>Submit a Proposal</span>
                        <BlueCircleArrow />
                      </a>
                    )}
                    {item.title === "Run for Council" && (
                      <a
                        href="https://cyberrepublic.org/council/election"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-[200] transition-all items-center justify-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                      >
                        <span>Run for Council</span>
                        <CircleArrow />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elastos Essentials Wallet Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Elastos Essentials Wallet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Required for DAO voting, proposal submission, and governance participation with DID integration
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent p-10 border border-[#8BABFF]/20 w-full mx-auto relative overflow-hidden"
            >
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/images/Essentials.png" 
                    alt="Elastos Essentials" 
                    className="w-full max-w-[350px] rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/350x700?text=Elastos+Essentials";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-[200] text-white mb-3">Essential for DAO Governance</h3>
                  <div className="space-y-4 text-white/70">
                    <p className="text-base font-[200]">Elastos Essentials is required for participating in the DAO. With the wallet, you can:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Create your Decentralized ID (DID) needed for proposal submission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Stake your ELA to vote on Council members to represent you annually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Run for council by staking 5,000 ELA as collateral</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                        <span className="text-base font-[200]">Access the DAO Portal directly through the built-in DApp browser</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-4 py-3 min-h-[48px] bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm hover:bg-[rgba(92,142,255,0.25)] active:bg-[rgba(92,142,255,0.35)] relative z-10 cursor-pointer touch-auto min-w-[120px] justify-center"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <span>App Store</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-4 py-3 min-h-[48px] bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)] active:bg-[rgba(246,146,26,0.35)] relative z-10 cursor-pointer touch-auto min-w-[120px] justify-center"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <span>Google Play</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LogoCarouselDemo Section */}
      <section className="py-16 relative bg-[#171717]">
        <div className="container mx-auto px-4">
          <LogoCarouselDemo />
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default DaoPage;