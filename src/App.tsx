import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import ChatWidget from "@/components/ChatWidget";

const Index = lazy(() => import("./pages/Index"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SiteVitrinePage = lazy(() => import("./pages/SiteVitrinePage"));
const SiteEcommercePage = lazy(() => import("./pages/SiteEcommercePage"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));
const TarifsPage = lazy(() => import("./pages/TarifsPage"));
const PourquoiPage = lazy(() => import("./pages/PourquoiPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SeoGeneratorPage = lazy(() => import("./pages/SeoGeneratorPage"));
const CGVPage = lazy(() => import("./pages/CGVPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingScreen />
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="w-full max-w-full overflow-x-hidden">
          <ScrollToTop />
          <BackToTop />
          <AnimatePresence mode="wait">
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/site-vitrine" element={<SiteVitrinePage />} />
                <Route path="/services/site-ecommerce" element={<SiteEcommercePage />} />
                <Route path="/services/maintenance" element={<MaintenancePage />} />
                <Route path="/tarifs" element={<TarifsPage />} />
                <Route path="/pourquoi-un-site" element={<PourquoiPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/seo-generator" element={<SeoGeneratorPage />} />
                <Route path="/cgv" element={<CGVPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </HashRouter>
      <ChatWidget />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
