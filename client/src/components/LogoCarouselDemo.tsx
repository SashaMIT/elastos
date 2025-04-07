"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useTheme } from "@/hooks/useTheme";

export function LogoCarouselDemo() {
  const handleLogoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const exchangeLogos = [
    {
      id: 1,
      name: "Coinbase",
      url: "https://www.coinbase.com/price/elastos",
      img: () => (
        <img 
          src="/images/Coinbase.png" 
          alt="Coinbase" 
          className="h-8 object-contain dark:hidden" 
        />
      )
    },
    {
      id: 2,
      name: "Kucoin",
      url: "https://www.kucoin.com/trade/ELA-USDT",
      img: () => (
        <img 
          src="/images/Kucoin.png" 
          alt="Kucoin" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 3,
      name: "Gate.io",
      url: "https://www.gate.io/trade/ELA_USDT",
      img: () => (
        <img 
          src="/images/Gateio.png" 
          alt="Gate.io" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 4,
      name: "Huobi/HTX",
      url: "https://www.htx.com/en-us/trade/ela_usdt",
      img: () => (
        <img 
          src="/images/HTX.png" 
          alt="HTX" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 5,
      name: "BitGet",
      url: "https://www.bitget.com/spot/ELAUSDT",
      img: () => (
        <img 
          src="/images/BitGet.png" 
          alt="BitGet" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 6,
      name: "Uniswap",
      url: "https://app.uniswap.org/tokens/ethereum/0xe6fd75ff38adca4b97FBCD938c86b98772431867",
      img: () => (
        <img 
          src="/images/Uniswap.png" 
          alt="Uniswap" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 7,
      name: "Chainge Finance",
      url: "https://app.chainge.finance/",
      img: () => (
        <img 
          src="/images/chainge.png" 
          alt="Chainge Finance" 
          className="h-8 object-contain" 
        />
      )
    },
    {
      id: 8,
      name: "Crypto.com",
      url: "https://crypto.com/price/elastos",
      img: () => (
        <img 
          src="/images/Crypto.png" 
          alt="Crypto.com" 
          className="h-8 object-contain dark:hidden" 
        />
      )
    },
    {
      id: 9,
      name: "Glide Finance",
      url: "https://glidefinance.io/",
      img: () => (
        <img 
          src="/images/glide.png" 
          alt="Glide Finance" 
          className="h-8 object-contain" 
        />
      )
    }
  ];

  return (
    <div className="py-12 relative overflow-hidden bg-black/20 dark:bg-white/5 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
            Available on Top Exchanges
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trade ELA on leading cryptocurrency exchanges
          </p>
        </div>
        <LogoCarousel 
          logos={exchangeLogos} 
          columnCount={6} 
          onLogoClick={handleLogoClick}
        />
      </div>
    </div>
  );
}