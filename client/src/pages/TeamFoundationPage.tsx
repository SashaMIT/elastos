import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { useState } from "react";

export default function TeamFoundationPage() {
  const [expandedBios, setExpandedBios] = useState<{[key: number]: boolean}>({});

  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const coreDevelopmentTeams = [
    {
      name: "BeL2 Team",
      description: "The BeL2 team is focused on developing Elastos's Layer 2 solutions, building technologies that enhance scalability and user experience while maintaining the security of the Bitcoin-backed mainchain.",
      videoSrc: "/videos/BeL2Team.mp4",
      links: [
        { text: "BeL2 Portal", url: "https://bel2.elastos.org/", icon: <Globe className="w-4 h-4" /> },
        { text: "GitHub", url: "https://github.com/elastos", icon: <Github className="w-4 h-4" /> }
      ]
    },
    {
      name: "Elastos Essentials Team",
      description: "The Elastos Essentials team develops and maintains the official Elastos wallet and identity management application, providing users with a secure way to manage their digital assets and identities.",
      videoSrc: "/videos/EssentialsTeam.mp4",
      links: [
        { text: "Download App", url: "/wallet", icon: <ArrowRight className="w-4 h-4" /> },
        { text: "GitHub", url: "https://github.com/elastos/Elastos.Essentials", icon: <Github className="w-4 h-4" /> }
      ]
    },
    {
      name: "Elacity Labs",
      description: "Elacity Labs builds Web3 applications and NFT marketplaces on Elastos, creating user-friendly platforms that leverage Elastos' identity and security features for digital ownership and trading.",
      videoSrc: "/videos/ElacityTeam.mp4",
      links: [
        { text: "Elacity", url: "https://elacity.io", icon: <Globe className="w-4 h-4" /> },
        { text: "GitHub", url: "https://github.com/elacity", icon: <Github className="w-4 h-4" /> }
      ]
    },
    {
      name: "Cyber Republic DAO",
      description: "The Cyber Republic DAO team oversees community governance, proposal reviews, and treasury management for the ecosystem. They ensure the decentralized governance of Elastos is maintained with integrity.",
      videoSrc: "/videos/CyberRepublicTeam.mp4",
      links: [
        { text: "DAO Portal", url: "/dao", icon: <ArrowRight className="w-4 h-4" /> },
        { text: "Proposals", url: "https://dao.cyberrepublic.org", icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const keyContributors = [
    {
      name: "Rong Chen",
      role: "Founder & Visionary",
      image: "/images/Rong Chen.png",
      bioShort: "Rong Chen is the visionary behind Elastos. With over 30 years of operating systems development experience, including 18 years at Microsoft, Rong has dedicated his career to creating a safer and more decentralized internet architecture. As the first Chinese employee at Microsoft Research, he conceived the idea of a network operating system to secure internet applications, which ultimately evolved into Elastos.",
      bioLong: "Rong Chen was among the top students of the post-Cultural Revolution \"Class of '77\" in China, gaining admission to Tsinghua University where he became one of the first software engineering graduates in the country. He later attended the Institute of Computing Technology at the Chinese Academy of Sciences and pursued graduate studies in the United States. In the mid-1980s, Rong studied operating systems at the University of Illinois at Urbana-Champaign and worked at the National Center for Supercomputing Applications (NCSA), contributing to projects that helped lay groundwork for the first web browser, Mosaic.\n\nIn 1992, Rong became the first Chinese employee at Microsoft Research, focusing on operating system design. There he conceived the idea of a network operating system – \"the network is the computer\" – to solve internet security issues by running applications in a secure sandbox, an early vision that presaged Elastos. His concept was initially prototyped as Microsoft's .NET project, but after it was not adopted, Rong left Microsoft in 2000 to pursue his vision independently.\n\nHe founded a company called Kortide in 2000 to develop his \"internet OS\" idea. Over the next decade, he persisted in building this platform and securing support. Notably, in 2013 Rong secured a $31 million investment from Foxconn to advance Elastos development. In 2016, he successfully integrated blockchain technology into the Elastos operating system framework, enabling a \"truly decentralized internet infrastructure\" for secure data ownership.\n\nRong formally launched Elastos as a blockchain-powered internet project in 2017, becoming Co-Founder and Chairman of the Elastos Foundation. He is the primary architect of Elastos' vision of a \"Smart Web\" – a decentralized internet where users own their data and digital assets. Under his leadership, the Elastos project achieved milestones such as introducing merged mining with Bitcoin in 2018 to secure the network, and releasing a suite of core products including Elastos runtime, carrier, and decentralized ID.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/chen2rong2" }
      ]
    },
    {
      name: "Sunny Feng Han",
      role: "Co-Founder",
      image: "/images/Sunny.jpeg",
      bioShort: "Dr. Sunny Feng Han is a co-founder of Elastos with a Ph.D. in Physics from Tsinghua University. He played a crucial role in translating Rong Chen's technical vision into a viable project. Sunny served on the first Cyber Republic Council, where he helped implement critical governance changes including token burning, new tokenomics, and improved transparency. As an educator, Sunny founded the MIT Blockchain Pillar and has lectured on blockchain at Tsinghua University.",
      bioLong: "Sunny Feng Han (often known simply as Feng Han) earned a Ph.D. in Physics from Tsinghua University and later became a visiting scholar and research associate at Columbia University in the United States. Sunny has been active in the blockchain education space as the founder of the MIT Blockchain Pillar initiative and has lectured on blockchain at Tsinghua University's graduate courses. He also served as an advisor at Huawei's Central Research Institute, reflecting his influence in tech circles.\n\nSunny was instrumental in translating Rong Chen's technical vision into a viable project and community. He joined Rong as co-founder around 2017 to help launch Elastos, leveraging his academic and industry connections to promote the project globally. Within the Elastos Foundation's early leadership, Sunny was one of three initial Board Directors alongside Rong Chen and Yipeng Su.\n\nIn the community-driven Cyber Republic, Sunny took on a direct governance role: he ran for and was elected to the first Cyber Republic Council (2020), and served as a council member in its inaugural year. During that first year, he and fellow councilors tackled major issues for the ecosystem. Sunny highlights three key achievements of the council's first term: the burning of over 13 million ELA tokens to address community concerns about token oversupply, adoption of a new tokenomics model with a capped supply and Bitcoin-like halving schedule, and significantly improving the transparency of the Elastos Foundation's asset management. These moves, driven by Sunny and the council, strengthened community trust and aligned Elastos' economic model with decentralized principles.\n\nSunny has also been active in fostering partnerships: for example, in 2019 he partnered with industry figures (such as a Tencent Cloud VP and World Bank security architect) to launch a \"data capitalization\" initiative, which led to the incubation of CreDA, a decentralized credit oracle project in the Elastos ecosystem. After serving on the CR Council for the 2020–2021 term (and being re-elected for 2021–2022), Sunny stepped back from daily operations but continues to support Elastos as an advisor and thought leader.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/SunnyFengHan" }
      ]
    },
    {
      name: "Yipeng Su",
      role: "Chief Architect",
      image: "/images/Community/Yipeng.jpg",
      bioShort: "Yipeng Su joined Elastos in 2017 as Chief Architect and was instrumental in the project's early development. With over 20 years of experience in software and internet industries, Yipeng led both technical strategy and early operations at Elastos. He was the chief initiator of the Cyber Republic concept for community governance and helped develop the CR consensus. Yipeng has continued to shape the technical direction of Elastos, including proposing the Bonded Proof of Stake enhancement.",
      bioLong: "Yipeng Su is the Chief Architect of Elastos and was part of the project's founding team. He has over 20 years of experience in software and internet industries. Yipeng joined the Elastos initiative on August 1, 2017, soon after the project's formal start, and played a crucial role in its early development. Prior to Elastos, he worked in senior technical roles in IT and development.\n\nAs Chief Architect, Yipeng Su led the overall technical strategy and architecture of the Elastos smart web. In the first year of the project (2017–2018), Yipeng not only oversaw engineering teams but also managed day-to-day operations of the founding team, helping run the token sale and launch the main chain (Elastos' mainnet launched in December 2017, with ELA token listing on exchanges by early 2018).\n\nHe was essentially Rong Chen's right-hand in the foundation, coordinating across technical and non-technical domains. Yipeng is credited with helping Elastos explore a decentralized operational model from the start – notably, Elastos did not appoint a traditional CEO in 2017, instead entrusting leadership to a team approach which Yipeng helped facilitate.\n\nYipeng Su was the chief initiator of the Cyber Republic (CR) concept, which is Elastos' community governance framework. When the Elastos Foundation set up the CR Interim Council in August 2018, Yipeng resigned from the Foundation's Board of Directors to serve on this council and drive decentralization. He served on the Interim CR Council (2018–2020) as the representative of the founding team/Elastos Foundation. In this role, he helped oversee the creation of the CR consensus (CRC) whitepaper and governance processes.\n\nYipeng's influence is seen in key technical proposals as well – for example, in late 2021 he proposed the concept of Bonded Proof of Stake (BPoS) to enhance Elastos' consensus security, which was adopted to complement Elastos' hybrid consensus. Internally, Yipeng has been described as a \"libero\" – moving across the field to wherever needed – engaging with core engineers on technical direction and with community contributors to gather feedback. His ability to wear both engineering and leadership hats has been fundamental to Elastos' development.",
      links: []
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] text-black dark:text-white">
      <ScrollToTop />

      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Community/Div4TBUWsAYmcEq.jpeg" 
          alt="Elastos Team" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#171717]/70 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-[200] text-white mb-6">
                  Key Contributors
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                  The visionaries and builders who have been pivotal in shaping Elastos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5C8EFF]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-[#F6921A]/10 rounded-full filter blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Building a New Internet</h2>
            <p className="text-gray-600 dark:text-gray-400 font-[200] mb-8">
              Since its inception, Elastos has been driven by visionary individuals committed to creating a more secure, private, and user-centric internet. These key contributors come from diverse backgrounds in operating systems development, distributed computing, blockchain technology, and digital rights management.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-[200]">
              Together, they're building the infrastructure for a new internet where users own their data, digital assets, and identities. Their combined expertise spans decades of experience in both traditional technology and cutting-edge blockchain development.
            </p>
          </div>
        </div>
      </section>

      {/* Key Contributors Section - Horizontal Layout */}
      <section className="py-20 bg-gray-50 dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Key Contributors</h2>
            <p className="text-gray-600 dark:text-gray-400 font-[200]">
              Meet the individuals who have guided the vision and development of Elastos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 w-full mx-auto">
            {keyContributors.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#212121] rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/5 h-40 md:h-auto overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-4/5 p-6">
                    <h3 className="text-xl font-[200] text-black dark:text-white mb-1">{member.name}</h3>
                    <p className="text-[#5C8EFF] text-sm mb-4">{member.role}</p>
                    <div>
                      {expandedBios[index] ? (
                        <>
                          <div className="text-gray-600 dark:text-gray-400 text-sm font-[200] mb-4">
                            {member.bioLong.split('\n\n').map((paragraph, i) => (
                              <p key={i} className="mb-3">{paragraph}</p>
                            ))}
                          </div>
                          <div className="flex justify-end mt-4">
                            <button 
                              onClick={() => toggleBio(index)} 
                              className="text-[#F6921A] hover:text-[#F6921A]/80 text-sm bg-[#F6921A]/10 dark:bg-[#F6921A]/20 px-3 py-1.5 rounded-full inline-flex items-center"
                            >
                              Show Less <ChevronUp className="w-4 h-4 ml-1"/>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-[200] mb-4">{member.bioShort}</p>
                          <div className="flex justify-end mt-4">
                            <button 
                              onClick={() => toggleBio(index)} 
                              className="text-[#F6921A] hover:text-[#F6921A]/80 text-sm bg-[#F6921A]/10 dark:bg-[#F6921A]/20 px-3 py-1.5 rounded-full inline-flex items-center"
                            >
                              Show More <ChevronDown className="w-4 h-4 ml-1"/>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      {member.links.map((link, linkIndex) => (
                        <a 
                          key={linkIndex}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#5C8EFF]/20 hover:text-[#5C8EFF] transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Teams Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Core Contributers</h2>
            <p className="text-gray-600 dark:text-gray-400 font-[200]">
              Specialized teams focusing on different aspects of the Elastos ecosystem
            </p>
          </div>

          <div className="space-y-16">
            {coreDevelopmentTeams.map((team, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-2xl font-[200] mb-4 text-black dark:text-white">{team.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-[200] mb-6">{team.description}</p>

                  <div className="flex flex-wrap gap-4">
                    {team.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target={link.url.startsWith('/') ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-1 border border-[rgba(92,142,255,0.25)] text-sm"
                      >
                        <span>{link.text}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                          <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                          <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                          <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                    <video 
                      className="w-full h-auto" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={team.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Logo Carousel Section */}
      <section className="py-16 bg-white dark:bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoCarouselDemo />
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}