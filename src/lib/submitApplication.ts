// Shared submit helper for the Applications page forms (Professional Role + Internship).
// Both forms POST to the same Formspree endpoint, configured via env var so no real
// credentials are hardcoded in the repo.
//
// TODO: Set VITE_FORMSPREE_APPLICATIONS_ENDPOINT in your .env file (copy from .env.example).
// Create the form at https://formspree.io pointed at creativeemmanlimited@gmail.com,
// then paste the endpoint it gives you (e.g. https://formspree.io/f/abcd1234) into .env.
// Until that's set, submissions will fail with a clear console warning rather than
// silently posting nowhere.

const ENDPOINT = import.meta.env.VITE_FORMSPREE_APPLICATIONS_ENDPOINT;

export const submitApplication = async (
  payload: Record<string, string>,
): Promise<{ ok: boolean }> => {
  if (!ENDPOINT) {
    console.warn(
      "[Applications] VITE_FORMSPREE_APPLICATIONS_ENDPOINT is not set — see .env.example. " +
        "Submission was not sent.",
    );
    return { ok: false };
  }

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value));
  formData.append("_gotcha", ""); // honeypot — Formspree ignores submissions where this is filled

  try {
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
