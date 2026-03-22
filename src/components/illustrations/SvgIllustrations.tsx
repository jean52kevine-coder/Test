import { motion } from "framer-motion";

/** Hero laptop mockup with floating badges */
export const HeroLaptopIllustration = () => (
  <motion.div
    className="relative w-full max-w-[480px] mx-auto"
    animate={{ rotateY: [-5, 5, -5] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ perspective: 800, transformStyle: "preserve-3d" }}
  >
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_0_30px_rgba(29,185,84,0.15)]">
      {/* Laptop body */}
      <rect x="60" y="20" width="360" height="230" rx="12" fill="#111811" stroke="#1a2e1a" strokeWidth="1.5" />
      {/* Screen */}
      <rect x="72" y="32" width="336" height="206" rx="4" fill="#0a0f0a" />
      
      {/* Navbar inside screen */}
      <rect x="72" y="32" width="336" height="28" rx="4" fill="#111811" />
      <circle cx="88" cy="46" r="6" fill="#1DB954" opacity="0.6" />
      <rect x="102" y="42" width="40" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="150" y="42" width="30" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="188" y="42" width="30" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="350" y="40" width="46" height="12" rx="6" fill="#1DB954" />

      {/* Hero section inside screen */}
      <rect x="120" y="80" width="160" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
      <rect x="140" y="98" width="120" height="8" rx="4" fill="#1DB954" opacity="0.5" />
      <rect x="155" y="114" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="170" y="128" width="60" height="14" rx="7" fill="#1DB954" opacity="0.3" />

      {/* Cards row */}
      <rect x="86" y="158" width="96" height="68" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="1" />
      <rect x="94" y="168" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="94" y="180" width="80" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="94" y="188" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <circle cx="104" y="208" r="4" fill="#1DB954" opacity="0.3" />

      <rect x="192" y="158" width="96" height="68" rx="6" fill="#111811" stroke="#1DB954" strokeWidth="1" opacity="0.8" />
      <rect x="200" y="168" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="200" y="180" width="80" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="200" y="188" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <circle cx="210" cy="208" r="4" fill="#1DB954" opacity="0.5" />

      <rect x="298" y="158" width="96" height="68" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="1" />
      <rect x="306" y="168" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="306" y="180" width="80" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="306" y="188" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <circle cx="316" cy="208" r="4" fill="#1DB954" opacity="0.3" />

      {/* Laptop base */}
      <path d="M40 250 L60 250 L60 260 Q60 270 70 270 L410 270 Q420 270 420 260 L420 250 L440 250 Q450 250 448 260 L442 290 Q440 300 430 300 L50 300 Q40 300 38 290 L32 260 Q30 250 40 250Z" fill="#111811" stroke="#1a2e1a" strokeWidth="1" />
      <rect x="190" y="254" width="100" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
    </svg>

    {/* Floating badges */}
    <motion.div
      className="absolute top-3 right-3 font-dm text-[11px] font-bold px-3 py-1.5 rounded-full text-primary whitespace-nowrap"
      style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)", backdropFilter: "blur(8px)" }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      ✓ Livraison 14j
    </motion.div>

    <motion.div
      className="absolute bottom-3 left-3 font-dm text-[11px] font-bold px-3 py-1.5 rounded-full text-primary whitespace-nowrap"
      style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)", backdropFilter: "blur(8px)" }}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      ✓ 497€
    </motion.div>

    <motion.div
      className="absolute top-12 left-3 font-dm text-[11px] font-bold px-3 py-1.5 rounded-full text-primary whitespace-nowrap"
      style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)", backdropFilter: "blur(8px)" }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      ✓ SEO inclus
    </motion.div>
  </motion.div>
);

/** Vitrine mockup SVG for services card */
export const VitrineMockup = () => (
  <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[160px]">
    <rect width="300" height="160" rx="8" fill="#0d130d" />
    {/* Navbar */}
    <rect x="10" y="8" width="280" height="18" rx="4" fill="#111811" />
    <circle cx="22" cy="17" r="4" fill="#1DB954" opacity="0.5" />
    <rect x="32" y="14" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    <rect x="62" y="14" width="18" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
    <rect x="250" y="12" width="30" height="9" rx="4" fill="#1DB954" opacity="0.4" />
    {/* Hero */}
    <rect x="60" y="40" width="180" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
    <rect x="80" y="54" width="140" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <rect x="110" y="66" width="80" height="12" rx="6" fill="#1DB954" opacity="0.3" />
    {/* 3 sections */}
    <rect x="16" y="92" width="82" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="109" y="92" width="82" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="202" y="92" width="82" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="24" y="102" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="24" y="110" width="66" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
    <rect x="117" y="102" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="117" y="110" width="66" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
    <rect x="210" y="102" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="210" y="110" width="66" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
  </svg>
);

/** E-commerce mockup SVG for services card */
export const EcommerceMockup = () => (
  <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[160px]">
    <rect width="300" height="160" rx="8" fill="#0d130d" />
    {/* Navbar with cart */}
    <rect x="10" y="8" width="280" height="18" rx="4" fill="#111811" />
    <circle cx="22" cy="17" r="4" fill="#1DB954" opacity="0.5" />
    <rect x="32" y="14" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    {/* Cart icon */}
    <rect x="258" y="12" width="12" height="10" rx="2" stroke="#1DB954" strokeWidth="1" fill="none" />
    <circle cx="275" cy="14" r="5" fill="#1DB954" />
    <text x="275" y="17" textAnchor="middle" fill="#0a0f0a" fontSize="7" fontWeight="bold">3</text>
    {/* Product grid 2x2 */}
    <rect x="16" y="34" width="130" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="24" y="42" width="60" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="92" y="42" width="46" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    <rect x="92" y="52" width="30" height="4" rx="2" fill="#1DB954" opacity="0.4" />
    <rect x="92" y="62" width="40" height="10" rx="4" fill="#1DB954" opacity="0.2" />
    
    <rect x="154" y="34" width="130" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="162" y="42" width="60" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="230" y="42" width="46" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    <rect x="230" y="52" width="30" height="4" rx="2" fill="#1DB954" opacity="0.4" />
    <rect x="230" y="62" width="40" height="10" rx="4" fill="#1DB954" opacity="0.2" />
    
    <rect x="16" y="96" width="130" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="24" y="104" width="60" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="92" y="104" width="46" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    <rect x="92" y="114" width="30" height="4" rx="2" fill="#1DB954" opacity="0.4" />
    
    <rect x="154" y="96" width="130" height="56" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <rect x="162" y="104" width="60" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
    <rect x="230" y="104" width="46" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    <rect x="230" y="114" width="30" height="4" rx="2" fill="#1DB954" opacity="0.4" />
  </svg>
);

/** Maintenance dashboard mockup SVG */
export const MaintenanceMockup = () => (
  <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[160px]">
    <rect width="300" height="160" rx="8" fill="#0d130d" />
    {/* Header */}
    <rect x="10" y="8" width="280" height="18" rx="4" fill="#111811" />
    <rect x="20" y="14" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
    {/* Uptime bar */}
    <rect x="16" y="34" width="268" height="24" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <text x="24" y="50" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Uptime</text>
    <rect x="70" y="42" width="200" height="8" rx="4" fill="#1a2e1a" />
    <rect x="70" y="42" width="199" height="8" rx="4" fill="#1DB954" opacity="0.6" />
    <text x="276" y="50" fill="#1DB954" fontSize="7" textAnchor="end" fontWeight="bold">99.9%</text>
    {/* Line chart */}
    <rect x="16" y="66" width="268" height="56" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <polyline points="30,108 60,100 90,104 120,92 150,96 180,84 210,88 240,76 270,80" stroke="#1DB954" strokeWidth="1.5" fill="none" opacity="0.7" />
    <path d="M30,108 L60,100 L90,104 L120,92 L150,96 L180,84 L210,88 L240,76 L270,80 L270,118 L30,118 Z" fill="#1DB954" opacity="0.06" />
    {/* Bottom metrics */}
    <rect x="16" y="130" width="82" height="22" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <text x="57" y="144" textAnchor="middle" fill="#1DB954" fontSize="8" fontWeight="bold">Sécurité ✓</text>
    <rect x="109" y="130" width="82" height="22" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <text x="150" y="144" textAnchor="middle" fill="#1DB954" fontSize="8" fontWeight="bold">Vitesse ✓</text>
    <rect x="202" y="130" width="82" height="22" rx="4" fill="#111811" stroke="#1a2e1a" strokeWidth="0.5" />
    <text x="243" y="144" textAnchor="middle" fill="#1DB954" fontSize="8" fontWeight="bold">Backup ✓</text>
  </svg>
);



/** Bottom strip SVG for Site Vitrine offer card */
export const VitrineOfferStrip = () => (
  <svg viewBox="0 0 300 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[46px]">
    <rect width="300" height="46" fill="#0a0f0a" />
    <rect x="12" y="10" width="64" height="8" rx="4" fill="#1DB954" opacity="0.35" />
    <rect x="12" y="24" width="110" height="5" rx="2.5" fill="rgba(255,255,255,0.18)" />
    <rect x="128" y="24" width="76" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
    <rect x="214" y="10" width="74" height="24" rx="12" fill="rgba(29,185,84,0.2)" stroke="#1DB954" strokeWidth="0.8" />
    <text x="251" y="25" textAnchor="middle" fill="#1DB954" fontSize="9" fontWeight="700">Devis gratuit</text>
  </svg>
);

/** Bottom strip SVG for Site E-commerce offer card */
export const EcommerceOfferStrip = () => (
  <svg viewBox="0 0 300 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[46px]">
    <rect width="300" height="46" fill="#0a0f0a" />
    <rect x="12" y="10" width="52" height="8" rx="4" fill="#1DB954" opacity="0.32" />
    <rect x="12" y="24" width="92" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
    <rect x="112" y="24" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
    <rect x="192" y="9" width="96" height="26" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="0.8" />
    <circle cx="208" cy="22" r="5" fill="#1DB954" />
    <text x="224" y="25" fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="700">Paiement</text>
    <text x="280" y="25" textAnchor="end" fill="#1DB954" fontSize="8" fontWeight="700">Stripe ✓</text>
  </svg>
);

/** Bottom strip SVG for Maintenance offer card */
export const MaintenanceOfferStrip = () => (
  <svg viewBox="0 0 300 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[46px]">
    <rect width="300" height="46" fill="#0a0f0a" />
    <rect x="12" y="10" width="64" height="8" rx="4" fill="#1DB954" opacity="0.3" />
    <rect x="12" y="24" width="84" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
    <rect x="190" y="10" width="98" height="26" rx="6" fill="#111811" stroke="#1a2e1a" strokeWidth="0.8" />
    <rect x="198" y="19" width="82" height="8" rx="4" fill="#1a2e1a" />
    <rect x="198" y="19" width="76" height="8" rx="4" fill="#1DB954" opacity="0.6" />
    <text x="248" y="16" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="7">Uptime</text>
  </svg>
);

/** Stepper step animated icons */
export const StepChatIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
    <rect x="4" y="6" width="32" height="22" rx="6" stroke="#1DB954" strokeWidth="1.5" fill="none" />
    <rect x="10" y="13" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
    <rect x="10" y="19" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
    <path d="M12 28 L18 28 L15 34 Z" fill="#1DB954" opacity="0.5" />
    <motion.circle
      cx="32" cy="10" r="4" fill="#1DB954"
      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

export const StepDesignIcon = () => (
  <motion.svg
    viewBox="0 0 40 40" className="w-10 h-10" fill="none"
    animate={{ rotate: [-5, 5, -5] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M28 6 L34 12 L14 32 L8 32 L8 26 Z" stroke="#1DB954" strokeWidth="1.5" fill="none" />
    <line x1="24" y1="10" x2="30" y2="16" stroke="#1DB954" strokeWidth="1" opacity="0.4" />
    <rect x="6" y="34" width="28" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
  </motion.svg>
);

export const StepCodeIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
    <path d="M14 12 L6 20 L14 28" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M26 12 L34 20 L26 28" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="22" y1="8" x2="18" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    <motion.rect
      x="19" y="18" width="2" height="8" rx="1" fill="#1DB954"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

export const StepRocketIcon = () => (
  <motion.svg
    viewBox="0 0 40 40" className="w-10 h-10" fill="none"
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M20 4 C20 4 28 12 28 24 L24 28 L16 28 L12 24 C12 12 20 4 20 4Z" stroke="#1DB954" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="18" r="3" fill="#1DB954" opacity="0.4" />
    <path d="M16 28 L18 34 L20 30 L22 34 L24 28" stroke="#1DB954" strokeWidth="1" opacity="0.6" fill="none" />
    <motion.path
      d="M17 34 L20 38 L23 34"
      stroke="#1DB954" strokeWidth="1" fill="none"
      animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 2, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
  </motion.svg>
);

/** Hero illustration for SiteVitrinePage */
export const VitrineHeroIllustration = () => (
  <motion.div
    className="relative w-full max-w-[420px] mx-auto"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: "drop-shadow(0 0 20px rgba(29,185,84,0.12))" }}
  >
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="20" y="10" width="360" height="260" rx="12" fill="#111811" stroke="#1a2e1a" strokeWidth="1.5" />
      {/* Navbar */}
      <rect x="30" y="20" width="340" height="24" rx="6" fill="#0a0f0a" />
      <circle cx="46" cy="32" r="5" fill="#1DB954" opacity="0.5" />
      <text x="58" y="36" fill="rgba(255,255,255,0.4)" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Martin & Co</text>
      <rect x="310" y="26" width="50" height="12" rx="6" fill="#1DB954" opacity="0.4" />
      <text x="335" y="35" textAnchor="middle" fill="#0a0f0a" fontSize="7" fontWeight="bold">Contact</text>
      {/* Hero image placeholder */}
      <rect x="30" y="52" width="340" height="100" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="150" y="90" width="100" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="170" y="104" width="60" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      {/* Title */}
      <rect x="110" y="166" width="180" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
      <rect x="130" y="184" width="140" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
      {/* CTA */}
      <rect x="150" y="202" width="100" height="18" rx="9" fill="#1DB954" opacity="0.4" />
      <text x="200" y="215" textAnchor="middle" fill="#0a0f0a" fontSize="8" fontWeight="bold">Devis gratuit</text>
      {/* Footer info */}
      <rect x="80" y="236" width="240" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
      <rect x="120" y="248" width="160" height="4" rx="2" fill="rgba(255,255,255,0.03)" />
    </svg>
  </motion.div>
);

/** Hero illustration for SiteEcommercePage */
export const EcommerceHeroIllustration = () => (
  <motion.div
    className="relative w-full max-w-[420px] mx-auto"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: "drop-shadow(0 0 20px rgba(29,185,84,0.12))" }}
  >
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="20" y="10" width="360" height="280" rx="12" fill="#111811" stroke="#1a2e1a" strokeWidth="1.5" />
      {/* Navbar */}
      <rect x="30" y="20" width="340" height="24" rx="6" fill="#0a0f0a" />
      <circle cx="46" cy="32" r="5" fill="#1DB954" opacity="0.5" />
      <rect x="58" y="28" width="40" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      {/* Cart with badge */}
      <rect x="338" y="24" width="16" height="14" rx="3" stroke="#1DB954" strokeWidth="1" fill="none" />
      <circle cx="350" cy="22" r="6" fill="#1DB954" />
      <text x="350" y="25" textAnchor="middle" fill="#0a0f0a" fontSize="8" fontWeight="bold">3</text>
      
      {/* Product grid 2x2 */}
      <rect x="36" y="54" width="158" height="100" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <rect x="44" y="62" width="80" height="52" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="44" y="120" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <text x="44" y="138" fill="#1DB954" fontSize="9" fontWeight="bold">29,90 €</text>
      <rect x="110" y="130" width="76" height="14" rx="7" fill="#1DB954" opacity="0.3" />
      <text x="148" y="140" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">Ajouter au panier</text>
      
      <rect x="206" y="54" width="158" height="100" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <rect x="214" y="62" width="80" height="52" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="214" y="120" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <text x="214" y="138" fill="#1DB954" fontSize="9" fontWeight="bold">45,00 €</text>
      <rect x="280" y="130" width="76" height="14" rx="7" fill="#1DB954" opacity="0.3" />
      
      <rect x="36" y="164" width="158" height="100" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <rect x="44" y="172" width="80" height="52" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="44" y="230" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <text x="44" y="248" fill="#1DB954" fontSize="9" fontWeight="bold">18,50 €</text>
      
      <rect x="206" y="164" width="158" height="100" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <rect x="214" y="172" width="80" height="52" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="214" y="230" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <text x="214" y="248" fill="#1DB954" fontSize="9" fontWeight="bold">62,00 €</text>
    </svg>
  </motion.div>
);

/** Hero illustration for MaintenancePage */
export const MaintenanceHeroIllustration = () => (
  <motion.div
    className="relative w-full max-w-[420px] mx-auto"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: "drop-shadow(0 0 20px rgba(29,185,84,0.12))" }}
  >
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="20" y="10" width="360" height="240" rx="12" fill="#111811" stroke="#1a2e1a" strokeWidth="1.5" />
      {/* Header */}
      <rect x="30" y="20" width="340" height="24" rx="6" fill="#0a0f0a" />
      <rect x="40" y="28" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
      
      {/* Uptime bar */}
      <rect x="36" y="54" width="328" height="34" rx="8" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <text x="48" y="76" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="sans-serif">Uptime</text>
      <rect x="110" y="66" width="236" height="10" rx="5" fill="#1a2e1a" />
      <rect x="110" y="66" width="234" height="10" rx="5" fill="#1DB954" opacity="0.6" />
      <text x="352" y="76" fill="#1DB954" fontSize="10" textAnchor="end" fontWeight="bold">99.9%</text>
      
      {/* Chart */}
      <rect x="36" y="98" width="328" height="88" rx="8" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <polyline points="52,172 82,160 112,164 142,148 172,152 202,136 232,140 262,124 292,130 322,118 348,122" stroke="#1DB954" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M52,172 L82,160 L112,164 L142,148 L172,152 L202,136 L232,140 L262,124 L292,130 L322,118 L348,122 L348,180 L52,180 Z" fill="#1DB954" opacity="0.05" />
      
      {/* Metrics */}
      <rect x="36" y="196" width="100" height="36" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <text x="86" y="220" textAnchor="middle" fill="#1DB954" fontSize="11" fontWeight="bold">Sécurité ✓</text>
      <rect x="150" y="196" width="100" height="36" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <text x="200" y="220" textAnchor="middle" fill="#1DB954" fontSize="11" fontWeight="bold">Vitesse ✓</text>
      <rect x="264" y="196" width="100" height="36" rx="6" fill="#0a0f0a" stroke="#1a2e1a" strokeWidth="0.5" />
      <text x="314" y="220" textAnchor="middle" fill="#1DB954" fontSize="11" fontWeight="bold">Backup ✓</text>
    </svg>
  </motion.div>
);

/** Stat SVG illustrations for PourquoiPage */
export const StatMobileSearch = () => (
  <svg viewBox="0 0 60 48" className="w-[60px] h-[48px] mx-auto mb-2" fill="none">
    <rect x="18" y="4" width="24" height="40" rx="4" stroke="#1DB954" strokeWidth="1.2" fill="none" />
    <rect x="22" y="10" width="16" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
    <rect x="22" y="14" width="12" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
    <circle cx="44" cy="16" r="6" stroke="#1DB954" strokeWidth="1" fill="none" />
    <line x1="48" y1="20" x2="52" y2="24" stroke="#1DB954" strokeWidth="1.2" strokeLinecap="round" />
    {/* Person silhouette */}
    <circle cx="10" cy="20" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
    <path d="M4 34 Q10 28 16 34" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
  </svg>
);

export const StatScreenBrowse = () => (
  <svg viewBox="0 0 60 48" className="w-[60px] h-[48px] mx-auto mb-2" fill="none">
    <rect x="10" y="6" width="40" height="28" rx="3" stroke="#1DB954" strokeWidth="1.2" fill="none" />
    <rect x="14" y="10" width="14" height="8" rx="1" fill="rgba(255,255,255,0.06)" />
    <rect x="32" y="10" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
    <rect x="32" y="15" width="10" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
    <line x1="24" y1="36" x2="36" y2="36" stroke="#1DB954" strokeWidth="1" />
    {/* Silhouettes */}
    <circle cx="22" cy="42" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
    <circle cx="38" cy="42" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
  </svg>
);

export const StatBarsGrowing = () => (
  <svg viewBox="0 0 60 48" className="w-[60px] h-[48px] mx-auto mb-2" fill="none">
    <rect x="10" y="32" width="8" height="12" rx="2" fill="#1DB954" opacity="0.3" />
    <rect x="22" y="24" width="8" height="20" rx="2" fill="#1DB954" opacity="0.5" />
    <rect x="34" y="14" width="8" height="30" rx="2" fill="#1DB954" opacity="0.7" />
    <path d="M12 30 L26 22 L38 12 L50 6" stroke="#1DB954" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" fill="none" />
    <circle cx="50" cy="6" r="2.5" fill="#1DB954" />
  </svg>
);

export const StatClock = () => (
  <svg viewBox="0 0 60 48" className="w-[60px] h-[48px] mx-auto mb-2" fill="none">
    <circle cx="30" cy="24" r="18" stroke="#1DB954" strokeWidth="1.2" fill="none" />
    <line x1="30" y1="24" x2="30" y2="12" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="24" x2="40" y2="28" stroke="#1DB954" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="30" cy="24" r="2" fill="#1DB954" />
    {/* Hour marks */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line
        key={deg}
        x1={30 + 15 * Math.cos((deg - 90) * Math.PI / 180)}
        y1={24 + 15 * Math.sin((deg - 90) * Math.PI / 180)}
        x2={30 + 17 * Math.cos((deg - 90) * Math.PI / 180)}
        y2={24 + 17 * Math.sin((deg - 90) * Math.PI / 180)}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
    ))}
  </svg>
);
