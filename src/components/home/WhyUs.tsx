import { Zap, BadgeEuro, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "@/components/animations/BlurReveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const items = [
  { Icon: Zap, title: "14 jours", desc: "Votre site est en ligne pendant que d'autres attendent encore leur devis." },
  { Icon: BadgeEuro, title: "Prix fixe", desc: "497€ vitrine, 747€ e-commerce. Aucun supplément caché." },
  { Icon: TrendingUp, title: "ROI concret", desc: "Conçu pour convertir les visiteurs en clients, pas juste pour faire joli." },
  { Icon: MessageCircle, title: "Support humain", desc: "Un vrai interlocuteur. Réponse dans la journée." },
];

const WhyUs = () => (
  <section className="py-24" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
    <div className="section-container">
      <BlurReveal className="text-center mb-16">
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          POURQUOI{" "}<span className="text-primary whitespace-nowrap">ALTÉRA</span>
        </h2>
      </BlurReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-xl"
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-xl p-6 text-center"
              style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
            >
              <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <item.Icon className="text-primary" size={26} />
              </div>
              <h3 className="heading-display text-lg text-white mb-2">{item.title}</h3>
              <p className="font-dm text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default WhyUs;
