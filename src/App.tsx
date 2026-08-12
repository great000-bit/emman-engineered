import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageLayout from "@/components/layout/PageLayout";
import BrandLoader from "@/components/BrandLoader/BrandLoader";
import IconLoadingState from "@/components/BrandLoader/IconLoadingState";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const Trainings = lazy(() => import("./pages/Trainings"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const loadContact = () => import("./pages/Contact");
const Contact = lazy(loadContact);
const Applications = lazy(() => import("./pages/Applications"));
const PortfolioPage = lazy(() => import("./pages/portfolio/PortfolioPage"));
const PortfolioCategoryPage = lazy(() => import("./pages/portfolio/PortfolioCategoryPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const PortfolioProjectPage = lazy(() => import("./pages/portfolio/PortfolioProjectPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteLoadingFallback = () => (
  <PageLayout>
    <IconLoadingState />
  </PageLayout>
);

const ContactWithLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadContact();

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1850);

    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <IconLoadingState />
      </PageLayout>
    );
  }

  return <Contact />;
};

const App = () => (
  <>
    <BrandLoader />
    <ErrorBoundary>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactWithLoader />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticlePage />} />
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
  </>
);

export default App;
