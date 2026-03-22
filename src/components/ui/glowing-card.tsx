import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
  blur?: number;
  glow?: boolean;
  variant?: "default" | "white";
}

export function GlowingCard({
  children,
  className,
  disabled = false,
  spread = 40,
  proximity = 64,
  inactiveZone = 0.01,
  borderWidth = 2,
  blur = 0,
  glow = false,
  variant = "default",
}: GlowingCardProps) {
  return (
    <div className={cn("relative rounded-[inherit]", className)}>
      <GlowingEffect
        spread={spread}
        glow={glow}
        proximity={proximity}
        inactiveZone={inactiveZone}
        borderWidth={borderWidth}
        blur={blur}
        variant={variant}
        disabled={disabled}
      />
      {children}
    </div>
  );
}
