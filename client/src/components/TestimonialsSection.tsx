
import React from "react";
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background dark:bg-[#171717] text-foreground",
      "py-0 sm:py-4 md:py-8 px-4 md:px-6 lg:px-8",
      className
    )}>
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[3%] bg-gradient-to-r from-background via-background/90 dark:from-[#171717] dark:via-[#171717]/90 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[3%] bg-gradient-to-l from-background via-background/90 dark:from-[#171717] dark:via-[#171717]/90 sm:block" />
        </div>
      </div>
    </section>
  );
}
