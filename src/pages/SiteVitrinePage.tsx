import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Globe, Check, Users, Briefcase, Store, ChefHat, Dumbbell } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { VitrineHeroIllustration } from "@/components/illustrations/SvgIllustrations";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import HeroBackground from "@/components/HeroBackground";

const inclus = [
  "Design moderne et personnalisé", "Jusqu'à 5 pages", "Responsive mobile & tablette", "Optimisation SEO de base",
  "Formulaire de contact", "Hébergement première année inclus", "Certificat SSL (HTTPS)", "Livraison en 14 jours ouvrés",
];

const cibles = [
  { icon: Briefcase, label: "Artisans (plombiers, électriciens, menuisiers…)" },
  { icon: Store, label: "Commerçants de proximité" },
  { icon: Users, label: "Professions libérales" },
  { icon: ChefHat, label: "Restaurants et traiteurs" },
  { icon: Dumbbell, label: "Coachs et consultants" },
];

const profils = [
  { emoji: "🔧", name: "Marc D. — Plombier, Reims (51)", text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois." },
  { emoji: "🌸", name: "Isabelle K. — Fleuriste, Troyes (10)", text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne." },
  { emoji: "🧘", name: "Sophie L. — Ostéopathe, Nancy (54)", text: "J'ai arrêté de payer des plateformes de RDV hors de prix. Mon site gère tout ça maintenant. Rentabilisé en moins de 2 mois." },
];

const timelineSteps = [
  { day: "Jour 1", title: "Premier échange", text: "On apprend à vous connaître — par email ou par appel, comme vous préférez. On cerne votre activité, vos objectifs, votre cible. Aucun engagement." },
  { day: "Jour 2-3", title: "Maquette", text: "On crée une maquette sur-mesure. Vous la recevez, vous donnez vos retours, on ajuste. Rien n'est codé avant votre validation." },
  { day: "Jour 4-11", title: "Développement", text: "Votre site prend vie. Code propre, rapide, SEO optimisé. Vous suivez l'avancement." },
  { day: "Jour 12-13", title: "Révisions", text: "Vous testez sur tous vos appareils. On ajuste jusqu'à ce que tout soit parfait." },
  { day: "Jour 14", title: "Livraison", text: "Mise en ligne, tests finaux, remise des accès. Votre site est en ligne. On s'assure que tout fonctionne parfaitement avant de vous livrer les clés." },
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 14 jours ouvrés après validation du contenu." },
  { q: "Dois-je fournir le contenu ?", a: "Nous pouvons rédiger le contenu pour vous. Vous n'avez qu'à valider." },
  { q: "Que se passe-t-il après la livraison ?", a: "On vous remet tous les accès à votre site. Si vous souhaitez qu'on continue à le gérer pour vous — mises à jour, sécurité, modifications — nos formules de maintenance sont là pour ça. Sinon, votre site est à vous, clé en main." },
  { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. L'hébergement est inclus la première année." },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">COMMENT ÇA </span><span className="text-[#1DB954] whitespace-nowrap inline">SE PASSE ?</span></h2>
        </BlurReveal>
        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a2e1a] -translate-x-1/2" />
          <motion.div className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top" style={{ backgroundColor: "hsl(145, 63%, 42%)", scaleY, height: "100%" }} />
          <div className="space-y-12">
            {timelineSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-14 md:pl-0`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="relative rounded-xl">
                    <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                    <div className="relative z-10 rounded-xl p-5" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                      <span className="font-display font-black text-primary text-2xl">{step.day}</span>
                      <h3 className="font-display font-black text-white text-lg mt-1 mb-2">{step.title}</h3>
                      <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{step.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

const SiteVitrinePage = () => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Création de Site Vitrine",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ALTÉRA Digital Studio"
    },
    "description": "Création de site vitrine professionnel à 497€. Design 100% sur-mesure, responsive, SEO optimisé, livré en 14 jours.",
    "offers": {
      "@type": "Offer",
      "price": "497",
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
        title="Site Vitrine 497€ — Design Sur-Mesure en 14 jours"
        description="Création de site vitrine professionnel à 497€. Design 100% sur-mesure, responsive, SEO optimisé, livré en 14 jours. Pour artisans, commerçants et PME du Grand Est. Sans abonnement caché."
        keywords="site vitrine artisan, création site vitrine 497€, site web plombier, site web électricien, site web coiffeur, site web Grand Est"
        url="https://altera.fr/services/site-vitrine"
      />
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      {/* Hero */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="constellation" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-[1]" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center lg:text-left flex-1">
          <BlurReveal>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6"><Globe className="text-primary" size={32} /></div>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              SITE{" "}
              <span className="text-gradient-green whitespace-nowrap">
                VITRINE
              </span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.3}><p className="text-primary heading-display text-xl sm:text-2xl md:text-3xl mb-4">497 €</p></BlurReveal>
          <BlurReveal delay={0.4}>
            <p
              className="text-base sm:text-lg md:text-xl text-white/55 mt-6 max-w-xl leading-relaxed mx-auto lg:mx-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Présentez votre activité avec un site moderne qui inspire confiance et attire de nouveaux clients.
            </p>
          </BlurReveal>
        </div>
        <BlurReveal delay={0.3} className="hidden md:block flex-1">
          <VitrineHeroIllustration />
        </BlurReveal>
      </div>
    </section>

    {/* Ce qui est inclus */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">CE QUI EST </span><span className="text-[#1DB954] whitespace-nowrap inline">INCLUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden">
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div className="relative z-10 rounded-2xl p-5 md:p-8 md:p-10 overflow-hidden" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
              <BorderBeam size={300} duration={20} />
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                {inclus.map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3" variants={itemVariants}>
                    <Check className="text-primary flex-shrink-0" size={20} /><span className="text-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* À qui ça s'adresse */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">À QUI ÇA </span><span className="text-[#1DB954] whitespace-nowrap inline">S'ADRESSE</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto" staggerDelay={0.1}>
            {cibles.map((c, i) => (
              <motion.div key={i} className="relative rounded-xl" variants={itemVariants}>
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card transition-all hover:border-primary/40">
                  <c.icon className="text-primary flex-shrink-0" size={18} /><span className="text-sm text-muted-foreground">{c.label}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Profils types */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">FAITS POUR DES GENS </span><span className="text-[#1DB954] whitespace-nowrap inline">COMME VOUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {profils.map((p, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-4 md:p-6 h-full" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <span className="text-xl sm:text-2xl md:text-3xl block mb-4">{p.emoji}</span>
                  <h3 className="font-display font-black text-white mb-3">{p.name}</h3>
                  <p className="font-dm text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <TimelineSection />

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl mb-6"><span className="inline">POURQUOI </span><span className="text-[#1DB954] whitespace-nowrap inline">MAINTENANT</span><span className="inline"> ?</span></h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed mb-4">Chaque jour sans site web, <AnimatedGradientText className="heading-display text-base md:text-lg">C'EST DES CLIENTS PERDUS.</AnimatedGradientText></p>
          <p className="font-dm text-muted-foreground text-base leading-relaxed"><span className="text-primary font-semibold">80%</span> des consommateurs recherchent un professionnel en ligne avant de le contacter. Ne laissez plus cette opportunité à d'autres.</p>
        </BlurReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">QUESTIONS </span><span className="text-[#1DB954] whitespace-nowrap inline">FRÉQUENTES</span></h2>
        </BlurReveal>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>

      <CtaSection title="Lancez votre site vitrine" description="14 jours, 497€, tout inclus. On s'occupe de tout." buttonText="Demander un devis gratuit" buttonUrl="/contact?service=vitrine" />
    </Layout>
  );
};

export default SiteVitrinePage;
