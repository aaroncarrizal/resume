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
      CVLayout.tsx        # Main layout (imports Header + section components)
      PaperToggle.tsx     # Page/Scroll view toggle + page-break indicator
      preview.css         # Dev preview styles (pv-btn, pv-paper, page break)
      main.tsx            # Entry point (imports app.css, data.json)
      components/         # Section components + ui/primitives
      lib/                # Utility helpers (cn, parseUrl)
scripts/                 # Thin CLI orchestrators
  helpers/paths.ts       # Centralized path constants
  export.ts              # data.json + system prompt + JD => output/prompt.txt (manual AI paste)
  optimize.ts            # data.json + JD => Gemini => optimized.json
  pdf.ts                 # SSR render + Puppeteer capture => output/resume.pdf
data/                    # data.json, optimized.json, jds/*.txt
```

## Commands

| Command | What it does |
|---|---|
| `npm run optimize` | AI-optimize CV for a JD |
| `npm run pdf` | Render HTML + generate PDF (from optimized.json) |
| `npm run pdf:base` | Render HTML + generate PDF from data.json directly |
| `npm run dev` | Dev server with HMR at http://localhost:3000 |
| `npm start` | Optimize + PDF in sequence |
| `npm run start:base` | PDF from data.json (no optimization) |
| `npm run export` | Combine CV + system prompt + JD into one file for manual Gemini paste |

Flags: `--jd <path>`, `--input <path>`, `--output <path>`, `--format <letter|a4>`, `--base`.

The `--jd` flag also auto-skiips dotfiles (`.gitkeep`).

## Pipeline

1. Drop a JD into `data/jds/`
2. `npm run optimize` (reads `data/data.json` + JD, calls Gemini, writes `data/optimized.json`)
3. `npm run pdf` (reads `data/optimized.json`, renders via React SSR + Puppeteer, writes `output/resume.pdf`)

### Manual alternative (no API key needed)

1. Drop a JD into `data/jds/`
2. `npm run export` (reads `data/data.json` + system prompt + JD, writes `output/prompt.txt`)
3. Copy the entire `output/prompt.txt` and paste into Gemini web chat
4. Paste the returned JSON back into `data/optimized.json`
5. `npm run pdf` to generate the PDF

To skip optimization and use the base resume directly: `npm run pdf:base` (reads `data/data.json`).

## Key design rules

- `core/` has **zero external dependencies**
- `scripts/` are thin — all logic lives in adapters or core
- Adapters are swappable (e.g., swap `gemini/` for `openai/` with same interface)

## Changing the CV layout

Components live in `adapters/react-renderer/src/components/`. Each section is standalone:

| Component | File |
|---|---|
| `CVLayout` | `src/CVLayout.tsx` |
| `Header` | `components/Header.tsx` |
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
  --color-primary: #000000;
  --color-primary-light: #dbeafe;
  --color-surface: #f3f4f6;
  --color-surface-alt: #d1d5db;
  --color-border: #e5e7eb;
  --color-text-muted: #6b7280;
  --text-2xs: 0.625rem;
  --text-2xs--line-height: 0.875rem;
}
```

Defining `--color-primary` via `@theme` auto-generates `bg-primary`, `text-primary`, `border-primary`, etc. Add/change tokens here and both the dev preview (HMR) and PDF output pick them up.

### Tokens in use

| Token | Used for |
|---|---|
| `bg-surface` | Section headers, skill card containers |
| `bg-surface-alt` | Skill pills, technology badges |
| `text-2xs` | All body content (10pt base size) |
| (layout classes) | `grid`, `flex`, `text-2xs`, `font-bold`, padding/margin — raw Tailwind |

**Changing the theme:** edit `@theme` block in `app.css`. For PDF-only changes (page size, margins), edit `core/src/styles.ts`.

## Dev preview

`npm run dev` starts a Vite dev server at `http://localhost:3000`. It imports `data/data.json` directly and renders the same React components used for PDF output. Edits are reflected instantly via HMR — no page reload needed.

A **Page View / Scroll View** toggle in the bottom-right corner switches between a letter-sized paper overlay (matching the PDF dimensions) and the normal scrollable view. In Page View, a red dashed line marks the 11in page boundary — content spilling past it won't fit on one page. The toggle persists across page loads via localStorage.

## Env

`GEMINI_API` in `.env` (loaded via `tsx --env-file=.env`).
