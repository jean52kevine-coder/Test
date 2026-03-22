import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroLaptopIllustration } from "@/components/illustrations/SvgIllustrations";
import BlurReveal from "@/components/animations/BlurReveal";

const WORDS = ["commercial", "vendeur", "atout", "levier", "avantage"];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const longestWord = WORDS.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className="inline-flex justify-center relative overflow-hidden" style={{ height: "1.15em" }}>
      <span className="invisible whitespace-nowrap">{longestWord}.</span>
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-0 flex items-center justify-center text-primary whitespace-nowrap"
          initial={false}
          animate={{
            y: i === index ? "0%" : i > index || (index === WORDS.length - 1 && i === 0) ? "110%" : "-110%",
            opacity: i === index ? 1 : 0,
            filter: i === index ? "blur(0px)" : "blur(6px)",
          }}
          transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {word}.
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [0, -60]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.18, 0.18, 0.3]);
  const orb1Scale = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [1, 1.4, 1.0, 0.3]);
  const orb1Opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [0.06, 0.12, 0.06, 0]);
  const orb2Scale = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [1, 1.4, 1.0, 0.3]);
  const orb2Opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [0.04, 0.1, 0.04, 0]);
  const orb3Scale = useTransform(scrollYProgress, [0.35, 0.65, 0.85, 1.0], [0, 1, 0.8, 0]);
  const orb3Opacity = useTransform(scrollYProgress, [0.35, 0.65, 0.85, 1.0], [0, 0.08, 0.04, 0]);
  const lineScaleX = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const bgColor = useTransform(scrollYProgress, [0.7, 1.0], ["#0a0f0a", "#0d130d"]);
  const revealOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.65, 0.85], [40, 0]);

  const stats = useMemo(() => [
    { value: "50+", label: "Sites livrés" },
    { value: "14j", label: "Délai moyen" },
    { value: "90%", label: "Clients satisfaits" },
    { value: "497€", label: "À partir de" },
  ], []);

  const scrollHeight = isMobile ? "200vh" : "300vh";

  return (
    <div ref={containerRef} style={{ height: scrollHeight, position: "relative" }}>
      <motion.div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Dot grid */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            opacity: dotOpacity,
            backgroundImage: `radial-gradient(circle, #1DB954 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Orb 1 */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{ width: 600, height: 600, background: "rgba(29,185,84,1)", filter: "blur(120px)", top: -100, left: -100, scale: orb1Scale, opacity: orb1Opacity }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />

        {/* Orb 2 */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{ width: 500, height: 500, background: "rgba(29,185,84,1)", filter: "blur(100px)", bottom: -100, right: -50, scale: orb2Scale, opacity: orb2Opacity }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />

        {/* Orb 3 */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{ width: 800, height: 800, background: "rgba(29,185,84,1)", filter: "blur(150px)", top: "50%", left: "50%", x: "-50%", y: "-50%", scale: orb3Scale, opacity: orb3Opacity }}
        />

        {/* Spotlight */}
        <Spotlight fill="rgba(29,185,84,0.08)" fillSecondary="rgba(29,185,84,0.04)" />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none z-1" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />

        {/* Hero content */}
        <motion.div className="relative z-2 section-container py-20 flex flex-col lg:flex-row items-center gap-10" style={{ opacity: textOpacity, y: textY }}>
          {/* Left: text content */}
          <div className="text-center lg:text-left flex-1">
          {/* Badge */}
          <BlurReveal className="flex justify-center mb-8" delay={0}>
            <span
              className="hero-badge font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary"
              style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)", backdropFilter: "blur(8px)" }}
            >
              ⚡ Livraison en 14 jours
            </span>
          </BlurReveal>

          {/* Headline */}
          <BlurReveal delay={0.1}>
            <h1 className="heading-display text-[2.4rem] leading-[1.05] text-center lg:text-left mb-2 md:leading-tight" style={{ letterSpacing: "0.02em" }}>
              LE SITE WEB DES<br /><span className="text-primary">PME LOCALES</span>
            </h1>
          </BlurReveal>

          {/* Energy line */}
          <motion.div
            className="mx-auto mb-4"
            style={{ height: 2, maxWidth: 280, background: "linear-gradient(90deg, transparent, #1DB954, transparent)", scaleX: lineScaleX, transformOrigin: "left" }}
          />

          {/* Rotating word */}
          <BlurReveal delay={0.2}>
            <p className="heading-display mb-6 flex items-center justify-center gap-[0.3em] flex-wrap" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              <span>Votre meilleur</span>
              <RotatingWord />
            </p>
          </BlurReveal>

          {/* Subtitle */}
          <BlurReveal delay={0.3}>
            <p className="font-dm text-[18px] mx-auto mb-10 max-w-[560px]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Design sur-mesure, livraison en 14 jours, résultats concrets.
              Artisans, commerçants, PME — on s'occupe de tout.
            </p>
          </BlurReveal>

          {/* CTAs */}
          <BlurReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact" className="btn-primary text-center">Demander un devis →</Link>
              <Link to="/tarifs" className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-white hover:text-primary backdrop-blur-xs" style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)" }}>
                Voir les tarifs
              </Link>
            </div>
          </BlurReveal>

          {/* Stats bar */}
          <BlurReveal delay={0.5}>
            <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-row flex-wrap justify-center items-center md:gap-16 py-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center min-w-[120px]">
                  <span className="text-[#1DB954] font-black text-3xl md:text-4xl" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    {s.value}
                  </span>
                  <span className="text-white/50 text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </BlurReveal>
          </div>

          {/* Right: laptop illustration (hidden on small mobile) */}
          <BlurReveal delay={0.5} className="hidden md:block flex-1 max-w-[480px]">
            <HeroLaptopIllustration />
          </BlurReveal>
        </motion.div>

        {/* Phase 3 reveal text */}
        <motion.div className="absolute z-3 text-center section-container" style={{ opacity: revealOpacity, y: revealY }}>
          <h2 className="heading-display text-primary" style={{ fontSize: "clamp(24px, 4vw, 44px)" }}>
            Ce que nous créons pour vous
          </h2>
          <p className="font-dm text-[16px] mt-3 max-w-[480px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Des sites qui convertissent, pensés pour votre métier.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
