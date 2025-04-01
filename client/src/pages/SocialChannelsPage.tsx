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



const SocialChannelsPage: React.FC = () => {
  const socialChannels = [
    {
      name: "X (Twitter)",
      description: "Follow for the latest news, announcements, and project updates.",
      url: "https://x.com/ElastosInfo",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
      bgColor: "from-[#1DA1F2]/10 to-transparent",
      borderColor: "border-[#1DA1F2]/20",
      subscribers: "60.3K",
      buttonStyle: "blue" as const,
    },
    {
      name: "Telegram",
      description: "Join our global community for discussions and real-time updates.",
      url: "https://t.me/elastosgroup",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0Zm.086 5.648c1.722-.442 3.695-.195 5.14.27.713.241 1.198.555 1.376.861.178.307.131.67-.188 1.056-.416.53-.858.905-1.464 1.241-.607.336-1.266.61-1.937.812-.418.125-.733.234-.879.312-.146.079-.271.204-.271.436 0 .355-.643 5.512-.928 7.126-.11.6-.273.93-.487 1.114-.214.186-.485.224-.802.129-.635-.188-1.656-.819-2.389-1.448-.733-.603-1.96-1.61-1.96-1.666 0-.037 3.57-3.533 3.57-3.533.36-.356.461-.638.28-.843-.128-.129-.666-.16-1.227-.16-.561 0-3.319 1.173-3.829 1.376-.51.203-2.239 1.063-2.478 1.191-.24.128-1.455.634-1.756.751-.301.118-1.087.16-1.344-.07-.258-.23-.358-.788-.187-1.175.17-.387 1.6-1.974 3.287-3.192 1.686-1.217 4.527-3.12 4.527-3.12.457-.32.828-.598 1.328-.733Z"/></svg>,
      bgColor: "from-[#0088cc]/10 to-transparent",
      borderColor: "border-[#0088cc]/20",
      subscribers: "5,381",
      buttonStyle: "orange" as const,
    },
    {
      name: "Discord",
      description: "Developer-focused community with technical discussions and support channels.",
      url: "https://discord.com/invite/elastos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>,
      bgColor: "from-[#5865F2]/10 to-transparent",
      borderColor: "border-[#5865F2]/20",
      subscribers: "1,983",
      buttonStyle: "blue" as const,
    },
    {
      name: "Reddit",
      description: "Community discussions, AMAs, and ecosystem updates.",
      url: "https://www.reddit.com/r/Elastos/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>,
      bgColor: "from-[#FF4500]/10 to-transparent",
      borderColor: "border-[#FF4500]/20",
      subscribers: "9.5K",
      buttonStyle: "orange" as const,
    },
    {
      name: "YouTube",
      description: "Video tutorials, interviews, project updates, and conference recordings.",
      url: "https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
      bgColor: "from-[#FF0000]/10 to-transparent",
      borderColor: "border-[#FF0000]/20",
      subscribers: "2.14K",
      buttonStyle: "blue" as const,
    },
    {
      name: "Facebook",
      description: "Project updates and news for the broader blockchain community.",
      url: "https://www.facebook.com/elastosorg/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
      bgColor: "from-[#1877F2]/10 to-transparent",
      borderColor: "border-[#1877F2]/20",
      subscribers: "15K",
      buttonStyle: "orange" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements removed */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Elastos Community <span className="text-[#5C8EFF]">Social Channels</span></h1>
            <p className="text-white/70 text-lg">
              Connect with the global Elastos community through our official social media channels and stay updated on the latest developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {socialChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`rounded-xl bg-gradient-to-br from-[#F6921A]/10 via-[#5C8EFF]/10 to-transparent p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {channel.icon}
                  <div>
                    <h3 className="text-xl font-bold text-white">{channel.name}</h3>
                    <p className="text-sm text-white/50">{channel.subscribers} members</p>
                  </div>
                </div>

                <p className="text-white/70 mb-4 flex-grow">{channel.description}</p>

                <a 
                  href={channel.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-3 py-2 ${channel.buttonStyle === "blue" ? 'bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] border border-[rgba(92,142,255,0.50)]' : 'bg-[rgba(246,146,26,0.10)] text-[#F6921A] border border-[rgba(246,146,26,0.50)]'} rounded-full font-medium transition-all flex items-center gap-1 text-sm inline-flex`}
                  style={{ width: 'fit-content' }}
                >
                  <span>Visit Channel</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Community Resources</h2>
            <p className="text-white/70">
              In addition to our social media channels, Elastos offers various resources to help you stay connected and informed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#171717] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F6921A]/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#F6921A]" />
                </div>
                <h3 className="text-xl font-bold text-white">Subgroups</h3>
              </div>

              <p className="text-white/70 mb-6">
                Join specialized Elastos community subgroups to connect with others and get focused support.
              </p>

              <div className="space-y-3">
                <div>
                  <a
                    href="https://t.me/elastosgroup/1135570"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6921A] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Help and Support</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/elastosgroup/1186551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6921A] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Announcements</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="https://t.me/elastosgroup/1155782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6921A] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Elastos AMAs</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#171717] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#5C8EFF]" />
                </div>
                <h3 className="text-xl font-bold text-white">Developer Resources</h3>
              </div>

              <p className="text-white/70 mb-6">
                Access technical documentation, SDKs, and developer communities to build on Elastos.
              </p>

              <div className="space-y-3">
                <div>
                  <a
                    href="https://elastos.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C8EFF] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Developer Portal</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/elastos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C8EFF] hover:underline text-sm flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/elastosgroup/1141313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C8EFF] hover:underline text-sm flex items-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Promotion Hub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Official Channels & Trust */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#F6921A]/10 via-[#5C8EFF]/10 to-transparent rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F6921A]/10 flex items-center justify-center border border-[#F6921A]/30">
                <Shield className="h-6 w-6 text-[#F6921A]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Verify Official Channels</h3>
            </div>

            <p className="text-white/70 mb-6">
              Always verify you're connecting with official Elastos channels to protect yourself from scams. 
              Official channels are listed on this page and will never ask for your private keys or funds.
            </p>

            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
              <p className="text-[#F6921A] font-medium mb-2">Security Tips:</p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                  </svg>
                  <span>Always verify URLs and check for the official Elastos logo and branding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                  </svg>
                  <span>Official team members will never DM you first or ask for your private keys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F6921A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z" />
                  </svg>
                  <span>Be suspicious of giveaways, airdrops or investment opportunities that seem too good to be true.</span>
                </li>
              </ul>
            </div>
          </motion.div>
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