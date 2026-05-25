import type { Course } from '../types'

export function renderCourses(courses: Course[]): string {
  if (!courses || courses.length === 0) return ''

  const entries = courses.map(course => `
    <div>
      <h3 class="text-xs font-bold">${course.title} at ${course.institution}</h3>
      <h4 class="text-xs">${course.startDate} — ${course.endDate}</h4>
    </div>
  `).join('\n    ')

  return `
    <div class="bg-gray-200 rounded-2xl px-4 py-2 mb-2">
      <h2 class="text-lg font-bold">Courses</h2>
      ${entries}
    </div>
  `
}
