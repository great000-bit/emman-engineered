// Shared Formspree submit helper for every form on the site (Contact, Professional Role
// application, Internship application). All three currently submit to the same Formspree
// endpoint/form.
//
// The endpoint is read from VITE_FORMSPREE_ENDPOINT (see .env.example) but falls back to
// the real production endpoint below if that env var is missing, so a missing .env can
// never silently break submissions in production — per the brief, "do not let a missing
// env variable break production."
const FALLBACK_ENDPOINT = "https://formspree.io/f/xaqgwevv";
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || FALLBACK_ENDPOINT;

export type FormType = "Contact Form" | "Professional Role Application" | "Internship Application";

/**
 * Submits a payload to Formspree as multipart/form-data (so file-upload fields could be
 * added later without changing this helper), with the required hidden identification
 * fields attached automatically.
 *
 * Returns { ok: true } only when Formspree itself confirms success (response.ok === true).
 * Never optimistically reports success — callers should not show a success state unless
 * this resolves ok: true.
 */
export const submitToFormspree = async (
  formType: FormType,
  payload: Record<string, string>,
): Promise<{ ok: boolean }> => {
  try {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

    // Hidden identification / routing fields, per spec.
    formData.append("form_type", formType);
    formData.append("website", "Creative Emman Limited");
    formData.append("recipient_email", "creativeemmanlimited@gmail.com");
    formData.append("_subject", `New submission — ${formType}`);
    formData.append("_gotcha", ""); // honeypot — Formspree silently drops submissions where this is filled

    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
};
