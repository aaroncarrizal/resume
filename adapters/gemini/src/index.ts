import { GoogleGenAI } from '@google/genai'
import type { CV } from '@resume/core'
import { optimizePrompt } from './prompt'
export { optimizePrompt }

export interface GeminiConfig {
  apiKey: string
  model?: string
}

export async function optimizeCV(
  cv: CV,
  jobDescription: string,
  config: GeminiConfig
): Promise<CV> {
  const ai = new GoogleGenAI({ apiKey: config.apiKey })
  const model = config.model ?? 'gemini-flash-latest'

  const response = await ai.models.generateContent({
    model,
    contents: [
      optimizePrompt,
      `Input\n\nCandidate CV (JSON): ${JSON.stringify(cv)}`,
      `Job Description (Text):\n${jobDescription}`,
    ],
  })

  if (!response.text) {
    throw new Error('No response from Gemini')
  }

  const text = response.text.trim()
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/i)
  const jsonString = jsonMatch ? jsonMatch[1].trim() : text

  const parsed = JSON.parse(jsonString) as CV

  // Normalize skills fields: Gemini may return comma-separated strings instead of arrays
  if (parsed.skills) {
    for (const key of ['frontend', 'backend', 'softwareDevelopment'] as const) {
      const val = parsed.skills[key]
      if (typeof val === 'string') {
        parsed.skills[key] = val.split(',').map((s) => s.trim())
      }
    }
  }
  if (typeof parsed.softSkills === 'string') {
    parsed.softSkills = parsed.softSkills.split(',').map((s) => s.trim())
  }

  return parsed
}
