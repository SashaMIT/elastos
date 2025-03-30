"use client";

import { cn } from "@/lib/utils";
import { Link } from "wouter";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Star } from "lucide-react"; // Added import for Star icon

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const openValue = open !== undefined ? open : openState;
  const setOpenValue = setOpen || setOpenState;

  return (
    <SidebarContext.Provider value={{ open: openValue, setOpen: setOpenValue, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? "300px" : "60px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-14 px-4 flex md:hidden items-center justify-between bg-neutral-800 z-50"
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-200"
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={cn(
              "fixed inset-0 bg-[#171717] z-40 md:hidden overflow-y-auto pt-14 pb-4",
              className
            )}
            {...props}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-neutral-200"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="pt-20">
              {/* Added a new SidebarMenuItem for /ela-utility */}
              <SidebarMenuItem label="EXPLORE">
                <SidebarMenuItem label="Overview" href="/explore" />
                <SidebarMenuItem label="Features" href="/features" />
                <SidebarMenuItem label="Technology" href="/technology" />
                <SidebarMenuItem label="ELA Utility" href="/ela-utility" icon={<Star className="h-4 w-4 text-[#94b5ff]" />} /> {/* Added ELA Utility link */}
              </SidebarMenuItem>
              <SidebarMenuItem label="BUILD">
                <SidebarMenuItem label="Developer Portal" href="https://elastos.dev/" target="_blank" />
                <SidebarMenuItem label="SDKs & Tools" href="https://elastos.dev/sdk/welcome/" target="_blank" />
                <SidebarMenuItem label="Elastos DAO" href="https://cyberrepublic.org/" target="_blank" />
              </SidebarMenuItem>
              <SidebarMenuItem label="CONNECT">
                <SidebarMenuItem label="Community" href="/community" />
                <SidebarMenuItem label="Discord" href="/discord" />
                <SidebarMenuItem label="Twitter" href="/twitter" />
              </SidebarMenuItem>
              <SidebarMenuItem label="INSIGHTS">
                <SidebarMenuItem label="Blog" href="/blog" />
                <SidebarMenuItem label="News" href="/news" />
                <SidebarMenuItem label="Events" href="/events" />
              </SidebarMenuItem>
              <SidebarMenuItem label="ELA METRICS">
                <SidebarMenuItem label="Statistics" href="/metrics" />
                <SidebarMenuItem label="Network" href="/network" />
                <SidebarMenuItem label="Market" href="/market" />
              </SidebarMenuItem>
              <SidebarMenuItem label="BUILD">
                <SidebarMenuItem label="Getting Started" href="/build/start" />
                <SidebarMenuItem label="Documentation" href="/docs" />
                <SidebarMenuItem label="SDKs" href="/sdks" />
              </SidebarMenuItem>
              <SidebarMenuItem label="CONNECT">
                <SidebarMenuItem label="Community" href="/community" />
                <SidebarMenuItem label="Discord" href="/discord" />
                <SidebarMenuItem label="Twitter" href="/twitter" />
              </SidebarMenuItem>
              <SidebarMenuItem label="INSIGHTS">
                <SidebarMenuItem label="Blog" href="/blog" />
                <SidebarMenuItem label="News" href="/news" />
                <SidebarMenuItem label="Events" href="/events" />
              </SidebarMenuItem>
              <SidebarMenuItem label="ELA METRICS">
                <SidebarMenuItem label="Statistics" href="/metrics" />
                <SidebarMenuItem label="Network" href="/network" />
                <SidebarMenuItem label="Market" href="/market" />
              </SidebarMenuItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  className,
  onClick,
  ...props
}) => {
  const { open, animate } = useSidebar();

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

// Added a dummy SidebarMenuItem component (replace with your actual implementation)
const SidebarMenuItem = ({ label, href, icon, children }: { label?: string; href?: string; icon?: React.ReactNode; children?: React.ReactNode }) => {
    return (
        <Link href={href} className="py-2 hover:text-primary flex items-center gap-2">
            {icon}
            <span>{label ?? children}</span>
        </Link>
    )
}