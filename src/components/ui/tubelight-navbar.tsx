"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
  submenu?: { name: string; url: string; icon: LucideIcon }[];
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    items.find((item) => item.url === location.pathname || item.submenu?.some(s => s.url === location.pathname))?.name || items[0].name
  );
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const matched = items.find((item) => 
      item.url === location.pathname || 
      item.submenu?.some(s => s.url === location.pathname)
    );
    if (matched) setActiveTab(matched.name);
  }, [location.pathname, items]);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (!isMobile) setOpenSubmenu(name);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setOpenSubmenu(null);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-4 left-1/2 -translate-x-1/2 z-50",
        "sm:bottom-auto bottom-4",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-background/80 border border-border backdrop-blur-xl py-1.5 px-2 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => hasSubmenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                {/* Main link - always navigates to the page */}
                <Link
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 md:px-5 py-2 rounded-full transition-colors flex items-center",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary",
                    hasSubmenu && "pr-1 md:pr-2"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tubelight"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        backgroundColor: "hsl(var(--primary) / 0.08)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary opacity-80 blur-[3px]" />
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary opacity-100" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary opacity-80 blur-[3px] sm:hidden" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary opacity-100 sm:hidden" />
                    </motion.div>
                  )}
                </Link>

                {/* Dropdown arrow - separate button for submenu */}
                {hasSubmenu && !isMobile && (
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                    className="p-1.5 rounded-full hover:bg-muted transition-colors hidden md:flex items-center justify-center"
                  >
                    <ChevronDown 
                      size={14} 
                      className={cn(
                        "transition-transform duration-200 text-foreground/60",
                        openSubmenu === item.name && "rotate-180"
                      )} 
                    />
                  </button>
                )}
              </div>

              {/* Submenu dropdown */}
              {hasSubmenu && openSubmenu === item.name && !isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 py-2 px-1 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl min-w-[180px]"
                >
                  {item.submenu!.map((sub) => {
                    const SubIcon = sub.icon;
                    const isSubActive = location.pathname === sub.url;
                    return (
                      <Link
                        key={sub.name}
                        to={sub.url}
                        onClick={() => setOpenSubmenu(null)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                          "text-foreground/70 hover:text-primary hover:bg-primary/5",
                          isSubActive && "text-primary bg-primary/10"
                        )}
                      >
                        <SubIcon size={16} />
                        {sub.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
