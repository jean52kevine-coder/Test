import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const staggerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: { staggerChildren: staggerDelay },
  }),
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const StaggerContainer = ({ children, className = "", staggerDelay = 0.15 }: StaggerContainerProps) => (
  <motion.div
    className={className}
    variants={staggerVariants}
    custom={staggerDelay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export { StaggerContainer, itemVariants };
