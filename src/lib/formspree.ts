// Shared Formspree submit helper for every form on the site (Contact, Professional Role
// application, Internship application). All three currently submit to the same Formspree
// endpoint/form.
//
// The endpoint is read from VITE_FORMSPREE_ENDPOINT (see .env.example) but falls back to
// the real production endpoint below if that env var is missing, so a missing .env can
// never silently break submissions in production — per the brief, "do not let a missing
// env variable break production."
const FALLBACK_ENDPOINT = "https://formspree.io/f/mykqknqa";
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || FALLBACK_ENDPOINT;

export type FormType = "Contact Form" | "Professional Role Application" | "Internship Application";

// Clean, specific subject line per form type — kept short and human-readable rather than
// the previous generic "New submission — {type}", since vague/templated subject lines are
// one of several patterns that can contribute to spam-folder flagging.
const SUBJECT_BY_FORM_TYPE: Record<FormType, string> = {
  "Contact Form": "New Contact Message - Creative Emman Limited",
  "Professional Role Application": "New Professional Role Application - Creative Emman Limited",
  "Internship Application": "New Internship Application - Creative Emman Limited",
};

/**
 * Submits a payload to Formspree as multipart/form-data (so file-upload fields could be
 * added later without changing this helper), with the required hidden identification
 * fields attached automatically.
 *
 * Empty-string and undefined values are skipped entirely rather than sent as blank fields —
 * optional inputs (phone, portfolio link, LinkedIn link, etc.) that the person left empty
 * are simply omitted, instead of submitting as visible-but-empty fields. A form with many
 * empty/placeholder-looking fields is itself a pattern some spam filters weigh against a
 * submission, on top of just being noisier data to read.
 *
 * Returns { ok: true } only when Formspree itself confirms success (response.ok === true).
 * Never optimistically reports success — callers should not show a success state unless
 * this resolves ok: true.
 *
 * ADMIN TODO — Formspree dashboard settings worth checking if internship submissions keep
 * landing in spam even after this fix:
 *   - Mark any legitimate test submissions as "Not Spam" in the Formspree dashboard (this
 *     trains their filter on what real submissions from this form look like)
 *   - Enable reCAPTCHA on the form if spam persists despite the honeypot
 *   - Restrict the form's allowed domain to www.creativeemmanlimited.com (Settings > the
 *     form > restrict submissions to this domain), so submissions from anywhere else are
 *     rejected outright
 *   - If emails genuinely aren't arriving (as opposed to landing in Formspree's spam view),
 *     check the Outlook junk/quarantine folder for creativeemmanlimited@outlook.com —
 *     that's a separate failure point from Formspree's own spam detection
 */
export const submitToFormspree = async (
  formType: FormType,
  payload: Record<string, string | undefined>,
): Promise<{ ok: boolean }> => {
  try {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === undefined || value === "") return;
      formData.append(key, value);
    });

    // Hidden identification / routing fields, per spec. Only form_type and website are
    // added here — applicationType is set by the caller (Applications.tsx) as part of the
    // payload above, since it's specific to which of the two Applications forms was used.
    // recipient_email was intentionally removed: a hidden field that looks like it's trying
    // to control mail routing/headers is itself a pattern spam filters flag, even though
    // it's benign here — Formspree's dashboard recipient setting already controls this.
    formData.append("form_type", formType);
    formData.append("website", "Creative Emman Limited");
    formData.append("_subject", SUBJECT_BY_FORM_TYPE[formType]);
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
