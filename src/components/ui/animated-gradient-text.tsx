import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-[#1DB954] via-[#4ade80] to-[#1DB954] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text",
        className
      )}
    >
      {children}
    </span>
  );
}

export default AnimatedGradientText;
