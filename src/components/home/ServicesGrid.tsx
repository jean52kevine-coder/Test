import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Shield, Check, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import PopularBadge from "@/components/PopularBadge";

const cards = [
  {
    icon: Globe, badge: "497€", title: "SITE VITRINE",
    desc: "Une présence professionnelle qui inspire confiance et génère des contacts qualifiés.",
    bullets: ["Design sur-mesure", "1 à 5 pages", "SEO optimisé", "Livraison 14j"],
    link: "/services/site-vitrine", popular: false,
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    icon: ShoppingCart, badge: "747€", title: "SITE E-COMMERCE",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    bullets: ["Catalogue illimité", "Paiement Stripe/PayPal", "Dashboard admin", "Support inclus"],
    link: "/services/site-ecommerce", popular: true,
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: Shield, badge: "dès 29€/mois", title: "MAINTENANCE & SEO",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    bullets: ["Mises à jour", "Sauvegardes auto", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance", popular: false,
    gradient: "from-cyan-500/10 to-transparent",
  },
];

const ServicesGrid = () => (
  <section
    className="py-[100px] relative"
    style={{
      background: "linear-gradient(180deg, #0a0f0a 0%, #0d1410 50%, #0a0f0a 100%)"
    }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.3), transparent)" }}
    />

    <div className="section-container">
      <BlurReveal className="text-center mb-14">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          CE QUE NOUS CRÉONS <span className="text-primary">POUR VOUS</span>
        </h2>
        <p className="font-dm text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Des solutions web complètes, adaptées à chaque budget.
        </p>
      </BlurReveal>

      <ScaleSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.18}>
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl transition-all duration-300 group card-shimmer"
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className={`relative z-10 rounded-2xl p-5 md:p-8 bg-linear-to-b ${c.gradient}`}
                style={{
                  backgroundColor: "rgba(17, 24, 17, 0.9)",
                  border: c.popular ? "1px solid rgba(29,185,84,0.4)" : "1px solid rgba(26,46,26,0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {c.title === "SITE VITRINE" && (
                  <div className="w-full h-36 rounded-xl overflow-hidden bg-[#0a0f0a] border border-[#1a2e1a] mb-6 relative flex items-center justify-center">
                    <svg viewBox="0 0 280 140" className="w-full h-full p-4">
                      <rect x="10" y="10" width="260" height="120" rx="8" fill="#111811" stroke="#1a2e1a" strokeWidth="1" />
                      <rect x="10" y="10" width="260" height="22" rx="8" fill="#0d130d" />
                      <rect x="10" y="24" width="260" height="8" fill="#0d130d" />
                      <circle cx="22" cy="21" r="3" fill="#ef4444" opacity="0.7" />
                      <circle cx="32" cy="21" r="3" fill="#f59e0b" opacity="0.7" />
                      <circle cx="42" cy="21" r="3" fill="#1DB954" opacity="0.7" />
                      <rect x="60" y="16" width="140" height="10" rx="5" fill="#1a2e1a" />
                      <text x="130" y="23" textAnchor="middle" fill="#1DB954" fontSize="6" opacity="0.8">votre-site.fr</text>
                      <rect x="20" y="42" width="100" height="8" rx="2" fill="#1DB954" opacity="0.9" />
                      <rect x="20" y="55" width="140" height="4" rx="2" fill="#ffffff" opacity="0.3" />
                      <rect x="20" y="63" width="120" height="4" rx="2" fill="#ffffff" opacity="0.2" />
                      <rect x="20" y="75" width="60" height="14" rx="4" fill="#1DB954" />
                      <rect x="170" y="42" width="85" height="70" rx="6" fill="#1a2e1a" />
                      <circle cx="212" cy="72" r="20" fill="#1DB954" opacity="0.1" />
                      <rect x="195" y="62" width="34" height="20" rx="2" fill="#1DB954" opacity="0.2" />
                      {[0, 1, 2, 3].map((n) => (
                        <rect key={n} x={90 + n * 30} y="18" width="20" height="5" rx="2" fill="#ffffff" opacity="0.15" />
                      ))}
                    </svg>
                  </div>
                )}

                {c.title === "SITE E-COMMERCE" && (
                  <div className="w-full h-36 rounded-xl overflow-hidden bg-[#0a0f0a] border border-[#1a2e1a] mb-6 relative">
                    <svg viewBox="0 0 280 140" className="w-full h-full p-4">
                      {[[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]].map(([col, row]) => (
                        <g key={`${col}-${row}`}>
                          <rect x={20 + col * 78} y={15 + row * 58} width="68" height="50" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="0.8" />
                          <rect x={20 + col * 78} y={15 + row * 58} width="68" height="30" rx="4" fill="#1a2e1a" />
                          <circle cx={54 + col * 78} cy={30 + row * 58} r="10" fill="#1DB954" opacity="0.15" />
                          <rect x={28 + col * 78} y={50 + row * 58} width="30" height="4" rx="2" fill="#ffffff" opacity="0.4" />
                          <rect x={28 + col * 78} y={57 + row * 58} width="20" height="4" rx="2" fill="#1DB954" opacity="0.8" />
                        </g>
                      ))}
                      <circle cx="258" cy="18" r="10" fill="#1DB954" />
                      <text x="258" y="22" textAnchor="middle" fill="black" fontSize="9" fontWeight="bold">3</text>
                    </svg>
                  </div>
                )}

                {c.title === "MAINTENANCE & SEO" && (
                  <div className="w-full h-36 rounded-xl overflow-hidden bg-[#0a0f0a] border border-[#1a2e1a] mb-6 relative">
                    <svg viewBox="0 0 280 140" className="w-full h-full p-4">
                      <rect x="10" y="10" width="260" height="120" rx="8" fill="#111811" stroke="#1a2e1a" strokeWidth="1" />
                      <rect x="10" y="10" width="260" height="22" rx="8" fill="#0d130d" />
                      <rect x="10" y="24" width="260" height="8" fill="#0d130d" />
                      <text x="30" y="24" fill="#1DB954" fontSize="8" fontWeight="bold">ALTÉRA Dashboard</text>
                      <rect x="20" y="40" width="80" height="6" rx="3" fill="#1a2e1a" />
                      <rect x="20" y="40" width="78" height="6" rx="3" fill="#1DB954" />
                      <text x="20" y="36" fill="#ffffff" fontSize="6" opacity="0.6">Uptime</text>
                      <text x="104" y="45" fill="#1DB954" fontSize="6">99.9%</text>
                      <polyline points="20,100 45,90 70,95 95,75 120,80 145,65 170,70 195,55" fill="none" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <polygon points="20,100 45,90 70,95 95,75 120,80 145,65 170,70 195,55 195,108 20,108" fill="#1DB954" opacity="0.08" />
                      {[{ x: 20, label: "Sécurité ✓" }, { x: 100, label: "Vitesse ✓" }, { x: 180, label: "Backup ✓" }].map((b) => (
                        <g key={b.label}>
                          <rect x={b.x} y="112" width="70" height="12" rx="4" fill="#1DB954" opacity="0.15" />
                          <text x={b.x + 35} y="121" textAnchor="middle" fill="#1DB954" fontSize="6.5">{b.label}</text>
                        </g>
                      ))}
                    </svg>
                  </div>
                )}

                {c.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"><PopularBadge /></div>
                )}

                <span className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4" style={{ background: "rgba(29,185,84,0.12)" }}>
                  {c.badge}
                </span>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={24} />
                </div>

                <h3 className="text-2xl font-black italic tracking-tight text-white group-hover:text-[#1DB954] transition-colors duration-300 mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {c.title}
                </h3>
                <p className="font-dm text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {c.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-primary shrink-0" size={14} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link to={c.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </ScaleSection>
    </div>
  </section>
);

export default ServicesGrid;
