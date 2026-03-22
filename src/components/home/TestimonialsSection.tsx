import { Star } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  { text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois.", name: "Marc D.", role: "Plombier · Reims (51)", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne.", name: "Isabelle K.", role: "Fleuriste · Troyes (10)", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { text: "Les gens cherchaient mon restaurant et ne me trouvaient pas. Depuis le site, je suis premier sur Google Maps dans mon quartier.", name: "Karim B.", role: "Restaurateur · Metz (57)", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { text: "J'ai arrêté de payer des plateformes de RDV hors de prix. Mon site gère tout ça maintenant. Rentabilisé en moins de 2 mois.", name: "Sophie L.", role: "Ostéopathe · Nancy (54)", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { text: "En 14 jours comme promis, mon site était en ligne. Mes prospects voient mes réalisations avant même de m'appeler.", name: "Thomas R.", role: "Menuisier · Charleville-Mézières (08)", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { text: "Je vends maintenant dans toute la France depuis mon atelier d'Épinal. Le site e-commerce a ouvert un marché que je n'imaginais pas possible.", name: "Laura M.", role: "Boutique · Épinal (88)", image: "https://randomuser.me/api/portraits/women/26.jpg" },
  { text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois.", name: "Marc D.", role: "Plombier · Reims (51)", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne.", name: "Isabelle K.", role: "Fleuriste · Troyes (10)", image: "https://randomuser.me/api/portraits/women/58.jpg" },
  { text: "Les gens cherchaient mon restaurant et ne me trouvaient pas. Depuis le site, je suis premier sur Google Maps dans mon quartier.", name: "Karim B.", role: "Restaurateur · Metz (57)", image: "https://randomuser.me/api/portraits/men/64.jpg" },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

const TestimonialsSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a] via-[#0d130d]/70 to-[#0a0f0a]" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 20%, transparent 80%, hsl(var(--background)) 100%)" }}
      />
    </div>

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
        >
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          ILS NOUS FONT{" "}<span className="text-primary whitespace-nowrap">CONFIANCE</span>
        </h2>
      </BlurReveal>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
        <TestimonialsColumn testimonials={col1} duration={15} className="hidden md:block" />
        <TestimonialsColumn testimonials={col2} duration={19} />
        <TestimonialsColumn testimonials={col3} duration={17} className="hidden lg:block" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;