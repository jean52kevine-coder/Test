import { cn } from "@/lib/utils";

interface AlteraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { h: 32, textSize: "text-[18px]", tagSize: "text-[7px]", gap: "gap-1.5" },
  md: { h: 44, textSize: "text-[26px]", tagSize: "text-[8px]", gap: "gap-2" },
  lg: { h: 56, textSize: "text-[34px]", tagSize: "text-[9px]", gap: "gap-2.5" },
};

const AlteraLogo = ({ className = "", size = "md" }: AlteraLogoProps) => {
  const s = sizeMap[size];

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      {/* Icon mark */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${s.h * 0.85}px`, width: `${s.h * 0.85}px` }}
      >
        {/* Outer hexagon */}
        <path
          d="M20 2L36.66 11v18L20 38 3.34 29V11L20 2z"
          stroke="hsl(145, 63%, 42%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        {/* Inner hexagon */}
        <path
          d="M20 8L31.32 14.5v13L20 34 8.68 27.5v-13L20 8z"
          stroke="hsl(145, 63%, 42%)"
          strokeWidth="1.8"
          fill="hsl(145, 63%, 42%)"
          fillOpacity="0.08"
        />
        {/* A letterform */}
        <path
          d="M20 12L28 28H24.5L23 24.5H17L15.5 28H12L20 12Z"
          fill="hsl(145, 63%, 42%)"
        />
        <path
          d="M18 22h4l-2-5.5L18 22Z"
          fill="hsl(var(--background))"
        />
        {/* Accent dot */}
        <circle cx="20" cy="10" r="1.2" fill="hsl(145, 63%, 42%)" opacity="0.6" />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={cn("font-display font-black italic tracking-[0.08em]", s.textSize)}
          style={{ color: "hsl(var(--foreground))" }}
        >
          ALT
          <span style={{ color: "hsl(145, 63%, 42%)" }}>É</span>
          RA
        </span>
        <span
          className={cn("font-dm font-medium tracking-[0.25em] uppercase", s.tagSize)}
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Digital Studio
        </span>
      </div>
    </div>
  );
};

export default AlteraLogo;
