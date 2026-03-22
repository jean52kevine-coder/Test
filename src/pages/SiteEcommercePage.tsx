import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ShoppingCart, Check, Package, CreditCard, BarChart3, Headset, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { FeaturesBento } from "@/components/ui/features-bento";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { EcommerceHeroIllustration } from "@/components/illustrations/SvgIllustrations";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import HeroBackground from "@/components/HeroBackground";

const inclus = [
  "Boutique en ligne complète", "Jusqu'à 50 produits", "Paiement sécurisé (CB, PayPal)", "Gestion des stocks intégrée",
  "Responsive mobile & tablette", "Optimisation SEO avancée", "Tableau de bord de gestion", "Livraison en 14 jours ouvrés",
];

const bentoItems = [
  { title: "Catalogue produits", description: "Gérez vos produits, variantes, photos et descriptions facilement depuis votre tableau de bord.", icon: <Package className="h-5 w-5" /> },
  { title: "Paiement sécurisé", description: "Acceptez CB, PayPal et autres moyens de paiement en toute sécurité pour vos clients.", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Analytics intégrés", description: "Suivez vos ventes, panier moyen et taux de conversion en temps réel.", icon: <BarChart3 className="h-5 w-5" /> },
  { title: "Support inclus", description: "On reste disponible pour répondre à vos questions et vous accompagner après la mise en ligne.", icon: <Headset className="h-5 w-5" /> },
];

const cibles = ["Boutiques et commerces de détail", "Artisans créateurs", "Producteurs locaux", "Marques indépendantes", "Associations vendant des produits"];

const profils = [
  { emoji: "🛍️", name: "Laura M. — Boutique, Épinal (88)", text: "Je vends maintenant dans toute la France depuis mon atelier d'Épinal. Le site e-commerce a ouvert un marché que je n'imaginais pas possible." },
  { emoji: "🍽️", name: "Karim B. — Restaurateur, Metz (57)", text: "Les gens cherchaient mon restaurant et ne me trouvaient pas. Depuis le site, je suis premier sur Google Maps dans mon quartier." },
  { emoji: "🪚", name: "Thomas R. — Menuisier, Charleville-Mézières (08)", text: "En 14 jours comme promis, mon site était en ligne. Mes prospects voient mes réalisations avant même de m'appeler." },
];

const comparisonRows = [
  { feature: "Présenter votre activité", vitrine: true, ecommerce: true },
  { feature: "Apparaître sur Google", vitrine: true, ecommerce: true },
  { feature: "Formulaire de contact", vitrine: true, ecommerce: true },
  { feature: "Responsive mobile", vitrine: true, ecommerce: true },
  { feature: "Vendre des produits en ligne", vitrine: false, ecommerce: true },
  { feature: "Panier & paiement sécurisé", vitrine: false, ecommerce: true },
  { feature: "Gestion des stocks", vitrine: false, ecommerce: true },
  { feature: "Dashboard commandes", vitrine: false, ecommerce: true },
  { feature: "Facturation automatique", vitrine: false, ecommerce: true },
  { feature: "Support post-livraison", vitrine: false, ecommerce: true },
];

const faqs = [
  { q: "Quels moyens de paiement sont acceptés ?", a: "Carte bancaire (Visa, Mastercard) et PayPal. D'autres options peuvent être ajoutées." },
  { q: "Puis-je gérer mes produits moi-même ?", a: "Oui, un tableau de bord simple vous permet d'ajouter, modifier et supprimer vos produits." },
  { q: "Y a-t-il des commissions sur les ventes ?", a: "Aucune commission de notre part. Seules les commissions du prestataire de paiement s'appliquent." },
  { q: "Le site est-il sécurisé ?", a: "Absolument. Certificat SSL, paiement sécurisé et conformité RGPD inclus." },
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

const SiteEcommercePage = () => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Création de Site E-commerce",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ALTÉRA Digital Studio"
    },
    "description": "Création de boutique en ligne à 747€. Paiement Stripe, gestion des stocks, responsive mobile, SEO e-commerce. Livraison en 14 jours.",
    "offers": {
      "@type": "Offer",
      "price": "747",
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
        title="Site E-commerce 747€ — Boutique en Ligne Clé en Main"
        description="Création de boutique en ligne à 747€. Paiement Stripe, gestion des stocks, responsive mobile, SEO e-commerce. Livraison en 14 jours pour commerces du Grand Est."
        keywords="création site e-commerce Grand Est, boutique en ligne artisan, site vente en ligne 747€, e-commerce Reims, e-commerce Metz, e-commerce Nancy"
        url="https://altera.fr/services/site-ecommerce"
      />
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
      {/* Hero */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="dataflow" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-[1]" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center lg:text-left flex-1">
          <BlurReveal>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6"><ShoppingCart className="text-primary" size={32} /></div>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              SITE{" "}
              <span className="text-gradient-green whitespace-nowrap">
                E-COMMERCE
              </span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.3}><p className="text-primary heading-display text-xl sm:text-2xl md:text-3xl mb-4">747 €</p></BlurReveal>
          <BlurReveal delay={0.4}>
            <p
              className="text-base sm:text-lg md:text-xl text-white/55 mt-6 max-w-xl leading-relaxed mx-auto lg:mx-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer.
            </p>
          </BlurReveal>
        </div>
        <BlurReveal delay={0.3} className="hidden md:block flex-1">
          <EcommerceHeroIllustration />
        </BlurReveal>
      </div>
    </section>

    {/* Ce qui est inclus */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">CE QUI EST </span><span className="text-[#1DB954] whitespace-nowrap inline">INCLUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="relative max-w-2xl mx-auto rounded-2xl">
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

    {/* Fonctionnalités */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">FONCTIONNALITÉS </span><span className="text-[#1DB954] whitespace-nowrap inline">CLÉS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <FeaturesBento items={bentoItems} className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-1 sm:grid-cols-2" />
        </ScaleSection>
      </div>
    </section>

    {/* À qui ça s'adresse */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">À QUI ÇA </span><span className="text-[#1DB954] whitespace-nowrap inline">S'ADRESSE</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.1}>
            {cibles.map((c, i) => (
              <motion.div key={i} className="relative rounded-xl" variants={itemVariants}>
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="relative z-10 block px-5 py-3 rounded-xl bg-card text-muted-foreground text-sm border border-border transition-all hover:border-primary/40">{c}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Profils types */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">FAITS POUR DES GENS </span><span className="text-[#1DB954] whitespace-nowrap inline">COMME VOUS</span></h2>
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

    {/* Tableau comparatif */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">VITRINE OU </span><span className="text-[#1DB954] whitespace-nowrap inline">E-COMMERCE ?</span></h2>
          <p className="font-dm text-muted-foreground mt-3">Choisissez selon votre besoin.</p>
        </BlurReveal>
        <ScaleSection>
          <div className="overflow-x-auto rounded-xl -mx-4 px-4 md:mx-0 md:px-0">
            <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden min-w-[600px]">
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="relative z-10" style={{ border: "1px solid #1a2e1a" }}>
                <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#0d130d" }}>
                    <th className="text-left p-4 font-dm font-semibold text-muted-foreground">Fonctionnalité</th>
                    <th className="text-center p-4 font-display font-bold text-white">Vitrine <span className="text-primary">497€</span></th>
                    <th className="text-center p-4 font-display font-bold text-white">E-commerce <span className="text-primary">747€</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                      <td className="p-4 font-dm text-muted-foreground">{row.feature}</td>
                      <td className="p-4 text-center">{row.vitrine ? <span style={{ color: "hsl(145, 63%, 42%)" }}>✅</span> : <span style={{ color: "rgba(239,68,68,0.8)" }}>❌</span>}</td>
                      <td className="p-4 text-center">{row.ecommerce ? <span style={{ color: "hsl(145, 63%, 42%)" }}>✅</span> : <span style={{ color: "rgba(239,68,68,0.8)" }}>❌</span>}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/services/site-vitrine" className="group inline-flex items-center justify-center gap-2.5 border border-white/15 hover:border-[#1DB954]/40 text-white/70 hover:text-white font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/[0.03] text-sm backdrop-blur-sm" style={{fontFamily:"'DM Sans', sans-serif"}}>
              <span>Choisir Vitrine</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 opacity-50 group-hover:opacity-100" />
            </Link>
            <Link to="/contact?service=ecommerce" className="group relative inline-flex items-center justify-center gap-2.5 bg-[#1DB954] hover:bg-[#17a349] text-black font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] active:scale-[0.98] overflow-hidden text-sm" style={{fontFamily:"'DM Sans', sans-serif"}}>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative">Choisir E-commerce</span>
              <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl mb-6"><span className="inline">POURQUOI </span><span className="text-[#1DB954] whitespace-nowrap inline">MAINTENANT</span><span className="inline"> ?</span></h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed">Le e-commerce en France croît de <span className="text-primary font-semibold">15% par an</span>. Vos clients achètent en ligne — soyez là où ils cherchent.</p>
        </BlurReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-xl sm:text-2xl md:text-3xl"><span className="inline">QUESTIONS </span><span className="text-[#1DB954] whitespace-nowrap inline">FRÉQUENTES</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>

      <CtaSection title="Lancez votre boutique en ligne" description="14 jours, 747€, tout inclus. Support compris." buttonText="Demander un devis gratuit" buttonUrl="/contact?service=ecommerce" />
    </Layout>
  );
};

export default SiteEcommercePage;
