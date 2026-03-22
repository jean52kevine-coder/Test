import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Globe, ShoppingCart, Wrench, Check, ArrowRight, Zap, Shield, Palette, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import HeroBackground from "@/components/HeroBackground";
import ShaderBackground from "@/components/ui/shader-background";

const services = [
  {
    id: 'vitrine',
    prix: '497€',
    prixLabel: 'paiement unique',
    icon: Globe,
    titre: 'Site Vitrine',
    description: 'Une présence professionnelle qui inspire confiance et convertit vos visiteurs en clients.',
    features: [
      'Design 100% sur-mesure',
      'Responsive mobile & tablette',
      'Référencement Google inclus',
      'Formulaire de contact',
      'Hébergement 1 an inclus',
      'Livraison en 14 jours',
    ],
    cta: 'Créer mon site vitrine',
    href: '/services/site-vitrine',
    badge: null as string | null,
    featured: false,
  },
  {
    id: 'ecommerce',
    prix: '747€',
    prixLabel: 'paiement unique',
    icon: ShoppingCart,
    titre: 'Site E-commerce',
    description: 'Vendez en ligne avec une boutique performante qui travaille pour vous 24h/24.',
    features: [
      'Boutique complète illimitée',
      'Paiement sécurisé Stripe',
      'Gestion des stocks intégrée',
      'Tableau de bord admin',
      'SEO e-commerce avancé',
      'Support inclus 3 mois',
    ],
    cta: 'Lancer ma boutique',
    href: '/services/site-ecommerce',
    badge: 'LE PLUS CHOISI',
    featured: true,
  },
  {
    id: 'maintenance',
    prix: '29€',
    prixLabel: '/mois · sans engagement',
    icon: Wrench,
    titre: 'Maintenance',
    description: 'On gère tout pendant que vous vous concentrez sur votre métier.',
    features: [
      'Mises à jour de sécurité',
      'Sauvegardes automatiques',
      'Monitoring 24/7',
      'Support réactif',
      'Rapport mensuel',
    ],
    cta: 'Voir les formules',
    href: '/services/maintenance',
    badge: null as string | null,
    featured: false,
  },
];

const whyFeatures = [
  { title: "Rapidité", icon: Zap, description: "Livraison en 14 jours chrono. Pendant que d'autres attendent 3 mois, vous êtes déjà en ligne." },
  { title: "Design unique", icon: Palette, description: "Aucun template. Chaque site est conçu sur-mesure pour refléter votre identité." },
  { title: "Sécurité", icon: Shield, description: "SSL, sauvegardes automatiques et monitoring 24/7 pour une tranquillité totale." },
  { title: "SEO optimisé", icon: TrendingUp, description: "Structuré pour Google dès le premier jour. Vos clients vous trouvent facilement." },
  { title: "Support humain", icon: HeadphonesIcon, description: "Un vrai interlocuteur, pas un chatbot. Réponse garantie dans la journée." },
  { title: "Délais respectés", icon: Clock, description: "On s'engage sur une date de livraison et on la tient. Toujours." },
];

const serviceCatalogData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Création de Site Vitrine",
        "description": "Une présence professionnelle qui inspire confiance et convertit vos visiteurs en clients.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "ALTÉRA"
        },
        "offers": {
          "@type": "Offer",
          "price": "497",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Création de Site E-commerce",
        "description": "Vendez en ligne avec une boutique performante qui travaille pour vous 24h/24.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "ALTÉRA"
        },
        "offers": {
          "@type": "Offer",
          "price": "747",
          "priceCurrency": "EUR"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Maintenance de Site Web",
        "description": "On gère tout pendant que vous vous concentrez sur votre métier.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "ALTÉRA"
        },
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceType": "https://schema.org/Monthly",
            "priceComponentType": "https://schema.org/SubscriptionPrice"
          }
        }
      }
    }
  ]
};

const ServicesPage = () => (
  <Layout>
    <SEO 
      title="Nos Services Web — Vitrine, E-commerce, Maintenance"
      description="Création de sites web sur-mesure pour artisans et PME du Grand Est. Site vitrine, boutique e-commerce ou maintenance : des solutions adaptées à votre activité."
      url="https://altera.fr/services"
    />
    <StructuredData data={serviceCatalogData} />

    {/* Hero */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="matrix" />
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <ShaderBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-[1]" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 text-center">
        <BlurReveal>
          <h1 className="heading-display text-3xl sm:text-4xl md:text-6xl mb-6">
            NOS <RotatingWords words={["SERVICES", "SOLUTIONS", "OFFRES", "FORMULES"]} />
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.</p>
        </BlurReveal>
      </div>
    </section>

    {/* Pricing cards — premium asymmetric layout */}
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <ShaderBackground />
      </div>
      <div className="relative z-10">
        {/* Titre */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 font-dm">
            NOS FORMULES
          </p>
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            <span className="inline">CHOISISSEZ VOTRE </span>
            <span className="text-primary whitespace-nowrap inline">FORMULE</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto font-dm">
            Des solutions adaptées à chaque étape de votre développement.
          </p>
        </div>

        {/* Cards grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch md:items-end">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-2xl transition-all duration-300 group
                    ${service.featured ? 'md:-translate-y-4 md:scale-[1.02] order-first md:order-2' : ''}
                    ${service.id === 'vitrine' ? 'md:order-1' : ''}
                    ${service.id === 'maintenance' ? 'md:order-3' : ''}
                  `}
                >
                  {/* Badge "Le plus choisi" */}
                  {service.badge && (
                    <div className="flex justify-center mb-0">
                      <div className="inline-flex items-center gap-2 bg-[#0d130d] border border-primary/50 rounded-t-xl px-5 py-2 shadow-[0_0_20px_rgba(29,185,84,0.2)]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap font-dm">
                          LE PLUS CHOISI
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card body */}
                  <div className={`relative flex flex-col flex-1 p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-300
                    ${service.badge ? 'rounded-tl-none' : ''}
                    ${service.featured
                      ? 'bg-[#0d1a0d] border-2 border-primary/40 shadow-[0_0_60px_rgba(29,185,84,0.12)] hover:shadow-[0_0_80px_rgba(29,185,84,0.2)] hover:border-primary/60'
                      : 'bg-card border border-[#1a2e1a] hover:border-primary/25 hover:shadow-[0_0_40px_rgba(29,185,84,0.06)]'
                    }`}
                  >
                    {/* Glow interne sur featured */}
                    {service.featured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-primary/[0.08] rounded-full blur-3xl pointer-events-none" />
                    )}

                    {/* Header */}
                    <div className="relative mb-6">
                      <div className="flex items-baseline gap-1.5 mb-4">
                        <span
                          className={`font-black leading-none text-foreground ${service.featured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}
                          style={{ fontFamily: "'Barlow', sans-serif" }}
                        >
                          {service.prix}
                        </span>
                        <span className="text-muted-foreground text-xs font-dm">
                          {service.prixLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                          ${service.featured
                            ? 'bg-primary/20 border border-primary/40'
                            : 'bg-primary/10 border border-primary/20'
                          }`}
                        >
                          <Icon size={18} className="text-primary" strokeWidth={2} />
                        </div>
                        <h3
                          className={`font-black italic leading-tight text-foreground ${service.featured ? 'text-2xl' : 'text-xl'}`}
                          style={{ fontFamily: "'Barlow', sans-serif" }}
                        >
                          {service.titre}
                        </h3>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed font-dm">
                        {service.description}
                      </p>
                    </div>

                    {/* Séparateur */}
                    <div className={`h-px mb-6
                      ${service.featured
                        ? 'bg-gradient-to-r from-transparent via-primary/30 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-white/[0.08] to-transparent'
                      }`}
                    />

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-sm font-dm">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0
                            ${service.featured ? 'bg-primary/20' : 'bg-primary/10'}`}
                          >
                            <Check size={10} className="text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={service.href}
                      className={`group/btn relative w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-center transition-all duration-200 overflow-hidden flex items-center justify-center gap-2 font-dm
                        ${service.featured
                          ? 'bg-primary hover:bg-[#17a349] text-black hover:shadow-[0_0_25px_rgba(29,185,84,0.4)]'
                          : 'bg-transparent border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50'
                        }`}
                    >
                      {service.featured && (
                        <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      )}
                      <span className="relative">{service.cta}</span>
                      <ArrowRight size={14} className="relative transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-muted-foreground/50 text-xs mt-8 font-dm">
            Tous nos prix sont TTC · Paiement en plusieurs fois disponible · Devis gratuit sous 24h
          </p>
        </div>
      </div>
    </section>

    {/* Pourquoi nous choisir */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            <span className="inline">POURQUOI NOUS </span>
            <span className="text-primary whitespace-nowrap inline">CHOISIR</span>
          </h2>
          <p className="font-dm text-base text-muted-foreground">Tout ce qu'il faut pour réussir en ligne, sans compromis.</p>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {whyFeatures.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}><FeatureCard feature={feature} /></motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <CtaSection
      title="Prêt à lancer votre projet ?"
      description="Échange découverte offert — par email ou par appel."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
      items={["Réponse sous 24h", "Sans engagement", "Devis personnalisé", "Prix fixe garanti", "Support inclus"]}
    />
  </Layout>
);

export default ServicesPage;
