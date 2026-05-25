import type { Employment } from '../types'

export function renderEmployment(history: Employment[]): string {
  if (!history || history.length === 0) return ''

  const jobs = history.map(job => `
    <div class="mt-1 mb-2">
      <h3 class="text-l font-bold bg-gray-200 rounded-lg p-1">${job.position} at ${job.company}, ${job.location}</h3>
      <h4 class="text-l">${job.startDate} — ${job.endDate}</h4>
      <ul class="list-disc text-xs px-1">
        ${job.responsibilities.map(r => `<li class="mb-0.5">${r}</li>`).join('\n        ')}
      </ul>
      <h4 class="text-l font-bold">Main Technologies</h4>
      <div class="flex justify-between items-center mt-0.5">
        ${job.technologies.map(t => `
          <div class="bg-gray-200 rounded-full py-0.5 px-2">
            <p class="w-auto text-center text-xs">${t}</p>
          </div>
        `).join('\n        ')}
      </div>
    </div>
  `).join('\n    ')

  return `
    <h2 class="text-lg font-bold">Employment History</h2>
    ${jobs}
  `
}
