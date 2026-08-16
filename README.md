# Sabbir Ahmed — Portfolio

Personal portfolio site of Sabbir Ahmed, WordPress and frontend developer.

Built with Next.js 16 (App Router), React 19, and Tailwind CSS 4. Content is data-driven — the sections read from plain JS files in `utils/data/`, so updating the site means editing data, not components.

**Contact:** sabbir@pixiefy.com · [LinkedIn](https://www.linkedin.com/in/sabbir-ahmed-pix) · [GitHub](https://github.com/nildoria)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.0.10, App Router, Turbopack |
| UI | React 19.2 |
| Styling | Tailwind CSS 4 (CSS-first `@theme` config) + SCSS |
| Fonts | Bricolage Grotesque (headings), Hanken Grotesk (body) |
| Icons | react-icons |
| Forms | Nodemailer + Telegram Bot API, reCAPTCHA |
| Blog source | WordPress REST API (wpkiddie.com) |

> Tailwind 4 is configured in CSS via `@theme` in `app/css/globals.scss`. There is no `tailwind.config.js` — v4 does not read one unless explicitly loaded with `@config`.

---

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/nildoria/portfolio.git
cd portfolio
pnpm install          # npm install also works
cp .env.example .env.local
pnpm dev
```

Runs at http://localhost:3000.

### Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. Every variable is optional — the site builds and runs without them, with the corresponding feature disabled.

| Variable | Required for | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Correct OG/Twitter metadata | Falls back to `VERCEL_URL`, then `http://localhost:3000` |
| `NEXT_PUBLIC_APP_URL` | Client-side absolute URLs | |
| `NEXT_PUBLIC_GTM` | Google Tag Manager | Omit to disable analytics |
| `TELEGRAM_BOT_TOKEN` | Contact form → Telegram | From @BotFather |
| `TELEGRAM_CHAT_ID` | Contact form → Telegram | Destination chat |
| `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` | Contact form spam filtering | |

Never commit `.env.local`. It is already gitignored.

---

## Project structure

```
app/
├── api/
│   ├── contact/      contact form handler (Telegram + email)
│   ├── data/         portfolio data endpoint
│   └── google/       reCAPTCHA verification
├── components/
│   ├── homepage/     one folder per section
│   ├── helper/       shared UI primitives
│   ├── navbar.jsx
│   └── footer.jsx
├── css/              globals.scss (tokens), card.scss
├── blog/             /blog route
├── layout.js         fonts, metadata, shell
└── page.js           section composition

utils/
├── data/             ← edit these to change site content
│   ├── personal-data.js
│   ├── experience.js
│   ├── projects-data.js
│   └── skills.js
└── time-converter.js

docs/superpowers/specs/   design specs
```

---

## Editing content

All copy lives in `utils/data/`. No component changes needed for routine updates.

| To change | Edit |
|---|---|
| Name, title, bio, social links | `personal-data.js` |
| Work history | `experience.js` |
| Projects | `projects-data.js` |
| Skills | `skills.js` |

Blog posts are fetched at build time from the WordPress REST API and revalidated hourly — see `getData()` in `app/page.js`. They are not stored in this repo.

---

## Docker

```bash
docker compose up          # development
docker build -f Dockerfile.prod -t portfolio .   # production image
```

---

## Design

The visual system is documented in [`docs/superpowers/specs/`](docs/superpowers/specs/). The current direction is a minimal dark theme: near-monochrome cool slate with a single muted accent, semantic color tokens, and an explicit motion budget.

Colors are defined once as tokens in `app/css/globals.scss`. Components reference tokens, never raw hex.

---

## Credits

Originally scaffolded from [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio) (MIT), since substantially rewritten — layout, design system, content, contact pipeline, and blog integration are custom.

No license file is currently included in this repository.
