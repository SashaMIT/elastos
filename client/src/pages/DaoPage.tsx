
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
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

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
    icon: <Building2 className="w-10 h-10 text-[#F7921A]" />,
    description: "A 12-seat, community-elected council responsible for overseeing strategic development, approving proposals, and distributing DAO funds.",
    details: [
      "Elected by ELA stakers",
      "Must stake 5,000 ELA as collateral",
      "Annual elections",
      "Manages treasury",
      "Approves/rejects proposals",
      "Oversees ecosystem development"
    ],
    color: "from-[#F7921A]/10 to-[#F7921A]/5",
    borderColor: "border-[#F7921A]/20",
    textColor: "text-[#F7921A]"
  },
  {
    title: "Proposal System",
    icon: <ScrollText className="w-10 h-10 text-[#8BABFF]" />,
    description: "Any verified DID holder can submit ecosystem proposals—ranging from tech development, marketing campaigns, dApps, community efforts, or DAO upgrades.",
    details: [
      "Open to all DID holders",
      "Technical & non-technical proposals",
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
    icon: <Vote className="w-10 h-10 text-[#F7921A]" />,
    description: "Held annually. ELA holders vote using their staked tokens to elect trusted representatives to the council. Everything is on-chain and transparent.",
    details: [
      "Annual council elections",
      "Vote weight = staked ELA",
      "DID-verified participation",
      "Transparent, on-chain results",
      "Self-nomination period",
      "Community debates & AMAs"
    ],
    color: "from-[#F7921A]/10 to-[#F7921A]/5",
    borderColor: "border-[#F7921A]/20",
    textColor: "text-[#F7921A]"
  },
  {
    title: "Treasury",
    icon: <Coins className="w-10 h-10 text-[#8BABFF]" />,
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
    title: "Cyber Republic Founded",
    description: "Cyber Republic is established as Elastos' community growth and governance initiative.",
    icon: <History className="w-5 h-5 text-[#F7921A]" />
  },
  {
    year: "2019",
    title: "First CR Council Election",
    description: "The first CR Council election is held. Community begins funding real-world dApps and initiatives.",
    icon: <Vote className="w-5 h-5 text-[#8BABFF]" />
  },
  {
    year: "2021",
    title: "Smart Contract Transition",
    description: "Governance and voting systems are transitioned to smart contracts on ESC.",
    icon: <FileText className="w-5 h-5 text-[#F7921A]" />
  },
  {
    year: "2022-2023",
    title: "Full DAO Implementation",
    description: "Full DAO framework implemented. The Cyber Republic brand is deprecated as the DAO takes full control under the Elastos banner.",
    icon: <Building2 className="w-5 h-5 text-[#8BABFF]" />
  },
  {
    year: "2024",
    title: "Continuous Evolution",
    description: "DAO continues to evolve with new tools, funding processes, and increased autonomy.",
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
    icon: <Vote className="w-10 h-10 text-white" />,
    steps: [
      "Stake your ELA",
      "Connect with your DID",
      "Participate in Council elections and proposal votes"
    ],
    color: "bg-gradient-to-br from-[#F7921A] to-[#F7921A]/70",
    borderColor: "border-[#F7921A]/20"
  },
  {
    title: "Submit a Proposal",
    icon: <FileText className="w-10 h-10 text-white" />,
    steps: [
      "Have an idea that benefits the Elastos ecosystem?",
      "Write and submit a proposal through the DAO portal",
      "If approved, receive funding and community support"
    ],
    color: "bg-gradient-to-br from-[#8BABFF] to-[#8BABFF]/70",
    borderColor: "border-[#8BABFF]/20"
  },
  {
    title: "Run for Council",
    icon: <Users className="w-10 h-10 text-white" />,
    steps: [
      "Stake 5,000 ELA as collateral",
      "Share your vision and campaign",
      "Earn a seat to shape the future of decentralized infrastructure"
    ],
    color: "bg-gradient-to-br from-[#F7921A] to-[#F7921A]/70",
    borderColor: "border-[#F7921A]/20"
  }
];

const DaoPage: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-0"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#F7921A]/5 blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#8BABFF]/5 blur-[150px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Elastos <span className="text-[#F7921A]">DAO</span>: Governance for the World Computer
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Community-powered governance for a truly decentralized internet.
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                Elastos DAO is the on-chain, self-sovereign governance framework behind the Elastos ecosystem—where stakeholders shape the future of the World Computer through transparent proposals, voting, and funding.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://cyberrepublic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
                >
                  <span>Visit DAO Portal</span>
                  <CircleArrow />
                </a>
                <a
                  href="https://cyberrepublic.org/proposals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                >
                  <span>View Current Proposals</span>
                  <BlueCircleArrow />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Elastos DAO Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              What is <span className="text-[#F7921A]">Elastos DAO</span>?
            </h2>
            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10 shadow-lg">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Formerly known as the Cyber Republic, the Elastos DAO is the decentralized autonomous organization that governs the development, direction, and funding of the Elastos ecosystem. It puts ELA holders in control, letting them participate in elections, submit proposals, fund projects, and maintain ecosystem integrity—without corporate gatekeepers.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-medium italic">
                Elastos DAO is not just governance for a blockchain—it is governance for a new internet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Core <span className="text-[#8BABFF]">Components</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              The foundation of Elastos' decentralized governance system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {coreComponents.map((component, index) => (
              <motion.div
                key={component.title}
                className={`relative rounded-xl overflow-hidden border ${component.borderColor} bg-gradient-to-br ${component.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-4`}>
                    {component.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${component.textColor}`}>{component.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{component.description}</p>
                  <div className="space-y-2 mb-4">
                    {component.details.slice(0, 4).map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Elastos Technology */}
      <section className="py-16 relative bg-gradient-to-b from-[#171717] via-[#1D1D1D] to-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Powered by <span className="text-[#F7921A]">Elastos Technology</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Leveraging the full Elastos tech stack for secure, transparent governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A] border border-[#F7921A]/20 rounded-xl p-6 hover:border-[#F7921A]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#F7921A]/10 flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-[#F7921A]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DID (Decentralized Identity)</h3>
              <p className="text-gray-400">
                Every participant in the DAO—voters, proposers, and council members—is verifiably identified using a self-sovereign DID.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A] border border-[#8BABFF]/20 rounded-xl p-6 hover:border-[#8BABFF]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#8BABFF]/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#8BABFF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ESC (Elastos Smart Chain)</h3>
              <p className="text-gray-400">
                All governance logic, votes, and funding mechanisms are run via smart contracts on the Elastos Smart Chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1A1A1A] border border-[#F7921A]/20 rounded-xl p-6 hover:border-[#F7921A]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#F7921A]/10 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-6 h-6 text-[#F7921A]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ELA Token</h3>
              <p className="text-gray-400">
                The native Elastos token is used for staking, voting, and DAO budgeting across the ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why It <span className="text-[#8BABFF]">Matters</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              The unique advantages of Elastos DAO governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyItMatters.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`bg-[#1A1A1A] border ${feature.border} rounded-xl overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
                <div 
                  className={`h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-500 ease-in-out`}
                  style={{ 
                    width: hoveredFeature === index ? '100%' : '0%',
                    opacity: hoveredFeature === index ? 1 : 0
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              From Cyber Republic to <span className="text-[#F7921A]">Elastos DAO</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              A journey of decentralized governance evolution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-[#F7921A]/30 via-[#8BABFF]/30 to-[#F7921A]/30 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#171717] border-2 border-[#F7921A] z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    <div className="bg-[#1A1A1A] rounded-xl p-5 border border-white/10">
                      <div className="flex items-center mb-2 gap-2 text-[#F7921A]">
                        {index % 2 === 1 && event.icon}
                        <h3 className="text-xl font-bold">{event.year}</h3>
                        {index % 2 === 0 && event.icon}
                      </div>
                      <h4 className="text-white font-medium mb-2">{event.title}</h4>
                      <p className="text-gray-400 text-sm">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DAO in Action Stats */}
      <section className="py-16 relative bg-gradient-to-b from-[#171717] via-[#1D1D1D] to-[#171717]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              DAO in <span className="text-[#8BABFF]">Action</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Real-time metrics of the Elastos governance ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Treasury Balance */}
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#F7921A]/20">
                <div className="w-12 h-12 rounded-full bg-[#F7921A]/10 flex items-center justify-center mb-3">
                  <Wallet className="w-6 h-6 text-[#F7921A]" />
                </div>
                <h3 className="text-white text-sm mb-2">Treasury Balance</h3>
                <p className="text-2xl font-bold text-[#F7921A]">{daoStats.treasuryBalance}</p>
              </div>

              {/* Proposals Funded */}
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#8BABFF]/20">
                <div className="w-12 h-12 rounded-full bg-[#8BABFF]/10 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-[#8BABFF]" />
                </div>
                <h3 className="text-white text-sm mb-2">Proposals Funded</h3>
                <p className="text-2xl font-bold text-[#8BABFF]">{daoStats.proposalsFunded}</p>
              </div>

              {/* Active Voters */}
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#F7921A]/20">
                <div className="w-12 h-12 rounded-full bg-[#F7921A]/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-[#F7921A]" />
                </div>
                <h3 className="text-white text-sm mb-2">Active Voters</h3>
                <p className="text-2xl font-bold text-[#F7921A]">{daoStats.activeVoters}</p>
              </div>

              {/* Next Election */}
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#8BABFF]/20">
                <div className="w-12 h-12 rounded-full bg-[#8BABFF]/10 flex items-center justify-center mb-3">
                  <CalendarDays className="w-6 h-6 text-[#8BABFF]" />
                </div>
                <h3 className="text-white text-sm mb-2">Next CR Election</h3>
                <p className="text-2xl font-bold text-[#8BABFF]">June 2024</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Recent Projects Funded</h3>
              <div className="space-y-4">
                {daoStats.recentProjects.map((project, index) => (
                  <div key={project.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#F7921A] w-6 h-6 rounded-full bg-[#F7921A]/10 flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{project.name}</span>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8BABFF] hover:underline flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://cyberrepublic.org/proposals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                >
                  <span>View All Funded Projects</span>
                  <BlueCircleArrow />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              How to Get <span className="text-[#F7921A]">Involved</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Join the community shaping the future of the decentralized internet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {getInvolved.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10"
              >
                <div className={`p-4 ${item.color} flex items-center gap-3`}>
                  <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#F7921A]/10 text-[#F7921A] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent rounded-2xl p-10 border border-[#F7921A]/20 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Shape the Future of the Internet
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
                Whether you're a builder, voter, or visionary—you have a place in the Elastos DAO.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://cyberrepublic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-3 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(246,146,26,0.50)] text-base"
                >
                  <span>Join the DAO Portal</span>
                  <CircleArrow />
                </a>
                <a
                  href="https://cyberrepublic.org/proposals/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-3 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(92,142,255,0.50)] text-base"
                >
                  <span>Submit a Proposal</span>
                  <BlueCircleArrow />
                </a>
                <a
                  href="https://cyberrepublic.org/council/election"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-3 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(246,146,26,0.50)] text-base"
                >
                  <span>Run for Council</span>
                  <CircleArrow />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default DaoPage;
