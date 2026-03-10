import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import showcaseEnterprise from "@/assets/showcase-enterprise.jpg";
import showcaseBrand from "@/assets/showcase-brand.jpg";
import showcaseFilm from "@/assets/showcase-film.jpg";
import showcaseMobile from "@/assets/showcase-mobile.jpg";
import showcasePortrait from "@/assets/showcase-portrait.jpg";
import showcaseSaas from "@/assets/showcase-saas.jpg";

const projects = [
  { title: "Enterprise Platform", category: "Web Development", image: showcaseEnterprise },
  { title: "Brand Identity System", category: "Graphic Design", image: showcaseBrand },
  { title: "Product Launch Film", category: "Videography", image: showcaseFilm },
  { title: "Mobile Experience", category: "UI/UX Design", image: showcaseMobile },
  { title: "Corporate Portrait Series", category: "Photography", image: showcasePortrait },
  { title: "SaaS Dashboard", category: "Web Development", image: showcaseSaas },
];

const VisualShowcase = () => (
  <section className="section-padding bg-primary border-t border-primary-foreground/5">
    <div className="container-wide mx-auto">
      <SectionHeading
        label="Portfolio"
        title="Selected Work"
        description="A curated selection of projects that demonstrate our commitment to excellence."
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08}>
            <div className="card-web3 group relative aspect-[4/3] cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent rounded-2xl" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="text-lg font-display font-semibold text-primary-foreground mb-3">{project.title}</h3>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit bg-primary/80 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VisualShowcase;
