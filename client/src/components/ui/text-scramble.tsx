'use client';
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface TextScrambleProps {
  children?: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType<any, keyof JSX.IntrinsicElements>;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
  phrases?: string[];
}

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 2000,
  speed = 50,
  characterSet = "!<>-_\\/[]{}—=+*^?#________",
  as: Component = "span",
  className = "",
  trigger = true,
  onScrambleComplete,
  phrases,
  ...rest
}: TextScrambleProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);
  const textToUse = children || (phrases?.[0] || '');
  const [displayText, setDisplayText] = useState(textToUse);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let interval: NodeJS.Timeout;
    let iteration = 0;
    const maxIterations = Math.floor(duration / speed);

    const currentText = phrases ? phrases[currentPhraseIndex] : children || '';

    const scramble = () => {
      if (iteration >= maxIterations) {
        setDisplayText(currentText);
        clearInterval(interval);

        if (phrases && phrases.length > 1) {
          // Set up for next phrase
          setTimeout(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, 3000); // Wait before showing next phrase
        }

        onScrambleComplete?.();
        return;
      }

      const progress = iteration / maxIterations;
      const charactersToKeep = Math.floor(currentText.length * progress);

      let scrambledText = "";
      for (let i = 0; i < currentText.length; i++) {
        if (i < charactersToKeep) {
          scrambledText += currentText[i];
        } else if (currentText[i] === " ") {
          scrambledText += " ";
        } else {
          scrambledText += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambledText);
      iteration++;
    };

    interval = setInterval(scramble, speed);
    return () => clearInterval(interval);
  }, [children, duration, speed, characterSet, trigger, onScrambleComplete, currentPhraseIndex, phrases]);

  return (
    <MotionComponent className={className} {...rest} fontWeight={200}>
      {displayText}
    </MotionComponent>
  );
}