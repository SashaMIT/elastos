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
import Marquee from "react-fast-marquee";

interface Logo {
  id: number;
  name: string;
  url?: string;
  img: () => React.ReactNode;
}

interface LogoCarouselProps {
  logos: Logo[];
  columnCount?: number;
  onLogoClick?: (url: string) => void;
}

export function LogoCarousel({
  logos,
  columnCount = 5,
  onLogoClick
}: LogoCarouselProps) {
  // Calculate rows
  const rows = Math.ceil(logos.length / columnCount);

  // Prepare the rows of logos
  const logoRows = Array.from({ length: rows }, (_, rowIndex) => 
    logos.slice(rowIndex * columnCount, (rowIndex + 1) * columnCount)
  );

  const handleClick = (logo: Logo) => {
    if (logo.url && onLogoClick) {
      onLogoClick(logo.url);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-6">
      {logoRows.map((row, rowIndex) => (
        <Marquee
          key={rowIndex}
          gradient={false}
          speed={30}
          direction={rowIndex % 2 === 0 ? "left" : "right"}
          className="rounded-lg py-4"
        >
          <div className="flex items-center gap-16 px-8">
            {row.map((logo) => (
              <div
                key={logo.id}
                className="mx-8 flex items-center justify-center"
                onClick={() => handleClick(logo)}
                style={{ cursor: logo.url ? 'pointer' : 'default' }}
              >
                <div className="flex h-10 min-w-[160px] items-center justify-center">
                  {logo.img()}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      ))}
    </div>
  );
}

interface Logo {
  name: string
  id: number
  img: React.ComponentType<any>
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
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

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
          >
            <CurrentLogo className="h-15 w-15 max-h-[60%] max-w-[60%] object-contain md:h-24 md:w-24" />
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

function LogoCarousel2({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

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

export { LogoColumn, LogoCarousel2 }