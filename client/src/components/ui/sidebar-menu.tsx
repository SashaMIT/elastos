import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, Home, Shield, Coins, LineChart, Code, HelpCircle, MessageCircle, FileText, Terminal, Github, Download, PiggyBank, FileCode2, BookOpen, Video, Database, Newspaper, ScrollText, Target, ShoppingCart, Wallet, Layers, Search, Globe } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "wouter";

export const SidebarMenu = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto bg-background text-foreground pt-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="explore" className="border-b-0">
          <AccordionTrigger className="px-4 text-white">Explore</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-medium text-sm text-[#94b5ff] mb-2">ABOUT</h4>
              <Link href="/vision" className="py-2 hover:text-primary flex items-center gap-2">
                <ScrollText className="h-4 w-4 text-[#94b5ff]" />
                <span>Our Vision</span>
              </Link>
              <Link href="/roadmap" className="py-2 hover:text-primary flex items-center gap-2">
                <LineChart className="h-4 w-4 text-[#94b5ff]" />
                <span>Roadmap</span>
              </Link>
              <Link href="/ela-utility" className="py-2 hover:text-primary flex items-center gap-2">
                <Coins className="h-4 w-4 text-[#94b5ff]" />
                <span>ELA Utility</span>
              </Link>
              <Link href="/use-cases" className="py-2 hover:text-primary flex items-center gap-2">
                <Target className="h-4 w-4 text-[#94b5ff]" />
                <span>Use Cases</span>
              </Link>
              <Link to="/whitepaper" className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-accent text-[#F6921A]">
                <FileText className="h-4 w-4 text-[#F6921A]" />
                <span>Litepaper / Whitepaper</span>
              </Link>

              <h4 className="font-medium text-sm text-[#94b5ff] mb-2 mt-4">NETWORK</h4>
              <Link href="/wallet" className="py-2 hover:text-primary flex items-center gap-2">
                <Wallet className="h-4 w-4 text-[#94b5ff]" />
                <span>Wallet</span>
              </Link>
              <Link href="/staking" className="py-2 hover:text-primary flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#94b5ff]" />
                <span>Staking & Nodes</span>
              </Link>
              <Link href="/explorer" className="py-2 hover:text-primary flex items-center gap-2">
                <Search className="h-4 w-4 text-[#94b5ff]" />
                <span>Explorer</span>
              </Link>
              <Link href="/ecosystem" className="py-2 hover:text-primary flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#94b5ff]" />
                <span>Ecosystem Projects</span>
              </Link>
              <Link href="/faqs" className="py-2 hover:text-primary flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                <span>FAQs</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="build" className="border-b-0">
          <AccordionTrigger className="px-4 text-white">Build</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-medium text-sm text-[#94b5ff] mb-2">DEVS</h4>
              <Link href="/developer-portal" className="py-2 hover:text-primary flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#94b5ff]" />
                <span>Developer Portal</span>
              </Link>
              <a href="https://github.com/elastos" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-primary flex items-center gap-2">
                <Github className="h-4 w-4 text-[#94b5ff]" />
                <span>Github</span>
              </a>
              <Link href="/sdks-tools" className="py-2 hover:text-primary flex items-center gap-2">
                <Download className="h-4 w-4 text-[#94b5ff]" />
                <span>SDKs & Tools</span>
              </Link>

              <h4 className="font-medium text-sm text-[#94b5ff] mb-2 mt-4">FUNDING</h4>
              <Link href="/elastos-dao" className="py-2 hover:text-primary flex items-center gap-2">
                <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                <span>Elastos DAO</span>
              </Link>
              <Link href="/submit-proposal" className="py-2 hover:text-primary flex items-center gap-2">
                <FileCode2 className="h-4 w-4 text-[#94b5ff]" />
                <span>How to Submit a Proposal</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="insights" className="border-b-0">
          <AccordionTrigger className="px-4 text-white">Insights</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <h4 className="font-medium text-sm text-[#94b5ff] mb-2">LEARNING HUB</h4>
              <Link href="/announcements" className="py-2 hover:text-primary flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                <span>Announcements</span>
              </Link>
              <Link href="/blogs-news" className="py-2 hover:text-primary flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                <span>Blogs & News</span>
              </Link>
              <Link href="/videos-tutorials" className="py-2 hover:text-primary flex items-center gap-2">
                <Video className="h-4 w-4 text-[#94b5ff]" />
                <span>Videos & Tutorials</span>
              </Link>
              <Link href="/knowledge-base" className="py-2 hover:text-primary flex items-center gap-2">
                <Database className="h-4 w-4 text-[#94b5ff]" />
                <span>Knowledge Base</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="connect" className="border-b-0">
          <AccordionTrigger className="px-4 text-white">Connect</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <Link href="/support/help" className="py-2 hover:text-primary flex items-center gap-2">
                <Code className="h-4 w-4 text-[#94b5ff]" />
                <span>Developers</span>
              </Link>
              <Link href="/faq" className="py-2 hover:text-primary flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                <span>AI & FAQ</span>
              </Link>
              <Link href="/support/contact" className="py-2 hover:text-primary flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                <span>Contact Us</span>
              </Link>
              <Link href="/support/news" className="py-2 hover:text-primary flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-[#94b5ff]" />
                <span>Latest News</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ela" className="border-b-0">
          <AccordionTrigger className="px-4 text-white">Ela</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 px-6">
              <Link href="/stats" className="py-2 hover:text-primary flex items-center gap-2">
                <Home className="h-4 w-4 text-[#94b5ff]" />
                <span>Stats</span>
              </Link>
              <Link href="/security" className="py-2 hover:text-primary flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#94b5ff]" />
                <span>Security</span>
              </Link>
              <Link href="/supply" className="py-2 hover:text-primary flex items-center gap-2">
                <Coins className="h-4 w-4 text-[#94b5ff]" />
                <span>Supply</span>
              </Link>
              <Link href="/buy-ela" className="py-2 hover:text-primary flex items-center gap-2">
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
        <SheetContent side="right" className="w-[300px] p-0">
          <SidebarMenu />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;