import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { homeFaqs } from "@/data/homeFaqs";
import faqImage from "@/assets/FaqImage.png";

const FAQ = () => (
  <section className="section-padding bg-background relative overflow-hidden border-t border-border">
    {/* Decorative blur */}
    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container-wide mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column - Image */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal delay={0.1} direction="right" className="relative w-full max-w-md lg:max-w-none">
            {/* Glow Behind Image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl blur-lg opacity-60" />

            {/* Main Image Frame */}
            <div className="relative rounded-2xl border border-border overflow-hidden bg-muted shadow-2xl group aspect-[4/5]">
              <img
                src={faqImage}
                alt="Frequently Asked Questions Section Graphic"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-65 pointer-events-none" />

              {/* Floating client tag */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/60 border border-white/10 p-4 rounded-xl text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">We are here to help</span>
                <p className="text-sm font-semibold text-white font-display mt-0.5">Creative Emman Support & Strategy</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Accordion FAQs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">Help Center</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-8">
              Frequently asked <span className="font-serif italic font-medium text-accent">questions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-4">
              {homeFaqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="border border-border bg-card/50 hover:bg-card rounded-xl px-5 sm:px-6 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline font-display font-semibold py-4 text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 leading-relaxed font-body pb-5 text-sm sm:text-base border-t border-border pt-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>

      </div>
    </div>
  </section>
);

export default FAQ;
