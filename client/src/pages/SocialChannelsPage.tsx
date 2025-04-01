
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Twitter, 
  MessageCircle, 
  Video, 
  Globe, 
  Facebook,
  ExternalLink,
  Users,
  Shield,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

// Define social channel type
interface SocialChannel {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  subscribers: string;
  category: 'official' | 'community';
  features: string[];
}

const SocialChannelsPage: React.FC = () => {
  // Define social channels data
  const socialChannels: SocialChannel[] = [
    {
      name: "X (Twitter)",
      description: "Official Elastos Twitter account for news, announcements, and community engagement.",
      url: "https://x.com/ElastosInfo",
      icon: <Twitter className="h-10 w-10 text-[#1DA1F2]" />,
      bgColor: "from-[#1DA1F2]/10 to-transparent",
      borderColor: "border-[#1DA1F2]/20",
      subscribers: "55K+",
      category: 'official',
      features: [
        "Latest protocol updates",
        "Project news and announcements",
        "Community highlights",
        "Live events coverage",
        "Educational content"
      ]
    },
    {
      name: "Telegram",
      description: "Active community discussion channel for real-time updates and support.",
      url: "https://t.me/elastosgroup",
      icon: <MessageCircle className="h-10 w-10 text-[#0088cc]" />,
      bgColor: "from-[#0088cc]/10 to-transparent",
      borderColor: "border-[#0088cc]/20",
      subscribers: "20K+",
      category: 'official',
      features: [
        "24/7 community discussions",
        "Real-time support",
        "Direct team interactions",
        "Multilingual channels available",
        "Local community groups"
      ]
    },
    {
      name: "Discord",
      description: "Developer-focused community with technical discussions and support channels.",
      url: "https://discord.com/invite/elastos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#5865F2]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7-1.5-3.5-3-4.5-4.5-5 1.5-1.5 2-4.5 0-6.5-1.5-1.5-3-1.5-4-1.5L8.5 7.5"/><path d="M8.5 4.5v-2s-2.5-.5-4.5 1c-1.5 1.5-1 4-.5 5.5-1.5.5-3 2-3.5 4.5-.667 1.667-.833 5.833 0 7.5.833 1.833 2.333 3.5 4 3.5.667 0 2-1.5 2-3"/><path d="M8.5 13.5c0 1.5.5 3 2 4.5 1.5 1.5 5.5 2 7.5-.5"/></svg>,
      bgColor: "from-[#5865F2]/10 to-transparent",
      borderColor: "border-[#5865F2]/20",
      subscribers: "15K+",
      category: 'official',
      features: [
        "Technical discussions",
        "Developer support",
        "Project coordination",
        "Community governance",
        "Voice channels for meetings"
      ]
    },
    {
      name: "Reddit",
      description: "Forum for in-depth discussions, news analysis, and community contributions.",
      url: "https://www.reddit.com/r/Elastos/",
      icon: <Globe className="h-10 w-10 text-[#FF4500]" />,
      bgColor: "from-[#FF4500]/10 to-transparent",
      borderColor: "border-[#FF4500]/20",
      subscribers: "12K+",
      category: 'community',
      features: [
        "Long-form discussions",
        "Community analysis",
        "AMAs with team members",
        "Weekly update summaries",
        "Project retrospectives"
      ]
    },
    {
      name: "YouTube",
      description: "Video channel featuring tutorials, interviews, and development updates.",
      url: "https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ",
      icon: <Video className="h-10 w-10 text-[#FF0000]" />,
      bgColor: "from-[#FF0000]/10 to-transparent",
      borderColor: "border-[#FF0000]/20",
      subscribers: "8K+",
      category: 'official',
      features: [
        "Technical tutorials",
        "Developer interviews",
        "Product demos",
        "Conference recordings",
        "AMA sessions"
      ]
    },
    {
      name: "Facebook",
      description: "Official page for broader audience engagement and milestone announcements.",
      url: "https://www.facebook.com/elastosorg/",
      icon: <Facebook className="h-10 w-10 text-[#1877F2]" />,
      bgColor: "from-[#1877F2]/10 to-transparent",
      borderColor: "border-[#1877F2]/20",
      subscribers: "5K+",
      category: 'official',
      features: [
        "Major announcements",
        "Community milestones",
        "Event announcements",
        "Educational content",
        "Industry news"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-white/[0.05] to-white/[0.02] z-0"></div>
        
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[80px]"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#F7921A]/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Connect with the <span className="text-[#F7921A]">Elastos</span> <span className="text-[#8BABFF]">Community</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Join our vibrant ecosystem across multiple platforms and stay updated with the latest developments, discussions, and opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <a href="#official" className="px-5 py-2.5 rounded-full bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] font-medium border border-[rgba(92,142,255,0.30)] hover:bg-[rgba(92,142,255,0.15)] transition-all">
                Official Channels
              </a>
              <a href="#community" className="px-5 py-2.5 rounded-full bg-[rgba(246,146,26,0.10)] text-[#F6921A] font-medium border border-[rgba(246,146,26,0.30)] hover:bg-[rgba(246,146,26,0.15)] transition-all">
                Community Channels
              </a>
              <a href="#guidelines" className="px-5 py-2.5 rounded-full bg-white/5 text-white/90 font-medium border border-white/10 hover:bg-white/10 transition-all">
                Community Guidelines
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-5xl bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {socialChannels.map((channel, idx) => (
                  <a 
                    key={idx} 
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-all"
                  >
                    {channel.icon}
                    <span className="mt-2 text-white font-medium">{channel.name}</span>
                    <span className="text-xs text-white/60">{channel.subscribers} followers</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Official Channels Section */}
      <section id="official" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-[#8BABFF]">Official</span> Channels
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay connected with Elastos through these official communication channels maintained by the core team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {socialChannels.filter(channel => channel.category === 'official').map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${channel.bgColor} rounded-xl p-6 ${channel.borderColor} h-full flex flex-col`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {channel.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{channel.name}</h3>
                    <p className="text-white/60 text-sm">{channel.subscribers} followers</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 flex-grow">
                  {channel.description}
                </p>
                
                <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                  <h4 className="text-white/90 font-medium mb-2">Channel Features:</h4>
                  <ul className="space-y-1">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg font-medium transition-colors"
                >
                  <span>Visit {channel.name}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels Section */}
      <section id="community" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-[#F7921A]">Community</span> Channels
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Engage with our thriving community through these community-led and maintained channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {socialChannels.filter(channel => channel.category === 'community').map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${channel.bgColor} rounded-xl p-6 ${channel.borderColor} h-full flex flex-col`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {channel.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{channel.name}</h3>
                    <p className="text-white/60 text-sm">{channel.subscribers} subscribers</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 flex-grow">
                  {channel.description}
                </p>
                
                <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                  <h4 className="text-white/90 font-medium mb-2">Channel Features:</h4>
                  <ul className="space-y-1">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg font-medium transition-colors"
                >
                  <span>Visit {channel.name}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Communities Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">Regional</span> Communities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Connect with Elastos enthusiasts in your region through these language-specific channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Chinese Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#E62129]/10 to-transparent rounded-xl p-6 border-[#E62129]/20 border h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E62129]/10 flex items-center justify-center">
                  <span className="text-2xl text-[#E62129]">中</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Chinese Community</h3>
                  <p className="text-white/60 text-sm">12K+ members</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4">
                Our largest regional community with active discussions on development, investments, and adoption in China and across Asia.
              </p>
              
              <div className="space-y-3 mb-4">
                <a 
                  href="https://t.me/elastos_china" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Telegram (中文)</span>
                </a>
                <a 
                  href="https://weibo.com/elastos" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Globe className="h-5 w-5 text-[#E6162D]" />
                  <span className="text-white">Weibo</span>
                </a>
                <a 
                  href="https://www.huobi.com/en-us/topic/elastos/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#5FB878]" />
                  <span className="text-white">WeChat Channel</span>
                </a>
              </div>
            </motion.div>
            
            {/* European Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#0052B4]/10 to-transparent rounded-xl p-6 border-[#0052B4]/20 border h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0052B4]/10 flex items-center justify-center">
                  <span className="text-2xl text-[#0052B4]">EU</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">European Community</h3>
                  <p className="text-white/60 text-sm">8K+ members</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4">
                Multiple language groups for European Elastos enthusiasts, focused on regional adoption, events, and collaborations.
              </p>
              
              <div className="space-y-3 mb-4">
                <a 
                  href="https://t.me/elastos_europe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Telegram (Europe)</span>
                </a>
                <a 
                  href="https://t.me/elastos_fr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Telegram (French)</span>
                </a>
                <a 
                  href="https://t.me/elastos_de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Telegram (German)</span>
                </a>
              </div>
            </motion.div>
            
            {/* Global Regional Communities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#8BABFF]/10 to-transparent rounded-xl p-6 border-[#8BABFF]/20 border h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#8BABFF]/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#8BABFF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Global Communities</h3>
                  <p className="text-white/60 text-sm">15+ countries</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4">
                Elastos has active communities in many countries around the world. Find your local group here.
              </p>
              
              <div className="space-y-3 mb-4">
                <a 
                  href="https://t.me/elastos_korea" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Korean Community</span>
                </a>
                <a 
                  href="https://t.me/elastos_india" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0088cc]" />
                  <span className="text-white">Indian Community</span>
                </a>
                <a 
                  href="https://t.me/elastosglobal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Globe className="h-5 w-5 text-[#8BABFF]" />
                  <span className="text-white">All Regional Channels</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section id="guidelines" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.00] via-white/[0.01] to-white/[0.00] z-0"></div>
        
        {/* Background elements */}
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#F7921A]/5 blur-[150px]"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#8BABFF]/5 blur-[150px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Community <span className="text-[#F7921A]">Guidelines</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Help us maintain a positive, inclusive, and productive community environment
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#F7921A]" />
                  <span>Community Values</span>
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F7921A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#F7921A] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Respect</h4>
                      <p className="text-white/70 text-sm">Treat all community members with respect, regardless of background, experience, or opinions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F7921A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#F7921A] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Inclusion</h4>
                      <p className="text-white/70 text-sm">Embrace diversity and ensure that all community members feel welcomed and valued.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F7921A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#F7921A] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Knowledge Sharing</h4>
                      <p className="text-white/70 text-sm">Contribute to the collective knowledge base by sharing insights and experiences.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F7921A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#F7921A] font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Growth Mindset</h4>
                      <p className="text-white/70 text-sm">Approach challenges with a positive attitude and willingness to learn and adapt.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F7921A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#F7921A] font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Collaboration</h4>
                      <p className="text-white/70 text-sm">Work together to achieve common goals and support each other's success.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#8BABFF]" />
                  <span>Behavior Guidelines</span>
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8BABFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8BABFF] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">No Harassment</h4>
                      <p className="text-white/70 text-sm">Harassment, hate speech, or discrimination of any kind is not tolerated.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8BABFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8BABFF] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">No Spam or Shilling</h4>
                      <p className="text-white/70 text-sm">Do not spam channels with repeated content or promote unrelated projects or tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8BABFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8BABFF] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Stay On Topic</h4>
                      <p className="text-white/70 text-sm">Keep discussions relevant to the channel's intended purpose.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8BABFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8BABFF] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">No Scams or Phishing</h4>
                      <p className="text-white/70 text-sm">Be vigilant against scams and report suspicious activity to moderators.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8BABFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8BABFF] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Protect Privacy</h4>
                      <p className="text-white/70 text-sm">Respect others' privacy and do not share personal or sensitive information.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-center"
            >
              <Button className="bg-gradient-to-r from-[#F7921A] to-[#8BABFF] text-white px-8 py-6 rounded-full text-lg hover:opacity-90 transition-opacity">
                Join Our Community Today
              </Button>
              <p className="text-white/60 mt-4 max-w-xl mx-auto">
                By participating in our community channels, you agree to follow these guidelines and contribute positively to the ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Community <span className="text-[#8BABFF]">Voices</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear from active members of our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Community Voice 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F7921A]/20 flex items-center justify-center">
                  <span className="text-xl text-[#F7921A] font-bold">JC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">John Chen</h3>
                  <p className="text-white/60 text-sm">Developer & Community Moderator</p>
                </div>
              </div>
              
              <p className="text-white/80 italic mb-4">
                "The Elastos community has been instrumental in my growth as a blockchain developer. The technical discussions on Discord have helped me solve complex problems and learn from experienced developers."
              </p>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/elastos" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8BABFF] hover:underline text-sm flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
                <span className="text-white/40">|</span>
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
            </motion.div>
            
            {/* Community Voice 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#8BABFF]/20 flex items-center justify-center">
                  <span className="text-xl text-[#8BABFF] font-bold">SP</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sarah Park</h3>
                  <p className="text-white/60 text-sm">Content Creator & Ambassador</p>
                </div>
              </div>
              
              <p className="text-white/80 italic mb-4">
                "I've been creating content about Elastos for over two years now. The telegram groups have been an incredible source of information and the team is always responsive to questions from the community."
              </p>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:underline text-sm flex items-center gap-1"
                >
                  <Video className="h-3.5 w-3.5" />
                  <span>YouTube</span>
                </a>
                <span className="text-white/40">|</span>
                <a 
                  href="https://t.me/elastosgroup" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0088cc] hover:underline text-sm flex items-center gap-1"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </motion.div>
            
            {/* Community Voice 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F7921A]/20 flex items-center justify-center">
                  <span className="text-xl text-[#F7921A] font-bold">ML</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Michael Liu</h3>
                  <p className="text-white/60 text-sm">dApp Developer & Ecosystem Contributor</p>
                </div>
              </div>
              
              <p className="text-white/80 italic mb-4">
                "Building on Elastos has been a great experience. The Reddit community has been a fantastic place to get feedback on my dApp ideas and find potential users and collaborators."
              </p>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.reddit.com/r/Elastos/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4500] hover:underline text-sm flex items-center gap-1"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Reddit</span>
                </a>
                <span className="text-white/40">|</span>
                <a 
                  href="https://x.com/ElastosInfo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DA1F2] hover:underline text-sm flex items-center gap-1"
                >
                  <Twitter className="h-3.5 w-3.5" />
                  <span>Twitter</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7921A]/10 via-[#8BABFF]/10 to-transparent z-0"></div>
        
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F7921A]/5 to-[#8BABFF]/5 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the <span className="text-[#F7921A]">Elastos</span> <span className="text-[#8BABFF]">Movement</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Connect with thousands of innovators, developers, and enthusiasts who are shaping the future of the decentralized internet.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {socialChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-3 bg-white/10 hover:bg-white/15 rounded-full transition-colors items-center gap-2"
                >
                  {channel.icon}
                  <span className="text-white font-medium">{channel.name}</span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white/60">
              <Share2 className="h-4 w-4" />
              <span>Share the Elastos vision with your network</span>
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
