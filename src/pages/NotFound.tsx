import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import KeyboardVisual from "@/components/shared/KeyboardVisual";
import { HeroCTALink } from "@/components/shared/HeroCTA";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route matches", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO
        path={location.pathname}
        title="Page Not Found | Creative Emman Limited"
        description="The page you are looking for could not be found. Return to Creative Emman Limited's homepage or explore our services and portfolio."
      />

      <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
        <KeyboardVisual />

        {/* Spacer for floating nav clearance, matches Hero's pattern */}
        <div className="h-24 sm:h-28 flex-shrink-0 relative z-10" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <span className="text-sm font-medium tracking-widest uppercase text-accent mb-4">404 Error</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/60 max-w-md mb-10">
            The page you're looking for doesn't exist, may have moved, or the link might be broken.
          </p>
          <HeroCTALink to="/" label="Go Home" />
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
