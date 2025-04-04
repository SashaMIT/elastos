import React from 'react';
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
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { ImageZoom } from "@/components/ui/zoomable-image";

// Timeline data for DAO history
const timelineData = [
  {
    title: "2018",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>August 2018:</strong> Cyber Republic (CR) launched as Elastos' community growth and governance initiative.</p>
        <p className="mb-4"><strong>December 2018:</strong> Initial CR Constitution published, establishing governance framework.</p>
      </div>
    )
  },
  {
    title: "2019",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>June 2019:</strong> First CR Council Election held with global community participation.</p>
        <p className="mb-4"><strong>October 2019:</strong> First community proposals funded through the governance system.</p>
      </div>
    )
  },
  {
    title: "2020",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>February 2020:</strong> Full DAO framework implemented with on-chain voting.</p>
        <p className="mb-4"><strong>May 2020:</strong> Cyber Republic brand deprecated as the DAO takes full control under the Elastos banner.</p>
        <p className="mb-4"><strong>December 2020:</strong> Second CR Council elected with increased participation.</p>
      </div>
    )
  },
  {
    title: "2021",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>March 2021:</strong> Elastos DAO legally registered as a DAO LLC in Delaware.</p>
        <p className="mb-4"><strong>September 2021:</strong> DID integration for enhanced verification of DAO members.</p>
      </div>
    )
  },
  {
    title: "2022-2023",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>2022:</strong> DAO expands support for ecosystem projects and development initiatives.</p>
        <p className="mb-4"><strong>2023:</strong> Enhanced proposal system with milestone-based funding released.</p>
      </div>
    )
  },
  {
    title: "2024-Present",
    content: (
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"><strong>January 2024:</strong> Elastos DAO transitioned from Delaware to the Marshall Islands for enhanced legal status.</p>
        <p className="mb-4"><strong>May 2024:</strong> Fifth CR Council elected with record participation.</p>
        <p className="mb-4"><strong>Ongoing:</strong> Continued evolution of the governance model for the Elastos World Computer.</p>
      </div>
    )
  }
];

// Core components data
const coreComponents = [
  {
    title: "CR Council",
    icon: <Building2 className="w-10 h-10 text-[#5C8EFF]" />,
    description: "A 12-seat, community-elected council responsible for overseeing strategic development, approving proposals, and distributing DAO funds.",
    details: [
      "Elected by ELA stakers",
      "Must stake 5,000 ELA as collateral",
      "Annual elections",
      "Manages treasury",
      "Approves/rejects proposals",
      "Oversees ecosystem development"
    ]
  },
  {
    title: "Proposal System",
    icon: <ScrollText className="w-10 h-10 text-[#5C8EFF]" />,
    description: "Any verified DID holder can submit ecosystem proposals—ranging from tech development, marketing campaigns, dApps, community efforts, or DAO upgrades.",
    details: [
      "Open to all DID holders",
      "Technical & non-technical proposals",
      "Transparent review process",
      "Community feedback periods",
      "Smart contract-based execution",
      "Milestone-based funding"
    ]
  },
  {
    title: "Elections",
    icon: <Vote className="w-10 h-10 text-[#5C8EFF]" />,
    description: "Held annually. ELA holders vote using their staked tokens to elect trusted representatives to the council. Everything is on-chain and transparent.",
    details: [
      "Annual council elections",
      "Vote weight = staked ELA",
      "DID-verified participation",
      "Transparent, on-chain results",
      "Self-nomination period",
      "Community debates & AMAs"
    ]
  },
  {
    title: "Treasury",
    icon: <Coins className="w-10 h-10 text-[#5C8EFF]" />,
    description: "The Elastos DAO treasury is funded through a portion of ELA token inflation and ecosystem revenue. It supports community-led initiatives.",
    details: [
      "Transparent, on-chain funds",
      "Ecosystem growth funding",
      "Bounties & grants",
      "Infrastructure support",
      "Multi-sig protection",
      "Community oversight"
    ]
  }
];

export default function DaoPage() {
  return (
    <div className="relative w-full">
      {/* Full-width hero image with gradient overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Cyber Republic DAO meetup.jpeg" 
          alt="Elastos DAO" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6">
                  Elastos DAO
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Governance for the World Computer—community-powered, transparent, and decentralized decision making for the Elastos ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0 pb-8 bg-[#171717]">
        <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#5C8EFF]/10 to-[#5C8EFF]/5 rounded-xl p-8 border border-[#5C8EFF]/30 relative">
            {/* Background blur elements */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="md:w-1/4 flex justify-center">
                <img 
                  src="/images/CRC.png" 
                  alt="Cyber Republic DAO" 
                  className="w-48 h-48 object-cover rounded-full border-4 border-[#5C8EFF]/30"
                />
              </div>
              <div className="md:w-3/4">
                <blockquote className="italic text-lg text-gray-200">
                  <span className="text-4xl text-[#5C8EFF]">"</span>
                  Elastos DAO is not just another governance system—it's the cornerstone of a new internet paradigm. By combining verifiable digital identities with transparent voting and community-driven treasury management, we've created a governance framework that matches the innovation of the technology it governs. Our DAO doesn't just decide how funds are allocated; it shapes the future direction of the World Computer itself.
                  <span className="text-4xl text-[#5C8EFF]">"</span>
                </blockquote>
                <div className="mt-4 font-semibold text-[#5C8EFF]">
                  Cyber Republic Council
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Elastos DAO Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[200] text-white mb-4">What is Elastos DAO?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Formerly known as the Cyber Republic, the Elastos DAO is the decentralized autonomous organization that governs the development, direction, and funding of the Elastos ecosystem. It puts ELA holders in control through elections, proposals, and transparent treasury management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {coreComponents.map((component, index) => (
              <div key={component.title} className="bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
                <div className="w-16 h-16 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{component.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{component.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {component.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#5C8EFF] mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[200] text-white mb-4">Powered by Elastos Technology</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The Elastos DAO leverages the full Elastos tech stack for secure, transparent governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] border border-[#5C8EFF]/20 rounded-xl p-6 hover:border-[#5C8EFF]/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DID (Decentralized Identity)</h3>
              <p className="text-gray-400">
                Every participant in the DAO—voters, proposers, and council members—is verifiably identified using a self-sovereign DID.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#5C8EFF]/20 rounded-xl p-6 hover:border-[#5C8EFF]/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ESC (Elastos Smart Chain)</h3>
              <p className="text-gray-400">
                All governance logic, votes, and funding mechanisms are run via smart contracts on the Elastos Smart Chain.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#5C8EFF]/20 rounded-xl p-6 hover:border-[#5C8EFF]/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ELA Token</h3>
              <p className="text-gray-400">
                The native Elastos token is used for staking, voting, and DAO budgeting across the ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* DAO Timeline Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-[200] text-white mb-4">From Cyber Republic to Elastos DAO</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The evolution of governance within the Elastos ecosystem
            </p>
          </div>
          <div className="mt-8">
            {/* Timeline Component */}
            <div className="relative pb-12">
              <div className="container mx-auto px-6 flex flex-col items-start md:flex-row md:items-center">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4">
                  <p className="text-[#5C8EFF] uppercase tracking-loose">Timeline</p>
                  <h2 className="text-3xl md:text-4xl font-[200] text-white mb-4">DAO Evolution</h2>
                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    The Elastos governance model has evolved from a foundation-led initiative to a fully community-controlled decentralized autonomous organization.
                  </p>
                  <a 
                    href="https://cyberrepublic.org"
                    className="inline-flex px-4 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[#5C8EFF]/50 mt-2 w-fit"
                  >
                    <span>Visit DAO Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                  <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                      <div className="border-2-2 absolute h-full border border-[#5C8EFF]/30 left-[36px] md:left-1/2"></div>
                      {timelineData.map((item, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                          <div className="order-1 md:w-5/12"></div>
                          <div className="z-20 flex items-center order-1 bg-[#5C8EFF] shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                          </div>
                          <div className={`order-1 bg-[#1A1A1A] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-[#5C8EFF]/20`}>
                            <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                            {item.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DAO in Action Stats */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[200] text-white mb-4">DAO in Action</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Real-time metrics showing the impact of the Elastos governance ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-3">
                <Wallet className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-white text-sm mb-2">Treasury Balance</h3>
              <p className="text-2xl font-bold text-[#5C8EFF]">1,245,000 ELA</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-white text-sm mb-2">Proposals Funded</h3>
              <p className="text-2xl font-bold text-[#5C8EFF]">73</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-white text-sm mb-2">Active Voters</h3>
              <p className="text-2xl font-bold text-[#5C8EFF]">2,430</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-3">
                <CalendarDays className="w-6 h-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-white text-sm mb-2">Next CR Election</h3>
              <p className="text-2xl font-bold text-[#5C8EFF]">June 2024</p>
            </div>
          </div>

          <div className="mt-8 bg-[#1A1A1A] rounded-xl p-6 border border-[#5C8EFF]/20">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Projects Funded</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#5C8EFF] w-6 h-6 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">1</span>
                  <span className="text-gray-300">Elastos Essentials Wallet Upgrade</span>
                </div>
                <a href="https://cyberrepublic.org/proposals/123" target="_blank" rel="noopener noreferrer" className="text-[#5C8EFF] hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#5C8EFF] w-6 h-6 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">2</span>
                  <span className="text-gray-300">BeL2 Bitcoin DeFi Infrastructure</span>
                </div>
                <a href="https://cyberrepublic.org/proposals/456" target="_blank" rel="noopener noreferrer" className="text-[#5C8EFF] hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#5C8EFF] w-6 h-6 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">3</span>
                  <span className="text-gray-300">Web3 Education Platform</span>
                </div>
                <a href="https://cyberrepublic.org/proposals/789" target="_blank" rel="noopener noreferrer" className="text-[#5C8EFF] hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#5C8EFF] w-6 h-6 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">4</span>
                  <span className="text-gray-300">Elastos Africa Community Expansion</span>
                </div>
                <a href="https://cyberrepublic.org/proposals/101" target="_blank" rel="noopener noreferrer" className="text-[#5C8EFF] hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://cyberrepublic.org/proposals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[#5C8EFF]/50"
              >
                <span>View All Funded Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[200] text-white mb-4">How to Get Involved</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Join the community shaping the future of the decentralized internet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#5C8EFF]/20">
              <div className="p-4 bg-gradient-to-br from-[#5C8EFF] to-[#5C8EFF]/70 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                  <Vote className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Vote</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-300 text-sm">Stake your ELA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-300 text-sm">Connect with your DID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-300 text-sm">Participate in Council elections and voting</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://cyberrepublic.org/council/election"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center justify-center gap-1 border border-[#5C8EFF]/50 text-sm w-full"
                  >
                    <span>How to Vote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#5C8EFF]/20">
              <div className="p-4 bg-gradient-to-br from-[#5C8EFF] to-[#5C8EFF]/70 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Submit a Proposal</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-300 text-sm">Have an idea that benefits the Elastos ecosystem?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-300 text-sm">Write and submit a proposal through the DAO portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-300 text-sm">If approved, receive funding and community support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://cyberrepublic.org/proposals/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center justify-center gap-1 border border-[#5C8EFF]/50 text-sm w-full"
                  >
                    <span>Submit a Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#5C8EFF]/20">
              <div className="p-4 bg-gradient-to-br from-[#5C8EFF] to-[#5C8EFF]/70 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Run for Council</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-300 text-sm">Stake 5,000 ELA as collateral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-300 text-sm">Share your vision and campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#5C8EFF]/10 text-[#5C8EFF] flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-300 text-sm">Earn a seat to shape the future of decentralized infrastructure</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://cyberrepublic.org/council/election"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center justify-center gap-1 border border-[#5C8EFF]/50 text-sm w-full"
                  >
                    <span>Run for Council</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[200] text-white mb-4">DAO Community</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A vibrant, global community working together to govern and grow the Elastos ecosystem
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImageZoom
              key="1"
              src="/images/Roadmap/Cyber Republic DAO meetup.jpeg"
              alt="Cyber Republic DAO meetup"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="2"
              src="/images/Roadmap/Elastos in Couinstore event.jpeg"
              alt="Elastos in Couinstore event"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="3"
              src="/images/Roadmap/Elastos hosted a meetup in Hong Kong.jpeg"
              alt="Elastos hosted a meetup in Hong Kong"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="4"
              src="/images/Roadmap/The Node Effect event Singapore.jpeg"
              alt="The Node Effect event Singapore"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="5"
              src="/images/Roadmap/Rong Chen and Kevin Zhang hosted a meetup in Barcelona.jpeg"
              alt="Rong Chen and Kevin Zhang hosted a meetup in Barcelona"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="6"
              src="/images/Roadmap/Rong Chen and kevin Zhang hosted a meetup in London.jpeg"
              alt="Rong Chen and kevin Zhang hosted a meetup in London"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="7"
              src="/images/Roadmap/Elastos 1 Year.jpeg"
              alt="Elastos 1 Year"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="8"
              src="/images/Roadmap/Sunny Feng Han at Teamz Web Summit in Tokyo.jpeg"
              alt="Sunny Feng Han at Teamz Web Summit in Tokyo"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>

        {/* Elastos Essentials Wallet Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.02] to-white/[0.00] z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-center"
              >
                <h2 className="text-4xl font-[200] text-white mb-4">
                  <span className="text-[#5C8EFF]">Essentials Wallet</span> Required for DAO Participation
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  The official wallet for DID creation, proposal submission, and governance voting
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl bg-gradient-to-br from-[#5C8EFF]/10 via-[#5C8EFF]/10 to-transparent p-10 border border-[#5C8EFF]/20 max-w-5xl mx-auto relative overflow-hidden"
              >
                {/* Background elements */}
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#5C8EFF]/10 blur-[100px]"></div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="flex justify-center">
                    <img 
                      src="/images/Essentials.png" 
                      alt="Elastos Essentials" 
                      className="w-full max-w-[350px] rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Essential for DAO Governance</h3>
                    <div className="space-y-4 text-white/70">
                      <p>Elastos Essentials is required for participating in the DAO. With the wallet, you can:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                          <span>Create your Decentralized ID (DID) needed for proposal submission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                          <span>Stake your ELA to vote on Council members to represent you annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                          <span>Run for council by staking 5,000 ELA as collateral</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#5C8EFF] mt-0.5 flex-shrink-0" />
                          <span>Access the DAO Portal directly through the built-in DApp browser</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-4 pt-4">
                        <a
                          href="https://apps.apple.com/us/app/elastos-essentials/id1568931743"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[#5C8EFF]/50 text-sm"
                        >
                          <span>App Store</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=io.web3essentials.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[#5C8EFF]/50 text-sm"
                        >
                          <span>Google Play</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="https://cyberrepublic.org/guides/essentials-wallet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex px-3 py-2 bg-[#5C8EFF]/10 text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[#5C8EFF]/50 text-sm"
                        >
                          <span>Setup Guide</span>
                          <ArrowRight className="w-4 h-4" />
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
        <div className="mt-10">
          <LogoCarouselDemo />
        </div>

        {/* Footer */}
        <StackedCircularFooter />
      </div>
    </div>
  );
}