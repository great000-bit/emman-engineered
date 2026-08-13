import ScrollReveal from "@/components/shared/ScrollReveal";
import partnerPortrait from "@/assets/home-1.jpg";

const BrandStory = () => (
  <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20" aria-labelledby="partner-heading">
    <div className="container-wide mx-auto grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14 xl:gap-20">
      <div>
        <ScrollReveal>
          <h2 id="partner-heading" className="max-w-2xl text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.02] tracking-[-.05em] text-foreground">
            Your digital partner,<br />built for <span className="font-serif font-medium italic">Africa</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08} className="mt-7 max-w-2xl space-y-5 text-base leading-[1.65] text-muted-foreground sm:text-lg">
          <p>Growing businesses often outgrow their digital presence. Websites feel dated, brands lose consistency, marketing becomes disconnected, and manual processes slow the team down.</p>
          <p>Creative Emman Limited brings strategy, design, development, branding, digital growth and media together for businesses across Nigeria and beyond.</p>
          <p>From a high-converting website to a complete brand or long-term technology partnership, we build solutions that move your business forward.</p>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.12} direction="left" className="relative overflow-hidden rounded-[1.25rem]">
        <img src={partnerPortrait} alt="Creative professional working on a digital tablet" loading="lazy" decoding="async" className="aspect-[6/5] h-full w-full object-cover" />
      </ScrollReveal>
    </div>
  </section>
);

export default BrandStory;
