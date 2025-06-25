import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Github, Globe, Linkedin, Mail, Twitter, Users, Calendar, Target, Award, Building, Zap, Shield, Heart } from "lucide-react";
import { ScrollToTop } from "../components/ScrollToTop";
import { StackedCircularFooter } from "../components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "../components/LogoCarouselDemo";
import { WebPImage } from "../components/ui/webp-image";

export default function TeamFoundationPage() {
  const [expandedBios, setExpandedBios] = useState<{[key: number]: boolean}>({});

  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const foundationMilestones = [
    {
      year: "2000-2016",
      title: "Genesis of Vision",
      description: "Rong Chen develops the Elastos operating system concept at Microsoft, envisioning the first internet operating system to solve security issues."
    },
    {
      year: "2017",
      title: "Foundation Established",
      description: "Elastos Foundation formed by Rong Chen and Sunny Feng Han, incorporating in Singapore with global operations."
    },
    {
      year: "2018",
      title: "Technology Launch",
      description: "Mainnet launches with Bitcoin merge-mining, establishing one of the most secure blockchain infrastructures and conducting successful token distribution."
    },
    {
      year: "2020",
      title: "World Recognition",
      description: "Selected for World Economic Forum Global Innovators Community, joining working groups on blockchain and data governance alongside Microsoft, IBM, and ConsenSys."
    },
    {
      year: "2024",
      title: "BeL2 Innovation",
      description: "Foundation successfully delivers Bitcoin Elastos Layer-2 (BeL2) protocol with zero-knowledge proofs, enabling native BTC smart contracts and DeFi applications."
    },
    {
      year: "2025",
      title: "Bitcoin Dollar (BTCD)",
      description: "Under Dr. Feng Han's management, Foundation launches the world's first fully Bitcoin-backed stablecoin, putting Bitcoin's $2 trillion market cap to work in DeFi."
    }
  ];

  const coreValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Sovereignty",
      description: "Building infrastructure where users truly own their data, digital assets, and online identities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security by Design", 
      description: "Leveraging Bitcoin's security through merge-mining and sandboxed runtime environments."
    },

    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "Pioneering new paradigms like the SmartWeb and Bitcoin Layer-2 solutions for real-world adoption."
    }
  ];

  const leadershipTeam = [
    {
      name: "Rong Chen",
      role: "Founder & Visionary (2017-2023)",
      image: "/images/Rong Chen.png",
      bioShort: "Former Microsoft engineer with 30+ years in operating systems. Conceived Elastos in 2000 as the first internet OS, later integrating blockchain technology. Led the project for over two decades, establishing the \"own your data\" vision and Bitcoin merge-mining innovation.",
      bioLong: "Rong Chen was among the top students of China's post-Cultural Revolution \"Class of '77,\" earning admission to Tsinghua University as one of the country's first software engineering graduates. After studying at the Chinese Academy of Sciences and the University of Illinois, he joined Microsoft Research in 1992 as their first Chinese employee.\n\nAt Microsoft, Rong conceived the revolutionary idea of a \"network operating system\" where applications run in secure sandboxes, isolated from direct internet access. This early vision of \"the network is the computer\" predated modern cloud computing concepts. When Microsoft didn't adopt his vision, Rong left in 2000 to develop it independently.\n\nFor 17 years, he persisted in building this platform, securing a $31 million investment from Foxconn in 2013. In 2017, recognizing blockchain's potential to enable true data ownership, he co-founded the Elastos Foundation with Sunny Feng Han. Under his leadership, Elastos achieved major milestones including Bitcoin merge-mining (2018), W3C-compliant decentralized identity, and a complete Web3 infrastructure stack.\n\nRong stepped down from the Foundation board in 2023 to focus on technical innovation while remaining an active community advisor. His vision of an internet where users control their data continues to guide Elastos' development.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/chen2rong2" }
      ]
    },
    {
      name: "Dr. Feng Han",
      role: "Co-Founder & Foundation Manager (2017-Present)",
      image: "/images/Sunny.jpeg",
      bioShort: "Co-founder of Elastos with Ph.D. in Physics from Tsinghua University. Currently manages the Elastos Foundation and leads the Bitcoin Dollar (BTCD) project. Harvard Innovation Labs incubated leader bringing academic expertise and strategic vision to blockchain innovation.",
      bioLong: "Dr. Sunny Feng Han earned a Ph.D. in Physics from Tsinghua University and later became a visiting scholar and research associate at Columbia University. He has been active in blockchain education as founder of the MIT Blockchain Pillar initiative and has lectured on blockchain at Tsinghua University's graduate courses.\n\nAs co-founder of Elastos in 2017, Feng Han was instrumental in translating Rong Chen's technical vision into a viable project and community. He served as an early Foundation CEO and was elected to the first Elastos DAO Council (2020) - now branded as Elastos DAO - where he led critical governance changes including token burning, new tokenomics, and improved transparency.\n\nCurrently, Dr. Feng Han manages the Elastos Foundation and spearheads the groundbreaking Bitcoin Dollar (BTCD) project - the world's first fully Bitcoin-backed stablecoin. Developed by Harvard alumni and incubated at Harvard Innovation Labs, BTCD represents his vision of putting Bitcoin's $2 trillion market cap to work in decentralized finance.\n\nUnder his leadership, the Foundation has successfully delivered the BeL2 protocol and is positioned at the forefront of Bitcoin Layer-2 innovation, creating new revenue streams for Bitcoin miners while enabling Bitcoin's massive balance sheet to power the programmable economy.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/SunnyFengHan" }
      ]
    },
    {
      name: "Dr. Jay Zou",
      role: "Chief Technology Officer (2025-Present)",
      image: "/images/Dr.Z.webp",
      bioShort: "Technology executive with 20+ years in software and AI. Holds Ph.D. from EPFL with postdoc at Drexel. Appointed CTO in 2025 to lead technical operations, focusing on Bitcoin-integrated innovations and AI-blockchain convergence for the next phase of Elastos development.",
      bioLong: "Dr. Jay Zou brings over two decades of experience in software engineering and artificial intelligence to his role as Chief Technology Officer. He earned his Ph.D. from EPFL (École Polytechnique Fédérale de Lausanne) and completed postdoctoral research at Drexel University, developing expertise in distributed systems and machine learning.\n\nPrior to joining Elastos, Dr. Zou held senior technical positions in both industry and academia, working on large-scale software systems and AI applications. His research has focused on the intersection of blockchain technology and artificial intelligence, particularly in areas of zero-knowledge proofs and agent networks.\n\nAppointed as CTO in 2025, Dr. Zou is leading Elastos' technical roadmap into its next phase of development. His priorities include advancing the Bitcoin Elastos Layer-2 (BeL2) framework, developing Bitcoin-backed stablecoins, and exploring AI-driven applications on the Elastos SmartWeb. Under his leadership, the Foundation is positioning itself at the forefront of Bitcoin Layer-2 innovation and the convergence of AI with blockchain technology.\n\nDr. Zou's global perspective and technical expertise are instrumental in expanding Elastos' reach in international markets while maintaining its commitment to user sovereignty and decentralized infrastructure.",
      links: []
    },
    {
      name: "Hongjie Hu",
      role: "Board Member & Secretary-General (2017-Present)",
      image: "/images/Hong.webp", 
      bioShort: "Blockchain industry veteran since 2013 and founding member of China's first blockchain association (DACA). Joined Elastos Foundation board in 2023, bringing strategic business experience to guide the Foundation's market-oriented approach and ecosystem growth initiatives.",
      bioLong: "Hongjie Hu has been instrumental in China's blockchain development since 2013, helping establish the Distributed Applications China Association (DACA), the country's first blockchain industry organization. His early involvement in blockchain governance and standards development provided valuable experience for his role at Elastos.\n\nAs a founding member of the Elastos Foundation, Hongjie has led the Asset Management team since 2017, overseeing the Foundation's treasury and strategic investments. His business acumen and industry connections have been crucial in navigating the complex regulatory and market environments across different regions.\n\nIn 2023, Hongjie joined the Foundation's Board of Directors, bringing a market-oriented perspective as Elastos shifted from pure technology development to ecosystem growth and adoption. He has been instrumental in developing partnerships, particularly in the Bitcoin Layer-2 space, and in positioning Elastos for sustainable long-term growth.\n\nHis experience spans traditional business development, blockchain technology implementation, and community building. Under his guidance, the Foundation has strengthened its financial management practices and developed more effective strategies for ecosystem expansion and developer adoption.",
      links: []
    },
    {
      name: "Yipeng Su", 
      role: "Chief Architect (2017-Present)",
      image: "/images/Community/Yipeng.jpg",
      bioShort: "Chief Architect with 20+ years in software and internet industries. Instrumental in Elastos' early development, led technical strategy and operations. Chief initiator of Cyber Republic DAO framework and architect of Elastos' hybrid consensus mechanism.",
      bioLong: "Yipeng Su joined Elastos on August 1, 2017, soon after the project's formal inception, and has been instrumental in its technical development ever since. With over 20 years of experience in software and internet industries, he has served as both Chief Architect and operational leader during Elastos' formative years.\n\nIn 2017-2018, Yipeng not only oversaw the engineering teams but also managed day-to-day operations, helping coordinate the token sale and mainnet launch. He was essentially Rong Chen's right-hand in the foundation, bridging technical and operational domains during the critical early phase.\n\nYipeng is credited as the chief initiator of the Cyber Republic DAO framework (now branded as Elastos DAO), Elastos' groundbreaking community governance framework. When the DAO Interim Council was established in August 2018, he stepped down from the Foundation's Board to serve on the council, driving the project's decentralization efforts. He helped develop the consensus whitepaper and governance processes that continue to guide Elastos today.\n\nTechnically, Yipeng has contributed to key innovations including the proposal for Bonded Proof of Stake (BPoS) in 2021 to enhance Elastos' consensus security. His ability to move fluidly between engineering leadership and community engagement has been fundamental to Elastos' unique approach to decentralized development.",
      links: []
    }
  ];

  const ecosystemInitiatives = [
    {
      title: "Bitcoin Dollar (BTCD) Stablecoin",
      description: "World's first fully Bitcoin-backed stablecoin launching August 2025, enabling Bitcoin holders to unlock liquidity without selling BTC or trusting custodial intermediaries.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Bitcoin Elastos Layer-2 (BeL2) Protocol",
      description: "Delivered zero-knowledge proof powered BeL2 protocol enabling native BTC smart contracts and DeFi applications, positioning Elastos as critical infrastructure for Bitcoin's evolution.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Decentralized Identity (DID)",
      description: "W3C-compliant identity system allowing self-sovereign control of credentials and authentication without centralized authorities.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "SmartWeb Infrastructure", 
      description: "Complete Web3 stack including peer-to-peer networking (Carrier), decentralized storage (Hive), and secure application runtime.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Community Governance",
      description: "Elastos DAO enabling token holders to participate in decision-making and ecosystem funding through democratic processes.",
      icon: <Users className="w-6 h-6" />
    },

    {
      title: "Global Partnerships",
      description: "Strategic collaborations with World Economic Forum, major cloud providers, and blockchain projects to expand Elastos' reach and interoperability.",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] text-black dark:text-white">
      <ScrollToTop />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <WebPImage 
          src="/images/Community/Div4TBUWsAYmcEq.webp" 
          alt="Elastos Foundation" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#171717]/70 to-[#171717]"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-[200] text-white mb-6">
                  Elastos Foundation
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200] mb-8">
                  Building accessible, open-source services for an internet where individuals own and control their data
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://www.elastos.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
                  >
                    <span>Visit Site</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">The Foundation Story</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] leading-relaxed">
                The Elastos Foundation is a non-profit organization established in 2017 to support the development of Elastos – a blockchain-powered decentralized internet infrastructure. The Foundation's origins trace back to 2000, when founder Rong Chen envisioned building the world's first internet operating system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8"
              >
                <h3 className="text-xl font-[200] text-black dark:text-white mb-4">The Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base font-[200] mb-4">
                  From Microsoft's halls to an independent pursuit spanning two decades, Rong Chen's vision of a secure, user-controlled internet evolved through partnerships with Foxconn (¥200 million RMB investment in 2013) and integration with blockchain technology.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base font-[200]">
                  In 2017, Chen partnered with blockchain researcher Sunny Feng Han to formally launch the Elastos Foundation, pivoting toward a decentralized, blockchain-driven "Smart Web" ecosystem where users have true ownership of their data and digital assets.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8"
              >
                <h3 className="text-xl font-[200] text-black dark:text-white mb-4">Global Impact</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base font-[200] mb-4">
                  Incorporated in Singapore with international operations, the Foundation has achieved recognition from the World Economic Forum, joining their Global Innovators Community alongside companies like Microsoft, IBM, and ConsenSys.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base font-[200]">
                  Our work contributes to global standards through W3C collaboration on decentralized identity and participation in blockchain policy discussions, helping shape the future of digital rights and data ownership.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] max-w-3xl mx-auto">
              Our values center on decentralization, innovation, and community empowerment, guided by the principle that "You own your own data."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#212121] rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5C8EFF]/10 dark:bg-[#5C8EFF]/20 rounded-full mb-4 text-[#5C8EFF]">
                  {value.icon}
                </div>
                <h3 className="text-lg font-[200] text-black dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-[200]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Foundation Milestones</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] max-w-3xl mx-auto">
              Key achievements and pivotal moments in our journey to build a decentralized internet infrastructure
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#5C8EFF]/30 dark:bg-[#5C8EFF]/20"></div>
            
            <div className="space-y-12">
              {foundationMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-[#5C8EFF] rounded-full border-4 border-white dark:border-[#171717]"></div>
                  
                  <div className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-[200] bg-[#5C8EFF]/10 text-[#5C8EFF]">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-[200] text-black dark:text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-[200]">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Leadership Team</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] max-w-3xl mx-auto">
              Visionary leaders who have guided Elastos from conception to global recognition
            </p>
          </motion.div>

          <div className="space-y-12">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#212121] rounded-xl p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <WebPImage 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-xl object-cover mx-auto lg:mx-0"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-[200] text-black dark:text-white mb-1">{leader.name}</h3>
                        <p className="text-[#5C8EFF] text-base font-[200]">{leader.role}</p>
                      </div>
                      
                      {leader.links.length > 0 && (
                        <div className="flex gap-3 mt-3 lg:mt-0">
                          {leader.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-[#2A2A2A] rounded-full text-gray-600 dark:text-gray-400 hover:text-[#5C8EFF] hover:bg-[#5C8EFF]/10 transition-colors"
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base font-[200] mb-4">
                      {expandedBios[index] ? leader.bioLong : leader.bioShort}
                    </p>
                    
                    {leader.bioLong && (
                      <button
                        onClick={() => toggleBio(index)}
                        className="inline-flex items-center gap-2 text-[#5C8EFF] text-sm font-[200] hover:text-[#4A7AFF] transition-colors"
                      >
                        {expandedBios[index] ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Read More
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Ecosystem Initiatives</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] max-w-3xl mx-auto">
              Supporting a broad ecosystem of projects that together form the Elastos SmartWeb infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#5C8EFF]/10 dark:bg-[#5C8EFF]/20 rounded-full mb-4 text-[#5C8EFF]">
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-[200] text-black dark:text-white mb-3">{initiative.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-[200]">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-[200] text-black dark:text-white mb-6">Learn More About the Elastos Foundation</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-[200] max-w-2xl mx-auto mb-8">
              Discover more about the Foundation's mission, projects, and vision for building an internet where users own their data, digital assets, and online identities.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.elastos.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
              >
                <span>Visit Elastos.org</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Carousel */}
      <div className="py-16">
        <LogoCarouselDemo />
      </div>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}