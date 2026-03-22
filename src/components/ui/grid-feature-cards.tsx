import { cn } from "@/lib/utils";
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const p = genRandomPattern();

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
      <div className="relative z-10 rounded-lg border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-card-hover">
        <div className="absolute right-0 top-0 h-full w-3/4 opacity-[0.04]">
          <GridPattern
            width={40}
            height={40}
            x="50%"
            y="-12"
            squares={p}
          />
        </div>

        <div className="relative z-10">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <feature.icon className="h-5 w-5" />
          </div>
        </div>

        <h3 className="relative z-10 mb-2 font-display font-bold text-foreground text-lg">
          {feature.title}
        </h3>
        <p className="relative z-10 text-sm text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}
