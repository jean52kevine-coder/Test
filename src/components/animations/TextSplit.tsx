import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextSplitProps {
  children: string;
  className?: string;
  delay?: number;
  /** Duration per character */
  charDuration?: number;
  /** Stagger delay between characters */
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Render function for highlighted words — wrap in <span className="text-primary"> */
  highlight?: (word: string, index: number) => ReactNode;
}

const charVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    rotateX: 0,
  },
};

const TextSplit = ({
  children,
  className = "",
  delay = 0,
  charDuration = 0.28,
  staggerDelay = 0.018,
  as: Tag = "h2",
}: TextSplitProps) => {
  const words = children.split(" ");

  return (
    <Tag className={className} style={{ perspective: "1000px" }}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                className="inline-block"
                variants={charVariants}
                transition={{
                  duration: charDuration,
                  ease: [0.25, 0.4, 0.25, 1] as const,
                }}
                style={{ transformOrigin: "bottom" }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default TextSplit;
