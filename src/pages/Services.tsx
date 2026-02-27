import PageLayout from "@/components/layout/PageLayout";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesPage = () => (
  <PageLayout>
    <section className="bg-primary pt-32 pb-20 px-6">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our Expertise</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
            Services Built for <span className="text-accent">Impact</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-primary-foreground/60 max-w-xl">
            Six integrated disciplines delivering premium digital outcomes. Every service engineered with institutional precision.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto space-y-20">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={0.05}>
            <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/10">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl text-primary-foreground mb-4">{service.title}</h2>
                <p className="text-primary-foreground/60 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact">
                  <Button variant="accent">Make Enquiry</Button>
                </Link>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="details" className="border-primary-foreground/10">
                    <AccordionTrigger className="text-sm font-medium text-primary-foreground/70 hover:text-accent">
                      More Details
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-primary-foreground/50 leading-relaxed">
                      Our {service.title.toLowerCase()} service follows a structured delivery process: Discovery, Strategy, Execution, and Optimization. Every engagement is scoped precisely and delivered on milestone.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {i < services.length - 1 && <div className="border-t border-primary-foreground/10 mt-20" />}
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary text-center border-t border-primary-foreground/5">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero">Start Your Project</Button>
            </Link>
            <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-pill">
                <Phone size={16} className="mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default ServicesPage;
