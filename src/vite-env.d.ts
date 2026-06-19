/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree endpoint for the Applications page forms. See .env.example. */
  readonly VITE_FORMSPREE_APPLICATIONS_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
