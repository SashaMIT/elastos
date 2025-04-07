import React, { useState, useEffect } from 'react';
import { Server, Shield, Coins, Zap, Globe, Lock, GitMerge, MessageCircle } from 'lucide-react';
import MiningAnimation from './MiningAnimation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Particle {
  id: number;
  progress: number;
}

const MergeMiningAnimation = () => {
  const [step, setStep] = useState(0); // Tracks the active tab
  const [securityParticles, setSecurityParticles] = useState<Particle[]>([]);
  const [rewardParticles, setRewardParticles] = useState<Particle[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Auto-advance tabs (step state)
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 4000); // 4-second interval
    return () => clearInterval(timer);
  }, []);

  // Generate particles for security flow
  useEffect(() => {
    const timer = setInterval(() => {
      setSecurityParticles((prev) => [
        ...prev.filter((p) => p.progress < 100),
        { id: Date.now(), progress: 0 },
      ]);
    }, 400); // Generate every 400ms
    return () => clearInterval(timer);
  }, []);

  // Generate particles for rewards flow
  useEffect(() => {
    const timer = setInterval(() => {
      setRewardParticles((prev) => [
        ...prev.filter((p) => p.progress < 100),
        { id: Date.now(), progress: 0 },
      ]);
    }, 400); // Generate every 400ms
    return () => clearInterval(timer);
  }, []);

  // Animate particles for both flows
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setSecurityParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            progress: p.progress + 0.1,
          }))
          .filter((p) => p.progress < 100)
      );

      setRewardParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            progress: p.progress + 0.1,
          }))
          .filter((p) => p.progress < 100)
      );
    });
    return () => cancelAnimationFrame(animationFrame);
  });

  const Benefits = () => {
    const benefits = [
      {
        icon: <Shield className="w-5 h-5" />,
        text: "Bitcoin-Level Security",
        activeColor: "bg-orange-100",
        textColor: "text-orange-600",
        iconColor: "text-orange-500",
        darkActiveColor: "dark:bg-orange-900/30",
        darkTextColor: "dark:text-orange-400",
      },
      {
        icon: <Coins className="w-5 h-5" />,
        text: "Double Mining Rewards",
        activeColor: "bg-blue-100",
        textColor: "text-blue-600",
        iconColor: "text-blue-500",
        darkActiveColor: "dark:bg-blue-900/30",
        darkTextColor: "dark:text-blue-400",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        text: "Same Energy Usage",
        activeColor: "bg-green-100",
        textColor: "text-green-600",
        iconColor: "text-green-500",
        darkActiveColor: "dark:bg-green-900/30",
        darkTextColor: "dark:text-green-400",
      },
    ];

    return (
      <div
        className={`absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 
                    bg-white/90 dark:bg-[#1a1a1a] p-2 sm:p-4 rounded-xl shadow-lg w-[90%] sm:w-3/4
                    flex flex-col sm:flex-row justify-around gap-1 sm:gap-4 z-1 font-[200]`}
      >
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-1 mb-1 sm:mb-0 rounded-lg transition-all duration-500
                        ${
                          step === i
                            ? `${benefit.activeColor} scale-110 ${benefit.darkActiveColor}` 
                            : "scale-100 dark:bg-[#252525]"
                        }`}
          >
            <div
              className={`${step === i ? benefit.iconColor : "text-gray-400"} ${step === i ? benefit.darkTextColor : "dark:text-gray-400"}`}
            >
              {benefit.icon}
            </div>
            <span
              className={`text-xs sm:text-sm ${
                step === i ? benefit.textColor : "text-gray-500"
              } ${step === i ? benefit.darkTextColor : "dark:text-gray-400"}`}
            >
              {benefit.text}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl p-0 sm:p-1 md:p-0 bg-white dark:bg-[#171717] relative z-0">
      {/* Heading */}
      <h1 className="text-center text-base sm:text-lg md:text-2xl font-[200] font-sans mt-4 mb-2 flex items-center justify-center gap-1 sm:gap-2 px-2 leading-snug text-black dark:text-white">
        <img src="/images/Elastos New Logo_Kit-03.png" alt="ELA Logo" className="h-5 sm:h-6 md:h-7 w-auto object-contain shrink-0" />
        ELA: The Bitcoin-Secured BTCFi Asset
      </h1>

      {/* Descriptive Text */}
      <p className="text-center text-[10px] sm:text-base mt-[10px] mb-0 relative z-50 font-[200]">
        By leveraging Bitcoin's unmatched hash rate, Elastos' ELA fulfills{' '}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <span 
              role="button"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium relative z-50 cursor-pointer"
            >
              Satoshi Nakamoto's vision
            </span>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] sm:max-w-md md:max-w-lg p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[90vh] backdrop-blur-sm bg-background border-none shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Satoshi Nakamoto's Vision of Merged Mining</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-muted-foreground">
                In his 2010 Bitcoin forum posts, Satoshi Nakamoto envisioned merged mining to enable networks like BitDNS to share Bitcoin's hash rate. This approach strengthened smaller networks, avoided computational fragmentation, and rewarded miners for securing multiple chains simultaneously, advancing innovation while maintaining decentralization. Bitcoin, as a secure backbone, becomes a foundation for a unified and efficient blockchain ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a href="http://bitcointalk.org/index.php?topic=1790.msg28696#msg28696" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm px-3 py-2 bg-orange-50 hover:bg-orange-100 dark:bg-[#252525] dark:hover:bg-[#2a2a2a] text-orange-600 rounded-lg transition-colors w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  BitcoinForum Post 1 →
                </a>
                <a href="http://bitcointalk.org/index.php?topic=1790.msg28715#msg28715" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm px-3 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-[#252525] dark:hover:bg-[#2a2a2a] text-blue-600 rounded-lg transition-colors w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Bitcoin Forum Post 2 →
                </a>
              </div>
              <div className="mt-6 border-t pt-6">

                <MiningAnimation />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {' '}of advancing decentralized innovation on the most secure foundation ever created. BTC King. ELA Queen.
      </p>

      {/* Animation Container */}
      <div className="relative h-[400px] sm:h-[400px] mt-[-90px] z-0">
        {/* Animated Particles and Labels Container */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {/* Flow Labels */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 
                      font-bold text-[10px] sm:text-xs md:text-[15px] text-orange-600/90 dark:text-orange-400 px-2 sm:px-4
                      bg-white/80 dark:bg-[#1a1a1a] rounded py-0.5 sm:py-1"
            style={{ top: "42%" }}
          >
            SECURITY
          </div>

          <div
            className="absolute left-1/2 transform -translate-x-1/2 
                      font-bold text-[10px] sm:text-xs md:text-[15px] text-blue-600/90 dark:text-blue-400 px-2 sm:px-4
                      bg-white/80 dark:bg-[#1a1a1a] rounded py-0.5 sm:py-1"
            style={{ top: "62%" }}
          >
            REWARDS
          </div>

          <svg className="absolute inset-0 w-full h-full">
            {/* Security Flow */}
            {securityParticles.map((particle) => {
              const x = 25 + particle.progress * 0.5;
              return (
                <g key={`security-${particle.id}`} className="opacity-80">
                  <circle
                    cx={`${x}%`}
                    cy="40%"
                    r="3"
                    className="fill-orange-400"
                  >
                    <animate
                      attributeName="r"
                      values="3;4;3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* Rewards Flow */}
            {rewardParticles.map((particle) => {
              const x = 75 - particle.progress * 0.5;
              return (
                <g key={`reward-${particle.id}`} className="opacity-80">
                  <circle
                    cx={`${x}%`}
                    cy="60%"
                    r="3"
                    className="fill-blue-400"
                  >
                    <animate
                      attributeName="r"
                      values="3;4;3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bitcoin Mining Side */}
        <div className="absolute left-1 sm:left-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="p-2 sm:p-6 bg-[#2f241a] rounded-xl border border-[#F6921A] text-[#F6921A] shadow-lg transition-all duration-300 dark:shadow-[0_0_15px_rgba(246,146,26,0.2)] dark:hover:shadow-[0_0_25px_rgba(246,146,26,0.3)]">
            <div className="flex items-center gap-1 sm:gap-3 mb-1 sm:mb-4">
              <Server className="text-[#F6921A] w-4 h-4 sm:w-8 sm:h-8" />
              <div>
                <span className="font-[200] text-sm sm:text-xl block text-[#F6921A]">
                  Bitcoin
                </span>
                <span className="text-xs sm:text-sm text-[#F6921A] font-[200]">
                  Miners
                </span>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <div className="flex items-center gap-2 text-sm font-[200]">
                <Coins className="w-5 h-5 text-[#F6921A]" />
                <span className="text-[#F6921A]">BTC Rewards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elastos Side */}
        <div className="absolute right-1 sm:right-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="p-2 sm:p-6 bg-[#1f232f] rounded-xl border border-[#5C8EFF] text-[#5C8EFF] shadow-lg transition-all duration-300 dark:shadow-[0_0_15px_rgba(92,142,255,0.2)] dark:hover:shadow-[0_0_25px_rgba(92,142,255,0.3)]">
            <div className="flex items-center gap-1 sm:gap-3 mb-1 sm:mb-4">
              <Shield className="text-[#5C8EFF] w-4 h-4 sm:w-8 sm:h-8" />
              <div>
                <span className="font-[200] text-sm sm:text-xl block text-[#5C8EFF]">
                  Elastos
                </span>
                <span className="text-xs sm:text-sm text-[#5C8EFF] font-[200]">
                  Merge Mining
                </span>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <div className="flex items-center gap-2 text-sm font-[200]">
                <Coins className="w-5 h-5 text-[#5C8EFF]" />
                <span className="text-[#5C8EFF]">ELA Rewards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <Benefits />
      </div>
    </div>
  );
};

export default MergeMiningAnimation;