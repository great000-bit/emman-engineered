# Creative Emman Limited Website

Official company website for Creative Emman Limited, showcasing services, team members, portfolio work, applications, and contact information.

## Project Overview

Creative Emman Limited is a multidisciplinary creative and technology company offering website development, UI/UX design, graphic and brand design, social media management, videography, video editing, and motion graphics design. This repository contains the company's official marketing website — a fast, dark-themed, animated single-page-app experience built to showcase the studio's services, team, portfolio, training programs, and recruitment pipeline.

## Tech Stack

- **Vite** — build tool and dev server
- **React 18** + **TypeScript**
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** + **Radix UI** — accessible component primitives
- **Framer Motion** — animation and scroll reveals
- **Zod** — form validation
- **React Helmet Async** — per-page SEO/meta tag management
- **Lucide React** — icon set
- **Vitest** — testing

## Features

- Dark, premium agency-style design system with glassmorphism navigation, animated hero, and scroll-triggered reveals throughout
- Responsive layout tuned for desktop, tablet, and mobile, including a dedicated mobile navigation panel
- Services showcase with animated mini-mockups per discipline
- Centralized portfolio data model with category-specific case study presentation (brand identity, UI/UX, web development, social media, video, and motion graphics each use a layout suited to that discipline)
- Image protection component (`ProtectedImage`) applied across portfolio imagery to discourage casual downloading while preserving accessibility
- Careers/Applications page with separate Professional Role and Internship application forms, validated with Zod and submitted via Formspree
- Contact form with validation, loading/success/error states, and WhatsApp quick-contact option
- SEO: per-page meta tags, Open Graph/Twitter cards, JSON-LD structured data, sitemap, and robots.txt

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, brand story, services preview, why-choose-us, portfolio teaser, closing CTA |
| `/services` | Full services listing |
| `/portfolio` | Portfolio landing page, organized by discipline |
| `/portfolio/:category` | Category listing (e.g. `web-development`, `ui-ux-design`, `graphic-brand-design`, `social-media-management`, `videography-video-editing`, `motion-graphics-design`) |
| `/portfolio/:category/:slug` | Individual project case study, presented per the category's format |
| `/team` | Team listing |
| `/team/:id` | Individual team member profile |
| `/trainings` | Training programs |
| `/testimonials` | Client testimonials |
| `/applications` | Careers — Professional Role and Internship application forms |
| `/contact` | Contact form and direct contact details |

## Installation

Requires Node.js (LTS recommended) and npm.

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate into the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install
```

## Development

```sh
npm run dev
```

Starts the Vite dev server with hot module reloading, available at `http://localhost:8080` by default.

## Build

```sh
npm run build       # production build, output to dist/
npm run build:dev   # development-mode build (unminified, useful for debugging)
npm run preview     # serve the production build locally
```

Other useful scripts:

```sh
npm run lint        # run ESLint
npm run test        # run the test suite once
npm run test:watch  # run tests in watch mode
```

## Deployment

This project is deployed on Vercel. Pushing to the `main` branch triggers an automatic production deployment. Vercel runs `npm run build` and serves the contents of `dist/`.

To deploy elsewhere, run `npm run build` and serve the static `dist/` output with any static host or Node server.

## Environment Variables

Copy `.env.example` to `.env` and fill in real values before running locally or deploying with form submissions enabled.

| Variable | Required | Description |
|---|---|---|
| `VITE_FORMSPREE_ENDPOINT` | For all forms to send (Contact, Professional Role, Internship) | Formspree endpoint URL (e.g. `https://formspree.io/f/abcd1234`) that every form on the site submits to. Create this at [formspree.io](https://formspree.io), pointed at the company inbox. This is optional — if unset, the site falls back to the production endpoint already hardcoded in `src/lib/formspree.ts`, so a missing `.env` will never break form submissions in production. |

`.env` is gitignored and should never be committed.

## Contact

**Creative Emman Limited**
Email: [creativeemmanlimited@gmail.com](mailto:creativeemmanlimited@gmail.com)
WhatsApp: +234 703 784 5433
Location: Rivers State, Nigeria
