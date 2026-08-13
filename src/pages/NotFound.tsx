import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import KeyboardVisual from "@/components/shared/KeyboardVisual";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <SEO
        path={location.pathname}
        title="Page Not Found | Creative Emman Limited"
        description="The page you are looking for could not be found. Return to Creative Emman Limited's homepage or explore our services and portfolio."
        robots="noindex, follow"
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
          <div className="flex flex-wrap justify-center gap-3">
            {[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }, { label: "Work", path: "/work" }, { label: "Contact", path: "/contact" }].map((item, index) => (
              <Link key={item.path} to={item.path} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${index === 0 ? "border-accent bg-accent text-white" : "border-primary-foreground/20 text-primary-foreground/70 hover:border-accent hover:text-accent"}`}>{item.label}{index === 0 && <ArrowRight className="h-4 w-4" />}</Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
