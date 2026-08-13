import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageLayout from "@/components/layout/PageLayout";
import IconLoadingState from "@/components/BrandLoader/IconLoadingState";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetailPage = lazy(() => import("./pages/IndustryDetailPage"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const Trainings = lazy(() => import("./pages/Trainings"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Applications = lazy(() => import("./pages/Applications"));
const Internships = lazy(() => import("./pages/Internships"));
const TeamProfilePage = lazy(() => import("./pages/TeamProfilePage"));
const PortfolioPage = lazy(() => import("./pages/portfolio/PortfolioPage"));
const PortfolioCategoryPage = lazy(() => import("./pages/portfolio/PortfolioCategoryPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const PortfolioProjectPage = lazy(() => import("./pages/portfolio/PortfolioProjectPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalPage = lazy(() => import("./pages/LegalPage"));

const RouteLoadingFallback = () => (
  <PageLayout>
    <IconLoadingState />
  </PageLayout>
);

const App = () => (
  <>
    <ErrorBoundary>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustryDetailPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticlePage />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/team/:slug" element={<TeamProfilePage />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:category" element={<PortfolioCategoryPage />} />
              <Route path="/portfolio/:category/:slug" element={<PortfolioProjectPage />} />
              <Route path="/work" element={<PortfolioPage />} />
              <Route path="/work/:category" element={<PortfolioCategoryPage />} />
              <Route path="/work/:category/:slug" element={<PortfolioProjectPage />} />
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
