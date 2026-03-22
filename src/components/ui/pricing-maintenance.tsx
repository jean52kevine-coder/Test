"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import PopularBadge from "@/components/PopularBadge";

interface MaintenancePlan {
  name: string;
  price: number;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const maintenancePlans: MaintenancePlan[] = [
  {
    name: "ESSENTIELLE",
    price: 29,
    features: [
      "Mises à jour de sécurité",
      "Sauvegarde hebdomadaire",
      "Support par email",
      "Monitoring de base",
      "Rapport trimestriel",
    ],
    description: "L'essentiel pour garder votre site protégé et stable",
    buttonText: "Souscrire",
    href: "/contact?service=maintenance",
    isPopular: false,
  },
  {
    name: "PROFESSIONNELLE",
    price: 39,
    features: [
      "Mises à jour bi-mensuelles",
      "Sauvegardes quotidiennes",
      "Support email & téléphone",
      "Monitoring avancé",
      "Rapport mensuel",
      "Modifications mineures illimitées",
    ],
    description: "La formule la plus choisie pour déléguer sereinement",
    buttonText: "Souscrire",
    href: "/contact?service=maintenance",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: 49,
    features: [
      "Mises à jour hebdomadaires",
      "Sauvegardes temps réel",
      "Support prioritaire 7j/7",
      "Toutes modifications incluses",
      "Monitoring 24/7",
      "Rapport mensuel détaillé",
      "Optimisation SEO mensuelle",
    ],
    description: "Une prise en charge complète, sans compromis",
    buttonText: "Souscrire",
    href: "/contact?service=maintenance",
    isPopular: false,
  },
];

export function PricingMaintenance() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {maintenancePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <PopularBadge />
              </div>
            )}
            <div
              className={cn(
                "relative w-full rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 group",
                plan.isPopular
                  ? "bg-[#0f1f0f] border border-[#1DB954]/50 shadow-[0_0_60px_rgba(29,185,84,0.12)] pt-10"
                  : "bg-[#0d130d] border border-[#1a2e1a] hover:border-[#1DB954]/30 hover:shadow-[0_0_40px_rgba(29,185,84,0.08)]"
              )}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#1DB954]/4 via-transparent to-transparent pointer-events-none" />

              <div className="relative">
                <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <NumberFlow
                    value={plan.price}
                    format={{ style: "decimal" }}
                    transformTiming={{ duration: 500, easing: "ease-out" }}
                    className="text-white text-5xl font-black tabular-nums"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  />
                  <span className="text-white text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>€</span>
                  <span className="text-white/40 text-base mb-2">/mois</span>
                </div>
                <p className="text-white/35 text-xs mt-1">{plan.description}</p>
              </div>

              <div className="h-px bg-linear-to-r from-transparent via-[#1DB954]/20 to-transparent" />

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Check size={14} className="text-[#1DB954] mt-0.5 shrink-0" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                className={cn(
                  "group relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] overflow-hidden",
                  plan.isPopular
                    ? "bg-[#1DB954] text-black border border-[#1DB954] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)]"
                    : "border border-[#1DB954]/40 text-[#1DB954] hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954]"
                )}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="relative">{plan.buttonText}</span>
                <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
