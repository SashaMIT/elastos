"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  startOnIntersect = false,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  startOnIntersect?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    if (startOnIntersect) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                "span",
                {
                  opacity: 1,
                  filter: filter ? "blur(0px)" : "none",
                },
                {
                  duration: duration ? duration : 1,
                  delay: stagger(0.2),
                }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (scope.current) {
        observer.observe(scope.current);
      }

      return () => observer.disconnect();
    } else {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope.current, startOnIntersect]);

  const renderWords = () => {
    return (
      <div ref={scope} className={cn("text-sm md:text-base lg:text-lg", className)}> {/* Added mobile text size */}
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}`}
              className="opacity-0"
              style={{
                filter: filter ? "blur(4px)" : "none",
              }}
            >
              {word}
              {idx !== wordsArray.length - 1 ? " " : ""}
            </motion.span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};