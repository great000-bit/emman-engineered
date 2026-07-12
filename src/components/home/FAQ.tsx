import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const homeFaqs = [
  {
    question: "What does Creative Emman Limited do?",
    answer:
      "Creative Emman Limited helps startups, businesses, and organisations build websites, brand identities, digital products, and growth-focused digital experiences.",
  },
  {
    question: "Is Creative Emman Limited an agency?",
    answer:
      "Creative Emman Limited is a creative and technology company. The company provides website design, branding, web development, UI/UX, SEO, and digital strategy services.",
  },
  {
    question: "Does Creative Emman Limited work with clients outside Nigeria?",
    answer:
      "Yes. Creative Emman Limited works with clients locally and internationally through remote project collaboration.",
  },
  {
    question: "How can I start a project with Creative Emman Limited?",
    answer:
      "You can contact Creative Emman Limited through the website contact form or the official social media profiles.",
  },
];

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
