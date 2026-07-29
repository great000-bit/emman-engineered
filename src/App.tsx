import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageLayout from "@/components/layout/PageLayout";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
const TeamProfile = lazy(() => import("./pages/Team").then((module) => ({ default: module.TeamProfile })));
const Trainings = lazy(() => import("./pages/Trainings"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Applications = lazy(() => import("./pages/Applications"));
const PortfolioPage = lazy(() => import("./pages/portfolio/PortfolioPage"));
const PortfolioCategoryPage = lazy(() => import("./pages/portfolio/PortfolioCategoryPage"));
const PortfolioProjectPage = lazy(() => import("./pages/portfolio/PortfolioProjectPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteLoadingFallback = () => (
  <PageLayout>
    <div
      role="status"
      aria-live="polite"
      className="min-h-[50vh] flex items-center justify-center bg-primary px-4 text-primary-foreground"
    >
      Loading…
    </div>
  </PageLayout>
);

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamProfile />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:category" element={<PortfolioCategoryPage />} />
            <Route path="/portfolio/:category/:slug" element={<PortfolioProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* Vercel Analytics — mounted once here so it loads on every route (this is a Vite
          SPA, not Next.js, so there's no root layout.tsx; App.tsx is the true root that
          renders once for the whole site). Placed after all routed content, per the
          "near the end, after main content" convention from Next.js's own root-layout
          pattern. */}
      <Analytics />
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
