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
    summary: "Important updates to the ELA staking program including new rewards structure and delegation options.",
    content: "We are pleased to announce several important updates to the ELA staking program. Starting June 1, the rewards structure will be optimized to provide better incentives for long-term stakers, and new delegation options will be available to make staking more accessible for all ELA holders.",
    readMoreLink: "#",
    timeToRead: "4 min"
  },
  {
    id: 4,
    title: "Community Call: Upcoming Elastos Roadmap",
    date: "April 25, 2024",
    category: "Community",
    summary: "Join us for a community call to discuss the upcoming Elastos roadmap and development plans.",
    content: "The Elastos team cordially invites all community members to join our upcoming community call where we'll discuss the Elastos roadmap for the remainder of 2024 and beyond. The call will feature presentations from core developers and project leads, followed by a Q&A session.",
    readMoreLink: "#",
    timeToRead: "1 min"
  },
  {
    id: 5,
    title: "New Partnership with Major DeFi Protocol",
    date: "April 15, 2024",
    category: "Partnership",
    summary: "Elastos has formed a strategic partnership with a major DeFi protocol to expand financial services on ESC.",
    content: "We're excited to announce a strategic partnership between Elastos and a major DeFi protocol (to be revealed soon). This collaboration will significantly expand the financial services available on the Elastos Smart Contract Chain (ESC), bringing innovative lending, borrowing, and yield farming options to the ecosystem.",
    readMoreLink: "#",
    timeToRead: "3 min"
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

      {/* Category filters */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category 
                  ? 'bg-[#F6921A] text-white' 
                  : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
              }`}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 20 }}
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

      {/* No announcements state */}
      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400">No announcements found for this category.</p>
        </div>
      )}

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}

export default AnnouncementsPage;