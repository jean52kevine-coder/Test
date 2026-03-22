"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import PopularBadge from "@/components/PopularBadge";

interface Feature {
  name: string;
  essential: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
}

interface ComparisonPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

interface PricingComparisonProps {
  plans: ComparisonPlan[];
  features: Feature[];
  title?: string;
  description?: string;
}

export function PricingComparison({
  plans,
  features,
  title = "Comparez nos formules",
  description = "Trouvez la formule qui correspond à vos besoins",
}: PricingComparisonProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "string") {
      return <span className="text-sm text-foreground">{value}</span>;
    }
    return value ? (
      <Check className="w-5 h-5 text-primary mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
    );
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="heading-display text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-muted-foreground font-dm max-w-xl mx-auto">{description}</p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[640px]">
          {/* Plans Header */}
          <thead>
            <tr>
              <th className="text-left p-4 w-1/4"></th>
              {plans.map((plan, i) => (
                <th
                  key={plan.name}
                  className={cn(
                    "p-6 text-center relative",
                    plan.isPopular && "bg-primary/5 rounded-t-2xl"
                  )}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2"><PopularBadge /></div>
                  )}
                  <div className="font-display font-black text-lg mb-2">{plan.name}</div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}€</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                  <Link
                    to={plan.href}
                    className={cn(
                      "inline-flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-semibold transition-all",
                      plan.isPopular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border hover:border-primary hover:text-primary"
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>

          {/* Features Body */}
          <tbody>
            {features.map((feature, i) => (
              <tr
                key={feature.name}
                className={cn(
                  "border-t border-border/50",
                  i % 2 === 0 && "bg-muted/20"
                )}
              >
                <td className="p-4 text-sm font-medium text-foreground/80">
                  {feature.name}
                </td>
                <td className={cn("p-4 text-center")}>
                  {renderValue(feature.essential)}
                </td>
                <td className={cn("p-4 text-center", plans[1]?.isPopular && "bg-primary/5")}>
                  {renderValue(feature.professional)}
                </td>
                <td className={cn("p-4 text-center")}>
                  {renderValue(feature.premium)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
