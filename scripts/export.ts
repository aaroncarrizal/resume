import { readJSON, readText, writeText } from '@resume/adapter-storage'
import { optimizePrompt } from '@resume/adapter-gemini'
import type { CV } from '@resume/core'
import { PATHS } from './helpers/paths'
import { resolve, join } from 'node:path'
import { readdir } from 'node:fs/promises'
import { argv } from 'node:process'

async function findJD(jdArg?: string): Promise<string> {
  if (jdArg) return resolve(jdArg)
  let files = await readdir(PATHS.jdsDir)
  files = files.filter((f) => !f.startsWith('.'))
  if (files.length === 0) throw new Error('No JD files found in data/jds/')
  return join(PATHS.jdsDir, files[0])
}

async function main() {
  const args = argv.slice(2)
  const get = (flag: string, fallback?: string) => {
    const idx = args.indexOf(flag)
    return idx !== -1 ? args[idx + 1] : fallback
  }

  const jdPath = await findJD(get('--jd'))
  const outputPath = get('--output', join(PATHS.output, 'manual-optimization.md'))

  const [cv, jdText] = await Promise.all([
    readJSON<CV>(PATHS.dataJson),
    readText(jdPath),
  ])

  const prompt = [
    '## System Prompt',
    '',
    optimizePrompt,
    '',
    '## CV (JSON)',
    '',
    '```json',
    JSON.stringify(cv, null, 2),
    '```',
    '',
    '## Job Description',
    '',
    jdText,
    '',
  ].join('\n')

  await writeText(outputPath, prompt)
  console.log(`Saved combined prompt to ${outputPath}`)
}

await main()
