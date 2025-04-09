import { StarBorder } from "@/components/ui/star-border";
import { useHashrateData } from "@/hooks/useHashrateData";
import { useElaSupply } from "@/hooks/useElaSupply";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowRight } from "@/components/ui/arrow-right"; // Assuming this component exists

function Feature() {
  const { data: hashrateData } = useHashrateData();
  const { data: currentSupply } = useElaSupply();
  const maxSupply = 28199999;

  return (
    <div className="w-full py-0 lg:py-0 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex gap-4 py-0 lg:py-0 flex-col items-center">
          <div className="flex gap-2 flex-col">
            <div className="flex justify-center w-full py-2">
              <div className="rounded-full border border-[#F6921A]/50 bg-[#1A1A1A] px-4 py-1.5 flex items-center gap-1 w-fit">
                <span className="text-white text-sm font-normal">Digital Freedom Realized</span>
                <div className="rounded-full border border-[#F6921A]/50 flex items-center justify-center" style={{ width: '28px', height: '28px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F6921A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2">
              <h2
                className="font-sans text-[36px] sm:text-[50px] leading-[42px] sm:leading-[55px] font-normal text-black dark:text-[rgb(225,231,239)] text-center"
                style={{
                  fontFamily: 'PP Telegraf Ultralight, system-ui, sans-serif',
                }}
              >
                The SmartWeb System
              </h2>
              <div className="hidden sm:flex items-center gap-2 text-lg md:text-2xl whitespace-nowrap">

              </div>
            </div>
            <div className="text-center" id="text-effect-trigger">
              <TextGenerateEffect
                words="Your Gateway to the Decentralized Internet for Autonomy and Freedom."
                duration={2}
                filter={false}
                className="mb-16 text-xs sm:text-base md:text-lg lg:text-xl font-normal"
                startOnIntersect={true}
              />
              <div className="flex justify-center mb-8 mt-12">
                <img 
                  src="/images/Elastos Vision World Computer.png" 
                  alt="Elastos Vision World Computer" 
                  className="w-[100%] sm:w-[80%] md:w-[65%] lg:w-[70%] rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

function BuildSection() {
  return (
    <div>
      <h3 className="font-medium text-xl mb-2">Build</h3>
      <a
        href="https://elastos.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        Start building on Bitcoin-secured infrastructure
        <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export { BuildSection };