"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
  fillSecondary?: string;
}

export function Spotlight({
  className,
  fill = "rgba(29,185,84,0.08)",
  fillSecondary = "rgba(29,185,84,0.04)",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const spotlightBg1 = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${fill}, transparent 70%)`;
  const spotlightBg2 = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${fillSecondary}, transparent 60%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("absolute inset-0 z-[1] pointer-events-auto", className)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBg1 }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBg2 }}
      />
    </div>
  );
}

export default Spotlight;
