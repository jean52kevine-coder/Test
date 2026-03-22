import { Calendar, Palette, Code, Rocket, Headphones } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import BlurReveal from "@/components/animations/BlurReveal";

const timelineData = [
  {
    id: 1,
    title: "Découverte",
    date: "Jour 1-2",
    content: "Premier échange pour comprendre votre activité, vos objectifs et votre marché cible.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Jour 3-5",
    content: "Création de maquettes sur-mesure validées par vous avant tout développement.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Développement",
    date: "Jour 6-12",
    content: "Code propre, rapide et optimisé SEO. Technologies modernes pour des performances maximales.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Livraison",
    date: "Jour 13-14",
    content: "Mise en ligne complète, tests finaux et optimisations de dernière minute.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Support",
    date: "30 jours",
    content: "Tests finaux, remise des accès et support inclus pour vous accompagner après le lancement.",
    category: "Support",
    icon: Headphones,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-8">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            NOTRE <span className="text-primary">PROCESSUS</span>
          </h2>
          <p className="font-dm text-muted-foreground max-w-xl mx-auto">
            Un workflow transparent de A à Z. Cliquez sur les étapes pour en savoir plus.
          </p>
        </BlurReveal>

        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
};

export default ProcessTimeline;
