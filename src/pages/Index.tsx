import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import HeroHome from "@/components/home/HeroHome";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyUs from "@/components/home/WhyUs";
import DistinguishSection from "@/components/home/DistinguishSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import PricingCards from "@/components/home/PricingCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBlock from "@/components/home/CtaBlock";

const Index = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ALTÉRA Digital Studio",
    "description": "Agence web spécialisée dans la création de sites pour artisans, commerçants et PME du Grand Est",
    "url": "https://altera.fr",
    "telephone": "+33652554283",
    "email": "contact@altera.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Reims",
      "addressRegion": "Grand Est",
      "addressCountry": "FR"
    },
    "areaServed": [
      "Reims", "Metz", "Nancy", "Troyes",
      "Strasbourg", "Charleville-Mézières",
      "Épinal", "Colmar", "Mulhouse"
    ],
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [],
    "offers": [
      {
        "@type": "Offer",
        "name": "Site Vitrine",
        "price": "497",
        "priceCurrency": "EUR",
        "description": "Création de site vitrine sur-mesure, livraison 14 jours"
      },
      {
        "@type": "Offer",
        "name": "Site E-commerce",
        "price": "747",
        "priceCurrency": "EUR",
        "description": "Création de boutique en ligne complète"
      },
      {
        "@type": "Offer",
        "name": "Maintenance Web",
        "price": "29",
        "priceCurrency": "EUR",
        "description": "Maintenance mensuelle sans engagement"
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Agence Web Grand Est | Sites à partir de 497€"
        description="Agence web française spécialisée dans la création de sites pour artisans, commerçants et PME du Grand Est. Site vitrine 497€, e-commerce 747€. Livraison en 14 jours, design sur-mesure. Devis gratuit."
        keywords="agence web Grand Est, création site web Reims, site vitrine artisan, site web PME, agence web Metz, création site Nancy, site web pas cher Grand Est"
        url="https://altera.fr"
      />
      <StructuredData data={localBusinessData} />
      <HeroHome />
    <ServicesShowcase />
    <WhyUs />
    <DistinguishSection />
    <ProcessSteps />
    <PricingCards />
      <TestimonialsSection />
      <CtaBlock />
    </Layout>
  );
};

export default Index;
