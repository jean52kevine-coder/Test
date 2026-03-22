import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  { text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois.", name: "Marc D.", role: "Plombier, Reims (51)", avatar: "MD" },
  { text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne.", name: "Isabelle K.", role: "Fleuriste, Troyes (10)", avatar: "IK" },
  { text: "Les gens cherchaient mon restaurant et ne me trouvaient pas. Depuis le site, je suis premier sur Google Maps dans mon quartier.", name: "Karim B.", role: "Restaurateur, Metz (57)", avatar: "KB" },
  { text: "J'ai arrêté de payer des plateformes de RDV hors de prix. Mon site gère tout ça maintenant. Rentabilisé en moins de 2 mois.", name: "Sophie L.", role: "Ostéopathe, Nancy (54)", avatar: "SL" },
  { text: "En 14 jours comme promis, mon site était en ligne. Mes prospects voient mes réalisations avant même de m'appeler.", name: "Thomas R.", role: "Menuisier, Charleville-Mézières (08)", avatar: "TR" },
  { text: "Je vends maintenant dans toute la France depuis mon atelier d'Épinal. Le site e-commerce a ouvert un marché que je n'imaginais pas possible.", name: "Laura M.", role: "Boutique, Épinal (88)", avatar: "LM" },
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <motion.div
    className="relative flex-shrink-0 rounded-2xl min-w-[320px] max-w-[360px] group"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div
      className="relative z-10 rounded-2xl p-6 h-full transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, rgba(29,185,84,0.08) 0%, rgba(17,24,17,0.95) 50%)",
        border: "1px solid rgba(29,185,84,0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <Quote
        className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors"
        size={32}
      />

      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} className="text-primary fill-primary" size={16} />
        ))}
      </div>

      <p className="font-dm text-[15px] text-white italic leading-relaxed mb-6">"{t.text}"</p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary"
          style={{ background: "rgba(29,185,84,0.15)" }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
          <p className="font-dm text-[13px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsCarousel = () => (
  <section
    className="py-[100px] overflow-hidden relative"
    style={{
      background: "linear-gradient(180deg, #0d130d 0%, #0a1210 50%, #0a0f0a 100%)",
    }}
  >
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-full h-[1px] top-0"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)" }}
      />
      <div
        className="absolute w-full h-[1px] bottom-0"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)" }}
      />
    </div>

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </motion.div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          CE QU'EN DISENT <span className="text-primary">NOS CLIENTS</span>
        </h2>
      </BlurReveal>
    </div>

    {/* Row 1 - scrolling left */}
    <div className="mb-6">
      <Marquee speed={35} pauseOnHover>
        {testimonials.map((t, i) => <Card key={`r1-${i}`} t={t} />)}
      </Marquee>
    </div>

    {/* Row 2 - scrolling right (reverse) */}
    <Marquee speed={28} pauseOnHover reverse>
      {testimonials.map((t, i) => <Card key={`r2-${i}`} t={t} />)}
    </Marquee>
  </section>
);

export default TestimonialsCarousel;
