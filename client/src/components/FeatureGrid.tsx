
import { Bitcoin, Shield, Code2, Timer, Building2, UserSquare2 } from "lucide-react";
import { useHashrateData } from "@/hooks/useHashrateData";
import { useElaSupply } from "@/hooks/useElaSupply";

export function FeatureGrid() {
  const { data: hashrateData } = useHashrateData();
  const { data: currentSupply } = useElaSupply();

  const formatHashrate = (hashrate?: number) => {
    return hashrate ? `${hashrate.toFixed(2)} EH/s` : 'Loading...';
  };

  return (
    <div className="flex gap-10 pt-12 flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-6 sm:gap-10 px-4">
        <div className="flex flex-row gap-4 sm:gap-6 w-full items-start">
          <Bitcoin className="w-5 sm:w-6 h-5 sm:h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p className="text-sm sm:text-base md:text-lg">ELA: The BTC-Reserve Asset</p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              The BTC-Reserve Asset for digital economies and smart contracts
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 w-full items-start">
          <Shield className="w-6 h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p>Bitcoin Security</p>
            <p className="text-muted-foreground text-sm">
              Secured by Bitcoin's hashpower through merged mining, maximizing security while minimizing costs
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 w-full items-start">
          <Timer className="w-6 h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p>4 Year Halvings</p>
            <p className="text-muted-foreground text-sm">
              Currently <a href="https://api.elastos.io/widgets?q=apy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">3.29% APY</a> and supply halvings every 4 years until 2105. Next halving is <a href="https://api.elastos.io/widgets?q=halving" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">December 1, 2025</a>.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start">
          <Code2 className="w-6 h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p>Smart Contracts</p>
            <p className="text-muted-foreground text-sm">
              Non-custodial BTC-backed finance supported by <a href="https://arb.elastos.io/stats" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">Bitcoin Elastos Layer 2</a> across EVM networks
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start">
          <Building2 className="w-6 h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p>Business Toolsets</p>
            <p className="text-muted-foreground text-sm">
              <a href="https://ela.city" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                Toolsets for business models to trade digital assets in global markets
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start">
          <UserSquare2 className="w-6 h-6 mt-2 text-black" />
          <div className="flex flex-col gap-1">
            <p>Decentralized Identity</p>
            <p className="text-muted-foreground text-sm">
              Surrounding compliance and trusted economy framework
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
