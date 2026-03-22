"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PopularBadge from "@/components/PopularBadge";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Tarifs Transparents",
  description = "Des prix clairs, tout inclus. Choisissez la formule adaptée à vos besoins.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isMobile = useIsMobile();
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "#1DB954",
          "#16a34a",
          "#22c55e",
          "#4ade80",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="heading-display text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto font-dm">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-10">
        <span className={cn("text-sm font-medium", isMonthly ? "text-foreground" : "text-muted-foreground")}>
          Paiement unique
        </span>
        <Switch
          ref={switchRef}
          checked={!isMonthly}
          onCheckedChange={handleToggle}
        />
        <span className={cn("text-sm font-medium", !isMonthly ? "text-foreground" : "text-muted-foreground")}>
          Avec maintenance <span className="text-primary">(-10%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className={cn(
              "relative rounded-2xl p-6 flex flex-col",
              "bg-card border border-border",
              plan.isPopular && "ring-2 ring-primary"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PopularBadge />
              </div>
            )}

            <div className="mb-6 pt-2">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <NumberFlow
                  value={parseInt(isMonthly ? plan.price : plan.yearlyPrice)}
                  format={{ style: "decimal" }}
                  transformTiming={{
                    duration: 400,
                    easing: "ease-out",
                  }}
                  className="text-4xl font-bold text-primary heading-display"
                />
                <span className="text-xl text-primary">€</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm ml-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {isMonthly ? "paiement unique" : "avec maintenance annuelle"}
              </p>
            </div>

            <ul className="space-y-3 flex-1 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={plan.href}
              className={cn(
                buttonVariants({
                  variant: plan.isPopular ? "default" : "outline-solid",
                  size: "lg",
                }),
                "w-full font-bold"
              )}
            >
              {plan.buttonText}
            </Link>

            <p className="text-xs text-center text-muted-foreground mt-3">
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
