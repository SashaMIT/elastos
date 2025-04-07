
import React from "react";
import { motion } from "framer-motion";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CalendarDays, ChevronRight, Clock, ExternalLink } from "lucide-react";

// Sample announcement data - in a real application, this would come from an API
const announcements = [
  {
    id: 1,
    title: "Integration with Arbitrary Message Bridge (AMB) by BeL2",
    date: "June 15, 2024",
    category: "Technology",
    summary: "Elastos is excited to announce the integration with BeL2's Arbitrary Message Bridge, enhancing cross-chain communication capabilities.",
    content: "The Elastos ecosystem is taking a significant step forward with the integration of the Arbitrary Message Bridge (AMB) developed by BeL2. This technology will enable seamless communication between Elastos sidechains and the Bitcoin mainnet, opening up new possibilities for decentralized applications and services.",
    readMoreLink: "#",
    timeToRead: "3 min"
  },
  {
    id: 2,
    title: "Elastos to Participate in Bitcoin 2024 Conference",
    date: "May 28, 2024",
    category: "Event",
    summary: "The Elastos team will be attending and presenting at the upcoming Bitcoin 2024 Conference in Nashville.",
    content: "We're thrilled to announce that Elastos will have a significant presence at the Bitcoin 2024 Conference in Nashville. Our team will be showcasing the latest developments in Bitcoin-backed infrastructure and demonstrating how Elastos sidechains benefit from Bitcoin's security through merged mining.",
    readMoreLink: "#",
    timeToRead: "2 min"
  },
  {
    id: 3,
    title: "ELA Staking Program Updates",
    date: "May 10, 2024",
    category: "Finance",
    summary: "Important updates to the ELA staking program, including new rewards structure and validator requirements.",
    content: "The Elastos DAO has approved several significant updates to the ELA staking program. These changes include a revised rewards structure designed to incentivize long-term participation, new validator requirements focused on enhancing network security, and improved delegation options for ELA holders.",
    readMoreLink: "#",
    timeToRead: "4 min"
  },
  {
    id: 4,
    title: "New Developer Portal Launch",
    date: "April 22, 2024",
    category: "Development",
    summary: "Elastos launches a redesigned developer portal with comprehensive documentation, tutorials, and development tools.",
    content: "We're excited to announce the launch of our completely redesigned developer portal. The new portal features comprehensive documentation, step-by-step tutorials, API references, and a suite of development tools designed to make building on Elastos more accessible than ever before. Whether you're a seasoned blockchain developer or just getting started, the new portal offers resources tailored to your needs.",
    readMoreLink: "#",
    timeToRead: "3 min"
  },
  {
    id: 5,
    title: "Elastos Ecosystem Fund Announces New Grants",
    date: "April 5, 2024",
    category: "Funding",
    summary: "The Elastos Ecosystem Fund announces a new round of grants for projects building on the Elastos platform.",
    content: "The Elastos Ecosystem Fund, managed by the Cyber Republic DAO, has announced a new round of grants for innovative projects building on the Elastos platform. With a total allocation of 500,000 ELA, these grants aim to support developers working on decentralized applications, infrastructure improvements, and user-facing services that enhance the Elastos ecosystem.",
    readMoreLink: "#",
    timeToRead: "5 min"
  }
];

// Filter function for announcements
const getAnnouncementsByCategory = (category: string | null) => {
  if (!category || category === "All") {
    return announcements;
  }
  return announcements.filter(announcement => announcement.category === category);
};

export function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>("All");
  const filteredAnnouncements = getAnnouncementsByCategory(selectedCategory);

  // Available categories
  const categories = ["All", ...Array.from(new Set(announcements.map(a => a.category)))];

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717]">
      <ScrollToTop />
      
      {/* Hero section */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Announcements
        </motion.h1>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stay up to date with the latest news, updates, and events from the Elastos ecosystem
        </motion.p>
      </div>

      {/* Category filter */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category 
                  ? "bg-[#F6921A] text-white" 
                  : "bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Announcements grid */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {filteredAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-800 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="bg-[rgba(246,146,26,0.15)] text-[#F6921A] px-2 py-1 rounded-full">
                    {announcement.category}
                  </span>
                  <div className="flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1" />
                    {announcement.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {announcement.timeToRead} read
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {announcement.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {announcement.content}
                </p>
                
                <a 
                  href={announcement.readMoreLink} 
                  className="inline-flex items-center text-[#F6921A] hover:underline"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscribe section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F6921A]/10 to-[#5C8EFF]/10 rounded-2xl p-8 sm:p-12 border border-[#F6921A]/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to our newsletter to receive announcements directly in your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#F6921A]/50"
              />
              <button className="px-6 py-2 bg-[#F6921A] text-white rounded-full font-medium hover:bg-[#F6921A]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* External resources */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
            Other Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Follow us on these platforms for more updates
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="https://twitter.com/ElastosInfo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow"
          >
            <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-black dark:text-white">Twitter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Follow @ElastosInfo</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
          </a>
          
          <a
            href="https://discord.com/invite/elastos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow"
          >
            <div className="mr-4 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-black dark:text-white">Discord</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Join our community</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
          </a>
          
          <a
            href="https://t.me/elastosbrowser"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow"
          >
            <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-black dark:text-white">Telegram</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Join our Telegram group</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
