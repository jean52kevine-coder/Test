import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";

const steps = [
  { num: "01", Icon: MessageSquare, title: "Premier échange", desc: "On apprend à vous connaître — par email ou par appel, comme vous préférez. On cerne votre activité, vos objectifs, votre cible. Aucun engagement." },
  { num: "02", Icon: Palette, title: "Maquette validée", desc: "On crée une maquette sur-mesure en 48h. Vous validez le design avant qu'on code une seule ligne. Retouches illimitées." },
  { num: "03", Icon: Code2, title: "Développement", desc: "Code propre, rapide, SEO-ready. Vous suivez l'avancement en temps réel sur un lien de prévisualisation dédié." },
  { num: "04", Icon: Rocket, title: "Livraison", desc: "Mise en ligne, tests finaux, remise de tous les accès. Votre site est opérationnel en 14 jours." },
];

const ProcessSteps = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-16">
          <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            VOTRE SITE EN{" "}<span className="text-primary whitespace-nowrap">4 ÉTAPES</span>
          </h2>
        </BlurReveal>

        <ScaleSection>
          {/* Desktop horizontal stepper */}
          <BlurReveal className="hidden md:flex items-start justify-between relative mb-10" delay={0.2}>
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[2px]" style={{ backgroundColor: "hsl(var(--border-green))" }} />
            <motion.div
              className="absolute top-8 left-[12.5%] h-[2px]"
              style={{ backgroundColor: "hsl(var(--primary))", transformOrigin: "left" }}
              animate={{ width: `${(active / 3) * 75}%` }}
              transition={{ duration: 0.4 }}
            />
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative z-10 flex flex-col items-center w-1/4 cursor-pointer group"
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-3 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: i === active ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary) / 0.05)",
                    border: i === active ? "1px solid hsl(var(--primary) / 0.4)" : "1px solid hsl(var(--primary) / 0.1)",
                  }}
                >
                  <s.Icon className="text-primary" size={26} style={{ opacity: i === active ? 1 : 0.4 }} />
                </div>
                <motion.span
                  className="heading-display mb-1"
                  animate={{ color: i === active ? "hsl(145, 63%, 42%)" : "rgba(255,255,255,0.2)", scale: i === active ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                >
                  {s.num}
                </motion.span>
                <span className="text-sm font-dm text-center font-medium" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}>
                  {s.title}
                </span>
              </button>
            ))}
          </BlurReveal>

          {/* Mobile vertical stepper */}
          <div className="md:hidden space-y-4 mb-8">
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} className="flex items-center gap-4 w-full text-left">
                <span className="heading-display text-2xl shrink-0 transition-colors" style={{ color: i === active ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)" }}>
                  {s.num}
                </span>
                <span className="font-dm text-sm" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Detail panel with GlowingEffect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.97 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)", scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative rounded-xl"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className="relative z-10 rounded-xl p-6 font-dm"
                style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))", borderLeftWidth: "3px", borderLeftColor: "hsl(var(--primary))" }}
              >
                <h3 className="heading-display text-lg text-white mb-2">{steps[active].title}</h3>
                <p style={{ color: "hsl(var(--muted-foreground))" }}>{steps[active].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScaleSection>
      </div>
    </section>
  );
};

export default ProcessSteps;
