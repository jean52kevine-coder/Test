import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Shield, Check, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { cn } from "@/lib/utils";

const plans = [
  {
    icon: Globe, title: "Site Vitrine", price: "497",
    features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Livraison 14 jours"],
    link: "/services/site-vitrine", best: false,
  },
  {
    icon: ShoppingCart, title: "Site E-commerce", price: "747",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "SEO avancé", "Support inclus"],
    link: "/services/site-ecommerce", best: true,
  },
  {
    icon: Shield, title: "Maintenance", price: "29", suffix: "/mois",
    features: ["Mises à jour", "Sauvegardes auto", "Support réactif", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance", best: false,
  },
];

const PricingCompact = () => (
  <section style={{ backgroundColor: "#0d130d" }} className="py-[100px]">
    <div className="section-container">
      <BlurReveal className="text-center mb-14">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          DES PRIX CLAIRS. <span className="text-primary">ZÉRO SURPRISE.</span>
        </h2>
        <p className="font-dm text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Tout est inclus. Pas de frais cachés. Vous savez exactement ce que vous payez.
        </p>
      </BlurReveal>

      <ScaleSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
          {plans.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn("relative rounded-2xl transition-all duration-300 card-shimmer", p.best && "animate-pulse-glow")}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className="relative z-10 rounded-2xl p-7 flex flex-col h-full overflow-hidden"
                style={{
                  backgroundColor: "#111811",
                  border: p.best ? "1px solid hsl(145, 63%, 42%)" : "1px solid #1a2e1a",
                }}
              >
                <BorderBeam
                  colorFrom="#1DB954"
                  colorTo="#06B6D4"
                  duration={p.best ? 4 : 6}
                  size={200}
                />
                {p.best && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-primary-foreground"
                    style={{ background: "hsl(145, 63%, 42%)" }}
                  >
                    BEST SELLER
                  </span>
                )}

                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="text-primary" size={20} />
                </div>

                <h3 className="font-display font-black text-lg text-white mb-2">{p.title}</h3>
                <div className="mb-5">
                  <span className="text-primary heading-display text-3xl">{p.price}€</span>
                  {p.suffix && <span className="text-muted-foreground text-sm">{p.suffix}</span>}
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-primary shrink-0" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to={p.link} className="btn-primary text-center text-sm">
                  En savoir plus <ArrowRight className="ml-2 inline" size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </ScaleSection>

      <BlurReveal className="text-center mt-10" delay={0.5}>
        <Link to="/tarifs" className="text-primary font-dm font-semibold text-sm hover:underline">
          Voir le détail complet des tarifs →
        </Link>
      </BlurReveal>
    </div>
  </section>
);

export default PricingCompact;
