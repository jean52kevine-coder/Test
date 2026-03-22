import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";

const FinalCTA = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative py-[120px] px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d1f13 0%, #0a0f0a 60%)",
        borderTop: "1px solid #1a2e1a",
      }}
    >
      {/* Parallax glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, hsl(145 63% 42% / 0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <h2
            className="heading-display mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            PRÊT À LANCER
            <br />
            <span className="text-[#1DB954] whitespace-nowrap inline">VOTRE PROJET ?</span>
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.15}>
          <p
            className="font-dm text-lg mb-10 mx-auto max-w-lg"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Échange découverte offert — par email ou par appel.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.3}>
          <Link
            to="/contact"
            className="btn-primary text-lg px-10 py-[18px] rounded-[10px] font-bold"
          >
            Démarrer mon projet <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </BlurReveal>

        <BlurReveal delay={0.45}>
          <div
            className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <span>✓ Réponse sous 24h</span>
            <span>✓ Sans engagement</span>
            <span>✓ Devis personnalisé</span>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
