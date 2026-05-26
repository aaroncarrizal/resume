import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

export const PATHS = {
  data: join(root, 'data'),
  dataJson: join(root, 'data', 'data.json'),
  optimized: join(root, 'data', 'optimized.json'),
  jdsDir: join(root, 'data', 'jds'),
  output: join(root, 'output'),
  outputHtml: join(root, 'output', 'index.html'),
  outputPdf: join(root, 'output', 'resume.pdf'),
}
