import { Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const privacySections = [
  { title: "Information you provide", body: "When you submit a contact, professional-role or internship form, we receive the information you enter. This may include your name, contact details, project information, professional background and links you choose to share." },
  { title: "How the information is used", body: "We use submitted information to respond to enquiries, evaluate applications, plan potential work, maintain relevant correspondence and protect the website from misuse." },
  { title: "Service providers", body: "Website forms are processed through Formspree. Basic website usage information may be processed through Vercel Analytics. Those providers process information under their own terms and privacy practices." },
  { title: "Retention and sharing", body: "We retain information only for as long as it is reasonably useful for the purpose it was submitted or required for legitimate record-keeping. We do not sell personal information. Information may be shared with service providers that support website operation or where required by law." },
  { title: "Your choices", body: "You may ask us to correct or delete information you submitted, subject to any information we must retain for legitimate or legal reasons. You can also choose not to submit optional form fields." },
];

const termsSections = [
  { title: "Website information", body: "This website describes Creative Emman Limited, its capabilities, indicative pricing, training, portfolio concepts and ways to make contact. Website content is general information and does not by itself create a client relationship or binding project commitment." },
  { title: "Project agreements", body: "Project scope, fees, timing, deliverables, revisions, ownership and support are confirmed in the applicable proposal, invoice, statement of work or written agreement. Where website information conflicts with a signed project agreement, the project agreement governs." },
  { title: "Portfolio and intellectual property", body: "Portfolio items marked as concept case studies are demonstrations and are not represented as client engagements. Unless stated otherwise, website content, design and original materials belong to Creative Emman Limited or their respective rights holders and may not be reused without permission." },
  { title: "External services and links", body: "The website may link to third-party services or project websites. Creative Emman Limited is not responsible for the availability, security or content of third-party services." },
  { title: "Reasonable use", body: "You must not misuse the website, attempt unauthorised access, interfere with its operation, submit harmful material or use its content in a way that violates applicable rights or law." },
];

const LegalPage = () => {
  const isPrivacy = useLocation().pathname === "/privacy";
  const title = isPrivacy ? "Privacy Policy" : "Website Terms";
  const sections = isPrivacy ? privacySections : termsSections;
  const path = isPrivacy ? "/privacy" : "/terms";
  const description = isPrivacy ? "How Creative Emman Limited handles information submitted through this website." : "Terms governing use of the Creative Emman Limited website.";

  return (
    <PageLayout>
      <SEO path={path} title={`${title} | Creative Emman Limited`} description={description} jsonLd={buildBreadcrumbSchema([{ name: title, path }])} />
      <section className="bg-primary pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6"><div className="container-narrow mx-auto"><ScrollReveal><span className="text-xs font-bold uppercase tracking-[.2em] text-accent">Legal</span><h1 className="mt-5 text-4xl sm:text-6xl text-primary-foreground">{title}</h1><p className="mt-5 max-w-xl text-primary-foreground/55">{description}</p><p className="mt-4 text-xs text-primary-foreground/35">Last updated: 13 August 2026</p></ScrollReveal></div></section>
      <section className="section-padding bg-background"><div className="container-narrow mx-auto border-t border-border">{sections.map((section, index) => <ScrollReveal key={section.title} delay={(index % 3) * .04}><div className="grid gap-4 border-b border-border py-8 md:grid-cols-[.65fr_1.35fr] md:gap-12"><h2 className="text-xl text-foreground">{section.title}</h2><p className="text-sm leading-7 text-muted-foreground">{section.body}</p></div></ScrollReveal>)}<div className="mt-10 rounded-lg border border-border bg-card p-6"><p className="text-sm text-muted-foreground">Questions about this page can be sent to</p><a href="mailto:creativeemmanlimited1@gmail.com" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground"><Mail className="h-4 w-4" />creativeemmanlimited1@gmail.com</a></div></div></section>
    </PageLayout>
  );
};

export default LegalPage;
