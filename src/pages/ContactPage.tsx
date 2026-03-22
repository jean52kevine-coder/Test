import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import {
  Send, User, Briefcase, MessageSquare, Check, ArrowRight, ArrowLeft,
  Globe, ShoppingCart, Wrench, Sparkles, Phone, Mail, MapPin, Clock,
  MessageCircle, PenTool
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import HeroBackground from "@/components/HeroBackground";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

const steps = [
  { label: "Votre projet", num: 1 },
  { label: "Vos besoins", num: 2 },
  { label: "Confirmation", num: 3 },
];

const projectTypes = [
  { id: "vitrine", icon: Globe, label: "Site Vitrine", price: "497€" },
  { id: "ecommerce", icon: ShoppingCart, label: "Site E-commerce", price: "747€" },
  { id: "maintenance", icon: Wrench, label: "Maintenance", price: "dès 29€/m" },
  { id: "refonte", icon: PenTool, label: "Refonte", price: "Sur devis" },
];

const budgetOptions = ["< 500€", "500–800€", "800–1500€", "1500€+", "À définir"];
const delayOptions = ["Le plus tôt", "1 mois", "2–3 mois", "Flexible"];

const serviceToDisplayLabel: Record<string, string> = {
  vitrine: "Site Vitrine — 497€",
  ecommerce: "Site E-commerce — 747€",
  maintenance: "Maintenance Web",
  "maintenance-essentielle": "Maintenance Essentielle — 29€/mois",
  "maintenance-professionnelle": "Maintenance Professionnelle — 39€/mois",
  "maintenance-premium": "Maintenance Premium — 49€/mois",
};

const serviceToProjectType: Record<string, string> = {
  vitrine: "vitrine",
  ecommerce: "ecommerce",
  maintenance: "maintenance",
  "maintenance-essentielle": "maintenance",
  "maintenance-professionnelle": "maintenance",
  "maintenance-premium": "maintenance",
};

const defaultMessageByService: Record<string, string> = {
  vitrine: "Bonjour, je suis intéressé(e) par la création d'un site vitrine à 497€. Je souhaite en savoir plus et obtenir un devis personnalisé.",
  ecommerce: "Bonjour, je souhaite créer une boutique en ligne. Je suis intéressé(e) par votre offre site e-commerce à 747€.",
  maintenance: "Bonjour, je suis intéressé(e) par votre formule de maintenance web. Pouvez-vous me contacter pour en discuter ?",
  "maintenance-essentielle": "Bonjour, je suis intéressé(e) par votre formule de maintenance web. Pouvez-vous me contacter pour en discuter ?",
  "maintenance-professionnelle": "Bonjour, je suis intéressé(e) par votre formule de maintenance web. Pouvez-vous me contacter pour en discuter ?",
  "maintenance-premium": "Bonjour, je suis intéressé(e) par votre formule de maintenance web. Pouvez-vous me contacter pour en discuter ?",
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const fadeSlide = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
};

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");
  const planParam = searchParams.get("plan");
  void planParam;

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    projectType: "", budget: "", delay: "", message: "", source: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [touched, setTouched] = useState({ prenom: false, nom: false, email: false });
  const [messageEditedByUser, setMessageEditedByUser] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sendSuccess, setSendSuccess] = useState(false);

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const projectLabel = projectTypes.find((p) => p.id === form.projectType)?.label || "";

  useEffect(() => {
    if (!serviceParam) return;
    const mappedProjectType = serviceToProjectType[serviceParam];
    if (!mappedProjectType) return;

    const defaultMessage = defaultMessageByService[serviceParam] ?? "";
    setForm((prev) => ({
      ...prev,
      projectType: mappedProjectType,
      message: prev.message || defaultMessage,
    }));
    setCharCount((prev) => (prev > 0 ? prev : defaultMessage.length));
    setPreselectedService(serviceParam);
  }, [serviceParam]);

  const isPrenomValid = form.prenom.trim().length > 0;
  const isNomValid = form.nom.trim().length > 0;
  const isEmailValid = isValidEmail(form.email.trim());
  const canGoNext = isPrenomValid && isNomValid && isEmailValid;

  const inputState = useMemo(() => ({
    prenom: (touched.prenom ? (isPrenomValid ? "valid" : "invalid") : "default") as "default" | "invalid" | "valid",
    nom: (touched.nom ? (isNomValid ? "valid" : "invalid") : "default") as "default" | "invalid" | "valid",
    email: (touched.email ? (isEmailValid ? "valid" : "invalid") : "default") as "default" | "invalid" | "valid",
  }), [isEmailValid, isNomValid, isPrenomValid, touched]);

  const preselectedLabel = preselectedService ? serviceToDisplayLabel[preselectedService] : null;

  useEffect(() => {
    if (!preselectedService || messageEditedByUser) return;
    const defaultMessage = defaultMessageByService[preselectedService] ?? "";
    setForm((prev) => ({ ...prev, message: defaultMessage }));
    setCharCount(defaultMessage.length);
  }, [messageEditedByUser, preselectedService]);

  const resetPreselection = () => {
    setPreselectedService(null);
    setMessageEditedByUser(false);
    setCharCount(0);
    setTouched({ prenom: false, nom: false, email: false });
    setForm({
      prenom: "", nom: "", email: "", telephone: "",
      projectType: "", budget: "", delay: "", message: "", source: "",
    });
  };

  const handleFinalSubmit = async () => {
    setSending(true);
    setSendError(null);

    try {
      setError("");
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${form.prenom} ${form.nom}`,
          from_email: form.email,
          reply_to: form.email,
          phone: form.telephone || "Non renseigné",
          service: form.projectType || preselectedService || "Non précisé",
          budget: form.budget || "Non précisé",
          message: form.message || "Aucun message",
          date: new Date().toLocaleDateString("fr-FR", {
            day: "2-digit", month: "long", year: "numeric",
            hour: "2-digit", minute: "2-digit",
          }),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSendSuccess(true);
      setSubmitted(true);
    } catch (submitError) {
      console.error("EmailJS error:", submitError);
      setSendError("Erreur lors de l'envoi. Veuillez réessayer ou écrire directement à contact@altera.fr");
      setError("Erreur lors de l'envoi. Veuillez réessayer ou écrire directement à contact@altera.fr");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
    <Helmet>
      <title>Devis Gratuit — Parlons de Votre Projet Web | ALTÉRA</title>
      <meta name="description" content="Demandez votre devis gratuit pour la création de votre site web. Réponse sous 24h, échange par email ou par téléphone. ALTÉRA Digital Studio, Grand Est." />
      <link rel="canonical" href="https://altera.fr/contact" />
    </Helmet>
        <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0a0f0a" }}>
          <motion.div className="text-center section-container" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative w-20 h-20 rounded-full mx-auto mb-8">
              <GlowingEffect spread={60} glow proximity={100} inactiveZone={0.01} borderWidth={3} disabled={false} />
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={40} />
              </div>
            </div>
            <h1 className="heading-display text-xl sm:text-2xl md:text-3xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-5xl mb-4">DEMANDE <span className="text-primary">ENVOYÉE</span></h1>
            <p className="font-dm text-lg text-muted-foreground max-w-md mx-auto mb-8">
              {sendSuccess
                ? "Merci pour votre confiance ! Nous vous répondrons sous 24h avec un devis personnalisé."
                : "Merci pour votre confiance ! Nous vous répondrons sous 24h."}
            </p>
            <div className="flex flex-wrap justify-center gap-6 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>✓ Réponse sous 24h</span><span>✓ Devis gratuit</span><span>✓ Sans engagement</span>
            </div>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Devis Gratuit — Parlons de Votre Projet Web | ALTÉRA</title>
        <meta name="description" content="Demandez votre devis gratuit pour la création de votre site web. Réponse sous 24h, échange par email ou par téléphone. ALTÉRA Digital Studio, Grand Est." />
        <link rel="canonical" href="https://altera.fr/contact" />
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
        <HeroBackground variant="constellation" />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-20 blur-[120px]" style={{ background: "linear-gradient(135deg, hsl(145,63%,42%), hsl(200,80%,50%))" }} />
        <div className="absolute top-10 right-1/4 w-[400px] h-[250px] rounded-full opacity-15 blur-[100px]" style={{ background: "linear-gradient(135deg, hsl(260,70%,50%), hsl(145,63%,42%))" }} />

        <motion.div className="relative z-10 container mx-auto px-6 py-12 md:py-24 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-display tracking-[0.15em] uppercase mb-6 border" style={{ borderColor: "rgba(29,185,84,0.3)", color: "hsl(145,63%,42%)", backgroundColor: "rgba(29,185,84,0.08)" }}>
            <span className="w-2 h-2 rounded-full bg-primary" /> Contact
          </span>
          <h1 className="heading-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-4">
            Parlons de votre{" "}
            <span className="bg-linear-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">projet</span>
          </h1>
          <p className="font-dm text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Réponse garantie sous 24h · Échange par email ou par appel · Devis gratuit
          </p>
          {preselectedLabel && (
            <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full border text-sm" style={{ borderColor: "rgba(29,185,84,0.35)", color: "#1DB954", backgroundColor: "rgba(29,185,84,0.1)" }}>
              <span>✓ Formule présélectionnée : {preselectedLabel}</span>
              <button onClick={resetPreselection} className="text-white/70 hover:text-white" aria-label="Réinitialiser la présélection">×</button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Main content: sidebar + form */}
      <section className="pb-24" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 max-w-6xl mx-auto">
            {/* Left sidebar */}
            <motion.div className="space-y-6 hidden lg:block" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {/* Consultation card */}
              <div className="relative rounded-2xl">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">Échange découverte</h3>
                  <p className="font-dm text-sm text-muted-foreground leading-relaxed">Par email ou par appel — comme vous préférez. On définit ensemble votre projet, vos objectifs et le meilleur chemin pour y arriver. Aucun engagement, aucune pression.</p>
                </div>
              </div>

              {/* Contact info card */}
              <div className="relative rounded-2xl">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-4 md:p-6 space-y-4" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  {[
                    { icon: Mail, text: "contact@altéra.fr" },
                    { icon: Phone, text: "06 52 55 42 83" },
                    { icon: MapPin, text: "Reims, Grand Est" },
                    { icon: Clock, text: "Réponse sous 24h" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-primary" size={16} />
                      </div>
                      <span className="font-dm text-sm text-foreground/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial card */}
              <div className="relative rounded-2xl">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <p className="font-dm text-sm italic text-foreground/70 leading-relaxed mb-3">
                    "Votre investissement est récupéré en moyenne en 4 à 6 mois grâce aux nouveaux clients générés."
                  </p>
                  <span className="font-dm text-xs text-muted-foreground">— Résultat moyen · clients ALTÉRA</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="relative rounded-2xl">
                <GlowingEffect spread={50} glow proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-4 md:p-6 md:p-8" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  {/* Stepper */}
                  <div className="flex items-center justify-between mb-8">
                    {steps.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => { if (i <= step) setStep(i); }}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display transition-all duration-300"
                          style={{
                            background: i < step
                              ? "linear-gradient(135deg, hsl(145,63%,42%), hsl(160,60%,45%))"
                              : i === step
                                ? "linear-gradient(135deg, hsl(145,63%,42%), hsl(160,60%,45%))"
                                : "#1a2e1a",
                            color: i <= step ? "#000" : "rgba(255,255,255,0.4)",
                            boxShadow: i === step ? "0 0 20px rgba(29,185,84,0.3)" : "none",
                          }}
                        >
                          {i < step ? <Check size={14} /> : s.num}
                        </div>
                        <span className="text-xs font-dm hidden sm:inline" style={{ color: i <= step ? "#fff" : "rgba(255,255,255,0.35)" }}>
                          {s.label}
                        </span>
                        {i < steps.length - 1 && (
                          <div className="hidden sm:block w-12 lg:w-20 h-px mx-2" style={{ backgroundColor: i < step ? "hsl(145,63%,42%)" : "#1a2e1a" }} />
                        )}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {/* Step 1: Votre projet */}
                    {step === 0 && (
                      <motion.div key="s0" {...fadeSlide} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                          <InputField label="PRÉNOM *" placeholder="Jean" value={form.prenom} onChange={(v) => update("prenom", v)} state={inputState.prenom} errorMessage="Prénom requis" onTouched={() => setTouched((prev) => ({ ...prev, prenom: true }))} />
                          <InputField label="NOM *" placeholder="Dupont" value={form.nom} onChange={(v) => update("nom", v)} state={inputState.nom} errorMessage="Nom requis" onTouched={() => setTouched((prev) => ({ ...prev, nom: true }))} />
                        </div>
                        <InputField label="EMAIL *" placeholder="jean.dupont@email.fr" value={form.email} onChange={(v) => update("email", v)} type="email" state={inputState.email} errorMessage="Email valide requis" onTouched={() => setTouched((prev) => ({ ...prev, email: true }))} />
                        <InputField label="TÉLÉPHONE — Optionnel (recommandé)" placeholder="06 XX XX XX XX" value={form.telephone} onChange={(v) => update("telephone", v)} type="tel" />

                        <div>
                          <label className="block text-[11px] font-display font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">TYPE DE PROJET *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {projectTypes.map((p) => (
                              <button
                                key={p.id}
                                onClick={() => update("projectType", p.id)}
                                className="relative rounded-xl text-left transition-all duration-200 group"
                              >
                                <div
                                  className="rounded-xl p-4 transition-all duration-200"
                                  style={{
                                    backgroundColor: form.projectType === p.id ? "rgba(29,185,84,0.1)" : "#0d130d",
                                    border: form.projectType === p.id ? "1px solid hsl(145,63%,42%)" : "1px solid #1a2e1a",
                                  }}
                                >
                                  <p.icon
                                    size={20}
                                    className="mb-2"
                                    style={{ color: form.projectType === p.id ? "hsl(145,63%,42%)" : "rgba(255,255,255,0.5)" }}
                                  />
                                  <div className="font-display font-bold text-sm text-white">{p.label}</div>
                                  <div className="text-xs font-dm text-muted-foreground">{p.price}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => canGoNext && setStep(1)}
                          disabled={!canGoNext}
                          className={`w-full inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-xl text-primary-foreground transition-all duration-200 gap-2 font-display text-sm ${canGoNext ? "hover:-translate-y-0.5" : "opacity-50 cursor-not-allowed"}`}
                          style={{ background: "linear-gradient(135deg, hsl(145,63%,42%), hsl(160,60%,45%))" }}
                        >
                          Suivant <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    )}

                    {/* Step 2: Vos besoins */}
                    {step === 1 && (
                      <motion.div key="s1" {...fadeSlide} className="space-y-6">
                        <div>
                          <label className="block text-[11px] font-display font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">BUDGET APPROXIMATIF</label>
                          <div className="flex flex-wrap gap-2">
                            {budgetOptions.map((b) => (
                              <ChipButton key={b} label={b} selected={form.budget === b} onClick={() => update("budget", b)} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-display font-bold tracking-[0.15em] uppercase text-muted-foreground mb-3">DÉLAI SOUHAITÉ</label>
                          <div className="flex flex-wrap gap-2">
                            {delayOptions.map((d) => (
                              <ChipButton key={d} label={d} selected={form.delay === d} onClick={() => update("delay", d)} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-[11px] font-display font-bold tracking-[0.15em] uppercase text-muted-foreground">DÉCRIVEZ VOTRE PROJET *</label>
                            <span className="text-[11px] font-dm text-muted-foreground">{charCount}/500</span>
                          </div>
                          <textarea
                            rows={5}
                            maxLength={500}
                            placeholder="Parlez-nous de votre activité et de vos objectifs…"
                            value={form.message}
                            onChange={(e) => { update("message", e.target.value); setCharCount(e.target.value.length); setMessageEditedByUser(true); }}
                            className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm resize-none"
                          />
                        </div>

                        <div className="flex gap-4">
                          <button onClick={() => setStep(0)} className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-white gap-2 font-display text-sm" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                            <ArrowLeft size={16} /> Retour
                          </button>
                          <button onClick={() => setStep(2)} className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 gap-2 font-display text-sm" style={{ background: "linear-gradient(135deg, hsl(145,63%,42%), hsl(160,60%,45%))" }}>
                            Voir le résumé <ArrowRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 2 && (
                      <motion.div key="s2" {...fadeSlide} className="space-y-6">
                        <h2 className="font-display font-black text-lg uppercase tracking-wide text-white">Récapitulatif</h2>

                        <div className="space-y-3">
                          <SummaryRow label="Contact" value={`${form.prenom} ${form.nom} · ${form.email}`} />
                          <SummaryRow label="Projet" value={projectLabel || "—"} />
                          <SummaryRow label="Budget" value={form.budget || "—"} />
                          <SummaryRow label="Délai" value={form.delay || "—"} />
                          <SummaryRow label="Message" value={form.message || "—"} />
                        </div>

                        <div className="flex flex-wrap justify-center gap-5 font-dm text-[12px] pt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                          <span>✓ Réponse sous 24h</span>
                          <span>✓ Devis gratuit</span>
                          <span>✓ Sans engagement</span>
                        </div>

                        <div className="flex gap-4">
                          <button onClick={() => setStep(1)} className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-white gap-2 font-display text-sm" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                            <ArrowLeft size={16} /> Retour
                          </button>
                          {error && <p className="text-sm text-red-400">{error}</p>}
                          <button
                            onClick={handleFinalSubmit}
                            disabled={sending}
                            className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all duration-200 ${sending ? "bg-[#1DB954]/50 text-black/50 cursor-not-allowed" : "bg-[#1DB954] hover:bg-[#17a349] text-black hover:scale-[1.02]"}`}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {sending ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Envoi en cours...
                              </span>
                            ) : (
                              "Envoyer ma demande →"
                            )}
                          </button>
                        </div>
                        {sendError && (
                          <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {sendError}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

/* ---- Sub-components ---- */

const InputField = ({ label, placeholder, value, onChange, type = "text", state = "default", errorMessage, onTouched }: { label: string; placeholder: string; value: string; onChange: (v: string) => void; type?: string; state?: "default" | "valid" | "invalid"; errorMessage?: string; onTouched?: () => void; }) => (
  <div>
    <label className="block text-[11px] font-display font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        onTouched?.();
      }}
      className="w-full px-4 py-3.5 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
      style={{
        borderColor: state === "invalid" ? "#ef4444" : state === "valid" ? "#1DB954" : "",
      }}
    />
    {state === "invalid" && errorMessage && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errorMessage}</p>}
  </div>
);

const ChipButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2.5 rounded-xl text-sm font-dm transition-all duration-200"
    style={{
      backgroundColor: selected ? "rgba(29,185,84,0.12)" : "#0d130d",
      border: selected ? "1px solid hsl(145,63%,42%)" : "1px solid #1a2e1a",
      color: selected ? "hsl(145,63%,42%)" : "rgba(255,255,255,0.6)",
    }}
  >
    {label}
  </button>
);

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-4 py-2.5" style={{ borderBottom: "1px solid #1a2e1a" }}>
    <span className="font-dm text-sm text-muted-foreground w-20 shrink-0">{label}</span>
    <span className="font-dm text-sm text-foreground">{value}</span>
  </div>
);

export default ContactPage;
