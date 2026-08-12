import ScrollReveal from "@/components/shared/ScrollReveal";
import showcasePortrait from "@/assets/BrandStoryImage.jpg";

const BrandStory = () => {
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden border-t border-border">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Where creativity meets <br />
                <span className="font-serif italic font-medium text-accent">engineering</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-base sm:text-lg text-foreground/70 leading-relaxed font-body">
                <p>
                  Creative Emman is a full-service creative studio built on one belief — that beautiful design
                  and solid engineering are not opposites. We merge both disciplines to craft digital products
                  that look stunning and perform flawlessly.
                </p>
                <p>
                  From brand identities and motion graphics to web platforms and UI systems, every deliverable
                  is built with intention. We don't just make things pretty — we make them work, scale, and
                  leave a lasting impression on the people who matter most to your brand.
                </p>
              </div>
            </ScrollReveal>


          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal delay={0.2} direction="left" className="relative w-full max-w-lg lg:max-w-none">
              {/* Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl blur-lg opacity-80" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl border border-border overflow-hidden bg-card shadow-2xl group">
                <img
                  src={showcasePortrait}
                  alt="Creative Emman Studio — Design & Engineering"
                  className="w-full h-auto aspect-[6/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />


              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
