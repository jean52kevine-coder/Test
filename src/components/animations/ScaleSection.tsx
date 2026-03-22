import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleSectionProps {
  children: ReactNode;
  className?: string;
}

const ScaleSection = ({ children, className = "" }: ScaleSectionProps) => {
  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleSection;
