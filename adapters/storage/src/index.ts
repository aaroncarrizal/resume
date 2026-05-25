import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

export async function readJSON<T>(filePath: string): Promise<T> {
  const content = await readFile(filePath, 'utf-8')
  return JSON.parse(content) as T
}

export async function writeJSON(filePath: string, data: unknown): Promise<void> {
  await ensureDir(dirname(filePath))
  await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

export async function readText(filePath: string): Promise<string> {
  return readFile(filePath, 'utf-8')
}

export async function writeText(filePath: string, content: string): Promise<void> {
  await ensureDir(dirname(filePath))
  await writeFile(filePath, content, 'utf-8')
}

export async function ensureDir(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true })
}
