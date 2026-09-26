# CodeCraft Studio

Premium freelance web development business website built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Page |
|------|------|
| `/` | Home (all sections) |
| `/projects/beelive` | BeeLive case study |
| `/projects/bloodbridge` | BloodBridge case study |
| `/projects/sprinthub` | SprintHub case study |

## Customize

All editable content lives in `src/data/`:

| File | What to edit |
|------|--------------|
| `config.js` | Name, contact, social links, stats |
| `projects.js` | Projects **and** full case study fields |
| `services.js` | Services & prices |
| `pricing.js` | Pricing packages |
| `testimonials.js` | Client testimonials |
| `faqs.js` | FAQ answers |

### Project case study fields (`projects.js`)

- `slug` — URL segment (`/projects/:slug`)
- `tagline`, `longDescription`, `problem`, `solution`
- `features[]`, `technologies[]`
- `image`, `additionalImages[]` — put files in `public/projects/`
- `outcome` — editable placeholder (no fake metrics)
- `githubUrl`, `liveUrl`

### Profile photo

1. Add `public/profile.jpg`
2. In `src/sections/About.jsx`, replace the User icon with an `<img>`.

### Deploy to Vercel

```bash
npm run build
npx vercel
```

`vercel.json` already includes SPA rewrites for React Router.

## Tech Stack

- React 18 + Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
