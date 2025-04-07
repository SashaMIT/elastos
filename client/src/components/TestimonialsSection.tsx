import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    fullText?: string;
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
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    author: TestimonialAuthor;
    text: string;
    fullText?: string;
  } | null>(null);

  const handleCardClick = (testimonial: {
    author: TestimonialAuthor;
    text: string;
    fullText?: string;
  }) => {
    if (testimonial.fullText) {
      setSelectedTestimonial(testimonial);
    }
  };

  return (
    <section className={cn(
      "bg-background dark:bg-[#171717] text-foreground mt-5", 
      className
    )}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <div key={`${setIndex}-${i}`} onClick={() => handleCardClick(testimonial)} style={{ cursor: testimonial.fullText ? 'pointer' : 'default' }}>
                      <TestimonialCard 
                        {...testimonial}
                      />
                    </div>
                  ))
                ))}
              </div>
            </div>

            {/* Subtle fade effects that blend into #171717 */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#171717] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-[#171717] to-transparent" />
          </div>
        </div>
      </div>

      {/* Modal for full testimonial text */}
      <Dialog open={!!selectedTestimonial} onOpenChange={(open) => !open && setSelectedTestimonial(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <img 
                src={selectedTestimonial?.author.avatar} 
                alt={selectedTestimonial?.author.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col items-start">
                <span>{selectedTestimonial?.author.name}</span>
                <span className="text-sm text-muted-foreground">{selectedTestimonial?.author.handle}</span>
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-base text-foreground pt-2">
            {selectedTestimonial?.fullText || selectedTestimonial?.text}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}