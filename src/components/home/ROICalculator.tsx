import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Users, DollarSign } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import NumberFlow from "@number-flow/react";

const ROICalculator = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(500);
  const [conversionRate, setConversionRate] = useState(3);
  const [avgOrderValue, setAvgOrderValue] = useState(80);

  const results = useMemo(() => {
    const monthlyLeads = Math.round(monthlyVisitors * (conversionRate / 100));
    const monthlyRevenue = monthlyLeads * avgOrderValue;
    const yearlyRevenue = monthlyRevenue * 12;
    const roi = Math.round(((yearlyRevenue - 497) / 497) * 100);
    return { monthlyLeads, monthlyRevenue, yearlyRevenue, roi };
  }, [monthlyVisitors, conversionRate, avgOrderValue]);

  return (
    <section 
      className="py-[100px] relative overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #0a0f0a 0%, #0d1a12 50%, #0a0f0a 100%)" 
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)",
            top: "20%",
            left: "-10%",
          }}
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(29,185,84,0.06) 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
          }}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="text-primary" size={18} />
            <span className="text-primary font-semibold text-sm">Calculateur de ROI</span>
          </div>
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            ESTIMEZ VOTRE <span className="text-primary">RETOUR SUR INVESTISSEMENT</span>
          </h2>
          <p className="font-dm text-[16px] max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Découvrez combien un site web professionnel peut rapporter à votre entreprise.
          </p>
        </BlurReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 p-8 rounded-2xl"
            style={{ 
              backgroundColor: "rgba(17, 24, 17, 0.8)",
              border: "1px solid rgba(29,185,84,0.2)",
              backdropFilter: "blur(10px)"
            }}
          >
            {/* Visitors slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-dm font-medium text-white flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  Visiteurs mensuels
                </label>
                <span className="text-primary font-bold text-lg">{monthlyVisitors}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(145, 63%, 42%) 0%, hsl(145, 63%, 42%) ${(monthlyVisitors / 5000) * 100}%, rgba(255,255,255,0.1) ${(monthlyVisitors / 5000) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>100</span>
                <span>5000</span>
              </div>
            </div>

            {/* Conversion rate slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-dm font-medium text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  Taux de conversion
                </label>
                <span className="text-primary font-bold text-lg">{conversionRate}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(145, 63%, 42%) 0%, hsl(145, 63%, 42%) ${(conversionRate / 10) * 100}%, rgba(255,255,255,0.1) ${(conversionRate / 10) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1%</span>
                <span>10%</span>
              </div>
            </div>

            {/* Order value slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-dm font-medium text-white flex items-center gap-2">
                  <DollarSign size={16} className="text-primary" />
                  Panier moyen
                </label>
                <span className="text-primary font-bold text-lg">{avgOrderValue}€</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(145, 63%, 42%) 0%, hsl(145, 63%, 42%) ${((avgOrderValue - 20) / 480) * 100}%, rgba(255,255,255,0.1) ${((avgOrderValue - 20) / 480) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>20€</span>
                <span>500€</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Leads / mois", value: results.monthlyLeads, suffix: "", icon: Users },
              { label: "CA mensuel", value: results.monthlyRevenue, suffix: "€", icon: TrendingUp },
              { label: "CA annuel", value: results.yearlyRevenue, suffix: "€", icon: DollarSign, highlight: true },
              { label: "ROI estimé", value: results.roi, suffix: "%", icon: Calculator, highlight: true },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  stat.highlight 
                    ? "bg-linear-to-br from-primary/20 to-primary/5 border-primary/30" 
                    : "bg-white/5 border-white/10"
                }`}
                style={{ border: "1px solid" }}
              >
                <stat.icon className={`mb-3 ${stat.highlight ? "text-primary" : "text-white/50"}`} size={20} />
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.highlight ? "text-primary" : "text-white"}`}>
                  <NumberFlow
                    value={stat.value}
                    format={{ notation: stat.value > 9999 ? "compact" : "standard" }}
                    transformTiming={{ duration: 400, easing: "ease-out" }}
                  />
                  {stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground font-dm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-muted-foreground font-dm"
        >
          * Estimation basée sur des moyennes sectorielles. Les résultats réels peuvent varier.
        </motion.p>
      </div>
    </section>
  );
};

export default ROICalculator;
