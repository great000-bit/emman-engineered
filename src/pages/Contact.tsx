import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    toast.success("Message sent successfully! We'll be in touch soon. You can also reach us at +234 703 784 5433 or greatemmawori@gmail.com");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="bg-primary pt-32 pb-20 px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Contact</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
              Let's Build Something <span className="text-accent">Exceptional</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/60 max-w-xl">
              Ready to start your project? Fill out the form below and our team will respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <div className="rounded-xl border border-border/50 backdrop-blur-lg bg-card/80 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Interested In *</label>
                      <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
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

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="accent" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact info */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold mb-4">Direct Contact</h3>
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

                <div className="p-5 rounded-xl border border-border/50 backdrop-blur-lg bg-card/80">
                  <p className="text-sm font-medium mb-2">Quick Contact</p>
                  <p className="text-xs text-muted-foreground mb-3">Prefer to chat directly? Reach us on WhatsApp.</p>
                  <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="sm" className="w-full">
                      <Phone size={14} className="mr-2" /> Chat on WhatsApp
                    </Button>
                  </a>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                      <Linkedin size={16} className="text-muted-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                      <Twitter size={16} className="text-muted-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                      <Instagram size={16} className="text-muted-foreground" />
                    </a>
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
