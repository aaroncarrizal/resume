import type { Education } from '../types'

export function renderEducation(education: Education[]): string {
  if (!education || education.length === 0) return ''

  const entries = education.map(school => `
    <h3 class="text-l font-bold bg-gray-200 rounded-lg p-1">${school.degree}, ${school.institution}, ${school.location}</h3>
    <h4 class="text-l">${school.startDate} — ${school.endDate}</h4>
  `).join('\n    ')

  return `
    <h2 class="text-lg font-bold">Education</h2>
    ${entries}
  `
}
