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
  Repeat
} from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

export const SidebarMenu = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto bg-[#171717] text-white pt-16">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="explore" className="border-0">
          <AccordionTrigger className="px-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200]">Explore</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2">About</h4>
              <Link href="/vision" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white font-[200]">
                <ScrollText className="h-4 w-4 text-[#94b5ff]" />
                <span>Our Vision</span>
              </Link>
              <Link href="/roadmap" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <LineChart className="h-4 w-4 text-[#94b5ff]" />
                <span>Roadmap</span>
              </Link>
              <Link href="/ela-utility" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Star className="h-4 w-4 text-[#94b5ff]" />
                <span>ELA Utility</span>
              </Link>
              <Link href="/use-cases" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Target className="h-4 w-4 text-[#94b5ff]" />
                <span>Use Cases</span>
              </Link>
              <Link to="/whitepaper" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <FileText className="h-4 w-4 text-[#94b5ff]" />
                <span>Litepaper / Whitepaper</span>
              </Link>

              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2 mt-4">Network</h4>
              <Link href="/wallet" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Wallet className="h-4 w-4 text-[#94b5ff]" />
                <span>Wallet</span>
              </Link>
              <Link href="/staking" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Layers className="h-4 w-4 text-[#94b5ff]" />
                <span>Staking & Nodes</span>
              </Link>
              <Link href="/explorer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Search className="h-4 w-4 text-[#94b5ff]" />
                <span>Explorer</span>
              </Link>
              <Link href="/projects" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Globe className="h-4 w-4 text-[#94b5ff]" />
                <span>Ecosystem Projects</span>
              </Link>
              <Link href="/faqs" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <LifeBuoy className="h-4 w-4 text-[#94b5ff]" />
                <span>FAQs</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="build" className="border-0">
          <AccordionTrigger className="px-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200]">Build</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2">Devs</h4>
              <a href="https://elastos.dev/" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Terminal className="h-4 w-4 text-[#94b5ff]" />
                <span>Developer Portal</span>
              </a>
              <a href="https://elastos.dev/sdk/welcome/" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Download className="h-4 w-4 text-[#94b5ff]" />
                <span>SDKs & Tools</span>
              </a>

              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2 mt-4">Funding</h4>
              <Link href="/dao" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                <span>Elastos DAO</span>
              </Link>
              <a href="https://www.cyberrepublic.org/funding" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <FileText className="h-4 w-4 text-[#94b5ff]" />
                <span>Submit a Proposal</span>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="insights" className="border-0">
          <AccordionTrigger className="px-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200]">Insights</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2">Updates</h4>
              <Link to="/announcements" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Bell className="h-4 w-4 text-[#94b5ff]" />
                <span>Announcements</span>
              </Link>
              <a href="https://blog.elastos.net" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                <span>Blogs & News</span>
              </a>

              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2 mt-4">Learning</h4>
              <a href="https://www.youtube.com/@elastosinfo" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Video className="h-4 w-4 text-[#94b5ff]" />
                <span>Videos & Tutorials</span>
              </a>
              <Link href="/team-foundation" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Users className="h-4 w-4 text-[#94b5ff]" />
                <span>Team Foundation</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="connect" className="border-0">
          <AccordionTrigger className="px-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200]">Connect</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2">Community</h4>
              <Link to="/social-channels" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                <span>Social Channels</span>
              </Link>
              <Link to="/ambassador-program" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Star className="h-4 w-4 text-[#94b5ff]" />
                <span>Ambassador Program</span>
              </Link>

              <h4 className="font-[200] text-sm text-[#94b5ff] mb-2 mt-4">Resources</h4>
              <Link href="/media-kit" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Download className="h-4 w-4 text-[#94b5ff]" />
                <span>Media Kit</span>
              </Link>
              <a href="https://contact.elastos.net" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                <span>Contact Us</span>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ela" className="border-0">
          <AccordionTrigger className="px-4 text-white hover:text-[#F6921A] data-[state=open]:text-[#F6921A] font-[200]">Ela</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <Link href="/stats" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Database className="h-4 w-4 text-[#94b5ff]" />
                <span>Stats</span>
              </Link>
              <Link href="/security" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <ShieldCheck className="h-4 w-4 text-[#94b5ff]" />
                <span>Security</span>
              </Link>
              <Link href="/supply" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Coins className="h-4 w-4 text-[#94b5ff]" />
                <span>Supply</span>
              </Link>
              <Link href="/bridge" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <Repeat className="h-4 w-4 text-[#94b5ff]" />
                <span>Bridge</span>
              </Link>
              <Link href="/buy-ela" className="py-2 hover:text-[#F6921A] flex items-center gap-2 text-white">
                <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                <span>Buy ELA</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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