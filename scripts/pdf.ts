import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { generatePDF } from '@resume/adapter-puppeteer'
import type { CV } from '@resume/core'
import { styles } from '@resume/core'
import { PATHS } from './helpers/paths'
import { argv } from 'node:process'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap'

const DOCUMENT_TEMPLATE = (body: string, tailwind: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${FONT_HREF}" rel="stylesheet">
  <style>${tailwind}</style>
  <style>${styles}</style>
</head>
<body style="padding: 0.3in;">
  ${body}
</body>
</html>`

async function main() {
  const args = argv.slice(2)
  const get = (flag: string, fallback: string) => {
    const idx = args.indexOf(flag)
    return idx !== -1 ? args[idx + 1] : fallback
  }

  const inputPath = get('--input', PATHS.optimized)
  const outputHtmlPath = get('--output', PATHS.outputHtml)
  const format = get('--format', 'letter') as 'letter' | 'a4'

  const cvPath = existsSync(inputPath) ? inputPath : PATHS.dataJson
  const cv: CV = JSON.parse(readFileSync(cvPath, 'utf-8'))
  const pdfFilename = `${cv.personalInfo.fullName.replace(/\s+/g, '_')}-Resume.pdf`
  const outputPdfPath = resolve(dirname(outputHtmlPath), pdfFilename)

  console.log(`Input:  ${cvPath}`)
  console.log(`Output: ${outputHtmlPath}`)
  console.log(`Format: ${format}`)
  console.log()

  const appCssPath = resolve(ROOT, 'adapters/react-renderer/src/app.css')
  const outputCssPath = resolve(ROOT, 'output/tailwind.css')
  const cssDir = dirname(outputCssPath)
  if (!existsSync(cssDir)) mkdirSync(cssDir, { recursive: true })
  execSync(`tailwindcss -i "${appCssPath}" -o "${outputCssPath}" --minify`, { cwd: ROOT })
  const tailwindCSS = readFileSync(outputCssPath, 'utf-8')

  const { CVLayout } = await import(
    pathToFileURL(resolve(ROOT, 'adapters/react-renderer/src/CVLayout.tsx')).href
  )
  const body = renderToString(React.createElement(CVLayout, { cv }))
  const html = DOCUMENT_TEMPLATE(body, tailwindCSS)

  const htmlDir = dirname(outputHtmlPath)
  if (!existsSync(htmlDir)) mkdirSync(htmlDir, { recursive: true })
  writeFileSync(outputHtmlPath, html, 'utf-8')
  console.log(`Rendered HTML to ${outputHtmlPath}`)

  await generatePDF({ input: outputHtmlPath, output: outputPdfPath, format })
  console.log(`PDF generated: ${outputPdfPath}`)
}

await main()
