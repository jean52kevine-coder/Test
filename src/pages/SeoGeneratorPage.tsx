import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PAGES = [
  { name: "Accueil", content: "Agence web ALTÉRA - Création de sites vitrines à 497€ et e-commerce à 747€, livraison en 14 jours, pour artisans et commerçants français." },
  { name: "Site Vitrine", content: "Service de création de site vitrine professionnel à 497€ tout inclus : responsive, SEO, formulaire contact, hébergement 1 an. Pour artisans, commerçants, professions libérales." },
  { name: "Site E-commerce", content: "Création de boutique en ligne e-commerce à 747€ : panier, paiement sécurisé, gestion stocks, dashboard commandes, facturation automatique. Pour créateurs, commerçants, producteurs." },
  { name: "Maintenance", content: "Forfaits maintenance web dès 29€/mois sans engagement : mises à jour, sauvegardes, monitoring, support. 3 formules : Essentielle, Pro, Premium." },
  { name: "Tarifs", content: "Grille tarifaire ALTÉRA : site vitrine 497€, e-commerce 747€, maintenance dès 29€/mois. Paiement en plusieurs fois sans frais. Tout inclus, zéro surprise." },
  { name: "Pourquoi un site", content: "Pourquoi avoir un site web professionnel en 2025 : 97% des consommateurs recherchent en ligne, visibilité Google, crédibilité, génération de leads 24/7." },
  { name: "Contact", content: "Page contact ALTÉRA : formulaire de demande de devis gratuit, échange découverte offert, réponse sous 24h." },
];

type SeoResult = { title: string; description: string; keywords: string };

const SeoGeneratorPage = () => {
  const [results, setResults] = useState<Record<string, SeoResult>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = async (page: typeof PAGES[0]) => {
    setLoading(page.name);
    try {
      const { data, error } = await supabase.functions.invoke("generate-seo", {
        body: { pageName: page.name, pageContent: page.content },
      });
      if (error) throw error;
      setResults((prev) => ({ ...prev, [page.name]: data }));
      toast.success(`SEO généré pour "${page.name}"`);
    } catch (e) {
      toast.error("Erreur lors de la génération SEO");
      console.error(e);
    }
    setLoading(null);
  };

  const generateAll = async () => {
    for (const page of PAGES) {
      await generate(page);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Layout>
      <SEO 
        title="Générateur SEO IA"
        description="Générez automatiquement les titres, descriptions et mots-clés SEO optimisés pour chaque page du site."
        noindex={true}
      />
      <section className="py-[120px] min-h-screen" style={{ background: "hsl(var(--hero-bg))" }}>
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-primary font-semibold text-sm">Générateur SEO IA</span>
            </div>
            <h1 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              GÉNÉRER LES <span className="text-primary">META SEO</span>
            </h1>
            <p className="font-dm text-muted-foreground max-w-xl mx-auto mb-6">
              Générez automatiquement les titres, descriptions et mots-clés SEO optimisés pour chaque page du site.
            </p>
            <button
              onClick={generateAll}
              disabled={loading !== null}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm hover:bg-primary/90 transition disabled:opacity-40"
            >
              {loading ? "Génération en cours..." : "Générer pour toutes les pages"}
            </button>
          </motion.div>

          <div className="space-y-4">
            {PAGES.map((page, i) => {
              const result = results[page.name];
              const isLoading = loading === page.name;

              return (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl p-4 md:p-6"
                  style={{
                    backgroundColor: "hsl(var(--card-dark))",
                    border: "1px solid hsl(var(--border-green))",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-foreground">{page.name}</h3>
                    <button
                      onClick={() => generate(page)}
                      disabled={isLoading}
                      className="px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20 hover:bg-primary/20 transition disabled:opacity-40 flex items-center gap-2"
                    >
                      {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                      {isLoading ? "Génération..." : "Générer"}
                    </button>
                  </div>

                  {result ? (
                    <div className="space-y-3">
                      {(["title", "description", "keywords"] as const).map((key) => (
                        <div key={key} className="group">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground uppercase font-dm">
                              {key === "title" ? "Titre SEO" : key === "description" ? "Meta description" : "Mots-clés"}
                            </span>
                            <button
                              onClick={() => copyToClipboard(result[key], `${page.name}-${key}`)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                            >
                              {copied === `${page.name}-${key}` ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                          <p className="text-sm text-foreground font-dm bg-secondary/30 rounded-lg px-3 py-2">
                            {result[key]}
                          </p>
                          {key === "title" && (
                            <span className="text-[11px] text-muted-foreground">{result[key].length}/60 caractères</span>
                          )}
                          {key === "description" && (
                            <span className="text-[11px] text-muted-foreground">{result[key].length}/155 caractères</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground font-dm italic">
                      Cliquez sur "Générer" pour obtenir les meta SEO optimisées.
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeoGeneratorPage;
