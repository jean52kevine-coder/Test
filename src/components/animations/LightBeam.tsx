import { motion } from "framer-motion";

interface LightBeamProps {
  className?: string;
}

const LightBeam = ({ className = "" }: LightBeamProps) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Central vertical beam */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-0"
      style={{
        width: 2,
        height: "60%",
        background: "linear-gradient(180deg, hsl(145 63% 42% / 0.8), hsl(145 63% 42% / 0.1), transparent)",
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
    />
    {/* Glow around beam */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-0"
      style={{
        width: 120,
        height: "50%",
        background: "linear-gradient(180deg, hsl(145 63% 42% / 0.15), hsl(145 63% 42% / 0.03), transparent)",
        filter: "blur(40px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
    />
    {/* Flare at top */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 -top-10"
      style={{
        width: 300,
        height: 200,
        background: "radial-gradient(ellipse, hsl(145 63% 42% / 0.25), transparent 70%)",
        filter: "blur(30px)",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, delay: 0.5 }}
    />
  </div>
);

export default LightBeam;
