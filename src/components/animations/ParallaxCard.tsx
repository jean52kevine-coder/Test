import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  index?: number;
}

const ParallaxCard = ({ children, className = "", speed = 0.15, index = 0 }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30 + index * 15, -30 - index * 15]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [1 + index * 0.3, 0, -0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxCard;
