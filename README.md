# Resume Builder

An AI-powered resume builder with two components:
1. **CLI Tool** - Uses Google Gemini to optimize your resume for specific job descriptions
2. **Web Builder** - A Nuxt-based UI to preview and generate the resume as PDF

## Tech Stack

- **TypeScript** - Main language for CLI scripts
- **Puppeteer** - PDF generation from the web preview
- **Google Gemini API** - AI-powered resume optimization
- **Tailwind CSS** - Styling
- **Nuxt 4** - Web preview interface
- **Pinia** - State management for the web builder

## Project Structure

```
resume/
├── index.ts           # PDF generation script (uses Puppeteer)
├── optimize.ts        # AI optimization script (uses Gemini)
├── data.json          # Your resume data (edit this)
├── prompt.ts          # Optimization prompt/guidelines
├── jobDescription.ts  # Target job description for optimization
├── optimized.json     # AI-optimized resume output
├── builder/           # Nuxt web app for preview
│   ├── app/           # Vue components and stores
│   └── nuxt.config.ts
└── tailwind.config.js
```

## Setup

### 1. Install Dependencies

```bash
npm install
cd builder && npm install && cd ..
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Usage

### Option 1: Use Existing Data

1. Edit `data.json` with your resume information
2. Edit `jobDescription.ts` with the target job description
3. Run the optimizer:

```bash
npm run optimize
```

This will generate `optimized.json` with AI-optimized content.

### Option 2: Use the Web Builder

1. Start the web builder:

```bash
cd builder
npm run dev
```

2. Open `http://localhost:3000` in your browser
3. Edit your resume data directly in the UI
4. Generate the PDF:

```bash
npm run build
```

This will launch Puppeteer, capture the web preview, and generate `Aarón_Mishael_Carrizal_Méndez-Resume.pdf`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run optimize` | Run AI optimization with Gemini |
| `npm run build` | Generate PDF from web preview |

## Data Format

Edit `data.json` with the following structure:

```json
{
  "personalInfo": {
    "fullName": "Your Name",
    "title": "Job Title",
    "email": "email@example.com",
    "phone": "+1 234 567 890",
    "github": "https://github.com/username",
    "linkedIn": "https://linkedin.com/in/username",
    "location": "City, Country",
    "profilePicture": "profile_picture.jpg",
    "profile": "Professional summary..."
  },
  "employmentHistory": [...],
  "education": [...],
  "skills": {
    "frontend": [...],
    "backend": [...],
    "softwareDevelopment": [...]
  },
  "softSkills": [...],
  "languages": [...],
  "courses": [...]
}
```

## AI Optimization

The `optimize.ts` script uses Google Gemini to:
- Match keywords from the job description
- Quantify achievements with action verbs
- Reorder skills by relevance
- Optimize the professional summary for ATS

The optimized output is saved to `optimized.json`. You can then use this data in the web builder or copy it to `data.json`.
