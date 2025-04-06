import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onClick?: () => void;
}

export function AccordionItem({ title, children, open, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-orange-500 focus:outline-none",
          open ? "text-orange-500" : "text-blue-900 dark:text-white"
        )}
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-semibold">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200",
            open ? "rotate-180 transform text-orange-500" : ""
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-2 text-gray-600 dark:text-gray-300">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-gray-200 dark:divide-gray-700 rounded-lg", className)}>
      {children}
    </div>
  );
}