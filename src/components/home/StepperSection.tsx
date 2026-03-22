import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StepChatIcon, StepDesignIcon, StepCodeIcon, StepRocketIcon } from "@/components/illustrations/SvgIllustrations";

const stepIcons = [StepChatIcon, StepDesignIcon, StepCodeIcon, StepRocketIcon];

const steps = [
  { num: "01", title: "Premier échange", detail: "On apprend à vous connaître — par email ou par appel, comme vous préférez. On cerne votre activité, vos objectifs, votre cible. Aucun engagement." },
  { num: "02", title: "Maquette validée", detail: "Une maquette sur-mesure créée en 48h. Vous validez avant qu'on code une seule ligne." },
  { num: "03", title: "Développement", detail: "Code propre, rapide, SEO-ready. Vous suivez l'avancement en temps réel." },
  { num: "04", title: "Livraison", detail: "Mise en ligne, tests finaux, remise des accès. Votre site est en ligne en 14 jours." },
];

const StepperSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ backgroundColor: "#0d130d" }} className="py-[100px]">
      <div className="section-container">
        <BlurReveal className="text-center mb-16">
          <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            VOTRE SITE EN <span className="text-primary">4 ÉTAPES</span>
          </h2>
        </BlurReveal>

        <ScaleSection>
          {/* Desktop horizontal stepper */}
          <BlurReveal className="hidden md:flex items-start justify-between relative mb-10" delay={0.2}>
            {/* Background line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[2px]" style={{ backgroundColor: "#1a2e1a" }} />
            {/* Active line */}
            <motion.div
              className="absolute top-8 left-[12.5%] h-[2px]"
              style={{ backgroundColor: "hsl(145, 63%, 42%)", transformOrigin: "left" }}
              animate={{ width: `${(active / 3) * 75}%` }}
              transition={{ duration: 0.4 }}
            />

            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex flex-col items-center w-1/4 cursor-pointer group"
                >
                  <div className="mb-2">
                    <Icon />
                  </div>
                  <motion.div
                    className="font-display font-black mb-1"
                    animate={{
                      color: i === active ? "hsl(145, 63%, 42%)" : "rgba(255,255,255,0.2)",
                      scale: i === active ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                  >
                    {s.num}
                  </motion.div>
                  <span
                    className="text-sm font-dm text-center font-medium"
                    style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </BlurReveal>

          {/* Mobile vertical stepper */}
          <div className="md:hidden space-y-4 mb-8">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 w-full text-left"
              >
                <span
                  className="font-display font-black text-2xl shrink-0 transition-colors"
                  style={{ color: i === active ? "hsl(145, 63%, 42%)" : "rgba(255,255,255,0.2)" }}
                >
                  {s.num}
                </span>
                <span className="font-dm text-sm" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.97 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)", scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div
                className="relative z-10 rounded-xl p-6 font-dm"
                style={{
                  backgroundColor: "#111811",
                  border: "1px solid #1a2e1a",
                  borderLeftWidth: "3px",
                  borderLeftColor: "hsl(145, 63%, 42%)",
                }}
              >
                <h3 className="font-display font-black text-lg text-white mb-2">{steps[active].title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>{steps[active].detail}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScaleSection>
      </div>
    </section>
  );
};

export default StepperSection;
