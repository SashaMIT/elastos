"use client";

import * as React from "react";
import { Link } from "wouter";
import { Home, Shield, Code, HelpCircle, MessageCircle, Newspaper, Menu as MenuIcon, Moon, Sun, LineChart, Coins, ShoppingCart, ScrollText, Target, FileText, Terminal, Github, Download, PiggyBank, FileCode2, BookOpen, Video, Database, Star, Wallet, Repeat, Bell, Users } from "lucide-react";
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
          <a
            href="https://twitter.com/elastosinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-full hover:text-[#F6921A]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.754 21h5.245l-7.017-10.378Zm-2.125 2.47L11 11.798l-4.826-7.05h2.076l3.9 5.696.857 1.295 5.047 7.452h-2.076l-4.12-6.099Z"></path>
            </svg>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-[200] bg-[#F6921A]/5 hover:bg-[#F6921A]/10 text-white border border-[#F6921A]/50 rounded-full px-4 [&>svg]:text-[#F6921A]/50">ELA</NavigationMenuTrigger>
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
                    <Link href="/bridge">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Repeat className="h-4 w-4 text-[#94b5ff]" />
                          <span>Bridge</span>
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
              <NavigationMenuTrigger className="font-[200]">Explore</NavigationMenuTrigger>
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
                    <Link to="/wallet">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4 text-[#94b5ff]" />
                          <span>Wallet</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Staking & Nodes</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
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
              <NavigationMenuTrigger className="text-sm font-[200]">
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
                    <Link href="/dao"> {/* Added DAO link */}
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                          <span>Elastos DAO</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <a href="https://www.cyberrepublic.org/funding" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#94b5ff]" />
                          <span>Submit a Proposal</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-[200]">
                Insights
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">UPDATES</h4>
                    <Link to="/announcements">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-[#94b5ff]" />
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
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">LEARNING</h4>
                    <a href="https://www.youtube.com/@elastosinfo" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-[#94b5ff]" />
                          <span>Videos & Tutorials</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                    <Link href="/team-foundation">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#94b5ff]" />
                          <span>Team Foundation</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-[200]">
                Connect
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">COMMUNITY</h4>
                    <Link to="/social-channels">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                          <span className="text-white">Social Channels</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/ambassador-program">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-[#94b5ff]" />
                          <span className="text-white">Ambassador Program</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2 text-[#94b5ff]">RESOURCES</h4>
                    <Link href="/media-kit">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-[#94b5ff]" />
                          <span className="text-white">Media Kit</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/contact-us">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                          <span className="text-white">Contact Us</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
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

// New AnnouncementsPage component
import { useState, useEffect } from 'react';

export function AnnouncementsPage() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/tQGWZNuxHC69yKOm.xml');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsItems(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Announcements</h1>
      {newsItems.map((item, index) => (
        <div key={index} className="card p-4 m-2 border border-gray-300 rounded-lg shadow-md">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
}