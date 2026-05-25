# Resume — Agent Guide

## Project

AI-powered resume: optimize CV for job descriptions (Gemini), render to HTML (Tailwind CSS), export to PDF (Puppeteer). Clean-architecture monorepo.

## Architecture

```
core/                    # Zero deps. Types + HTML renderer + Tailwind-based CSS
adapters/
  storage/               # File I/O (read/write JSON, text)
  gemini/                # Gemini AI: optimizeCV(cv, jd, config) => CV
  puppeteer/             # generatePDF(input, output, format)
  scraper/               # Stub for future JD scraping
scripts/                 # Thin CLI orchestrators
  helpers/paths.ts       # Centralized path constants
  optimize.ts            # data.json + JD => Gemini => optimized.json
  render.ts              # optimized.json => core/render => output/index.html
  pdf.ts                 # output/index.html => Puppeteer => output/resume.pdf
data/                    # data.json, optimized.json, jds/*.txt
packages/web/            # Nuxt 4 + Vue web preview (separate app)
```

## Commands

| Command | What it does |
|---|---|
| `npm run optimize` | AI-optimize CV for a JD |
| `npm run render` | Generate HTML from optimized JSON |
| `npm run pdf` | Capture HTML as PDF |
| `npm start` | All three in sequence |

Flags: `--jd <path>`, `--input <path>`, `--output <path>`, `--format <letter|a4>`.
Use `npm run <script> -- --flag value` to pass flags.

## Pipeline

1. Drop a JD into `data/jds/`
2. `npm run optimize` (reads `data/data.json` + JD, calls Gemini, writes `data/optimized.json`)
3. `npm run render` (reads `data/optimized.json`, calls `core/renderCV`, writes `output/index.html`)
4. `npm run pdf` (captures `output/index.html`, writes `output/resume.pdf`)

## Key design rules

- `core/` has **zero external dependencies**
- `scripts/` are thin — all logic lives in adapters or core
- Adapters are swappable (e.g., swap `gemini/` for `openai/` with same interface)
- The web app (`packages/web/`) is standalone — uses `@resume/core` only for types

## Env

`GEMINI_API` in `.env` (loaded via `tsx --env-file=.env`).
