import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import {
  XCircle,
  CheckCircle,
  TrendingUp,
  Users,
  Search,
  Clock,
  Globe,
  Award,
  UtensilsCrossed,
  Wrench,
  Stethoscope,
  Briefcase,
  ShoppingBag,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { NumberTicker } from "@/components/ui/number-ticker";
import { StatMobileSearch, StatScreenBrowse, StatBarsGrowing, StatClock } from "@/components/illustrations/SvgIllustrations";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import HeroBackground from "@/components/HeroBackground";

const statIllustrations = [StatMobileSearch, StatScreenBrowse, StatBarsGrowing, StatClock];

const stats = [
  { value: "97%", numValue: 97, suffix: "%", label: "des consommateurs utilisent internet pour trouver un professionnel local" },
  { value: "75%", numValue: 75, suffix: "%", label: "des clients vérifient un site web avant de contacter une entreprise" },
  { value: "3x", numValue: 3, suffix: "x", label: "plus de chiffre d'affaires pour les entreprises avec un site web" },
  { value: "24/7", numValue: 24, suffix: "/7", label: "accessibilité permanente pour vos clients potentiels" },
];

const sansAvec = [
  { sans: "Invisible sur internet", avec: "Trouvable en quelques clics" },
  { sans: "Dépendant du bouche-à-oreille", avec: "Visible par des milliers de personnes" },
  { sans: "Pas de crédibilité en ligne", avec: "Image professionnelle et rassurante" },
  { sans: "Horaires limités", avec: "Disponible 24h/24, 7j/7" },
  { sans: "Concurrents en première page", avec: "Vous aussi, en première page" },
];

const raisonsSite = [
  { icon: Globe, title: "Visibilité 24/7", description: "Votre entreprise est visible en permanence, même quand vous dormez. Les clients peuvent vous trouver à tout moment." },
  { icon: Users, title: "Crédibilité Professionnelle", description: "Un site web professionnel inspire confiance. Les clients préfèrent les entreprises avec une présence en ligne soignée." },
  { icon: TrendingUp, title: "Croissance du Chiffre d'Affaires", description: "Attirez de nouveaux clients, générez des demandes de devis et développez votre activité grâce au digital." },
  { icon: Search, title: "Référencement Local", description: "Apparaissez dans les recherches Google quand quelqu'un cherche vos services dans votre zone géographique." },
  { icon: Clock, title: "Gain de Temps", description: "Répondez aux questions fréquentes, présentez vos services et recevez des demandes qualifiées automatiquement." },
  { icon: Award, title: "Devancez la Concurrence", description: "Vos concurrents sont probablement déjà en ligne. Ne leur laissez pas l'avantage sur le marché digital." },
];

const secteurs = [
  { label: "Artisan / BTP", taux: 0.038, clients_base: 14 },
  { label: "Restaurant / Café", taux: 0.041, clients_base: 38 },
  { label: "Commerce de proximité", taux: 0.033, clients_base: 25 },
  { label: "Professions médicales", taux: 0.045, clients_base: 10 },
  { label: "Consultant / Coach", taux: 0.042, clients_base: 7 },
  { label: "Autre / PME", taux: 0.035, clients_base: 18 },
];

const zones = [
  { label: "Ville < 20 000 hab.", facteur: 0.7 },
  { label: "Ville 20k – 100k hab.", facteur: 1 },
  { label: "Grande ville / Agglo", facteur: 1.5 },
];

const metierCards = [
  { icon: UtensilsCrossed, title: "Restaurants & Cafés", bullets: ["Menu en ligne", "Réservations", "Avis clients", "Photos des plats"] },
  { icon: Wrench, title: "Artisans & BTP", bullets: ["Portfolio travaux", "Devis en ligne", "Zone d'intervention", "Certifications"] },
  { icon: Stethoscope, title: "Professions Médicales", bullets: ["Prise de RDV", "Horaires", "Spécialités", "Accès"] },
  { icon: Briefcase, title: "Consultants & Coachs", bullets: ["Expertise", "Témoignages", "Réservation", "Blog"] },
  { icon: ShoppingBag, title: "Commerces", bullets: ["Produits", "Horaires", "Actualités", "Click & Collect"] },
  { icon: Building2, title: "Immobilier", bullets: ["Annonces", "Visites virtuelles", "Estimations", "Contact"] },
];

const AnimatedStat = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const Illustration = statIllustrations[index];
  return (
    <div className="relative rounded-2xl">
      <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
      <div className="relative z-10 rounded-2xl p-4 md:p-6 text-center" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
        <Illustration />
        <div className="text-primary font-display font-black mb-2" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
          <NumberTicker value={stat.numValue} />{stat.suffix}
        </div>
        <p className="text-muted-foreground text-sm font-dm text-center">{stat.label}</p>
      </div>
    </div>
  );
};


const ROISimulator = () => {
  const navigate = useNavigate();
  const [secteur, setSecteur] = useState(secteurs[0].label);
  const [zone, setZone] = useState(zones[1].label);
  const [valeurClient, setValeurClient] = useState(120);

  const results = useMemo(() => {
    const secteurData = secteurs.find((s) => s.label === secteur) ?? secteurs[0];
    const zoneData = zones.find((z) => z.label === zone) ?? zones[1];

    const visiteurs_mois = Math.round(secteurData.clients_base * zoneData.facteur * 12);
    const nouveaux_clients = Math.round(visiteurs_mois * secteurData.taux);
    const ca_mensuel_additionnel = nouveaux_clients * valeurClient;
    const ca_annuel = ca_mensuel_additionnel * 12;
    const mois_remboursement = ca_mensuel_additionnel > 0 ? Math.ceil(497 / ca_mensuel_additionnel) : 0;

    return { visiteurs_mois, nouveaux_clients, ca_annuel, mois_remboursement };
  }, [secteur, zone, valeurClient]);

  const sliderProgress = ((valeurClient - 15) / (500 - 15)) * 100;

  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">
            <span className="inline">ESTIMEZ CE QUE VOUS PERDEZ </span><span className="text-[#1DB954] whitespace-nowrap inline">SANS SITE</span>
          </h2>
          <p className="font-dm text-muted-foreground mt-3">Estimation réaliste basée sur votre secteur et votre zone.</p>
        </BlurReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-[760px] mx-auto rounded-2xl"
        >
          <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <div className="relative z-10 rounded-2xl p-5 md:p-8 md:p-10" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
            <div className="space-y-6 mb-8">
              <div>
                <label className="font-dm font-medium text-white text-sm block mb-2">Votre secteur</label>
                <select value={secteur} onChange={(e) => setSecteur(e.target.value)} className="w-full rounded-lg px-4 py-3 text-sm font-dm bg-background border border-border text-foreground focus:border-primary focus:outline-hidden">
                  {secteurs.map((s) => <option key={s.label} value={s.label}>{s.label}</option>)}
                </select>
              </div>

              <div>
                <label className="font-dm font-medium text-white text-sm block mb-3">Taille de votre zone</label>
                <div className="flex flex-wrap gap-2">
                  {zones.map((z) => (
                    <button
                      key={z.label}
                      onClick={() => setZone(z.label)}
                      className="px-4 py-2 rounded-full text-sm font-dm transition-colors"
                      style={{
                        backgroundColor: zone === z.label ? "rgba(29,185,84,0.15)" : "#0d130d",
                        border: zone === z.label ? "1px solid #1DB954" : "1px solid #1a2e1a",
                        color: zone === z.label ? "#1DB954" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-dm font-medium text-white text-sm">Valeur moyenne d'un client (€)</label>
                  <span className="text-primary font-bold text-lg">{valeurClient}€ par client</span>
                </div>
                <input type="range" min="15" max="500" step="5" value={valeurClient} onChange={(e) => setValeurClient(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${sliderProgress}%, rgba(255,255,255,0.12) ${sliderProgress}%, rgba(255,255,255,0.12) 100%)` }} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>15€</span><span>500€</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                { label: "Visiteurs estimés/mois", value: results.visiteurs_mois.toString() },
                { label: "Nouveaux clients/mois", value: results.nouveaux_clients > 15 ? "15+" : results.nouveaux_clients.toString() },
                { label: "CA additionnel estimé/an", value: `${results.ca_annuel}€` },
                { label: "Site remboursé en", value: `${results.mois_remboursement} mois` },
              ].map((r) => (
                <div key={r.label} className="rounded-xl p-5 text-center" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: "#1DB954" }}>{r.value}</div>
                  <p className="text-xs text-muted-foreground font-dm mt-2">{r.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs font-dm text-center mb-8">Estimation indicative basée sur des moyennes sectorielles.</p>

            <div className="text-center">
              <button onClick={() => navigate("/contact?service=vitrine")} className="group relative inline-flex items-center gap-2.5 bg-[#1DB954] hover:bg-[#17a349] text-black font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] active:scale-[0.98] overflow-hidden text-sm" style={{fontFamily:"'DM Sans', sans-serif"}}><div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" /><span className="relative">Obtenir mon site maintenant</span><ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} /></button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PourquoiPage = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pourquoi Créer un Site Web ? Les Chiffres 2025",
    "description": "97% des consommateurs cherchent en ligne avant d'acheter. Sans site web, vous perdez des clients chaque jour. Découvrez pourquoi une présence en ligne est indispensable en 2025.",
    "author": {
      "@type": "Organization",
      "name": "ALTÉRA"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ALTÉRA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://altera.fr/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://altera.fr/pourquoi-un-site"
    }
  };

  return (
  <Layout>
    <SEO 
      title="Pourquoi Créer un Site Web ? Les Chiffres 2025"
      description="97% des consommateurs cherchent en ligne avant d'acheter. Sans site web, vous perdez des clients chaque jour. Découvrez pourquoi une présence en ligne est indispensable en 2025."
      keywords="pourquoi avoir un site web, importance site internet artisan, site web indispensable 2025, visibilité en ligne PME"
      url="https://altera.fr/pourquoi-un-site"
    />
    <StructuredData data={articleData} />
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="dataflow" />
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-1" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 text-center">
        <BlurReveal>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            POURQUOI AVOIR UN{" "}
            <span className="text-gradient-green whitespace-nowrap">
              SITE PRO ?
            </span>
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p
            className="text-base sm:text-lg md:text-xl text-white/55 mt-6 max-w-xl leading-relaxed mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            En 2026, ne pas avoir de site internet c'est comme ne pas exister. Vos clients vous cherchent en ligne — soyez là.
          </p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="inline">LES CHIFFRES PARLENT </span><span className="text-[#1DB954] whitespace-nowrap inline">D'EUX-MÊMES</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <AnimatedStat stat={s} index={i} />
              </motion.div>
            ))}
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Sans vs Avec — DO NOT TOUCH */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-3xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl"><span className="text-destructive">SANS SITE</span> VS <span className="text-primary">AVEC SITE</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {sansAvec.map((row, i) => (
            <BlurReveal key={i} delay={i * 0.1} direction="left">
              <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-xl">
                  <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} variant="white" disabled={false} />
                  <div className="relative z-10 flex items-center gap-3 bg-destructive/10 rounded-xl p-4">
                    <XCircle className="text-destructive shrink-0" size={20} /><span className="text-sm text-foreground">{row.sans}</span>
                  </div>
                </div>
                <div className="relative rounded-xl">
                  <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <div className="relative z-10 flex items-center gap-3 bg-primary/10 rounded-xl p-4">
                    <CheckCircle className="text-primary shrink-0" size={20} /><span className="text-sm text-foreground">{row.avec}</span>
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>

    <ROISimulator />

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">6 raisons d'avoir un site web</h2>
          <p className="font-dm text-muted-foreground mt-3">Les bénéfices concrets pour votre activité</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {raisonsSite.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="rounded-xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(29,185,84,0.1)" }}>
                <item.icon className="text-[#1DB954]" size={20} />
              </div>
              <h3 className="font-dm font-bold text-white mb-2">{item.title}</h3>
              <p className="font-dm text-sm text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#1DB954] mb-4" style={{ backgroundColor: "rgba(29,185,84,0.12)", border: "1px solid rgba(29,185,84,0.25)" }}>SECTEURS</span>
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">Adapté à votre métier</h2>
          <p className="font-dm text-muted-foreground mt-3">Chaque secteur a ses besoins spécifiques</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metierCards.map((card) => (
            <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="rounded-xl p-4 md:p-6 transition-colors" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(29,185,84,0.12)" }}><card.icon className="text-[#1DB954]" size={20} /></div>
                <h3 className="font-dm font-bold text-white">{card.title}</h3>
              </div>
              <ul className="space-y-2">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="font-dm text-sm text-white/75 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#1DB954] mb-4" style={{ backgroundColor: "rgba(29,185,84,0.12)", border: "1px solid rgba(29,185,84,0.25)" }}>COMPRENDRE</span>
          <h2 className="heading-display text-2xl md:text-xl sm:text-2xl md:text-3xl">Le parcours client moderne</h2>
          <p className="font-dm text-muted-foreground mt-3">Comment vos clients vous trouvent aujourd'hui</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-8">
          {[
            ["Besoin", "Le client a un besoin"],
            ["Recherche Google", "Il tape sa recherche"],
            ["Comparaison", "Il compare les options"],
            ["Votre site", "Il visite votre site"],
            ["Contact", "Il vous contacte"],
          ].map(([title, desc], idx) => (
            <div key={title} className="relative text-center">
              <div className={`mx-auto mb-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${idx === 3 ? "bg-[#1DB954] text-white animate-pulse" : "bg-white/10 text-white/80"}`}>●</div>
              <h3 className={`font-dm font-semibold text-sm ${idx === 3 ? "text-white" : "text-white/80"}`}>{title}</h3>
              <p className="font-dm text-xs text-white/60 mt-1">{desc}</p>
              {idx < 4 && <span className="hidden md:block absolute -right-3 top-4 text-white/35">→</span>}
            </div>
          ))}
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-dm text-center text-white/70 italic p-4" style={{ backgroundColor: "#111811", borderLeft: "3px solid #1DB954" }}>
          Sans site web, votre client s'arrête à l'étape 3. Il part chez un concurrent qui, lui, a un site.
        </motion.p>
      </div>
    </section>


    <CtaSection
      title="Ne laissez plus vos clients partir"
      description="Chaque jour sans site, c'est du chiffre d'affaires perdu. Passez à l'action maintenant."
      buttonText="Obtenir mon site web"
      buttonUrl="/contact"
      items={["Livraison en 14 jours", "À partir de 497€", "Devis gratuit", "Sans engagement"]}
    />
  </Layout>
  );
};

export default PourquoiPage;
