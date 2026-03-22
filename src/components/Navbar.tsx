import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import AlteraLogo from "@/components/AlteraLogo";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, DollarSign, HelpCircle, Globe, ShoppingCart, Wrench } from "lucide-react";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  {
    name: "Services",
    url: "/services",
    icon: Briefcase,
    submenu: [
      { name: "Site Vitrine", url: "/services/site-vitrine", icon: Globe },
      { name: "E-commerce", url: "/services/site-ecommerce", icon: ShoppingCart },
      { name: "Maintenance", url: "/services/maintenance", icon: Wrench },
    ],
  },
  { name: "Tarifs", url: "/tarifs", icon: DollarSign },
  { name: "Pourquoi", url: "/pourquoi-un-site", icon: HelpCircle },
];

const mobileItems = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Tarifs", to: "/tarifs" },
  { label: "Pourquoi un site ?", to: "/pourquoi-un-site" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="section-container h-16 md:h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center h-full py-1 transition-transform duration-300 hover:scale-105">
            <AlteraLogo size="md" className="max-h-[3.5rem] md:max-h-[4.5rem]" />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="md:hidden bg-[#1DB954] text-black font-bold text-xs px-3 py-2 rounded-lg shrink-0"
            >
              Devis
            </Link>

            <button
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.15 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="hidden md:block">
              <Link to="/contact" className="btn-primary text-sm min-h-11">
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[64px] bg-[#0a0f0a]/98 backdrop-blur-md z-40 flex flex-col p-6 gap-2 overflow-hidden"
          >
            {mobileItems.map((item, i) => (
              <motion.div key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 min-h-11 text-xl font-semibold border-b border-white/5 transition-colors ${
                    location.pathname === item.to ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full bg-[#1DB954] text-black font-bold py-4 rounded-xl text-center text-base hover:bg-[#17a349] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Demander un devis gratuit →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
