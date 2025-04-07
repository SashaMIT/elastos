
import { motion } from "framer-motion";
import { ArrowRight, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";

export default function TeamFoundationPage() {
  const keyContributors = [
    {
      name: "Rong Chen",
      role: "Founder & Chief Architect",
      image: "/images/Rong Chen.png",
      bio: "Rong Chen is the visionary behind Elastos. With over 30 years of operating systems development experience, including 18 years at Microsoft, Rong has dedicated his career to creating a safer and more decentralized internet architecture. As the first Chinese employee at Microsoft Research, he conceived the idea of a network operating system to secure internet applications, which ultimately evolved into Elastos.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/chen2rong2" }
      ]
    },
    {
      name: "Sunny Feng Han",
      role: "Co-Founder",
      image: "/images/Sunny.jpeg",
      bio: "Dr. Sunny Feng Han is a co-founder of Elastos with a Ph.D. in Physics from Tsinghua University. He played a crucial role in translating Rong Chen's technical vision into a viable project. Sunny served on the first Cyber Republic Council, where he helped implement critical governance changes including token burning, new tokenomics, and improved transparency. As an educator, Sunny founded the MIT Blockchain Pillar and has lectured on blockchain at Tsinghua University.",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/SunnyFengHan" }
      ]
    },
    {
      name: "Yipeng Su",
      role: "Chief Architect",
      image: "/images/Community/Yipeng.jpg",
      bio: "Yipeng Su joined Elastos in 2017 as Chief Architect and was instrumental in the project's early development. With over 20 years of experience in software and internet industries, Yipeng led both technical strategy and early operations at Elastos. He was the chief initiator of the Cyber Republic concept for community governance and helped develop the CR consensus. Yipeng has continued to shape the technical direction of Elastos, including proposing the Bonded Proof of Stake enhancement.",
      links: []
    }
  ];

  const coreDevelopmentTeams = [
    {
      name: "BeL2 Team",
      description: "The BeL2 team is focused on developing a Layer 2 scaling solution that enhances Elastos' throughput while leveraging Bitcoin's security model. Their work includes implementing the latest in zk-rollup technology with an Ethereum-compatible virtual machine.",
      videoSrc: "/videos/BeL2Team.mp4",
      links: [
        { text: "BeL2 Website", url: "https://bel2.org" }
      ]
    },
    {
      name: "Elastos Essentials Team",
      description: "The Essentials team develops the core wallet and identity management application for the Elastos ecosystem. They focus on creating a seamless user experience for managing digital assets, identities, and credentials across the Elastos network.",
      videoSrc: "/videos/EssentialsTeam.mp4",
      links: [
        { text: "Essentials Download", url: "/wallet" }
      ]
    },
    {
      name: "Cyber Republic Team",
      description: "The Cyber Republic team manages the decentralized governance system of Elastos. They build tools and infrastructure to enable community voting, proposal management, and treasury allocation through the Elastos DAO framework.",
      videoSrc: "/videos/CyberRepublicTeam.mp4",
      links: [
        { text: "Cyber Republic Website", url: "/dao" }
      ]
    },
    {
      name: "Elacity Team",
      description: "The Elacity team focuses on NFT marketplace development and content distribution on the Elastos network. They are building infrastructure for digital asset ownership and management in the Web3 space.",
      videoSrc: "/videos/ElacityTeam.mp4",
      links: [
        { text: "Elacity Website", url: "https://labs.ela.city" }
      ]
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
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-[200] mb-4">{member.bio}</p>
                    
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
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Core Development Teams</h2>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">Our Partners</h2>
            <p className="text-gray-600 dark:text-gray-400 font-[200]">
              Partnering with leading organizations to build the future of the internet
            </p>
          </div>
          
          {/* Import the LogoCarouselDemo component */}
          <div className="mt-10">
            <LogoCarouselDemo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
