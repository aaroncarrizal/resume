import { readJSON, readText, writeJSON } from '@resume/adapter-storage'
import { optimizeCV } from '@resume/adapter-gemini'
import type { CV } from '@resume/core'
import { PATHS } from './helpers/paths'
import { resolve, join } from 'node:path'
import { readdir } from 'node:fs/promises'
import { argv } from 'node:process'

function startSpinner() {
  const frames = ['-', '\\', '|', '/']
  let i = 0
  const interval = setInterval(() => {
    process.stdout.write(`\rWaiting on Gemini\u2026 ${frames[i++ % frames.length]}`)
  }, 100)
  return interval
}

async function findJD(jdArg?: string): Promise<string> {
  if (jdArg) return resolve(jdArg)
  const files = await readdir(PATHS.jdsDir)
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
  const outputPath = get('--output', PATHS.optimized)

  const apiKey = process.env.GEMINI_API
  if (!apiKey) {
    console.error('Error: GEMINI_API not set in .env')
    process.exit(1)
  }

  const [cv, jdText] = await Promise.all([
    readJSON<CV>(PATHS.dataJson),
    readText(jdPath),
  ])

  const spinner = startSpinner()
  try {
    const optimized = await optimizeCV(cv, jdText, { apiKey })
    clearInterval(spinner)
    process.stdout.write('\r                              \r')
    await writeJSON(outputPath, optimized)
    console.log(`Saved optimized CV to ${outputPath}`)
  } catch (err) {
    clearInterval(spinner)
    process.stdout.write('\r                              \r')
    throw err
  }
}

await main()
