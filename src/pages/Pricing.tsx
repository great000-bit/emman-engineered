import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { pricingCategories, standardInclusions, pricingFaqs } from "@/data/pricingData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, Minus, HelpCircle, Phone, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { Link } from "react-router-dom";
import BarFanCorner from "@/components/shared/BarFanCorner";
import standardInclusionsImg from "@/assets/standard_inclusions.png";

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredCategories = activeCategory === "all" 
    ? pricingCategories 
    : pricingCategories.filter(cat => cat.id === activeCategory);

  return (
    <PageLayout>
      <SEO
        path="/pricing"
        title="Pricing Plans | Creative Emman Limited"
        description="Transparent pricing with zero guesswork. Explore pricing packages for Web Development, E-Commerce, Digital Marketing, Audio Visual, Brand Identity, and more."
        jsonLd={[
          buildBreadcrumbSchema([{ name: "Pricing", path: "/pricing" }]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-wide mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-4">
              Pricing Plans
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-6 max-w-4xl mx-auto leading-[1.15]">
              Transparent pricing. No guesswork, <span className="font-serif italic font-normal text-accent/90">no hidden fees</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.16}>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
              Choose the package that fits your business goals. All plans include our core quality standards, responsive design, and dedicated post-launch support.
            </p>
          </ScrollReveal>

          {/* Quick Filters */}
          <ScrollReveal delay={0.24}>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto pb-4 border-b border-foreground/10 mb-8">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-foreground/[0.04] text-foreground/75 hover:bg-foreground/[0.08]"
                }`}
              >
                All Services
              </button>
              {pricingCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-foreground/[0.04] text-foreground/75 hover:bg-foreground/[0.08]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="pb-24 px-4 sm:px-6 bg-background">
        <div className="container-wide mx-auto space-y-16">
          {filteredCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.05}>
              <div className="border border-foreground/10 rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                
                {/* Category Header */}
                <div className="p-6 sm:p-8 border-b border-foreground/10 bg-foreground/[0.01] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display">{category.title}</h2>
                    <p className="text-sm text-foreground/60 mt-1 max-w-2xl">{category.description}</p>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="font-bold uppercase tracking-wider text-xs">
                      Request Custom Quote
                    </Button>
                  </Link>
                </div>

                {/* Table Container for Responsiveness */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                      <tr className="bg-black text-white dark:bg-[#0B0F19]">
                        <th className="py-4 px-6 text-sm font-bold tracking-wider uppercase w-1/3">Features</th>
                        {category.tiers.map((tier, tIdx) => (
                          <th key={tIdx} className="py-4 px-6 text-center w-1/5 border-l border-white/5">
                            <span className="block text-xs font-black uppercase tracking-widest text-accent mb-1">{tier.name}</span>
                            <span className="block text-lg font-bold">
                              {tier.price}
                              {tier.period && <span className="text-[10px] text-white/50 font-normal">{tier.period}</span>}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/10">
                      {category.featuresList.map((feature, fIdx) => (
                        <tr key={fIdx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-4 px-6 text-sm font-medium text-foreground font-body">{feature}</td>
                          {category.tiers.map((tier, tIdx) => {
                            const val = tier.features[feature];
                            return (
                              <td key={tIdx} className="py-4 px-6 text-center text-sm border-l border-foreground/10">
                                {typeof val === "boolean" ? (
                                  val ? (
                                    <Check className="w-5 h-5 text-accent mx-auto" />
                                  ) : (
                                    <Minus className="w-4 h-4 text-foreground/25 mx-auto" />
                                  )
                                ) : (
                                  <span className="font-medium text-foreground/80">{val}</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Call To Action inside each card */}
                <div className="p-4 sm:p-6 bg-foreground/[0.02] border-t border-foreground/10 flex justify-center gap-3">
                  <Link to="/contact" className="w-full max-w-md">
                    <Button variant="accent" className="w-full font-bold uppercase tracking-wider text-xs">
                      Get Started with {category.title}
                    </Button>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Standard Inclusions Section */}
      <section className="section-padding border-t border-foreground/10 bg-foreground/[0.01]">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text side */}
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 inline-block">
                  Always Included
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Standard inclusions across all projects
                </h2>
                <p className="text-foreground/60 leading-relaxed max-w-xl">
                  We believe in launching products that are ready for the real world. That's why every project, regardless of tier, comes standard with key foundational pillars.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {standardInclusions.map((inc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link to="/contact">
                    <Button variant="accent" className="font-bold uppercase tracking-wider text-xs px-6 rounded-full">
                      Start Your Project <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Image side */}
            <ScrollReveal delay={0.16}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src={standardInclusionsImg} 
                  alt="Standard Inclusions - Professional Smiling office setting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-xs font-bold tracking-wider uppercase">Engineered to Last</span>
                  </div>
                  <p className="text-xs text-white/80">Every deployment meets international security, speed, and optimization requirements.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <section className="section-padding bg-background border-t border-foreground/10">
        <div className="container-narrow mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-3">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Pricing FAQs
              </h2>
              <p className="text-sm text-foreground/60 mt-3">
                Have questions about billing, custom orders, or project setup? We've got answers.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="border border-foreground/10 rounded-xl overflow-hidden bg-card transition-colors">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left text-foreground hover:bg-foreground/[0.01] transition-colors"
                    >
                      <span className="text-base font-bold font-display flex items-center gap-3">
                        <HelpCircle className="w-4.5 h-4.5 text-accent shrink-0" />
                        {faq.question}
                      </span>
                      <span className={`text-xl font-medium text-foreground/45 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-foreground/60 leading-relaxed font-body border-t border-foreground/5 bg-foreground/[0.01]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
        <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <div className="relative container-narrow mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
              Which service
              <br />
              starts your next win?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8">
              Pick a lane or bring the whole brief — we'll map out the right team and timeline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-row gap-3 justify-center items-center">
              <Link to="/contact">
                <Button variant="light-fill">
                  Let's Work Together <ArrowRight size={15} className="ml-1.5" />
                </Button>
              </Link>
              <Button variant="dark-outline" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}>
                  <Phone size={14} className="mr-1.5" /> WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default PricingPage;
