"use client";

import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { Home, Shield, Code, HelpCircle, MessageCircle, Newspaper, Menu as MenuIcon, Moon, Sun, LineChart, Coins, ShoppingCart, ScrollText, Target, FileText, Terminal, Github, Download, PiggyBank, FileCode2, BookOpen, Video, Database, Star, Wallet, Repeat, Bell, Users, BarChart, Boxes, Globe, Layers, Vote, Calculator, GraduationCap, Crown, Sparkles } from "lucide-react";
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

interface NavMenuProps {
  items: Array<{
    label: string;
    to: string;
  }>;
}

export const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const { theme, toggleTheme } = useTheme();

  const logoSrc = theme === 'dark' 
    ? "/images/Elastos Logo Dark - 1.png"
    : "/images/Elastos Logo Light - 1.png";



  return (
    <div className="flex justify-between items-center w-full px-4 bg-[#ffffff] dark:bg-background/20 backdrop-blur-lg">
      <Link to="/" className="z-20 flex items-center">
        <img src={logoSrc} alt="Elastos Logo" className="h-5 w-auto object-contain" />
      </Link>
      <div className="flex-1 flex justify-end md:justify-center relative">
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 items-center gap-2">
          <a
            href="https://twitter.com/ElastosInfo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-full hover:text-[#95B5FF]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a 
                  href="https://blog.elastos.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-[200] bg-[#F6921A]/5 hover:bg-[#F6921A]/10 text-white border border-[#F6921A]/50 rounded-full px-4 h-10 inline-flex items-center justify-center transition-colors"
                >
                  Blog
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex absolute left-[46.5%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenuList className="hidden md:flex gap-1 lg:gap-1.5 items-center justify-center">
            
            {/* Solutions Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[200]">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 items-center">
                  {/* Featured Card Left */}
                  <div className="relative flex justify-center">
                    <a href="https://blog.elastos.net/announcement/introducing-btcd-stablecoin/" target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors relative">
                        {/* Full Background Image */}
                        <div className="h-full relative overflow-hidden bg-gradient-to-br from-orange-500 via-yellow-600 to-amber-700 flex items-center justify-center">
                          <picture>
                            <source srcSet="/images/BTCD1.webp" type="image/webp" />
                            <img 
                              src="/images/BTCD1.png" 
                              alt="BTCD Bitcoin Dollar Announcement"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.error('BTCD1 image failed to load');
                                console.error('Error details:', e);
                                // Fallback to background gradient if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                              onLoad={() => {
                                console.log('BTCD1 image loaded successfully');
                              }}
                            />
                          </picture>
                          {/* Frosted Glass Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 h-16 p-4 flex items-center gap-3 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-white drop-shadow-lg">The Bitcoin Dollar (BTCD)</h3>
                              <p className="text-xs text-gray-100 drop-shadow-md">The World's First Bitcoin-backed Dollar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick Access Right */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">NETWORK</h4>
                      <div className="space-y-1">
                        <Link to="/stats">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                              <BarChart className="h-4 w-4 text-[#94b5ff]" />
                              <span>Network Stats</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                        <Link to="/explorer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                              <span>Live Explorer</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                        <Link to="/security">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-[#94b5ff]" />
                              <span>Security</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                    </div>
                    
                  <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">PARTICIPATE</h4>
                      <div className="space-y-1">
                    <a href="https://staking.elastos.net/" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-[#94b5ff]" />
                          <span>Staking & Nodes</span>
                        </div>
                      </NavigationMenuLink>
                    </a>

                        <Link to="/buy-ela">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4 text-[#94b5ff]" />
                              <span>Buy ELA</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                      </div>
                        </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Developers Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[200]">Developers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 items-center">
                  {/* Featured Card Left */}
                  <div className="relative flex justify-center">
                    <a href="https://elastos.dev/" target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors relative">
                        {/* Full Background Image */}
                        <div className="h-full relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 flex items-center justify-center">
                        <picture>
                          <source srcSet="/images/Behind The Code 0000.webp" type="image/webp" />
                          <img 
                            src="/images/Behind The Code 0000.jpg" 
                            alt="Developer Tools Behind The Code"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Developer Tools image failed to load');
                              // Fallback to background gradient if image fails
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </picture>
                        {/* Frosted Glass Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 p-4 flex items-center gap-3 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
                          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white drop-shadow-lg">Developer Tools</h3>
                            <p className="text-xs text-gray-100 drop-shadow-md">Build fast, efficient dApps and services.</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick Access Right */}
                  <div className="space-y-6">
                  <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">START BUILDING</h4>
                      <div className="space-y-1">
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
                  </div>
                    
                  <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">FUNDING</h4>
                      <div className="space-y-1">
                        <a href="https://elastos.com/funding" target="_blank" rel="noopener noreferrer">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-[#94b5ff]" />
                              <span>Submit Proposal</span>
                            </div>
                          </NavigationMenuLink>
                        </a>
                    <Link to="/dao">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                          <span>The Elastos DAO</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                        <a href="https://elastos.com/funding" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#94b5ff]" />
                              <span>Grants Program</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Ecosystem Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[200]">Ecosystem</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 items-center">
                  {/* Featured Card Left */}
                  <div className="relative flex justify-center">
                    <a href="https://elastos.net/ecosystem" target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors relative">
                        {/* Full Background Image */}
                        <div className="h-full relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 flex items-center justify-center">
                        <img 
                          src="/images/Behind The Code 00.png" 
                          alt="Web3 Ecosystem Behind The Code"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('Web3 Ecosystem image failed to load');
                            // Fallback to background gradient if image fails
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        {/* Frosted Glass Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 p-4 flex items-center gap-3 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
                          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white drop-shadow-lg">Web3 Ecosystem</h3>
                            <p className="text-xs text-gray-100 drop-shadow-md">Discover dApps and services on Elastos.</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick Access Right */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">APPLICATIONS</h4>
                      <div className="space-y-1">
                        <Link to="/ecosystem">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Layers className="h-4 w-4 text-[#94b5ff]" />
                              <span>DeFi Protocols</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/ecosystem">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#94b5ff]" />
                              <span>NFT Platforms</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/ecosystem">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-[#94b5ff]" />
                              <span>Gaming & Metaverse</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">TOOLS</h4>
                      <div className="space-y-1">
                        <Link to="/wallet">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Wallet className="h-4 w-4 text-[#94b5ff]" />
                              <span>Wallet</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/bridge">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Repeat className="h-4 w-4 text-[#94b5ff]" />
                              <span>Bridge</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/supply">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Coins className="h-4 w-4 text-[#94b5ff]" />
                              <span>Supply Info</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Learn Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[200]">Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 items-center">
                  {/* Featured Card Left */}
                  <div className="relative flex justify-center">
                    <a href="https://elastos.net/vision" target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors relative">
                        {/* Full Background Image */}
                        <div className="h-full relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center">
                        <picture>
                          <source srcSet="/images/Learn Elastos.webp" type="image/webp" />
                          <img 
                            src="/images/Learn Elastos.jpg" 
                            alt="Learn Elastos Behind The Code"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Learn Elastos image failed to load');
                              console.error('Error details:', e);
                              // Fallback to background gradient if image fails
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                            onLoad={() => {
                              console.log('Learn Elastos image loaded successfully');
                            }}
                          />
                        </picture>
                        {/* Frosted Glass Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 p-4 flex items-center gap-3 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white drop-shadow-lg">Learn Elastos</h3>
                            <p className="text-xs text-gray-100 drop-shadow-md">Master Web3 ownership and digital freedom.</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick Access Right */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">UNDERSTANDING</h4>
                      <div className="space-y-1">
                        <Link to="/vision">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-[#94b5ff]" />
                              <span>Our Vision</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/roadmap">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <LineChart className="h-4 w-4 text-[#94b5ff]" />
                              <span>Roadmap</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/use-cases">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Boxes className="h-4 w-4 text-[#94b5ff]" />
                              <span>Use Cases</span>
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
                              <span>Whitepaper</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </div>
                    
                  <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">UPDATES</h4>
                      <div className="space-y-1">
                    <Link to="/announcements">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-[#94b5ff]" />
                          <span>Announcements</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>

                    <a href="https://www.youtube.com/@elastosinfo" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-[#94b5ff]" />
                              <span>Videos</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                      </div>
                        </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>



            {/* Governance Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[200]">Governance</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 items-center">
                  {/* Featured Card Left */}
                  <div className="relative flex justify-center">
                    <a href="https://ambassador.elastos.net" target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors relative">
                        {/* Full Background Image */}
                        <div className="h-full relative overflow-hidden bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex items-center justify-center">
                          <picture>
                            <source srcSet="/images/Ambassador Program.webp" type="image/webp" />
                            <img 
                              src="/images/Ambassador Program.jpg" 
                              alt="Elastos Ambassador Program"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.error('Ambassador Program image failed to load');
                                // Fallback to background gradient if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </picture>
                          {/* Frosted Glass Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 h-16 p-4 flex items-center gap-3 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
                            <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
                              <Crown className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-white drop-shadow-lg">Ambassador Program</h3>
                              <p className="text-xs text-gray-100 drop-shadow-md">Become an Ambassador!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Quick Access Right */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">DAO</h4>
                      <div className="space-y-1">
                        <Link to="/dao">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <PiggyBank className="h-4 w-4 text-[#94b5ff]" />
                              <span>The Elastos DAO</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/team-foundation">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-[#94b5ff]" />
                              <span>Foundation</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/vision">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-[#94b5ff]" />
                              <span>Mission & Vision</span>
                            </div>
                          </NavigationMenuLink>
                        </Link>


                      </div>
                    </div>
                    
                  <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 px-2 text-[#94b5ff] uppercase tracking-wide">ABOUT</h4>
                      <div className="space-y-1">
                    <Link to="/social-channels">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-[#94b5ff]" />
                              <span>Social Channels</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <a href="https://ambassador.elastos.net" target="_blank" rel="noopener noreferrer">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-[#94b5ff]" />
                              <span>Ambassadors</span>
                        </div>
                      </NavigationMenuLink>
                    </a>
                        <a href="https://blog.elastos.net/contact-us/" target="_blank" rel="noopener noreferrer">
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex items-center gap-2">
                              <HelpCircle className="h-4 w-4 text-[#94b5ff]" />
                              <span>Contact Us</span>
                  </div>
                          </NavigationMenuLink>
                        </a>
                    <Link to="/media-kit">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-[#94b5ff]" />
                              <span>Media Kit</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                      </div>
                        </div>
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
};