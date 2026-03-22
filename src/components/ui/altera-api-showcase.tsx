"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Wrench, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlteraApiShowcaseProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const AlteraApiShowcase = ({
  className,
  circleText = "A",
  badgeTexts = {
    first: "VITRINE",
    second: "E-SHOP",
    third: "SEO",
    fourth: "MAINT.",
  },
  buttonTexts = {
    first: "Altéra",
    second: "v2026",
  },
  title = "Votre projet, de A à Z, en 14 jours.",
  lightColor = "#1DB954",
}: AlteraApiShowcaseProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-[250px] items-end justify-center",
        className
      )}
    >
      {/* SVG Paths */}
      <svg
        viewBox="0 0 200 130"
        fill="none"
        className="absolute top-0 w-[200px]"
      >
        <path
          d="M 100 64 v -29 q 0 -5 -5 -5 h -60 q -5 0 -5 -5 v -15"
          stroke="hsl(var(--border-green))"
          strokeWidth="0.6"
        />
        <path
          d="M 100 64 v -29 q 0 -5 -5 -5 h -14 q -5 0 -5 -5 v -15"
          stroke="hsl(var(--border-green))"
          strokeWidth="0.6"
        />
        <path
          d="M 100 64 v -29 q 0 -5 5 -5 h 14 q 5 0 5 -5 v -15"
          stroke="hsl(var(--border-green))"
          strokeWidth="0.6"
        />
        <path
          d="M 100 64 v -29 q 0 -5 5 -5 h 59 q 5 0 5 -5 v -15"
          stroke="hsl(var(--border-green))"
          strokeWidth="0.6"
        />
        {/* Animation For Path Starting */}
        <path
          d="M 100 64 v -4"
          stroke={lightColor}
          strokeWidth="0.6"
        />

        {/* Green Lights */}
        <circle
          r="3"
          fill={lightColor}
          className="database db-light-1"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle
          r="3"
          fill={lightColor}
          className="database db-light-2"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle
          r="3"
          fill={lightColor}
          className="database db-light-3"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle
          r="3"
          fill={lightColor}
          className="database db-light-4"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Badges */}
        <g>
          {/* First */}
          <g>
            <rect x="9" y="0" width="44" height="12" rx="2" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.5" />
            <circle cx="16" cy="6" r="2" fill={lightColor} opacity="0.6" />
            <text x="21" y="8" fill="white" fontSize="5" fontFamily="DM Sans, sans-serif" fontWeight="600">
              {badgeTexts.first}
            </text>
          </g>
          {/* Second */}
          <g>
            <rect x="56" y="0" width="44" height="12" rx="2" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.5" />
            <circle cx="63" cy="6" r="2" fill={lightColor} opacity="0.6" />
            <text x="68" y="8" fill="white" fontSize="5" fontFamily="DM Sans, sans-serif" fontWeight="600">
              {badgeTexts.second}
            </text>
          </g>
          {/* Third */}
          <g>
            <rect x="103" y="0" width="44" height="12" rx="2" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.5" />
            <circle cx="110" cy="6" r="2" fill={lightColor} opacity="0.6" />
            <text x="115" y="8" fill="white" fontSize="5" fontFamily="DM Sans, sans-serif" fontWeight="600">
              {badgeTexts.third}
            </text>
          </g>
          {/* Fourth */}
          <g>
            <rect x="150" y="0" width="44" height="12" rx="2" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.5" />
            <circle cx="157" cy="6" r="2" fill={lightColor} opacity="0.6" />
            <text x="162" y="8" fill="white" fontSize="5" fontFamily="DM Sans, sans-serif" fontWeight="600">
              {badgeTexts.fourth}
            </text>
          </g>
        </g>

        {/* Icons */}
        <g>
          <ServiceIcon x="22" y="14" />
          <ServiceIcon x="69" y="14" />
          <ServiceIcon x="116" y="14" />
          <ServiceIcon x="163" y="14" />
          {/* Green Gradient */}
          <defs>
            <linearGradient id="alteraGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={lightColor} stopOpacity="0.5" />
              <stop offset="1" stopColor={lightColor} stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* Main Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 flex h-[220px] w-full flex-col items-center justify-end rounded-xl border pb-4"
        style={{
          backgroundColor: "hsl(var(--card-dark))",
          borderColor: "hsl(var(--border-green))",
        }}
      >
        {/* Bottom shadow */}
        <div
          className="absolute -bottom-2 h-[60%] w-[90%] rounded-xl -z-10"
          style={{
            background: `linear-gradient(to bottom, transparent, ${lightColor}10)`,
            filter: "blur(20px)",
          }}
        />

        {/* Box title */}
        <div className="absolute top-4 flex items-center gap-1.5 px-3">
          <Sparkles className="text-primary" size={12} />
          <span className="font-dm text-[10px] text-muted-foreground leading-tight text-center">
            {title}
          </span>
        </div>

        {/* Circle */}
        <div
          className="absolute top-[52px] flex h-[52px] w-[52px] items-center justify-center rounded-full border"
          style={{
            borderColor: "hsl(var(--border-green))",
            background: `radial-gradient(circle, ${lightColor}15, transparent)`,
          }}
        >
          <span className="heading-display text-lg text-primary">{circleText}</span>
        </div>

        {/* Box content */}
        <div className="flex w-full flex-col items-center gap-3 px-4">
          {/* Badges */}
          <div
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5"
            style={{
              backgroundColor: `${lightColor}08`,
              borderColor: "hsl(var(--border-green))",
            }}
          >
            <Globe className="text-primary" size={10} />
            <span className="font-dm text-[11px] font-semibold text-white">
              {buttonTexts.first}
            </span>
          </div>

          <div
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5"
            style={{
              backgroundColor: `${lightColor}08`,
              borderColor: "hsl(var(--border-green))",
            }}
          >
            <Wrench className="text-primary" size={10} />
            <span className="font-dm text-[11px] font-semibold text-white">
              {buttonTexts.second}
            </span>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/25" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/15" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AlteraApiShowcase;

const ServiceIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width="10" height="7" rx="1" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.4" />
      <rect y="3" width="10" height="7" rx="1" fill="hsl(var(--card-dark))" stroke="hsl(var(--border-green))" strokeWidth="0.4" />
      <circle cx="3" cy="6" r="1" fill="#1DB954" opacity="0.5" />
    </g>
  );
};
