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
      url: "https://glidefinance.io/swap",
      img: () => (
        <img
          src="/images/glide.png"
          alt="Glide - Decentralized Exchange"
          loading="lazy"
          width="120"
          height="36"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Kucoin",
      id: 2,
      url: "https://www.kucoin.com/trade/ELA-USDT?rcode=e21sNJ",
      img: () => (
        <img
          src="/images/Kucoin.png"
          alt="Kucoin - Crypto Exchange"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Coinbase",
      id: 1,
      url: "https://www.coinbase.com/en-gb/advanced-trade/spot/ELA-USD",
      img: () => (
        <>
          {/* Light mode image */}
          <img
            src="/images/Coinbase.png"
            alt="Coinbase - Cryptocurrency Exchange"
            width="140"
            height="28"
            className="block dark:hidden h-7 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
          {/* Dark mode image */}
          <img
            src="/images/Coinbase-w.png"
            alt="Coinbase - Cryptocurrency Exchange"
            width="140"
            height="28"
            className="hidden dark:block h-7 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
          />
        </>
      ),
    },
    {
      name: "Gateio",
      id: 3,
      url: "https://www.gate.io/trade/ELA_USDT?ref=3018394",
      img: () => (
        <img
          src="/images/Gateio.png"
          alt="Gate.io - Cryptocurrency Trading Platform"
          className="h-9 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
        />
      ),
    },
    {
      name: "Huobi",
      id: 4,
      url: "https://www.huobi.com/en-us/trade/ELA_USDT",
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
      url: "https://www.bitget.com/spot/ELAUSDT/?channelCode=42xn&vipCode=sq59&languageType=0",
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
      url: "https://crypto.com/exchange/trade/ELA_USD",
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
      url: "https://app.uniswap.org/#/swap?outputCurrency=0xe6fd75ff38adca4b97fbcd938c86070c3dabd5b9",
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
      url: "https://dapp.chainge.finance/",
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
          <h2 className="text-3xl font-[200] font-sans sm:text-4xl md:text-4xl lg:text-4xl text-black dark:text-white">
            Own a piece of Elastos
          </h2>
        </div>
        <div className="flex w-full max-w-5xl justify-center">
          <LogoCarousel logos={logos} columnCount={3} onLogoClick={handleLogoClick} />
        </div>
      </div>
    </div>
  );
}