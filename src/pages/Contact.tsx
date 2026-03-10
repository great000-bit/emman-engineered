import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { services } from "@/data/siteData";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().max(20).optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const FloatingInput = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) => (
  <div className="input-command">
    <input
      id={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      className="peer"
    />
    <label htmlFor={name}>{label}</label>
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const FloatingTextarea = ({
  name,
  label,
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) => (
  <div className="input-command">
    <textarea
      id={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      rows={4}
      className="peer resize-none"
    />
    <label htmlFor={name}>{label}</label>
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="bg-primary pt-32 pb-20 px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Command Center</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-primary-foreground mt-3 mb-4 max-w-4xl leading-[0.95]">
              Let's Build Something <span className="gradient-text">Exceptional</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/50 max-w-xl">
              Initiate a project. Our team responds within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto grid md:grid-cols-3 gap-16">
          {/* Form */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FloatingInput
                    name="name"
                    label="Full Name *"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    error={errors.name}
                  />
                  <FloatingInput
                    name="email"
                    label="Email *"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    error={errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FloatingInput
                    name="phone"
                    label="Phone"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">Service *</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="bg-transparent border-0 border-b-2 border-border rounded-none focus:border-accent px-0 text-foreground">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {services.map((s) => (
                          <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                        ))}
                        <SelectItem value="Training">Training Program</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                  </div>
                </div>

                <FloatingTextarea
                  name="message"
                  label="Your Message *"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  error={errors.message}
                />

                <Button type="submit" variant="accent" size="lg" className="px-12">
                  Send Transmission
                </Button>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact info */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold mb-4 text-primary-foreground">Direct Line</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <a href="mailto:greatemmawori@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Mail size={16} className="text-accent" /> greatemmawori@gmail.com
                    </a>
                    <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Phone size={16} className="text-accent" /> +234 703 784 5433
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-accent" /> Lagos, Nigeria
                    </div>
                  </div>
                </div>

                <div className="card-web3 p-6">
                  <p className="text-sm font-medium mb-2 text-primary-foreground">Quick Contact</p>
                  <p className="text-xs text-muted-foreground mb-3">Prefer to chat directly? Reach us on WhatsApp.</p>
                  <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="sm" className="w-full">
                      <Phone size={14} className="mr-2" /> Chat on WhatsApp
                    </Button>
                  </a>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-4 text-primary-foreground">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="social-glow text-muted-foreground"><Linkedin size={20} /></a>
                    <a href="#" className="social-glow text-muted-foreground"><Twitter size={20} /></a>
                    <a href="#" className="social-glow text-muted-foreground"><Instagram size={20} /></a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
