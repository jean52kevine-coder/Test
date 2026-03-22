import { motion } from "framer-motion";
import { Palette, Clock, HeadphonesIcon, Ban, Sparkles, Shield, BadgeEuro, AlertTriangle, FileWarning, RefreshCw, BookOpen, BadgeCheck } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const others = [
  { icon: Ban, label: "Templates génériques", sub: "Le même site que tout le monde." },
  { icon: Clock, label: "Délais de 2-3 mois", sub: "Et souvent repoussés." },
  { icon: HeadphonesIcon, label: "Chatbot impersonnel", sub: "Impossible de parler à quelqu'un." },
  { icon: AlertTriangle, label: "Devis à 2000-5000€", sub: "Tarifs opaques et surprises à la facture." },
  { icon: FileWarning, label: "Aucune garantie", sub: "Pas de suivi après livraison." },
  { icon: RefreshCw, label: "Modifications payantes", sub: "Chaque retouche est facturée en plus." },
];

const altera = [
  { icon: Palette, label: "Design 100% sur-mesure", sub: "Aucun template. Unique pour vous." },
  { icon: Sparkles, label: "Livré en 14 jours", sub: "En ligne pendant que d'autres attendent." },
  { icon: Shield, label: "Un humain dédié", sub: "Réponse dans la journée, toujours." },
  { icon: BadgeEuro, label: "Prix fixe dès 497€", sub: "Zéro surprise, tout est inclus dans le tarif." },
  { icon: BadgeCheck, label: "Satisfaction garantie", sub: "Révisions illimitées jusqu'à validation." },
  { icon: BookOpen, label: "Accès complets remis", sub: "Votre site est à vous, clé en main." },
];

const DistinguishSection = () => (
  <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)" }} />

    <div className="section-container">
      <BlurReveal className="text-center mb-16">
        <h2 className="heading-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          LES AUTRES VS{" "}<span className="text-primary whitespace-nowrap">ALTÉRA</span>
        </h2>
        <p className="font-dm text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
          Ce qui nous distingue de 99% des agences web.
        </p>
      </BlurReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Others column */}
        <BlurReveal delay={0.1}>
          <div className="rounded-2xl p-6 md:p-8 h-full" style={{ backgroundColor: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.12)" }}>
            <h3 className="heading-display text-lg mb-6" style={{ color: "rgba(239,68,68,0.8)" }}>
              🚫 Les autres agences
            </h3>
            <div className="space-y-5">
              {others.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.15, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(239,68,68,0.08)" }}>
                    <item.icon size={18} style={{ color: "rgba(239,68,68,0.7)" }} />
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-sm text-white/80">{item.label}</p>
                    <p className="font-dm text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurReveal>

        {/* ALTÉRA column */}
        <BlurReveal delay={0.2}>
          <div className="relative rounded-2xl h-full">
            <GlowingEffect spread={50} glow proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div className="relative z-10 rounded-2xl p-6 md:p-8 h-full" style={{ backgroundColor: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
              <h3 className="heading-display text-lg text-primary mb-6">
                ✅ Avec ALTÉRA
              </h3>
              <div className="space-y-5">
                {altera.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.15, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}>
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-dm font-semibold text-sm text-white">{item.label}</p>
                      <p className="font-dm text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </div>
  </section>
);

export default DistinguishSection;
