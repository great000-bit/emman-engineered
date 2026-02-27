import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const projects = [
  { title: "Enterprise Platform", category: "Web Development" },
  { title: "Brand Identity System", category: "Graphic Design" },
  { title: "Product Launch Film", category: "Videography" },
  { title: "Mobile Experience", category: "UI/UX Design" },
  { title: "Corporate Portrait Series", category: "Photography" },
  { title: "SaaS Dashboard", category: "Web Development" },
];

const VisualShowcase = () => (
  <section className="section-padding bg-secondary">
    <div className="container-wide mx-auto">
      <SectionHeading
        label="Portfolio"
        title="Selected Work"
        description="A curated selection of projects that demonstrate our commitment to excellence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08}>
            <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/5 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="text-lg font-display font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VisualShowcase;
