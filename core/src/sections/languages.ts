import type { Language } from '../types'

export function renderLanguages(languages: Language[]): string {
  if (!languages || languages.length === 0) return ''

  const rows = languages.map(lang => `
    <div class="flex justify-between rounded-full bg-gray-300 py-0.5 px-2 m-0.5">
      <span>${lang.name}</span>
      <div class="flex-grow mx-2"></div>
      <span>${lang.level}</span>
    </div>
  `).join('\n    ')

  return `
    <div class="bg-gray-200 rounded-2xl px-4 py-2 mb-2">
      <h2 class="text-lg font-bold">Languages</h2>
      <div class="text-xs">
        ${rows}
      </div>
    </div>
  `
}
