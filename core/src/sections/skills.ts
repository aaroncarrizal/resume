import type { Skills } from '../types'

function renderCategory(name: string, items: string[]): string {
  if (!items || items.length === 0) return ''
  return `
    <h3 class="font-bold">${name}</h3>
    <div>
      ${items.map(s => `<div class="rounded-full bg-gray-300 text-center text-xs py-0.5 px-2 m-0.5 inline">${s}</div>`).join('\n      ')}
    </div>
  `
}

export function renderSkills(skills: Skills, softSkills: string[]): string {
  return `
    <div class="bg-gray-200 rounded-2xl px-4 py-2 mb-2">
      <h2 class="text-lg font-bold">Hard Skills</h2>
      ${renderCategory('Frontend', skills.frontend)}
      ${renderCategory('Backend', skills.backend)}
      ${renderCategory('Software Development', skills.softwareDevelopment)}
    </div>
    <div class="bg-gray-200 rounded-2xl px-4 py-2 mb-2">
      <h2 class="text-lg font-bold">Soft Skills</h2>
      <div>
        ${softSkills.map(s => `<div class="rounded-full bg-gray-300 text-center text-xs py-0.5 px-2 m-0.5 inline truncate">${s}</div>`).join('\n        ')}
      </div>
    </div>
  `
}
