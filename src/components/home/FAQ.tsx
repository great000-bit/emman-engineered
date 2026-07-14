import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { homeFaqs } from "@/data/homeFaqs";

const FAQ = () => (
  <section className="section-padding border-t border-primary-foreground/5 relative">
    <div className="container-wide mx-auto max-w-3xl">
      <SectionHeading label="FAQ" title="Frequently Asked Questions" light />

      <ScrollReveal delay={0.1}>
        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="border-primary-foreground/10"
            >
              <AccordionTrigger className="text-left text-primary-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/60 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQ;
