import React from 'react';
import { motion } from "framer-motion";
import { 
  Asterisk, 
  MessageCircle, 
  Video, 
  Globe, 
  Facebook,
  ExternalLink,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { VerifyButton } from "@/components/ui/verify-button";

const SocialChannelsPage: React.FC = () => {
  const socialChannels = [
    {
      name: "X (Twitter)",
      description: "Follow for the latest news, announcements, and project updates.",
      url: "https://x.com/ElastosInfo",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
      bgColor: "#1DA1F2",
      subscribers: "60.3K",
      buttonStyle: "blue" as const,
    },
    {
      name: "Telegram",
      description: "Join our global community for discussions and real-time updates.",
      url: "https://t.me/elastosgroup",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 496 512" fill="white"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>,
      bgColor: "#0088cc",
      subscribers: "5,381",
      buttonStyle: "blue" as const,
    },
    {
      name: "Discord",
      description: "Developer-focused community with technical discussions and support channels.",
      url: "https://discord.com/invite/elastos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>,
      bgColor: "#5865F2",
      subscribers: "1,983",
      buttonStyle: "blue" as const,
    },
    {
      name: "Reddit",
      description: "Community discussions, AMAs, and ecosystem updates.",
      url: "https://www.reddit.com/r/Elastos/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>,
      bgColor: "#FF4500",
      subscribers: "9.5K",
      buttonStyle: "blue" as const,
    },
    {
      name: "YouTube",
      description: "Video tutorials, interviews, project updates, and conference recordings.",
      url: "https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
      bgColor: "#FF0000",
      subscribers: "2.14K",
      buttonStyle: "blue" as const,
    },
    {
      name: "Facebook",
      description: "Project updates and news for the broader blockchain community.",
      url: "https://www.facebook.com/elastosorg/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
      bgColor: "#1877F2",
      subscribers: "15K",
      buttonStyle: "blue" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[350px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos Community" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-4">
                  Elastos Community <span className="text-[#5C8EFF]">Social Channels</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Connect with the global Elastos community through our official social media channels and stay updated on the latest developments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Channels Cards */}
      <section className="pt-0 pb-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {socialChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-xl bg-[#1E1E1E] p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="rounded-full bg-opacity-10 p-2" style={{ backgroundColor: `${channel.bgColor}20` }}>
                    <div className="h-8 w-8 flex items-center justify-center">
                      {channel.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{channel.name}</h3>
                    <p className="text-sm text-white/50">{channel.subscribers} members</p>
                  </div>
                </div>

                <p className="text-white/70 mb-4 flex-grow">{channel.description}</p>

                <div className="flex">
                  <VerifyButton 
                    href={channel.url}
                    color="blue"
                  >
                    Visit Channel
                  </VerifyButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Additional Community Resources</h2>
            <p className="text-white/70">
              In addition to our social media channels, Elastos offers various resources to help you stay connected and informed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1E1E1E] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F6921A]/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-[#F6921A]" />
                </div>
                <h3 className="text-lg font-bold text-white">Subgroups</h3>
              </div>

              <p className="text-white/70 text-sm mb-3">
                Join specialized Elastos community subgroups to connect with others and get focused support.
              </p>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://t.me/elastosgroup/1135570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6921A] hover:underline text-xs flex items-center gap-1 bg-[#F6921A]/5 px-2 py-1 rounded-md"
                >
                  <Globe className="h-3 w-3" />
                  <span>Help and Support</span>
                </a>
                <a
                  href="https://t.me/elastosgroup/1186551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6921A] hover:underline text-xs flex items-center gap-1 bg-[#F6921A]/5 px-2 py-1 rounded-md"
                >
                  <Globe className="h-3 w-3" />
                  <span>Announcements</span>
                </a>
                <a 
                  href="https://t.me/elastosgroup/1155782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6921A] hover:underline text-xs flex items-center gap-1 bg-[#F6921A]/5 px-2 py-1 rounded-md"
                >
                  <Globe className="h-3 w-3" />
                  <span>Elastos AMAs</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1E1E1E] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#5C8EFF]" />
                </div>
                <h3 className="text-lg font-bold text-white">Developer Resources</h3>
              </div>

              <p className="text-white/70 text-sm mb-3">
                Access technical documentation, SDKs, and developer communities to build on Elastos.
              </p>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://elastos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C8EFF] hover:underline text-xs flex items-center gap-1 bg-[#5C8EFF]/5 px-2 py-1 rounded-md"
                >
                  <Globe className="h-3 w-3" />
                  <span>Developer Portal</span>
                </a>
                <a
                  href="https://github.com/elastos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C8EFF] hover:underline text-xs flex items-center gap-1 bg-[#5C8EFF]/5 px-2 py-1 rounded-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://t.me/elastosgroup/1141313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C8EFF] hover:underline text-xs flex items-center gap-1 bg-[#5C8EFF]/5 px-2 py-1 rounded-md"
                >
                  <MessageCircle className="h-3 w-3" />
                  <span>Promotion Hub</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1E1E1E] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F6921A]/10 flex items-center justify-center border border-[#F6921A]/30">
                  <Shield className="h-5 w-5 text-[#F6921A]" />
                </div>
                <h3 className="text-lg font-bold text-white">Security Verification</h3>
              </div>

              <p className="text-white/70 text-sm mb-3">
                Always verify you're connecting with official Elastos channels. Official channels will never ask for your private keys.
              </p>

              <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                <p className="text-[#F6921A] text-xs font-medium mb-2">Security Tips:</p>
                <ul className="text-white/70 space-y-1 text-xs">
                  <li className="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 12 2 2 4-4" />
                      <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                    </svg>
                    <span>Verify URLs and official Elastos branding</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 12 2 2 4-4" />
                      <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                    </svg>
                    <span>Team never DMs first or asks for keys</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 12 2 2 4-4" />
                      <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                    </svg>
                    <span>Beware of too-good-to-be-true offers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <div className="w-full py-16">
        <LogoCarouselDemo />
      </div>

      {/* Footer */}
      <div className="w-full bg-background dark:bg-[#171717]">
        <StackedCircularFooter />
      </div>
    </div>
  );
};

export default SocialChannelsPage;