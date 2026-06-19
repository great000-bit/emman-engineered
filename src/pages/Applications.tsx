import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { submitApplication } from "@/lib/submitApplication";

type ApplicationTab = "professional" | "internship";

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
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      className="peer"
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    <label htmlFor={name}>{label}</label>
    {error && <p id={`${name}-error`} className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const FloatingTextarea = ({
  name,
  label,
  value,
  onChange,
  error,
  rows = 4,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  rows?: number;
}) => (
  <div className="input-command">
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      rows={rows}
      className="peer resize-none"
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    <label htmlFor={name}>{label}</label>
    {error && <p id={`${name}-error`} className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const SelectField = ({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
}) => (
  <div>
    <label className="text-xs text-muted-foreground mb-2 block">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-transparent border-0 border-b-2 border-border rounded-none focus:border-accent px-0 text-foreground">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const SuccessState = ({ heading, onReset }: { heading: string; onReset: () => void }) => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col items-center justify-center text-center py-20 space-y-5"
  >
    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
      <CheckCircle size={36} className="text-accent" />
    </div>
    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{heading}</h2>
    <p className="text-sm text-muted-foreground max-w-md">
      Thank you for applying to Creative Emman. Our team reviews every application and will reach out if there's a fit.
    </p>
    <Button variant="outline" size="sm" className="mt-4" onClick={onReset}>
      Submit Another Application
    </Button>
  </motion.div>
);

const ErrorNotice = () => (
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-500">
    Oops! Something went wrong sending your application. Please try again or reach us via WhatsApp.
  </motion.p>
);

// ---------- Professional Role form ----------

const professionalSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(1, "Phone / WhatsApp number is required").max(30),
  location: z.string().trim().min(1, "Location is required").max(100),
  roleApplyingFor: z.string().trim().min(1, "Role applying for is required").max(100),
  areaOfExpertise: z.string().min(1, "Please select an area of expertise"),
  yearsOfExperience: z.string().trim().min(1, "Years of experience is required").max(50),
  portfolioLink: z.string().trim().max(300).optional(),
  linkedinLink: z.string().trim().max(300).optional(),
  cvLink: z.string().trim().min(1, "CV / Resume link is required").max(300),
  coverLetter: z.string().trim().min(1, "A short cover letter is required").max(2000),
  availability: z.string().trim().min(1, "Availability is required").max(200),
});

const EXPERTISE_OPTIONS = [
  "Website Development",
  "UI/UX Design",
  "Graphic and Brand Design",
  "Social Media Management",
  "Videography and Video Editing",
  "Motion Graphics Design",
  "Project Management",
  "Other",
];

const ProfessionalRoleForm = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", location: "", roleApplyingFor: "",
    areaOfExpertise: "", yearsOfExperience: "", portfolioLink: "", linkedinLink: "",
    cvLink: "", coverLetter: "", availability: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (key: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = professionalSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const { ok } = await submitApplication({
      applicationType: "Professional Role",
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      location: form.location,
      roleApplyingFor: form.roleApplyingFor,
      areaOfExpertise: form.areaOfExpertise,
      yearsOfExperience: form.yearsOfExperience,
      portfolioLink: form.portfolioLink,
      linkedinLink: form.linkedinLink,
      cvLink: form.cvLink,
      coverLetter: form.coverLetter,
      availability: form.availability,
      _subject: `New Professional Role Application — ${form.roleApplyingFor}`,
    });

    if (ok) {
      setStatus("success");
      setForm({
        fullName: "", email: "", phone: "", location: "", roleApplyingFor: "",
        areaOfExpertise: "", yearsOfExperience: "", portfolioLink: "", linkedinLink: "",
        cvLink: "", coverLetter: "", availability: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessState heading="Your application has been submitted!" onReset={() => setStatus("idle")} />
      ) : (
        <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-10">
          {/* Honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="fullName" label="Full Name *" value={form.fullName} onChange={set("fullName")} error={errors.fullName} />
            <FloatingInput name="email" label="Email Address *" type="email" value={form.email} onChange={set("email")} error={errors.email} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="phone" label="Phone / WhatsApp Number *" value={form.phone} onChange={set("phone")} error={errors.phone} />
            <FloatingInput name="location" label="Location *" value={form.location} onChange={set("location")} error={errors.location} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="roleApplyingFor" label="Role Applying For *" value={form.roleApplyingFor} onChange={set("roleApplyingFor")} error={errors.roleApplyingFor} />
            <SelectField label="Area of Expertise *" value={form.areaOfExpertise} onChange={set("areaOfExpertise")} options={EXPERTISE_OPTIONS} error={errors.areaOfExpertise} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="yearsOfExperience" label="Years of Experience *" value={form.yearsOfExperience} onChange={set("yearsOfExperience")} error={errors.yearsOfExperience} />
            <FloatingInput name="availability" label="Availability *" value={form.availability} onChange={set("availability")} error={errors.availability} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="portfolioLink" label="Portfolio Link" value={form.portfolioLink} onChange={set("portfolioLink")} />
            <FloatingInput name="linkedinLink" label="LinkedIn Link" value={form.linkedinLink} onChange={set("linkedinLink")} />
          </div>

          <FloatingInput name="cvLink" label="CV / Resume Link *" value={form.cvLink} onChange={set("cvLink")} error={errors.cvLink} />

          <FloatingTextarea name="coverLetter" label="Short Cover Letter *" value={form.coverLetter} onChange={set("coverLetter")} error={errors.coverLetter} rows={5} />

          {status === "error" && <ErrorNotice />}

          <Button type="submit" variant="accent" size="lg" className="px-12" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting…" : "Submit Application"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

// ---------- Internship form ----------

const internshipSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(1, "Phone / WhatsApp number is required").max(30),
  location: z.string().trim().min(1, "Location is required").max(100),
  internshipArea: z.string().min(1, "Please select an internship area"),
  skillLevel: z.string().min(1, "Please select your current skill level"),
  portfolioLink: z.string().trim().max(300).optional(),
  linkedinLink: z.string().trim().max(300).optional(),
  motivation: z.string().trim().min(1, "Please tell us why you want to intern with us").max(2000),
  availability: z.string().trim().min(1, "Availability is required").max(200),
});

const INTERNSHIP_AREA_OPTIONS = [
  "Website Development Intern",
  "UI/UX Design Intern",
  "Graphic and Brand Design Intern",
  "Social Media Management Intern",
  "Videography and Video Editing Intern",
  "Motion Graphics Design Intern",
];

const SKILL_LEVEL_OPTIONS = ["Beginner", "Intermediate", "Advanced Beginner"];

const InternshipForm = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", location: "", internshipArea: "",
    skillLevel: "", portfolioLink: "", linkedinLink: "", motivation: "", availability: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (key: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = internshipSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const { ok } = await submitApplication({
      applicationType: "Internship",
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      location: form.location,
      internshipArea: form.internshipArea,
      skillLevel: form.skillLevel,
      portfolioLink: form.portfolioLink,
      linkedinLink: form.linkedinLink,
      motivation: form.motivation,
      availability: form.availability,
      _subject: `New Internship Application — ${form.internshipArea}`,
    });

    if (ok) {
      setStatus("success");
      setForm({
        fullName: "", email: "", phone: "", location: "", internshipArea: "",
        skillLevel: "", portfolioLink: "", linkedinLink: "", motivation: "", availability: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessState heading="Your internship application has been submitted!" onReset={() => setStatus("idle")} />
      ) : (
        <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-10">
          {/* Honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="fullName" label="Full Name *" value={form.fullName} onChange={set("fullName")} error={errors.fullName} />
            <FloatingInput name="email" label="Email Address *" type="email" value={form.email} onChange={set("email")} error={errors.email} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="phone" label="Phone / WhatsApp Number *" value={form.phone} onChange={set("phone")} error={errors.phone} />
            <FloatingInput name="location" label="Location *" value={form.location} onChange={set("location")} error={errors.location} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <SelectField label="Internship Area *" value={form.internshipArea} onChange={set("internshipArea")} options={INTERNSHIP_AREA_OPTIONS} error={errors.internshipArea} />
            <SelectField label="Current Skill Level *" value={form.skillLevel} onChange={set("skillLevel")} options={SKILL_LEVEL_OPTIONS} error={errors.skillLevel} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FloatingInput name="portfolioLink" label="Portfolio or Sample Work Link" value={form.portfolioLink} onChange={set("portfolioLink")} />
            <FloatingInput name="linkedinLink" label="LinkedIn Link" value={form.linkedinLink} onChange={set("linkedinLink")} />
          </div>

          <FloatingInput name="availability" label="Availability *" value={form.availability} onChange={set("availability")} error={errors.availability} />

          <FloatingTextarea
            name="motivation"
            label="Why do you want to intern with Creative Emman Limited? *"
            value={form.motivation}
            onChange={set("motivation")}
            error={errors.motivation}
            rows={5}
          />

          {status === "error" && <ErrorNotice />}

          <Button type="submit" variant="accent" size="lg" className="px-12" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting…" : "Submit Internship Application"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

// ---------- Page ----------

const ApplicationsPage = () => {
  const [tab, setTab] = useState<ApplicationTab>("professional");

  return (
    <PageLayout>
      <SEO
        path="/applications"
        title="Apply to Creative Emman Limited | Careers & Internships"
        description="Apply for a professional role or internship at Creative Emman Limited and join a multidisciplinary creative team building digital products, brands, campaigns, and visual experiences."
      />

      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Careers</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
              Join Creative <span className="text-accent">Emman Limited</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/60 max-w-xl">
              Apply for a professional role or internship and become part of a multidisciplinary creative team
              building digital products, brands, campaigns, and visual experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto">
          {/* Two-option toggle */}
          <ScrollReveal>
            <div className="inline-flex rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.03] p-1.5 mb-12">
              <button
                type="button"
                onClick={() => setTab("professional")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  tab === "professional"
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
                aria-pressed={tab === "professional"}
              >
                Professional Role
              </button>
              <button
                type="button"
                onClick={() => setTab("internship")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  tab === "internship"
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
                aria-pressed={tab === "internship"}
              >
                Internship
              </button>
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {tab === "professional" ? (
              <motion.div key="professional" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <ProfessionalRoleForm />
              </motion.div>
            ) : (
              <motion.div key="internship" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <InternshipForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplicationsPage;
