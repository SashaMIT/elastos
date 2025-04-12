"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"

interface Logo {
  id: number | string
  name: string
  url?: string
  img: () => React.ReactNode
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    // Removed theme checking as we're only using dark mode
    const cycleInterval = 2000;
    const columnDelay = index * 200;
    
    // Use a more efficient calculation to avoid unnecessary rerenders
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    
    // Memoize the current logo component to prevent unnecessary recreation
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex]);
    
    // Preload the next logo to avoid flickering during transitions
    React.useEffect(() => {
      const nextIndex = (currentIndex + 1) % logos.length;
      // This will be handled by the browser's preload mechanism
      // without adding extra DOM elements
      if (typeof window !== 'undefined') {
        const nextLogoUrl = logos[nextIndex].url;
        if (nextLogoUrl) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = nextLogoUrl;
          link.as = 'image';
          document.head.appendChild(link);
          return () => {
            document.head.removeChild(link);
          };
        }
      }
    }, [currentIndex, logos]);
    
    const handleClick = useCallback(() => {
      if (logos[currentIndex].url) {
        window.open(logos[currentIndex].url, "_blank", "noopener,noreferrer");
      }
    }, [logos, currentIndex]);

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
            onClick={handleClick}
            style={{ cursor: logos[currentIndex].url ? 'pointer' : 'default' }}
          >
            <div className="h-15 w-15 max-h-[60%] max-w-[60%] object-contain md:h-24 md:w-24">
              <CurrentLogo />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdate = Date.now();
    
    const animate = () => {
      const now = Date.now();
      // Only update every 100ms to avoid excessive renders
      if (now - lastUpdate >= 100) {
        updateTime();
        lastUpdate = now;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [updateTime]);

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn }