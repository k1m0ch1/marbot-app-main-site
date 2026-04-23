# marbot.app — Main Site (Static)

This is the **static marketing website** for [marbot.app](https://marbot.app) — a free mosque management system for Indonesian mosque administrators (pengurus masjid / marbot).

## What This Is

A **static site** built with React + Vite + Tailwind CSS. It contains only frontend code — no server, no API, no database. All content is rendered at build time and served as static files.

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, features overview, benefits, CTA |
| `/fitur` | Detailed feature breakdown per module |
| `/harga` | Pricing tiers (Free / Pro / Sponsored) |
| `/tentang` | About marbot.app, mission, values |
| `/kontak` | Contact form and info |
| `/blog` | Blog & articles (placeholder) |
| `/dokumentasi` | Documentation index (placeholder) |
| `/faq` | Frequently asked questions |
| `/privasi` | Privacy policy |
| `/syarat` | Terms & conditions |

## Sign In / Sign Up

The "Masuk" (Sign In) and "Daftar" (Sign Up) buttons redirect to **[login.marbot.app](https://login.marbot.app)** — a separate authentication service. This site does not handle any auth logic.

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — build tool
- **Tailwind CSS 4** — styling
- **React Router 7** — client-side routing
- **Lucide React** — icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`. This is a static build — just HTML, CSS, and JS files.

## Deploy to Cloudflare Pages

This site is designed for **Cloudflare Pages** (free tier).

### One-time setup

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create project → Connect to Git
3. Select the repo and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `main-site`

### SPA Routing

The `public/_redirects` file handles client-side routing:

```
/*    /index.html   200
```

This ensures all routes resolve to `index.html` for React Router to handle.

### Security Headers

The `public/_headers` file sets basic security headers:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

## Design Tokens

Colors and typography follow the marbot.app design system:

- **Primary:** `#0F7A4A` (masjid green)
- **Accent:** `#C69A3E` (gold)
- **Font (UI):** Inter
- **Font (Display):** Plus Jakarta Sans
- **Language:** Indonesian (Bahasa Indonesia)

## License

MIT
