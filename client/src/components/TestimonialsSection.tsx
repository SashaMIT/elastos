import React, { useState, useEffect, useRef, memo } from "react";
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

// Memoized card to prevent unnecessary re-renders
const MemoizedTestimonialCard = memo(({ testimonial, onClick }: { 
  testimonial: {
    author: TestimonialAuthor;
    text: string;
    fullText?: string;
    href?: string;
  },
  onClick: () => void
}) => (
  <div 
    onClick={onClick} 
    style={{ cursor: testimonial.fullText ? 'pointer' : 'default' }}
    className="will-change-transform"
  >
    <TestimonialCard {...testimonial} />
  </div>
));

MemoizedTestimonialCard.displayName = 'MemoizedTestimonialCard';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const marqueePaused = useRef(false);

  // Use IntersectionObserver to pause animations when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
          // Only apply animation classes when visible
          if (entry.isIntersecting) {
            marqueePaused.current = false;
          } else {
            marqueePaused.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section 
      ref={sectionRef}
      className={cn(
        "bg-background dark:bg-[#171717] text-foreground mt-5", 
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div 
                className={cn(
                  "flex shrink-0 justify-around [gap:var(--gap)] flex-row will-change-transform",
                  isVisible ? "animate-marquee group-hover:[animation-play-state:paused]" : ""
                )}
                style={{ animationPlayState: marqueePaused.current ? 'paused' : 'running' }}
              >
                {/* Optimize by only rendering two sets instead of duplicating all testimonials */}
                {[...Array(2)].map((_, setIndex) => (
                  // Fragment to avoid extra DOM nodes
                  <React.Fragment key={`set-${setIndex}`}>
                    {testimonials.map((testimonial, i) => (
                      <MemoizedTestimonialCard
                        key={`${setIndex}-${i}`}
                        testimonial={testimonial}
                        onClick={() => handleCardClick(testimonial)}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* GPU-accelerated fade effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#171717] to-transparent will-change-transform" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-[#171717] to-transparent will-change-transform" />
          </div>
        </div>
      </div>

      {/* Modal - Only render when needed to save memory */}
      {selectedTestimonial && (
        <Dialog open={!!selectedTestimonial} onOpenChange={(open) => !open && setSelectedTestimonial(null)}>
          <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#171717] to-[#1F1F1F] border border-[#5C8EFF]/25 shadow-[0_0_15px_rgba(92,142,255,0.15)]">
            <DialogHeader className="relative">
              <DialogTitle className="flex items-center gap-4">
                <img 
                  src={selectedTestimonial.author.avatar} 
                  alt={selectedTestimonial.author.name} 
                  className="h-14 w-14 rounded-full object-cover border-2 border-[#5C8EFF]/30"
                  loading="lazy"
                  width={56}
                  height={56}
                />
                <div className="flex flex-col items-start">
                  <span className="text-white font-[200] text-lg">{selectedTestimonial.author.name}</span>
                  <span className="px-4 py-1 bg-[#5C8EFF]/10 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium whitespace-nowrap mt-1">{selectedTestimonial.author.handle}</span>
                </div>
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-base text-gray-300 pt-4 font-[200] leading-relaxed">
              {selectedTestimonial.fullText || selectedTestimonial.text}
            </DialogDescription>
            <div className="absolute bottom-4 right-4 opacity-30">
              <img 
                src="/images/Elastos Icon - 2.svg" 
                alt="Elastos Logo" 
                className="w-8 h-8 opacity-50"
                loading="lazy"
                width={32}
                height={32}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}