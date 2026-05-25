import { readJSON, writeText } from '@resume/adapter-storage'
import { renderCV } from '@resume/core'
import type { CV } from '@resume/core'
import { PATHS } from './helpers/paths'
import { argv } from 'node:process'

async function main() {
  const args = argv.slice(2)
  const get = (flag: string, fallback: string) => {
    const idx = args.indexOf(flag)
    return idx !== -1 ? args[idx + 1] : fallback
  }

  const inputPath = get('--input', PATHS.optimized)
  const outputPath = get('--output', PATHS.outputHtml)

  const cv = await readJSON<CV>(inputPath)
  const { html } = renderCV(cv)

  await writeText(outputPath, html)
  console.log(`Rendered HTML to ${outputPath}`)
}

await main()
