import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLElement, Props>(
  ({ children, className = "", delay = 0 }, ref) => (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
