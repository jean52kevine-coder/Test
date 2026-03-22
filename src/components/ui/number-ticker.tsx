import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberTickerProps {
  value: number;
  className?: string;
  duration?: number;
}

export function NumberTicker({ value, className = "", duration = 1500 }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * ease));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}

export default NumberTicker;
