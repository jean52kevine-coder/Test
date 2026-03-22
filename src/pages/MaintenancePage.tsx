import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Wrench, Check, AlertTriangle, Shield, RefreshCw, HeadphonesIcon, Gift, ArrowRight } from "lucide-react";
import { MaintenanceHeroIllustration } from "@/components/illustrations/SvgIllustrations";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import HeroBackground from "@/components/HeroBackground";

const dangers = [
  { title: "Failles de sécurité", desc: "Un plugin non mis à jour, c'est une porte ouverte pour les hackers. Vos données et celles de vos clients sont en danger." },
  { title: "Perte de référencement", desc: "Google pénalise les sites lents et obsolètes. Sans optimisation continue, vous perdez vos positions." },
  { title: "Pannes non détectées", desc: "Votre site peut tomber à 3h du matin. Sans monitoring, vous l'apprenez quand un client se plaint." },
  { title: "Perte de données", desc: "Sans sauvegarde régulière, une erreur suffit à tout effacer. Définitivement." },
];

const formules = [
  { name: "Essentielle", price: "29", features: ["Mises à jour de sécurité", "Sauvegarde hebdomadaire", "Support par email", "Monitoring de base", "Rapport trimestriel"], highlighted: false, cta: "/contact?service=maintenance-essentielle" },
  { name: "Professionnelle", price: "39", features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone", "Monitoring avancé", "Rapport mensuel", "Modifications mineures illimitées"], highlighted: true, cta: "/contact?service=maintenance-professionnelle" },
  { name: "Premium", price: "49", features: ["Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7", "Monitoring 24/7", "Rapport mensuel détaillé", "Toutes modifications incluses", "Optimisation SEO mensuelle"], highlighted: false, cta: "/contact?service=maintenance-premium" },
];

const faqs = [
  { q: "Puis-je résilier à tout moment ?", a: "Oui, sans engagement ni frais. Préavis de 30 jours." },
  { q: "Mon site n'est pas fait par ALTÉRA, puis-je souscrire ?", a: "Oui. On effectue d'abord un audit gratuit de votre site, puis on prend en charge la maintenance." },
  { q: "Que sont exactement les 'modifications' incluses ?", a: "Changements de textes, d'images, ajout d'une section, mise à jour de prix ou d'horaires." },
  { q: "Que se passe-t-il si mon site tombe ?", a: "Selon votre formule, on intervient sous 4h à 48h. Vous êtes alerté immédiatement par email." },
  { q: "Puis-je changer de formule en cours de route ?", a: "Oui, à tout moment. Upgrade ou downgrade effectif le mois suivant, sans frais." },
];

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
      <div className="relative rounded-xl">
        <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
        <button onClick={() => setOpen(!open)} className="relative z-10 w-full text-left rounded-xl p-5 flex items-center justify-between" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
          <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-primary flex-shrink-0">▼</motion.span>
        </button>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-muted-foreground text-sm px-5 pt-3 pb-1">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

const MaintenancePage = () => {
  const navigate = useNavigate();

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Maintenance de Site Web",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ALTÉRA Digital Studio"
    },
    "description": "Maintenance de site web à partir de 29€/mois. Mises à jour, sauvegardes, monitoring 24/7, support réactif. Sans engagement.",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
  <Layout>
    <SEO 
      title="Maintenance Site Web dès 29€/mois — Sans Engagement"
      description="Maintenance de site web à partir de 29€/mois. Mises à jour, sauvegardes, monitoring 24/7, support réactif. Sans engagement. Pour sites artisans et PME Grand Est."
      keywords="maintenance site web Grand Est, mise à jour site web, sécurité site web, monitoring site web, maintenance pas cher"
      url="https://altera.fr/services/maintenance"
    />
    <StructuredData data={serviceData} />
    <StructuredData data={faqData} />
    {/* Hero */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="circuit" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-[1]" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center lg:text-left flex-1">
          <BlurReveal>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6"><Wrench className="text-primary" size={32} /></div>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              MAINTENANCE{" "}
              <span className="text-gradient-green whitespace-nowrap">
                WEB
              </span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <p
              className="text-base sm:text-lg md:text-xl text-white/55 mt-6 max-w-xl leading-relaxed mx-auto lg:mx-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Gardez votre site à jour, sécurisé et performant. On s'en occupe pour vous.
            </p>
          </BlurReveal>
        </div>
        <BlurReveal delay={0.3} className="hidden md:block flex-1">
          <MaintenanceHeroIllustration />
        </BlurReveal>
      </div>
    </section>

    {/* Dangers */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">
            UN SITE SANS MAINTENANCE,{" "}
            <span style={{ color: "rgba(239,68,68,0.9)" }}>C'EST UN RISQUE PERMANENT</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {dangers.map((d, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} variant="white" disabled={false} />
                <div className="relative z-10 rounded-xl p-4 md:p-6 h-full" style={{ backgroundColor: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}>
                  <AlertTriangle className="mb-3" size={24} style={{ color: "rgba(239,68,68,0.8)" }} />
                  <h3 className="font-display font-black text-white mb-2">{d.title}</h3>
                  <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>



    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">Vous ne gérez plus rien</h2>
          <p className="font-dm text-muted-foreground mt-3">On s'occupe de tout pendant que vous vous concentrez sur votre métier.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[
            { icon: Shield, title: "Sécurité gérée", text: "Mises à jour, pare-feu, surveillance. Votre site est protégé en permanence." },
            { icon: RefreshCw, title: "Zéro intervention", text: "Aucune manipulation technique de votre côté. On intervient avant que vous ne voyez le moindre problème." },
            { icon: HeadphonesIcon, title: "On est là", text: "Une question ? Un changement ? Un email suffit. Réponse sous 24h, en français, par une vraie personne." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(29,185,84,0.12)" }}>
                <item.icon className="text-[#1DB954]" size={20} />
              </div>
              <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="font-dm text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Formules */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">NOS </span><span className="text-[#1DB954] whitespace-nowrap inline">FORMULES</span></h2>
        </BlurReveal>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 bg-[#111811] border border-[#1a2e1a] rounded-xl p-6 max-w-2xl mx-auto mb-12"
        >
          <div className="text-[#1DB954] mt-1">
            <Gift size={28} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Nom de domaine offert la 1ère année</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Pour tout abonnement maintenance souscrit en même temps que votre site, on inclut votre nom de domaine
              (altera.fr, .com, .fr) offert la première année. Une valeur de 15€ à 20€ sans effort de votre côté.
            </p>
          </div>
        </motion.div>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
            {formules.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                {f.highlighted ? (
                  <div className="relative flex flex-col">
                    <div className="flex justify-center mb-[-1px]">
                      <div className="inline-flex items-center gap-2 bg-[#0a0f0a] border border-[#1DB954]/60 rounded-t-xl px-5 py-2 shadow-[0_0_20px_rgba(29,185,84,0.25)]">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-70" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
                        </span>
                        <span className="text-[#1DB954] text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          LE PLUS CHOISI
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-[#1DB954]/50 rounded-2xl rounded-tl-none bg-[#0d1a0d] p-5 md:p-8 flex flex-col gap-6 shadow-[0_0_60px_rgba(29,185,84,0.12)] hover:shadow-[0_0_80px_rgba(29,185,84,0.18)] transition-shadow duration-300 group">
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1DB954]/4 via-transparent to-transparent pointer-events-none" />
                      <div className="relative">
                        <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {f.name}
                        </p>
                        <div className="flex items-end gap-1">
                          <span className="text-white text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>{f.price}€</span>
                          <span className="text-white/40 text-base mb-2">/mois</span>
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent" />
                      <ul className="flex flex-col gap-3 flex-1">
                        {f.features.map((feat, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}><Check size={14} className="text-[#1DB954] mt-0.5 shrink-0" strokeWidth={2.5} />{feat}</li>
                        ))}
                      </ul>
                      <button onClick={() => navigate(f.cta)} className="group relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] overflow-hidden bg-[#1DB954] text-black border border-[#1DB954] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="relative">Choisir cette formule</span>
                        <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                ) : (
                <div className="relative w-full rounded-2xl p-5 md:p-8 flex flex-col gap-6 transition-all duration-300 group bg-[#0d130d] border border-[#1a2e1a] hover:border-[#1DB954]/30 hover:shadow-[0_0_40px_rgba(29,185,84,0.08)]">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1DB954]/4 via-transparent to-transparent pointer-events-none" />
                  <div className="relative">
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {f.name}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-white text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>{f.price}€</span>
                      <span className="text-white/40 text-base mb-2">/mois</span>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent" />
                  <ul className="flex flex-col gap-3 flex-1">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}><Check size={14} className="text-[#1DB954] mt-0.5 shrink-0" strokeWidth={2.5} />{feat}</li>
                    ))}
                  </ul>
                  <button onClick={() => navigate(f.cta)} className={`group relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] overflow-hidden ${f.highlighted ? "bg-[#1DB954] text-black border border-[#1DB954] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)]" : "border border-[#1DB954]/40 text-[#1DB954] hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="relative">Choisir cette formule</span>
                    <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                  </button>
                </div>
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">VOS QUESTIONS </span><span className="text-[#1DB954] whitespace-nowrap inline">NOS RÉPONSES</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>

    <CtaSection
      title="Une question sur nos formules ?"
      description="On vous aide à choisir la formule adaptée à vos besoins."
      buttonText="Nous contacter"
      buttonUrl="/contact"
      items={["Sans engagement", "Résiliation à tout moment", "Support réactif", "Rapport de suivi"]}
    />
  </Layout>
  );
};

export default MaintenancePage;
