import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
  className?: string;
}

export const CtaSection = ({
  title = "Prêt à passer à l'action ?",
  description = "Échange découverte offert — par email ou par appel.",
  buttonText = "Démarrer mon projet",
  buttonUrl = "/contact",
  items = [
    "Livraison en 14 jours",
    "Support dédié",
    "Prix fixe, sans surprise",
    "Satisfaction garantie",
    "Support inclus",
  ],
  className,
}: CtaSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="section-container">
        <ScaleSection>
          <div className="relative overflow-hidden rounded-2xl border border-[#1a2e1a] bg-[#0d130d] p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/8 via-transparent to-[#1DB954]/8" />
            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <BlurReveal>
                  <h2 className="heading-display text-2xl md:text-4xl mb-4 text-foreground">
                    {title}
                  </h2>
                </BlurReveal>
                <BlurReveal delay={0.15}>
                  <p className="text-muted-foreground text-base md:text-lg mb-6">
                    {description}
                  </p>
                </BlurReveal>
                <BlurReveal delay={0.3}>
                  <Link
                    to={buttonUrl}
                    className="group relative inline-flex items-center gap-2.5 bg-[#1DB954] hover:bg-[#17a349] text-black font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] active:scale-[0.98] overflow-hidden text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    <span className="relative">{buttonText}</span>
                    <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </BlurReveal>
              </div>

              <BlurReveal delay={0.2} direction="right" className="flex-shrink-0">
                <ul className="grid grid-cols-1 gap-3">
                  {items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </BlurReveal>
            </div>
          </div>
        </ScaleSection>
      </div>
    </section>
  );
};
