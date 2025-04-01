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
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1DA1F2]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
      bgColor: "from-[#1DA1F2]/10 to-transparent",
      borderColor: "border-[#1DA1F2]/20",
      subscribers: "30K+",
      buttonStyle: "blue" as const,
    },
    {
      name: "Telegram",
      description: "Join our global community for discussions and real-time updates.",
      url: "https://t.me/elastosgroup",
      icon: <MessageCircle className="h-10 w-10 text-[#0088cc]" />,
      bgColor: "from-[#0088cc]/10 to-transparent",
      borderColor: "border-[#0088cc]/20",
      subscribers: "35K+",
      buttonStyle: "orange" as const,
    },
    {
      name: "Discord",
      description: "Developer-focused community with technical discussions and support channels.",
      url: "https://discord.com/invite/elastos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#5865F2]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7-1.5-3.5-3-4.5-4.5-5 1.5-1.5 2-4.5 0-6.5-1.5-1.5-3-1.5-4-1.5L8.5 7.5"/><path d="M8.5 4.5v-2s-2.5-.5-4.5 1c-1.5 1.5-1 4-.5 5.5-1.5.5-3 2-3.5 4.5-.667 1.667-.833 5.833 0 7.5.833 1.833 2.333 3.5 4 3.5.667 0 2-1.5 2-3"/><path d="M8.5 13.5c0 1.5.5 3 2 4.5 1.5 1.5 5.5 2 7.5-.5"/></svg>,
      bgColor: "from-[#5865F2]/10 to-transparent",
      borderColor: "border-[#5865F2]/20",
      subscribers: "15K+",
      buttonStyle: "blue" as const,
    },
    {
      name: "Reddit",
      description: "Community discussions, AMAs, and ecosystem updates.",
      url: "https://www.reddit.com/r/Elastos/",
      icon: <Asterisk className="h-10 w-10 text-[#FF4500]" />,
      bgColor: "from-[#FF4500]/10 to-transparent",
      borderColor: "border-[#FF4500]/20",
      subscribers: "12K+",
      buttonStyle: "orange" as const,
    },
    {
      name: "YouTube",
      description: "Video tutorials, interviews, project updates, and conference recordings.",
      url: "https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ",
      icon: <Video className="h-10 w-10 text-[#FF0000]" />,
      bgColor: "from-[#FF0000]/10 to-transparent",
      borderColor: "border-[#FF0000]/20",
      subscribers: "5K+",
      buttonStyle: "blue" as const,
    },
    {
      name: "Facebook",
      description: "Project updates and news for the broader blockchain community.",
      url: "https://www.facebook.com/elastosorg/",
      icon: <Facebook className="h-10 w-10 text-[#1877F2]" />,
      bgColor: "from-[#1877F2]/10 to-transparent",
      borderColor: "border-[#1877F2]/20",
      subscribers: "7K+",
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
                className={`rounded-xl bg-gradient-to-br ${channel.bgColor} p-6 ${channel.borderColor} border hover:border-opacity-40 transition-all duration-300 flex flex-col h-full`}
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
                <h3 className="text-xl font-bold text-white">Regional Communities</h3>
              </div>

              <p className="text-white/70 mb-6">
                Connect with Elastos enthusiasts in your region through our localized community channels.
              </p>

              <div className="space-y-3">
                <div>
                  <a
                    href="https://t.me/ElastosChina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6921A] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>China Community</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/ElastosEurope"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6921A] hover:underline text-sm flex items-center gap-1"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>European Community</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="https://discord.com/invite/elastos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5865F2] hover:underline text-sm flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7-1.5-3.5-3-4.5-4.5-5 1.5-1.5 2-4.5 0-6.5-1.5-1.5-3-1.5-4-1.5L8.5 7.5"/><path d="M8.5 4.5v-2s-2.5-.5-4.5 1c-1.5 1.5-1 4-.5 5.5-1.5.5-3 2-3.5 4.5-.667 1.667-.833 5.833 0 7.5.833 1.833 2.333 3.5 4 3.5.667 0 2-1.5 2-3"/><path d="M8.5 13.5c0 1.5.5 3 2 4.5 1.5 1.5 5.5 2 7.5-.5"/></svg>
                    <span>Discord</span>
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
                    href="https://t.me/elastos_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C8EFF] hover:underline text-sm flex items-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Developer Chat</span>
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