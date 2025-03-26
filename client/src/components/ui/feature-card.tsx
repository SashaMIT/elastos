import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export function FeatureCard({ title, description, className, ...props }: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden bg-zinc-900 p-6 hover:bg-zinc-800/50 transition-colors dark:bg-[#171717]",
        className
      )} 
      {...props}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <ArrowRight className="absolute bottom-6 right-6 h-6 w-6 text-zinc-400 transition-transform group-hover:translate-x-1" />
    </Card>
  );
}