import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const TextReveal = ({ children, className = "", delay = 0, as = "div" }: TextRevealProps) => {
  const Tag = motion[as] as any;

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
        clipPath: "inset(0 0 100% 0)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        clipPath: "inset(0 0 0% 0)",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </Tag>
  );
};

export default TextReveal;
