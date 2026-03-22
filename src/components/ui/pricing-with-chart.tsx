"use client";

import { Link } from "react-router-dom";
import { CheckCircleIcon, Globe, ShoppingCart, ArrowRight } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const ctaPrimary =
  "group relative inline-flex items-center justify-center gap-2.5 bg-[#1DB954] hover:bg-[#17a349] text-black font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] active:scale-[0.98] overflow-hidden text-sm";

const ctaSecondary =
  "group inline-flex items-center justify-center gap-2.5 border border-white/15 hover:border-[#1DB954]/40 text-white/70 hover:text-white font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/3 text-sm backdrop-blur-xs";

export function PricingWithChart() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        <div className="relative lg:col-span-2 bg-[#0d130d] border border-[#1a2e1a] rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#1DB954]/30 hover:shadow-[0_0_40px_rgba(29,185,84,0.08)] group">
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#1DB954]/4 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[#1DB954]/10">
              <Globe className="text-[#1DB954]" size={20} />
            </div>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Site Vitrine
            </p>
            <div className="flex items-end gap-1">
              <span className="text-white text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>497€</span>
            </div>
            <p className="text-white/35 text-xs mt-1">Paiement unique · Idéal pour artisans et indépendants</p>
          </div>
          <div className="h-px bg-linear-to-r from-transparent via-[#1DB954]/20 to-transparent" />
          <ul className="flex flex-col gap-3 flex-1">
            {[
              "Design 100% sur-mesure",
              "Jusqu'à 5 pages",
              "Responsive mobile",
              "SEO optimisé",
              "Formulaire de contact",
              "Hébergement 1 an inclus",
              "Livraison en 14 jours",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <CheckCircleIcon className="text-[#1DB954] mt-0.5 shrink-0" size={14} />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact?service=vitrine" className={ctaSecondary} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span>Choisir Vitrine</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 opacity-50 group-hover:opacity-100" />
          </Link>
        </div>

        <div className="relative lg:col-span-3 flex flex-col">
          <div className="relative flex flex-col">
            <div className="flex justify-center -mb-px">
              <div className="inline-flex items-center gap-2 bg-[#0a0f0a] border border-[#1DB954]/60 rounded-t-xl px-5 py-2 shadow-[0_0_20px_rgba(29,185,84,0.25)]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
                </span>
                <span className="text-[#1DB954] text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  LE PLUS CHOISI
                </span>
              </div>
            </div>
          <div className="relative w-full border-2 border-[#1DB954]/50 rounded-2xl rounded-tl-none bg-[#0d1a0d] p-8 flex flex-col gap-6 shadow-[0_0_60px_rgba(29,185,84,0.12)] hover:shadow-[0_0_80px_rgba(29,185,84,0.18)] transition-shadow duration-300 group">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#1DB954]/6 via-transparent to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[#1DB954]/10">
                  <ShoppingCart className="text-[#1DB954]" size={20} />
                </div>
                <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Site E-commerce
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-white text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>747€</span>
                </div>
                <p className="text-white/35 text-xs mt-1">Paiement unique · Pour vendre en ligne efficacement</p>
              </div>
              <div className="flex-1 min-w-0">
                <ROIChart />
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#1DB954]/20 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Boutique complète",
                "Jusqu'à 50 produits",
                "Paiement sécurisé Stripe",
                "Gestion des stocks",
                "Responsive mobile",
                "SEO avancé",
                "Support inclus",
                "Hébergement 1 an inclus",
                "Livraison en 14 jours",
                "Support dédié",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <CheckCircleIcon className="text-[#1DB954] shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link to="/contact?service=ecommerce" className={ctaPrimary} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative">Choisir E-commerce</span>
                <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <span className="text-xs text-white/50 font-dm">Paiement en 3x sans frais disponible</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ROIChart() {
  const chartData = [
    { month: "Mois 1", clients: 2 },
    { month: "Mois 2", clients: 5 },
    { month: "Mois 3", clients: 9 },
    { month: "Mois 4", clients: 14 },
    { month: "Mois 5", clients: 18 },
    { month: "Mois 6", clients: 25 },
    { month: "Mois 7", clients: 30 },
    { month: "Mois 8", clients: 38 },
    { month: "Mois 9", clients: 44 },
    { month: "Mois 10", clients: 52 },
    { month: "Mois 11", clients: 60 },
    { month: "Mois 12", clients: 72 },
  ];

  const chartConfig = {
    clients: {
      label: "Nouveaux clients",
      color: "hsl(145 63% 42%)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="p-0 pb-2">
        <CardTitle className="text-sm font-dm text-foreground">ROI estimé</CardTitle>
        <CardDescription className="text-xs font-dm">Nouveaux clients sur 12 mois*</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[140px] w-full">
          <LineChart data={chartData} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="hsl(var(--border-green))" strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.replace("Mois ", "M")} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="clients" type="monotone" stroke="hsl(145 63% 42%)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "hsl(145 63% 42%)" }} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
