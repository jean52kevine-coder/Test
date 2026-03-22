import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { VitrineMockup, EcommerceMockup, MaintenanceMockup, VitrineOfferStrip, EcommerceOfferStrip, MaintenanceOfferStrip } from "@/components/illustrations/SvgIllustrations";
import BlurReveal from "@/components/animations/BlurReveal";
import { motion } from "framer-motion";
import PopularBadge from "@/components/PopularBadge";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const cards = [
  {
    badge: "497€",
    title: "SITE VITRINE",
    desc: "Une présence pro qui inspire confiance.",
    bullets: ["Design sur-mesure", "1 à 5 pages", "SEO optimisé", "Livraison 14j"],
    link: "/services/site-vitrine",
    Mockup: VitrineMockup,
    OfferStrip: VitrineOfferStrip,
    popular: false,
  },
  {
    badge: "747€",
    title: "SITE E-COMMERCE",
    desc: "Vendez en ligne avec une boutique performante.",
    bullets: ["Catalogue illimité", "Paiement sécurisé", "Dashboard admin", "Support inclus"],
    link: "/services/site-ecommerce",
    Mockup: EcommerceMockup,
    OfferStrip: EcommerceOfferStrip,
    popular: true,
  },
  {
    badge: "dès 29€/mois",
    title: "MAINTENANCE",
    desc: "Gardez votre site rapide et sécurisé.",
    bullets: ["Mises à jour", "Sauvegardes auto", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
    Mockup: MaintenanceMockup,
    OfferStrip: MaintenanceOfferStrip,
    popular: false,
  },
];

const ServicesShowcase = () => (
  <section className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--section-alt-bg)) 50%, hsl(var(--background)) 100%)" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.25), transparent)" }} />

    <div className="section-container">
      <BlurReveal className="text-center mb-16">
        <h2 className="heading-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          NOS{" "}<span className="text-primary whitespace-nowrap">OFFRES</span>
        </h2>
        <p className="font-dm text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
          Des solutions web adaptées à chaque budget.
        </p>
      </BlurReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
        {cards.map((c, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "hsl(var(--card-dark))",
                border: c.popular ? "1px solid hsl(var(--primary) / 0.4)" : "1px solid hsl(var(--border-green))",
              }}
            >
              {c.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"><PopularBadge /></div>
              )}

              {/* Mockup illustration */}
              <div style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
                <c.Mockup />
              </div>
              <div className="border-t" style={{ borderColor: "hsl(var(--border-green))", backgroundColor: "hsl(var(--hero-bg))" }}>
                <c.OfferStrip />
              </div>

              <div className="p-7">
                <span
                  className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4"
                  style={{ background: "hsl(var(--primary) / 0.1)" }}
                >
                  {c.badge}
                </span>

                <h3 className="heading-display text-xl text-white mb-2">{c.title}</h3>
                <p className="font-dm text-sm mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>{c.desc}</p>

                <ul className="space-y-2 mb-6">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-primary flex-shrink-0" size={14} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link to={c.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ServicesShowcase;
