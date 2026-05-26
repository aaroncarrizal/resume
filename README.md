# Resume

AI-powered resume optimization and PDF generation. Clean-architecture monorepo.

## Architecture

```
resume/
├── core/                  # Pure TS, zero deps. Types + HTML renderer + CSS
├── adapters/
│   ├── gemini/            # Gemini AI CV optimization
│   ├── puppeteer/         # Headless PDF capture
│   ├── storage/           # File I/O (read/write JSON, text)
│   └── scraper/           # Future: JD scraping from URLs (stub)
├── scripts/               # Thin CLI orchestrators
├── data/                  # Source of truth (version controlled)
│   ├── data.json          # Master resume data
│   ├── optimized.json     # AI-optimized version
│   └── jds/               # Job descriptions
├── output/                # Generated artifacts (gitignored)
│   ├── index.html         # Rendered resume
│   └── resume.pdf         # Generated PDF
└── packages/web/          # Nuxt 4/Vue web preview (framework-agnostic)
```

## Setup

```bash
npm install
```

Create `.env` in the project root:
```
GEMINI_API=your_gemini_api_key_here
```

## Usage

### Optimize resume for a job description

```bash
npm run optimize -- --jd data/jds/example.txt
```

Reads `data/data.json` + specified JD, writes `data/optimized.json`.

### Render HTML

```bash
npm run render
```

Reads `data/optimized.json`, generates `output/index.html`.

### Generate PDF

```bash
npm run pdf
```

Captures `output/index.html` as `output/resume.pdf`.

### Full pipeline

```bash
npm start   # optimize → render → pdf
```

## Dependency rules

```
scripts/          → all adapters + core
core/             → zero external dependencies
adapter-storage/  → @resume/core
adapter-gemini/   → @resume/core, @google/genai
adapter-puppeteer/→ puppeteer
adapter-scraper/  → @resume/core (future)
```
