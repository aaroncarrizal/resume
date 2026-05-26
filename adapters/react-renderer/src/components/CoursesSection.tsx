import React from 'react'
import type { Course } from '@resume/core'

export function CoursesSection({ courses }: { courses: Course[] }) {
  if (!courses || courses.length === 0) return null

  return (
    <div className="bg-gray-200 rounded-2xl px-4 py-2 mb-1">
      <h2 className="text-lg font-bold">Courses</h2>
      {courses.map((course, i) => (
        <div key={i}>
          <h3 className="text-xs font-bold">{course.title} at {course.institution}</h3>
          <h4 className="text-xs">{course.startDate} — {course.endDate}</h4>
        </div>
      ))}
    </div>
  )
}
