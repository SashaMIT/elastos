"use client";

import React, { useState, useEffect } from "react";
import { NavMenu } from "./NavMenu";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, description, keywords }) => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  //Approximation of SEO meta tags - needs implementation of a proper SEO component
  const metaDescription = description || "Default Description";
  const metaKeywords = keywords || "Default Keywords";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#171717] dark:text-white transition-colors duration-200">
      {/* SEO meta tags would be inserted here using a dedicated component */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {title && <title>{title}</title>}


      <header className="fixed top-0 z-[100] w-full bg-[#FFFFFF] dark:bg-[#171717] backdrop-blur-sm border-b border-neutral-200/50 dark:border-neutral-800/50 transition-transform duration-300"
              style={{ transform: `translateY(${scrollY > lastScrollY && scrollY > 64 ? '-100%' : '0'})` }}>
        <div className="container mx-auto flex h-14 items-center px-4">
          <NavMenu />
        </div>
      </header>

      <main className="flex-1 bg-white dark:bg-[#171717] pt-20">
        <div className="min-h-[calc(100vh-3rem)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;