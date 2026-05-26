import puppeteer from 'puppeteer'
import { existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

export interface PDFOptions {
  input: string
  output: string
  format?: 'letter' | 'a4'
}

function resolveUrl(input: string): string {
  if (input.startsWith('http://') || input.startsWith('https://')) {
    return input
  }
  const absolute = resolve(input)
  if (!existsSync(absolute)) {
    throw new Error(`Input file not found: ${absolute}`)
  }
  return `file://${absolute}`
}

export async function generatePDF(options: PDFOptions): Promise<void> {
  const format = options.format ?? 'letter'

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(120000)

    const url = resolveUrl(options.input)
    await page.goto(url, { waitUntil: 'networkidle0' })
    await page.setViewport({ width: 1632, height: 2112 })

    const outputDir = dirname(options.output)
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }

    await page.pdf({
      path: options.output,
      format,
      printBackground: true,
    })
  } finally {
    await browser.close()
  }
}
