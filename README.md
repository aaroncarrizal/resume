# Resume

AI-powered resume optimization and PDF generation. Clean-architecture monorepo.

## Architecture

```
resume/
├── core/                  # Pure TS, zero deps. Types + print styles
├── adapters/
│   ├── gemini/            # Gemini AI CV optimization
│   ├── puppeteer/         # Headless PDF capture
│   ├── storage/           # File I/O (read/write JSON, text)
│   └── react-renderer/    # Vite + React dev preview & SSR (HMR)
├── scripts/               # Thin CLI orchestrators
├── data/                  # Source of truth (version controlled)
│   ├── data.json          # Master resume data
│   ├── optimized.json     # AI-optimized version
│   └── jds/               # Job descriptions
└── output/                # Generated artifacts (gitignored)
    ├── index.html         # Rendered resume
    └── resume.pdf         # Generated PDF
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

### Generate PDF

```bash
npm run pdf               # from optimized.json
npm run pdf:base          # from data.json directly
SCALE=0.92 npm run pdf    # shrink to fit one page
SCALE=1.05 npm run pdf    # enlarge to fill space
```

Reads the input, renders via React SSR + Puppeteer, writes `output/resume.pdf`.  
`SCALE` env var sets Puppeteer's native scale factor (`1.0` default).

### Export prompt for manual AI use

```bash
npm run export                   # uses first JD in data/jds/
npm run export -- --jd data/jds/example.txt
```

Reads `data/data.json` + system prompt + JD, writes a single self-contained file to `output/manual-optimization.md`. Paste the whole thing into Gemini web chat when API quota is limited.

### Full pipeline

```bash
npm start           # optimize → pdf
npm run start:base  # pdf from data.json (no optimization)
```

## Dependency rules

```
scripts/             → all adapters + core
core/                → zero external dependencies
adapter-storage/     → @resume/core
adapter-gemini/      → @resume/core, @google/genai
adapter-puppeteer/   → puppeteer
adapter-react-renderer/ → @resume/core, react, react-dom
```
