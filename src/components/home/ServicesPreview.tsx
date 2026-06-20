import { Link } from "react-router-dom";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";
import {
  WebDevMockup, SocialMockup, UIUXMockup, GraphicMockup, VideoMockup, VideoEditingMockup, PhotoMockup, MotionMockup,
} from "./ServiceMockups";

// Map each real service to its mini mockup. Falls back to a generic icon
// tile if a service doesn't have a custom mockup yet.
const MOCKUPS: Record<string, React.FC> = {
  "Website Development": WebDevMockup,
  "Social Media Management": SocialMockup,
  "UI/UX Design": UIUXMockup,
  "Graphic Design": GraphicMockup,
  "Videography": VideoMockup,
  "Video Editing": VideoEditingMockup,
  "Photography": PhotoMockup,
  "Motion Graphics Design": MotionMockup,
};

const BentoCard = ({ service, large = false, delay = 0 }: { service: typeof services[number]; large?: boolean; delay?: number }) => {
  const Mockup = MOCKUPS[service.title];

  return (
    <ScrollReveal delay={delay} distance="standard">
      <Link
        to="/services"
        className={`group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-primary-foreground/[0.025] hover:bg-primary-foreground/[0.045] hover:border-accent/25 transition-all duration-500 overflow-hidden ${
          large ? "min-h-[360px] sm:min-h-[400px]" : "min-h-[320px]"
        }`}
      >
        {/* Mockup window */}
        <div className={`relative flex-shrink-0 mx-4 mt-4 rounded-2xl bg-black/40 border border-primary-foreground/[0.06] overflow-hidden ${large ? "h-44 sm:h-52" : "h-36"}`}>
          {Mockup ? <Mockup /> : <div className="w-full h-full bg-primary-foreground/[0.02]" />}
        </div>

        {/* Label + title + description */}
        <div className="flex-1 flex flex-col items-center text-center px-6 pt-5 pb-7">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent mb-3">
            <service.icon size={13} />
            {service.title}
          </div>
          <h3 className={`font-display font-semibold text-primary-foreground mb-2 ${large ? "text-xl sm:text-2xl" : "text-lg"}`}>
            {service.description.split(".")[0]}.
          </h3>
          <p className="text-sm text-primary-foreground/55 leading-relaxed max-w-[280px]">
            {service.includes.slice(0, 2).join(" · ")}
          </p>
          <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/40 group-hover:text-accent group-hover:gap-2.5 transition-all">
            Explore <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
};

const ServicesPreview = () => {
  const [first, second, ...rest] = services;

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container-wide mx-auto relative">
        <SectionHeading
          label="What We Do"
          title="Core Services"
          description="Eight integrated disciplines. One premium standard. Every project engineered for impact."
          light
        />

        {/* Row 1 — two large feature cards */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mt-10">
          <BentoCard service={first} large delay={0} />
          <BentoCard service={second} large delay={0.08} />
        </div>

        {/* Row 2+ — equal-size cards, 3 per row on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-5 lg:mt-6">
          {rest.map((service, i) => (
            <BentoCard key={service.title} service={service} delay={0.05 * i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
