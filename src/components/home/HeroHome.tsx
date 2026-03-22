import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RotatingWords from "@/components/RotatingWords";
import BlurReveal from "@/components/animations/BlurReveal";
import heroVideo from "@/assets/videos/hero-promo.mp4";

const heroWords = ["PME LOCALES", "ARTISANS", "COMMERÇANTS", "INDÉPENDANTS"];

const HeroHome = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    {/* Background video */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay gradient for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(var(--hero-bg) / 0.7) 0%,
            hsl(var(--hero-bg) / 0.4) 40%,
            hsl(var(--hero-bg) / 0.6) 70%,
            hsl(var(--hero-bg) / 0.95) 100%
          )`,
        }}
      />

      {/* Green accent overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
        }}
      />
    </div>

    {/* Glow orbs */}
    <div
      className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
      style={{ background: "hsl(var(--primary) / 0.06)", filter: "blur(120px)" }}
    />
    <div
      className="absolute bottom-[-150px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
      style={{ background: "hsl(var(--primary) / 0.04)", filter: "blur(100px)" }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />

    <div className="section-container relative z-10 py-10 md:py-20 flex flex-col items-center text-center">
      <BlurReveal delay={0}>
        <span
          className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-6"
          style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.25)", backdropFilter: "blur(8px)" }}
        >
          ⚡ Livraison en 14 jours
        </span>
      </BlurReveal>

      <BlurReveal delay={0.1}>
        <h1 className="heading-display text-[2.6rem] sm:text-5xl md:text-7xl leading-[1.05] tracking-tight mb-4 text-center">
          LE SITE WEB<br />
          <span className="flex justify-center items-center w-full overflow-hidden">DES <span className="whitespace-nowrap"><RotatingWords words={heroWords} /></span></span>
        </h1>
      </BlurReveal>

      <BlurReveal delay={0.2}>
        <p className="font-dm text-sm sm:text-base md:text-xl text-white/65 text-center max-w-sm mx-auto px-4 mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
          Design sur-mesure, livré en 14 jours.<br className="hidden sm:block" />
          Artisans, commerçants, PME — on s'occupe de tout.
        </p>
      </BlurReveal>

      <BlurReveal delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none mx-auto justify-center mb-8">
          <Link to="/contact" className="btn-primary text-center w-full sm:w-auto min-h-11">
            Demander un devis <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg text-white hover:text-primary transition-colors w-full sm:w-auto min-h-11"
            style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--card) / 0.5)", backdropFilter: "blur(8px)" }}
          >
            Voir les tarifs
          </Link>
        </div>
      </BlurReveal>

      <BlurReveal delay={0.4}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/8 w-full max-w-sm sm:max-w-none mx-auto px-4 font-dm text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          <span><strong className="text-white">50+</strong> sites livrés</span>
          <span><strong className="text-white">14j</strong> délai moyen</span>
          <span><strong className="text-white">98%</strong> satisfaits</span>
        </div>
      </BlurReveal>

      {/* Floating badges */}
      <div className="hidden md:block absolute top-[62%] -translate-y-1/2 left-4 lg:left-[8%] z-20 space-y-4">
        {[
          { text: "✓ 14 jours", delay: "0s" },
          { text: "✓ 497€", delay: "1.5s" },
        ].map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
            className="animate-float font-dm text-xs font-semibold px-3 py-2 rounded-lg text-primary"
            style={{
              background: "hsl(var(--primary) / 0.12)",
              border: "1px solid hsl(var(--primary) / 0.25)",
              backdropFilter: "blur(8px)",
              animationDelay: badge.delay,
            }}
          >
            {badge.text}
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block absolute top-[62%] -translate-y-1/2 right-4 lg:right-[8%] z-20">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="animate-float font-dm text-xs font-semibold px-3 py-2 rounded-lg text-primary"
          style={{
            background: "hsl(var(--primary) / 0.12)",
            border: "1px solid hsl(var(--primary) / 0.25)",
            backdropFilter: "blur(8px)",
            animationDelay: "3s",
          }}
        >
          ✓ SEO
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroHome;
