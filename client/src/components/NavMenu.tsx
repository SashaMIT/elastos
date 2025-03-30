"use client";

import * as React from "react";
import { Link } from "wouter";
import { Home, Shield, Code, HelpCircle, MessageCircle, Newspaper, Menu as MenuIcon, Moon, Sun, LineChart, Coins, ShoppingCart, ScrollText, Target, FileText, Terminal, Github, Download, PiggyBank, FileCode2, BookOpen, Video, Database, Star } from "lucide-react";
import { SidebarMenu } from "@/components/ui/sidebar-menu";
import { useTheme } from "@/hooks/useTheme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function NavMenu() {
  const { theme, toggleTheme } = useTheme();

  const logoSrc = theme === 'dark' 
    ? "/images/Elastos Logo Dark - 1.png"
    : "/images/Elastos Logo Light - 1.png";

  return (
    <div className="flex justify-between items-center w-full px-4 bg-[#ffffff] dark:bg-background/20 backdrop-blur-lg">
      <Link href="/" className="z-20 flex items-center">
        <img src={logoSrc} alt="Elastos Logo" className="h-5 w-auto object-contain" />
      </Link>
      <div className="flex-1 flex justify-end md:justify-center relative">
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center p-2 rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm bg-[#F6921A]/5 hover:bg-[#F6921A]/10 text-white border border-[#F6921A]/50 rounded-full px-4 [&>svg]:text-[#F6921A]/50">ELA</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[200px] gap-1 p-2">
                    <Link href="/stats">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-[#94b5ff]" />
                          <span>Stats</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/security">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-[#94b5ff]" />
                          <span>Security</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/supply">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Coins className="h-4 w-4 text-[#94b5ff]" />
                          <span>Supply</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/buy-ela">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Buy ELA</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex absolute left-[46.5%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenuList className="hidden md:flex gap-4 lg:gap-6 items-center justify-center w-[400px]">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">ABOUT</h4>
                    <Link to="/vision">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <ScrollText className="h-4 w-4 text-[#94b5ff]" />
                          <span>Our Vision</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/roadmap">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Roadmap</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/ela-utility">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Coins className="h-4 w-4 text-[#94b5ff]" />
                          <span>ELA Utility</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/whitepaper">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#94b5ff]" />
                          <span>Litepaper / Whitepaper</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/use-cases">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-[#94b5ff]" />
                          <span>Use Cases</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">NETWORK</h4>
                    <Link href="/staking">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Staking & Nodes</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/explorer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                          <span>Explorer</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/ecosystem"> {/* Changed to Link component and removed target="_blank" */}
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Ecosystem Projects</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/faq">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                          <span>FAQs</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                Build
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">DEVS</h4>
                    <a href="https://elastos.dev/" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Terminal className="h-4 w-4 text-[#94b5ff]" />
                          <span>Developer Portal</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                    <a href="https://github.com/elastos" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Github className="h-4 w-4 text-[#94b5ff]" />
                          <span>Github</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                    <a href="https://elastos.dev/sdk/welcome/" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-[#94b5ff]" />
                          <span>SDKs & Tools</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">FUNDING</h4>
                    <Link href="/elastos-dao">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                          <span>Elastos DAO</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/submit-proposal">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <FileCode2 className="h-4 w-4 text-[#94b5ff]" />
                          <span>How to Submit a Proposal</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                Insights
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-1">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">Learning Hub</h4>
                  <Link href="/announcements">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                        <span>Announcements</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/blogs-news">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#94b5ff]" />
                        <span>Blogs & News</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/videos-tutorials">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-[#94b5ff]" />
                        <span>Videos & Tutorials</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/knowledge-base">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-[#94b5ff]" />
                        <span>Knowledge Base</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                Connect
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                  <Link href="/support/help">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-[#94b5ff]" />
                        <span className="text-white">Developers</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/faq" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink>
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                        <span className="text-white">AI & FAQ</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/support/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                        <span className="text-white">Contact Us</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/support/news">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <Newspaper className="h-4 w-4 text-[#94b5ff]" />
                        <span className="text-white">Latest News</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2">
              <MenuIcon className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] dark:bg-[#171717] overflow-y-auto border-none p-0">
              <SidebarMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}


// New WhitepaperPage Component
export function WhitepaperPage() {
  return (
    <div>
      <h1>Elastos Whitepaper and Litepaper</h1>
      <p>This page will eventually contain links to the original 2018 whitepaper, the latest litepaper, and any supporting documentation.</p>
      {/* Add links to actual whitepaper and litepaper documents here */}
    </div>
  );
}