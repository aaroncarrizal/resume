import { generatePDF } from '@resume/adapter-puppeteer'
import { PATHS } from './helpers/paths'
import { argv } from 'node:process'

async function main() {
  const args = argv.slice(2)
  const get = (flag: string, fallback: string) => {
    const idx = args.indexOf(flag)
    return idx !== -1 ? args[idx + 1] : fallback
  }

  const inputPath = get('--input', PATHS.outputHtml)
  const outputPath = get('--output', PATHS.outputPdf)
  const format = get('--format', 'letter') as 'letter' | 'a4'

  console.log(`Input:  ${inputPath}`)
  console.log(`Output: ${outputPath}`)
  console.log(`Format: ${format}`)
  console.log()

  await generatePDF({ input: inputPath, output: outputPath, format })
  console.log(`PDF generated: ${outputPath}`)
}

await main()
