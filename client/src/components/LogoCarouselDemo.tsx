"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useTheme } from "@/hooks/useTheme";

export function LogoCarouselDemo() {
  const { theme } = useTheme();

  // Define logos array inside the component so it updates on each render.
  const logos = [
    {
      name: "Glide",
      id: 9,
      img: () => (
        <img
          src="/images/glide.png"
          alt="Glide"
          loading="lazy"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Kucoin",
      id: 2,
      img: () => (
        <img
          src="/images/Kucoin.png"
          alt="Kucoin"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Coinbase",
      id: 1,
      img: () => (
        <>
          {/* Light mode image */}
          <img
            src="/images/Coinbase.png"
            alt="Coinbase Light"
            className="block dark:hidden h-7 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
          {/* Dark mode image */}
          <img
            src="/images/Coinbase-w.png"
            alt="Coinbase Dark"
            className="hidden dark:block h-7 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
        </>
      ),
    },
    {
      name: "Gateio",
      id: 3,
      img: () => (
        <img
          src="/images/Gateio.png"
          alt="Gate.io"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Huobi",
      id: 4,
      img: () => (
        <>
          {/* Light mode image */}
          <img
            src="/images/Huobi.png"
            alt="Huobi Light"
            className="block dark:hidden h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
          {/* Dark mode image */}
          <img
            src="/images/Huobi-w.png"
            alt="Huobi Dark"
            className="hidden dark:block h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
        </>
      ),
    },
    {
      name: "BitGet",
      id: 5,
      img: () => (
        <img
          src="/images/BitGet.png"
          alt="BitGet"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Crypto",
      id: 6,
      img: () => (
        <>
          {/* Light mode image */}
          <img
            src="/images/Crypto.png"
            alt="Crypto Light"
            className="block dark:hidden h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
          {/* Dark mode image */}
          <img
            src="/images/Crypto-w.png"
            alt="Crypto Dark"
            className="hidden dark:block h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
        </>
      ),
    },
    {
      name: "Uniswap",
      id: 7,
      img: () => (
        <img
          src="/images/Uniswap.png"
          alt="Uniswap"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Chainge",
      id: 8,
      img: () => (
        <img
          src="/images/chainge.png"
          alt="Chainge"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
  ];

  const handleLogoClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full py-0 md:py-0 dark:bg-[#171717]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
          {/* Plain h2 heading with text-black in light mode and white in dark mode */}
          <h2 className="text-3xl font-normal font-sans sm:text-4xl md:text-4xl lg:text-4xl text-black dark:text-white">
            Own a piece of the New Internet
          </h2>
        </div>
        <div className="flex w-full max-w-5xl justify-center">
          <LogoCarousel logos={logos} columnCount={3} />
        </div>
      </div>
    </div>
  );
}