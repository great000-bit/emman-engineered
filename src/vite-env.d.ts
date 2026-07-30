/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree endpoint for the Contact page form. See .env.example. */
  readonly VITE_FORMSPREE_CONTACT_ENDPOINT?: string;
  /** Formspree endpoint for the Applications page forms. See .env.example. */
  readonly VITE_FORMSPREE_APPLICATIONS_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
