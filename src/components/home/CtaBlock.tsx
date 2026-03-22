import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";

const CtaBlock = () => (
  <section
    className="relative py-28 overflow-hidden"
    style={{ background: "linear-gradient(160deg, hsl(145 28% 8%) 0%, hsl(var(--background)) 60%)", borderTop: "1px solid hsl(var(--border-green))" }}
  >
    {/* Glow */}
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.07), transparent 70%)", filter: "blur(60px)" }}
    />

    <div className="section-container relative z-10">
      <BlurReveal className="text-center">
        <div className="relative inline-block rounded-2xl p-12 max-w-2xl mx-auto">
          <GlowingEffect spread={60} glow proximity={100} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <div className="relative z-10">
            <h2 className="heading-display mb-6" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
              PRÊT À LANCER<br />
              <span className="text-primary">VOTRE PROJET ?</span>
            </h2>

            <p className="font-dm text-lg mb-10 mx-auto max-w-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
              Échange découverte offert — par email ou par appel.
            </p>

            <Link to="/contact" className="btn-primary text-lg px-10 py-4 rounded-[10px] font-bold">
              Démarrer mon projet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <div className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]" style={{ color: "hsl(var(--muted-foreground) / 0.6)" }}>
              <span>✓ Réponse sous 24h</span>
              <span>✓ Sans engagement</span>
              <span>✓ Devis personnalisé</span>
            </div>
          </div>
        </div>
      </BlurReveal>
    </div>
  </section>
);

export default CtaBlock;
