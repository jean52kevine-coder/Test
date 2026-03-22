import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "hsl(145, 63%, 42%)",
  colorTo = "hsl(145, 63%, 30%)",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={{
        ["--size" as string]: `${size}px`,
        ["--duration" as string]: `${duration}s`,
        ["--anchor" as string]: `${anchor}%`,
        ["--border-width" as string]: `${borderWidth}px`,
        ["--color-from" as string]: colorFrom,
        ["--color-to" as string]: colorTo,
        ["--delay" as string]: `-${delay}s`,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width))*1_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size))] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor))_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]",
        className,
      )}
    />
  );
};
