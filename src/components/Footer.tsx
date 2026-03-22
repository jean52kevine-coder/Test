import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import AlteraLogo from "@/components/AlteraLogo";
import BlurReveal from "@/components/animations/BlurReveal";

const services = [
  { text: "Site Vitrine", to: "/services/site-vitrine" },
  { text: "Site E-commerce", to: "/services/site-ecommerce" },
  { text: "Maintenance", to: "/services/maintenance" },
  { text: "Tous nos services", to: "/services" },
];

const about = [
  { text: "Accueil", to: "/" },
  { text: "Pourquoi un site", to: "/pourquoi-un-site" },
  { text: "Tarifs", to: "/tarifs" },
  { text: "Contact", to: "/contact" },
  { text: "CGV", to: "/cgv" },
];

const contactInfo = [
  { icon: Mail, text: "contact@altéra.fr", href: "mailto:contact@altera.fr" },
  { icon: Phone, text: "06 52 55 42 83", href: "tel:+33652554283" },
  { icon: MapPin, text: "Reims, Grand Est", href: undefined },
];

const Footer = () => (
  <footer className="relative border-t" style={{ borderColor: "hsl(var(--border-green))", backgroundColor: "hsl(var(--card-dark))" }}>
    <div className="section-container py-14 md:py-20">
      <BlurReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div className="">
          <div className="flex items-center gap-2 mb-4">
            <AlteraLogo size="sm" />
          </div>
          <p className="font-dm text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
            Agence web française spécialisée dans la création de sites modernes pour artisans, commerçants et PME. Livraison en 14 jours, prix fixes, design sur-mesure.
          </p>
        </div>

        {/* Services */}
        <div className="">
          <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">Nos Services</h4>
          <ul className="space-y-3">
            {services.map(({ text, to }) => (
              <li key={to}>
                <Link to={to} className="font-dm text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="">
          <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">Navigation</h4>
          <ul className="space-y-3">
            {about.map(({ text, to }) => (
              <li key={to}>
                <Link to={to} className="font-dm text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="">
          <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">Contact</h4>
          <ul className="space-y-4">
            {contactInfo.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5"
                  style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
                >
                  <Icon size={14} className="text-primary" />
                </div>
                {href ? (
                  <a href={href} className="font-dm text-sm text-muted-foreground hover:text-primary transition-colors">
                    {text}
                  </a>
                ) : (
                  <span className="font-dm text-sm text-muted-foreground">{text}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="font-dm text-xs text-muted-foreground/60 mt-5">Réponse sous 24h</p>
        </div>
      </div>
      </BlurReveal>

      {/* Bottom bar */}
      <div
        className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        style={{ borderTop: "1px solid hsl(var(--border-green))" }}
      >
        <p className="font-dm text-xs text-muted-foreground">
          Tous droits réservés.
        </p>
        <p className="font-dm text-xs text-muted-foreground">
          © 2026 ALTÉRA
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
