import { motion } from "framer-motion";
import { Star } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const testimonials = [
{
  emoji: "🔧",
  text: "Avant j'avais aucune présence en ligne. Maintenant j'ai 4 à 5 demandes de devis par semaine via mon site. Ça a transformé mon activité en 3 mois.",
  name: "Marc D.",
  role: "Plombier · Reims (51)",
  badge: "Site Vitrine"
},
{
  emoji: "🌸",
  text: "Mes clientes trouvent maintenant ma boutique sur Google. Les commandes pour Noël et la Saint-Valentin ont explosé depuis la mise en ligne.",
  name: "Isabelle K.",
  role: "Fleuriste · Troyes (10)",
  badge: "Site Vitrine"
},
{
  emoji: "🛍️",
  text: "Je vends maintenant dans toute la France depuis mon atelier d'Épinal. Le site e-commerce a ouvert un marché que je n'imaginais pas possible.",
  name: "Laura M.",
  role: "Boutique · Épinal (88)",
  badge: "Site E-commerce"
}];


const TrustSection = () =>
<section
  className="py-[100px] relative overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #0a0f0a 0%, #0d1410 50%, #0a0f0a 100%)"
  }}>
  
    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </div>
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          ILS NOUS FONT <span className="text-primary">CONFIANCE</span>
        </h2>
      </BlurReveal>

      <ScaleSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((t, i) =>
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative rounded-2xl">
          
              <div
            className="relative z-10 rounded-2xl p-7 h-full flex flex-col"
            style={{
              backgroundColor: "#111811",
              border: "1px solid #1a2e1a"
            }}>
            
                <span className="text-3xl mb-4 block">{t.emoji}</span>
                <p className="font-dm text-[15px] text-white italic leading-relaxed mb-5 flex-1">
                  "{t.text}"
                </p>
                <div className="mb-4">
                  <span
                className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full text-primary"
                style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)" }}>
                
                    {t.badge}
                  </span>
                </div>
                <div>
                  <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
                  <p className="font-dm text-[13px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
        )}
        </StaggerContainer>
        <p className="text-center mt-6 font-dm text-[11px] text-muted-foreground">
        </p>
      </ScaleSection>
    </div>
  </section>;


export default TrustSection;