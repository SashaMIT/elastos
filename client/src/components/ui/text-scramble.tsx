'use client';
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children?: string;
  phrases?: string[];
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  phrases,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);
  const [displayText, setDisplayText] = useState(children || (phrases && phrases.length > 0 ? phrases[0] : ""));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const text = children || (phrases && phrases[currentPhraseIndex]);

  const scramble = async () => {
   
    const originalText = text || "";
    let animationFrameId: number;
    let startTime: number;

    const scramble = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const scrambleText = () => {
        let result = "";
        const finalText = originalText;

        for (let i = 0; i < finalText.length; i++) {
          const charProgress = Math.max(0, Math.min(1, (progress * 2) - (i / finalText.length)));

          if (charProgress === 1) {
            result += finalText[i];
          } else if (charProgress > 0) {
            if (Math.random() < charProgress * 0.95) {
              result += finalText[i];
            } else {
              result += characterSet[Math.floor(Math.random() * characterSet.length)];
            }
          } else {
            result += characterSet[Math.floor(Math.random() * characterSet.length)];
          }
        }

        return result;
      };

      setDisplayText(scrambleText());

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(scramble);
      } else {
        setDisplayText(originalText);
        if (onScrambleComplete) onScrambleComplete();

        // If using phrases, move to the next phrase
        if (phrases && phrases.length > 1) {
          setTimeout(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, 2000); // Wait 2 seconds before showing the next phrase
        }
      }
    };

    animationFrameId = requestAnimationFrame(scramble);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  };

  useEffect(() => {
    if (!trigger) return;
    scramble();
  }, [text, duration, characterSet, trigger, onScrambleComplete, currentPhraseIndex]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}