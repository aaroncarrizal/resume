# Resume — Agent Guide

## Project

AI-powered resume: optimize CV for job descriptions (Gemini), render to HTML (Tailwind CSS), export to PDF (Puppeteer). Clean-architecture monorepo.

## Architecture

```
core/                    # Zero deps. Types + print styles (@page, @media print)
adapters/
  storage/               # File I/O (read/write JSON, text)
  gemini/                # Gemini AI: optimizeCV(cv, jd, config) => CV
  puppeteer/             # generatePDF(input, output, format)
  react-renderer/        # Vite + React dev preview & SSR (HMR)
    src/
      app.css             # Tailwind v4 entry + @theme tokens (colors, fonts)
      CVLayout.tsx        # Main grid layout
      components/         # Section components
      PaperToggle.tsx     # Page/Scroll view toggle
      preview.css         # Dev preview styles (pv-btn, pv-paper)
      main.tsx            # Entry point (imports app.css, data.json)
  scraper/               # Stub for future JD scraping
scripts/                 # Thin CLI orchestrators
  helpers/paths.ts       # Centralized path constants
  optimize.ts            # data.json + JD => Gemini => optimized.json
  pdf.ts                 # SSR render + Puppeteer capture => output/resume.pdf
data/                    # data.json, optimized.json, jds/*.txt
packages/web/            # Nuxt 4 + Vue web preview (separate app)
```

## Commands

| Command | What it does |
|---|---|
| `npm run optimize` | AI-optimize CV for a JD |
| `npm run pdf` | Render HTML + generate PDF |
| `npm run dev` | Dev server with HMR at http://localhost:3000 |
| `npm start` | Optimize + PDF in sequence |

Flags: `--jd <path>`, `--input <path>`, `--output <path>`, `--format <letter|a4>`.

## Pipeline

1. Drop a JD into `data/jds/`
2. `npm run optimize` (reads `data/data.json` + JD, calls Gemini, writes `data/optimized.json`)
3. `npm run pdf` (reads `data/optimized.json` (or `data/data.json`), renders via React SSR + Puppeteer, writes `output/resume.pdf`)

## Key design rules

- `core/` has **zero external dependencies**
- `scripts/` are thin — all logic lives in adapters or core
- Adapters are swappable (e.g., swap `gemini/` for `openai/` with same interface)
- The web app (`packages/web/`) is standalone — uses `@resume/core` only for types

## Changing the CV layout

Components live in `adapters/react-renderer/src/components/`. Each section is standalone:

| Component | File |
|---|---|
| `CVLayout` | `src/CVLayout.tsx` |
| `HeaderSidebar` | `components/HeaderSidebar.tsx` |
| `HeaderMain` | `components/HeaderMain.tsx` |
| `EmploymentSection` | `components/EmploymentSection.tsx` |
| `EducationSection` | `components/EducationSection.tsx` |
| `SkillsSection` | `components/SkillsSection.tsx` |
| `LanguagesSection` | `components/LanguagesSection.tsx` |
| `CoursesSection` | `components/CoursesSection.tsx` |

**To restructure the PDF layout:** edit `src/CVLayout.tsx` — it controls the grid, column spans, and section ordering. Move sections between columns, change `col-span-*` values, add/remove wrappers, or inline sections as needed.

## Tailwind v4 + Theme

Theme tokens live in `adapters/react-renderer/src/app.css`:

```css
@theme {
  --color-primary: #2563eb;
  --color-primary-light: #dbeafe;
  --color-surface: #f3f4f6;
  --color-surface-alt: #d1d5db;
  --color-border: #e5e7eb;
  --color-text-muted: #6b7280;
  --font-family-sans: 'Poppins', sans-serif;
}
```

Defining `--color-primary` via `@theme` auto-generates `bg-primary`, `text-primary`, `border-primary`, etc. Add/change tokens here and both the dev preview (HMR) and PDF output pick them up.

### Tokens in use

| Token | Used for |
|---|---|
| `bg-surface` | Section headers, skill card containers |
| `bg-surface-alt` | Skill pills, technology badges |
| (layout classes) | `grid`, `flex`, `text-xs`, `font-bold`, padding/margin — raw Tailwind |

**Changing the theme:** edit `@theme` block in `app.css`. For PDF-only changes (page size, margins), edit `core/src/styles.ts`.

## Dev preview

`npm run dev` starts a Vite dev server at `http://localhost:3000`. It imports `data/data.json` directly and renders the same React components used for PDF output. Edits are reflected instantly via HMR — no page reload needed.

A **Page View / Scroll View** toggle in the bottom-right corner switches between a letter-sized paper overlay (matching the PDF dimensions) and the normal scrollable view. The toggle persists across page loads via localStorage.

## Env

`GEMINI_API` in `.env` (loaded via `tsx --env-file=.env`).
