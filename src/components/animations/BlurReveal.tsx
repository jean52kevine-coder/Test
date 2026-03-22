import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: number;
}

const directionMap = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 36 },
  right: { x: -36 },
};

const BlurReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  blur = 8,
}: BlurRevealProps) => (
  <motion.div
    className={className}
    initial={{
      opacity: 0,
      filter: `blur(${blur}px)`,
      ...directionMap[direction],
    }}
    whileInView={{
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
    }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {children}
  </motion.div>
);

export default BlurReveal;
