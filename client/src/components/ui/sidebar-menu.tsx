
import React, { useState } from "react";
import { Link } from "wouter";
import {
  Home,
  Shield,
  Code,
  HelpCircle,
  MessageCircle,
  Newspaper,
  LineChart,
  Coins,
  ShoppingCart,
  ScrollText,
  Target,
  FileText,
  Terminal,
  Github,
  Download,
  PiggyBank,
  FileCode2,
  BookOpen,
  Video,
  Database,
  Star,
  Wallet,
  Bell,
  Users,
  ChevronDown,
  ChevronUp,
  Repeat
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/hooks/use-mobile";

export function SidebarMenu() {
  // State to track which dropdown sections are open
  const [openSections, setOpenSections] = useState({
    explore: false,
    build: false,
    insights: false,
    connect: false,
    ela: false
  });

  // Toggle dropdown section
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  return (
    <div className="h-full py-4 overflow-y-auto bg-background">
      <div className="px-4 space-y-4">
        <div className="space-y-1">
          {/* Explore Section */}
          <div className="mb-2">
            <button 
              onClick={() => toggleSection('explore')}
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-white hover:text-primary"
            >
              <span className="text-lg">Explore</span>
              {openSections.explore ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {openSections.explore && (
              <div className="ml-4 mt-2 space-y-1">
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">ABOUT</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/vision" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <ScrollText className="h-4 w-4 text-[#94b5ff]" />
                      <span>Our Vision</span>
                    </Link>
                    <Link href="/roadmap" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-[#94b5ff]" />
                      <span>Roadmap</span>
                    </Link>
                    <Link href="/ela-utility" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Coins className="h-4 w-4 text-[#94b5ff]" />
                      <span>ELA Utility</span>
                    </Link>
                    <Link href="/whitepaper" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#94b5ff]" />
                      <span>Litepaper / Whitepaper</span>
                    </Link>
                    <Link href="/use-cases" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Target className="h-4 w-4 text-[#94b5ff]" />
                      <span>Use Cases</span>
                    </Link>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">NETWORK</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/wallet" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-[#94b5ff]" />
                      <span>Wallet</span>
                    </Link>
                    <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-[#94b5ff]" />
                      <span>Staking & Nodes</span>
                    </a>
                    <Link href="/explorer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Database className="h-4 w-4 text-[#94b5ff]" />
                      <span>Explorer</span>
                    </Link>
                    <Link href="/ecosystem" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                      <span>Ecosystem Projects</span>
                    </Link>
                    <Link href="/faq" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                      <span>FAQs</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Separator className="my-2" />

          {/* Build Section */}
          <div className="mb-2">
            <button 
              onClick={() => toggleSection('build')}
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-white hover:text-primary"
            >
              <span className="text-lg">Build</span>
              {openSections.build ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {openSections.build && (
              <div className="ml-4 mt-2 space-y-1">
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">DEVS</h4>
                  <div className="space-y-2 ml-2">
                    <a href="https://elastos.dev/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#94b5ff]" />
                      <span>Developer Portal</span>
                    </a>
                    <a href="https://elastos.dev/sdk/welcome/" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Download className="h-4 w-4 text-[#94b5ff]" />
                      <span>SDKs & Tools</span>
                    </a>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">FUNDING</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/dao" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                      <span>Elastos DAO</span>
                    </Link>
                    <a href="https://www.cyberrepublic.org/funding" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#94b5ff]" />
                      <span>Submit a Proposal</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Separator className="my-2" />

          {/* Insights Section */}
          <div className="mb-2">
            <button 
              onClick={() => toggleSection('insights')}
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-white hover:text-primary"
            >
              <span className="text-lg">Insights</span>
              {openSections.insights ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {openSections.insights && (
              <div className="ml-4 mt-2 space-y-1">
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">UPDATES</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/announcements" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Bell className="h-4 w-4 text-[#94b5ff]" />
                      <span>Announcements</span>
                    </Link>
                    <Link href="/blogs-news" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                      <span>Blogs & News</span>
                    </Link>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">LEARNING</h4>
                  <div className="space-y-2 ml-2">
                    <a href="https://www.youtube.com/@elastosinfo" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Video className="h-4 w-4 text-[#94b5ff]" />
                      <span>Videos & Tutorials</span>
                    </a>
                    <Link href="/team-foundation" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#94b5ff]" />
                      <span>Team Foundation</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Separator className="my-2" />

          {/* Connect Section */}
          <div className="mb-2">
            <button 
              onClick={() => toggleSection('connect')}
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-white hover:text-primary"
            >
              <span className="text-lg">Connect</span>
              {openSections.connect ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {openSections.connect && (
              <div className="ml-4 mt-2 space-y-1">
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">COMMUNITY</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/social-channels" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                      <span>Social Channels</span>
                    </Link>
                    <Link href="/ambassador-program" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Star className="h-4 w-4 text-[#94b5ff]" />
                      <span>Ambassador Program</span>
                    </Link>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-[#94b5ff] mb-2">RESOURCES</h4>
                  <div className="space-y-2 ml-2">
                    <Link href="/media-kit" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <Download className="h-4 w-4 text-[#94b5ff]" />
                      <span>Media Kit</span>
                    </Link>
                    <Link href="/contact-us" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Separator className="my-2" />

          {/* ELA Section */}
          <div className="mb-2">
            <button 
              onClick={() => toggleSection('ela')}
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-white hover:text-primary"
            >
              <span className="text-lg">ELA</span>
              {openSections.ela ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {openSections.ela && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/stats" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                  <Home className="h-4 w-4 text-[#94b5ff]" />
                  <span>Stats</span>
                </Link>
                <Link href="/security" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#94b5ff]" />
                  <span>Security</span>
                </Link>
                <Link href="/supply" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                  <Coins className="h-4 w-4 text-[#94b5ff]" />
                  <span>Supply</span>
                </Link>
                <Link href="/bridge" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                  <Repeat className="h-4 w-4 text-[#94b5ff]" />
                  <span>Bridge</span>
                </Link>
                <Link href="/buy-ela" className="block py-1 text-sm hover:text-primary flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                  <span>Buy ELA</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
