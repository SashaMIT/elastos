import React from "react";
import {
  FileText,
  Wallet,
  LineChart,
  Target,
  Layers,
  ScrollText,
  Star,
  Search,
  ShieldCheck,
  Coins,
  ShoppingCart,
  Server,
  Globe,
  Database,
  Share2,
  Boxes,
  LifeBuoy,
  MessageCircle,
  HelpCircle,
  Download,
  Bell,
  BookOpen,
  Video,
  Users,
  PiggyBank,
  Terminal,
  Repeat,
  Menu as MenuIcon,
  Vote
} from "@/lib/icons";
import { Shield } from "lucide-react";
import { ChartBar } from "@/components/icons";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export const SidebarMenu = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto bg-[#171717] text-white">
      {/* Quick Actions */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex gap-2">
          <SheetClose asChild>
            <a 
              href="https://blog.elastos.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-xs font-[200] bg-[#F6921A]/15 hover:bg-[#F6921A]/25 text-[#F6921A] rounded-lg px-3 py-2 text-center transition-colors"
            >
              Blog
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://twitter.com/ElastosInfo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#94b5ff]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </SheetClose>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full px-2">
        
        {/* Solutions Section */}
        <AccordionItem value="solutions" className="border-0">
          <AccordionTrigger className="px-4 py-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200] text-base">Solutions</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 px-6 pb-2">
              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 uppercase tracking-wide">NETWORK</h4>
              <SheetClose asChild>
                <Link to="/stats" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white font-[200] transition-all">
                  <ChartBar className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Network Stats</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/explorer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <MessageCircle className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Live Explorer</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/security" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Shield className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Security</span>
                </Link>
              </SheetClose>

              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 mt-6 uppercase tracking-wide">PARTICIPATE</h4>
              <SheetClose asChild>
                <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <LineChart className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Staking & Nodes</span>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/buy-ela" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <ShoppingCart className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Buy ELA</span>
                </Link>
              </SheetClose>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Developers Section */}
        <AccordionItem value="developers" className="border-0">
          <AccordionTrigger className="px-4 py-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200] text-base">Developers</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 px-6 pb-2">
              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 uppercase tracking-wide">START BUILDING</h4>
              <SheetClose asChild>
                <a href="https://elastos.dev/" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Terminal className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Developer Portal</span>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="https://elastos.dev/sdk/welcome/" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Download className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>SDKs & Tools</span>
                </a>
              </SheetClose>

              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 mt-6 uppercase tracking-wide">FUNDING</h4>
              <SheetClose asChild>
                <a href="https://elastos.com/funding" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <FileText className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Submit Proposal</span>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/dao" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <PiggyBank className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>The Elastos DAO</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <a href="https://elastos.com/funding" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Star className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Grants Program</span>
                </a>
              </SheetClose>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Ecosystem Section */}
        <AccordionItem value="ecosystem" className="border-0">
          <AccordionTrigger className="px-4 py-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200] text-base">Ecosystem</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 px-6 pb-2">
              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 uppercase tracking-wide">APPLICATIONS</h4>
              <SheetClose asChild>
                <Link to="/ecosystem" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Layers className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>DeFi Protocols</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/ecosystem" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Star className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>NFT Platforms</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/ecosystem" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Globe className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Gaming & Metaverse</span>
                </Link>
              </SheetClose>

              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 mt-6 uppercase tracking-wide">TOOLS</h4>
              <SheetClose asChild>
                <Link to="/wallet" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Wallet className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Wallet</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/bridge" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Repeat className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Bridge</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/supply" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Coins className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Supply Info</span>
                </Link>
              </SheetClose>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Learn Section */}
        <AccordionItem value="learn" className="border-0">
          <AccordionTrigger className="px-4 py-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200] text-base">Learn</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 px-6 pb-2">
              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 uppercase tracking-wide">UNDERSTANDING</h4>
              <SheetClose asChild>
                <Link to="/vision" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Target className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Our Vision</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/roadmap" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <LineChart className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Roadmap</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/use-cases" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Boxes className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Use Cases</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/ela-utility" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Coins className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>ELA Utility</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/whitepaper" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <FileText className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Whitepaper</span>
                </Link>
              </SheetClose>

              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 mt-6 uppercase tracking-wide">UPDATES</h4>
              <SheetClose asChild>
                <Link to="/announcements" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Bell className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Announcements</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <a href="https://www.youtube.com/@elastosinfo" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Video className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Videos</span>
                </a>
              </SheetClose>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Governance Section */}
        <AccordionItem value="governance" className="border-0">
          <AccordionTrigger className="px-4 py-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200] text-base">Governance</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 px-6 pb-2">
              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 uppercase tracking-wide">GOVERNANCE</h4>
              <SheetClose asChild>
                <Link to="/dao" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <PiggyBank className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>The Elastos DAO</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/team-foundation" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Users className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Foundation</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/vision" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Target className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Mission & Vision</span>
                </Link>
              </SheetClose>

              <h4 className="font-[200] text-xs text-[#94b5ff] mb-3 mt-6 uppercase tracking-wide">ABOUT</h4>
              <SheetClose asChild>
                <Link to="/social-channels" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <MessageCircle className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Social Channels</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <a href="https://ambassador.elastos.net" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Star className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Ambassadors</span>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="https://blog.elastos.net/contact-us/" target="_blank" rel="noopener noreferrer" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <HelpCircle className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Contact Us</span>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/media-kit" className="py-3 hover:text-[#F6921A] hover:bg-white/5 rounded-lg px-2 flex items-center gap-3 text-white transition-all">
                  <Download className="h-4 w-4 text-[#94b5ff] flex-shrink-0" />
                  <span>Media Kit</span>
                </Link>
              </SheetClose>
            </div>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>

      {/* BTCD Marketing Card */}
      <div className="px-4 pt-4 pb-4">
        <SheetClose asChild>
          <a href="https://blog.elastos.net/announcement/introducing-btcd-stablecoin/" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-32 bg-gradient-to-br from-orange-500 via-yellow-600 to-amber-700 rounded-xl overflow-hidden group cursor-pointer hover:from-orange-400 hover:via-yellow-500 hover:to-amber-600 transition-all duration-300 relative">
              <picture>
                <source srcSet="/images/BTCD.webp" type="image/webp" />
                <img 
                  src="/images/BTCD.png" 
                  alt="BTCD Bitcoin Dollar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('BTCD image failed to load');
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </picture>
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-12 p-3 flex items-center gap-2 bg-black/40 backdrop-blur-sm">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-semibold text-white">The Bitcoin Dollar (BTCD)</h3>
                  <p className="text-xs text-gray-200">Bitcoin-backed Stablecoin</p>
                </div>
              </div>
            </div>
          </a>
        </SheetClose>
      </div>

      {/* Footer Spacing */}
      <div className="h-6"></div>
    </div>
  );
};

export const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <MenuIcon className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] p-0 dark:bg-[#171717] bg-[#171717]">
          <SidebarMenu />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;