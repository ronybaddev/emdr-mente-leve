# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server (Vite)
npm run build     # production build -> dist/
npm run build:dev # build in dev mode
npm run lint      # ESLint
npm run preview   # preview production build
```

No test suite configured.

## Architecture

Single-page landing site for an EMDR psychology clinic. One route (`/`) renders `Index.tsx`, which stacks these sections in order:

`Header` → `Hero` → `Psychologists` → `AboutEMDR` → `AboutUs` → `Scheduling` → `Contact` → `Footer`

All section components live in `src/components/`. UI primitives (Button, Card, Input, etc.) are shadcn/ui components in `src/components/ui/` — do not edit those files directly, regenerate via `npx shadcn@latest add <component>`.

**Background:** `Index.tsx` sets a fixed full-screen background image (desktop/mobile variants from `src/assets/`) with a `bg-background/80` overlay. Sections use `bg-transparent` so the background shows through with `backdrop-blur-sm` on cards.

**Animations:** All sections use `framer-motion` with `whileInView` + `viewport={{ once: true }}` pattern for scroll-triggered animations.

**Forms:** `Scheduling` sends appointment requests to `formsubmit.co` (no backend). Supabase client exists (`src/integrations/supabase/`) with an `appointments` table schema, but the form currently bypasses it and uses formsubmit directly.

**Design tokens:** All colors defined as HSL CSS variables in `src/index.css`. Primary = blue, Secondary = pink/rose. Dark mode vars also defined there.

**Deploy:** Push to `main` → GitHub Actions builds and FTP-deploys `dist/` to Hostinger. Secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASS`.

## Env vars

```
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

Import Supabase client via `import { supabase } from "@/integrations/supabase/client"`.

## Path alias

`@/` maps to `src/`.
