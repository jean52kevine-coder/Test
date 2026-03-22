import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-6 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Marquee;
