import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ label, title, description, align = "center", light = false }: SectionHeadingProps) => (
  <div className={`mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}>
    {label && (
      <ScrollReveal>
        <span className={`text-sm font-medium tracking-widest uppercase ${light ? "text-accent" : "text-accent"}`}>
          {label}
        </span>
      </ScrollReveal>
    )}
    <ScrollReveal delay={0.08}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl mt-3 mb-4 text-balance ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
    </ScrollReveal>
    {description && (
      <ScrollReveal delay={0.16}>
        <p className={`text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      </ScrollReveal>
    )}
  </div>
);

export default SectionHeading;
