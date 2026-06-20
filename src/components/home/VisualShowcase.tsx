import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ProtectedImage from "@/components/shared/ProtectedImage";
import { HeroCTALink } from "@/components/shared/HeroCTA";
import showcaseEnterprise from "@/assets/showcase-enterprise.jpg";
import showcaseBrand from "@/assets/showcase-brand.jpg";
import showcaseFilm from "@/assets/showcase-film.jpg";
import showcaseMobile from "@/assets/showcase-mobile.jpg";

// Compact homepage teaser that links out to the full /portfolio page system,
// rather than hosting the entire portfolio inline on the landing page.
const portfolioPreviewImages = [showcaseEnterprise, showcaseBrand, showcaseFilm, showcaseMobile];

const VisualShowcase = () => (
  <section className="section-padding border-t border-primary-foreground/5 relative">
    <div className="container-wide mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-3 mb-4">
              See the Work Behind the Words
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-lg text-primary-foreground/60 max-w-md mb-8">
              Browse case studies across web development, design, video, and more — organized by discipline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <HeroCTALink to="/portfolio" label="View Full Portfolio" />
          </ScrollReveal>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3 w-full max-w-md">
          {portfolioPreviewImages.map((img, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <Link
                to="/portfolio"
                className={`block rounded-xl overflow-hidden border border-primary-foreground/10 hover:border-accent/30 transition-colors ${
                  i === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <ProtectedImage
                  src={img}
                  alt="Portfolio preview"
                  className="w-full h-full object-cover opacity-70 hover:opacity-95 transition-opacity duration-500"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VisualShowcase;
