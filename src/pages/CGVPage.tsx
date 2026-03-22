import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

const articles = [
  {
    title: "Article 1 — Objet",
    content:
      'Les présentes CGV régissent les relations contractuelles entre ALTÉRA Digital Studio (ci-après "le Prestataire") et tout client professionnel ou particulier (ci-après "le Client") dans le cadre de la création de sites web et services associés.',
  },
  {
    title: "Article 2 — Services proposés",
    list: [
      "Création de site vitrine à partir de 497€ TTC",
      "Création de site e-commerce à partir de 747€ TTC",
      "Maintenance mensuelle à partir de 29€/mois",
      "Tout devis accepté vaut commande ferme.",
    ],
  },
  {
    title: "Article 3 — Tarifs et paiement",
    content:
      "Les prix sont indiqués en euros TTC. Modalités : 50% à la commande, 50% à la livraison. Paiement par virement bancaire ou Stripe. Facilités de paiement disponibles : 2x pour les vitrines, 3x pour les sites e-commerce, sans frais.",
  },
  {
    title: "Article 4 — Délais de livraison",
    content:
      "Le délai standard est de 14 jours ouvrés à compter de la validation du premier échange et du paiement de l'acompte. Ce délai peut être modifié d'un commun accord entre les parties.",
  },
  {
    title: "Article 5 — Propriété intellectuelle",
    content:
      "À complet paiement, le Client acquiert la pleine propriété des visuels et contenus créés spécifiquement pour lui. Le code source reste propriété du Prestataire sauf accord écrit. ALTÉRA se réserve le droit de mentionner le projet dans son portfolio, sauf opposition écrite du Client.",
  },
  {
    title: "Article 6 — Responsabilités",
    content:
      "Le Prestataire s'engage à livrer un site fonctionnel et conforme au cahier des charges validé. Il ne peut être tenu responsable des contenus fournis par le Client (textes, photos, logos). Le Client est responsable de la légalité des contenus publiés.",
  },
  {
    title: "Article 7 — Révisions et modifications",
    content:
      "2 allers-retours de corrections sont inclus dans chaque projet. Les modifications supplémentaires sont facturées sur devis. Les abonnements de maintenance incluent les petites modifications mensuelles telles que définies dans chaque formule.",
  },
  {
    title: "Article 8 — Résiliation (maintenance)",
    content:
      "Les abonnements de maintenance sont sans engagement. Résiliation possible à tout moment avec 30 jours de préavis. Aucun remboursement du mois en cours en cas de résiliation.",
  },
  {
    title: "Article 9 — Données personnelles",
    content:
      "Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes des clients. Elles ne sont pas transmises à des tiers. Conformément au RGPD, tout client peut demander la suppression de ses données à contact@altéra.fr.",
  },
  {
    title: "Article 10 — Droit applicable",
    content:
      "Les présentes CGV sont soumises au droit français. Tout litige sera soumis aux tribunaux compétents de Reims (Marne), Grand Est.",
  },
];

const CGVPage = () => {
  const cgvData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Conditions Générales de Vente",
    "description": "Conditions Générales de Vente de ALTÉRA Digital Studio. Informations sur nos services, tarifs, délais de livraison et responsabilités.",
    "publisher": {
      "@type": "Organization",
      "name": "ALTÉRA"
    }
  };

  return (
  <Layout>
    <SEO 
      title="Conditions Générales de Vente"
      description="Conditions Générales de Vente de ALTÉRA Digital Studio. Informations sur nos services, tarifs, délais de livraison et responsabilités."
      url="https://altera.fr/cgv"
    />
    <StructuredData data={cgvData} />
    <section className="py-10 md:py-20" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
          ← Retour à l'accueil
        </Link>
        <h1 className="heading-display text-xl sm:text-2xl md:text-3xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-5xl mb-3">Conditions Générales de Vente</h1>
        <p className="font-dm mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
          ALTÉRA Digital Studio — En vigueur au 1er janvier 2026
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.title} className="rounded-xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <h2 className="font-dm font-semibold text-lg mb-3" style={{ color: "#1DB954" }}>{article.title}</h2>
              {article.content && <p className="font-dm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{article.content}</p>}
              {article.list && (
                <ul className="space-y-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {article.list.map((item) => (
                    <li key={item} className="font-dm">• {item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <p className="font-dm mt-10" style={{ color: "rgba(255,255,255,0.8)" }}><strong>Contact :</strong> contact@altéra.fr</p>
      </div>
    </section>
  </Layout>
  );
};

export default CGVPage;
