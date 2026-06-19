import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Team, { TeamProfile } from "./pages/Team";
import Trainings from "./pages/Trainings";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Applications from "./pages/Applications";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import PortfolioCategoryPage from "./pages/portfolio/PortfolioCategoryPage";
import PortfolioProjectPage from "./pages/portfolio/PortfolioProjectPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
