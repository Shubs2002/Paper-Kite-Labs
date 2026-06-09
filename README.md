# Paperkite Labs — Website

> AI and tech agency website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                    Next.js App Router pages
  layout.tsx            Root layout (Navbar + Footer)
  page.tsx              Homepage
  work/tech/            Tech work portfolio
  work/creative/        Creative work portfolio
  services/             Services overview
  contact/              Contact page + form

components/
  layout/               Navbar, Footer
  sections/             Hero, ProofStrip, Services, ContactCTA
  ui/                   Button, ServiceCard, WorkCard

lib/
  constants.ts          All site content (text, links, data)
  types.ts              Shared TypeScript interfaces
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site | `http://localhost:3000` |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Phase 2 Roadmap

- [ ] Implement Framer Motion animations (TODO comments mark every location)
- [ ] Replace all `[IMAGE_PLACEHOLDER]` divs with real images
- [ ] Apply custom brand color palette
- [ ] Wire up contact form submission (server action or API route)
- [ ] Add real client logos to ProofStrip
- [ ] Add individual project detail pages

---

Built by **Paperkite Labs** · [paperkitelabs.com](https://paperkitelabs.com)
