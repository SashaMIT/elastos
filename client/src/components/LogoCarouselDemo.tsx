
"use client";

import React, { useMemo } from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useTheme } from "@/hooks/useTheme";

export function LogoCarouselDemo() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Define logos array using useMemo to prevent recreation on each render
  // Using a more efficient approach to handle light/dark mode images
  const logos = useMemo(() => [
    {
      name: "Glide",
      id: "glide",
      url: "https://glidefinance.io/swap",
      img: () => (
        <picture>
          <img
            src="/images/glide.png"
            alt="Glide - Decentralized Exchange"
            loading="lazy"
            width="120"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Kucoin",
      id: "kucoin",
      url: "https://www.kucoin.com/trade/ELA-USDT?rcode=e21sNJ",
      img: () => (
        <picture>
          <img
            src="/images/Kucoin.png"
            alt="Kucoin - Crypto Exchange"
            loading="lazy"
            width="140" 
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Coinbase",
      id: "coinbase",
      url: "https://www.coinbase.com/en-gb/advanced-trade/spot/ELA-USD",
      img: () => (
        <>
          <picture>
            <source 
              media="(prefers-color-scheme: dark)" 
              srcSet="/images/Coinbase-w.png" 
            />
            <img
              src="/images/Coinbase.png"
              alt="Coinbase - Cryptocurrency Exchange"
              width="140"
              height="28"
              loading="lazy"
              className="h-7 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
              fetchpriority="high"
            />
          </picture>
        </>
      ),
    },
    {
      name: "Gateio",
      id: "gateio",
      url: "https://www.gate.io/trade/ELA_USDT?ref=3018394",
      img: () => (
        <picture>
          <img
            src="/images/Gateio.png"
            alt="Gate.io - Cryptocurrency Trading Platform"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Huobi",
      id: "huobi",
      url: "https://www.huobi.com/en-us/trade/ELA_USDT",
      img: () => (
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcSet="/images/Huobi-w.png" 
          />
          <img
            src="/images/Huobi.png"
            alt="Huobi - Cryptocurrency Exchange"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "BitGet",
      id: "bitget",
      url: "https://www.bitget.com/spot/ELAUSDT/?channelCode=42xn&vipCode=sq59&languageType=0",
      img: () => (
        <picture>
          <img
            src="/images/BitGet.png"
            alt="BitGet"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Crypto",
      id: "crypto",
      url: "https://crypto.com/exchange/trade/ELA_USD",
      img: () => (
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcSet="/images/Crypto-w.png" 
          />
          <img
            src="/images/Crypto.png"
            alt="Crypto.com Exchange"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Uniswap",
      id: "uniswap",
      url: "https://app.uniswap.org/#/swap?outputCurrency=0xe6fd75ff38adca4b97fbcd938c86070c3dabd5b9",
      img: () => (
        <picture>
          <img
            src="/images/Uniswap.png"
            alt="Uniswap"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
    {
      name: "Chainge",
      id: "chainge",
      url: "https://dapp.chainge.finance/",
      img: () => (
        <picture>
          <img
            src="/images/chainge.png"
            alt="Chainge"
            loading="lazy"
            width="140"
            height="36"
            className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            fetchpriority="low"
          />
        </picture>
      ),
    },
  ], []);  // Empty dependency array since these don't change

  return (
    <div className="w-full py-0 md:py-0 dark:bg-[#171717]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
          {/* Plain h2 heading with text-black in light mode and white in dark mode */}
          <h2 className="text-3xl font-[200] font-sans sm:text-4xl md:text-4xl lg:text-4xl text-black dark:text-white">
            Own a piece of Elastos
          </h2>
        </div>
        <div className="flex w-full max-w-5xl justify-center">
          <LogoCarousel logos={logos} columnCount={3} />
        </div>
      </div>
    </div>
  );
}
