import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const testimonials = [
{
  emoji: "🔧",
  text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois.",
  name: "Marc D.",
  role: "Plombier · Reims (51)",
  badge: "Site Vitrine"
},
{
  emoji: "🌸",
  text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne.",
  name: "Isabelle K.",
  role: "Fleuriste · Troyes (10)",
  badge: "Site Vitrine"
},
{
  emoji: "🛍️",
  text: "Je vends maintenant dans toute la France depuis mon atelier d'Épinal. Le site e-commerce a ouvert un marché que je n'imaginais pas possible.",
  name: "Laura M.",
  role: "Boutique · Épinal (88)",
  badge: "Site E-commerce"
}];

const TrustBanner = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a] via-[#0d130d]/70 to-[#0a0f0a]" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 20%, transparent 80%, hsl(var(--background)) 100%)" }} />
    </div>

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          ILS NOUS FONT <span className="text-primary">CONFIANCE</span>
        </h2>
      </BlurReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl"
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-2xl p-7 flex flex-col h-full"
              style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
            >
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="text-primary fill-primary" size={14} />
                ))}
              </div>
              <p className="font-dm text-[15px] text-white italic leading-relaxed mb-5 flex-1">"{t.text}"</p>
              <span
                className="inline-block self-start text-[12px] font-semibold px-3 py-1 rounded-full text-primary mb-4"
                style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.25)" }}
              >
                {t.badge}
              </span>
              <div>
                <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
                <p className="font-dm text-[13px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default TrustBanner;