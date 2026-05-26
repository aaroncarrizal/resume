import React from 'react'
import type { Education } from '@resume/core'

export function EducationSection({ education }: { education: Education[] }) {
  if (!education || education.length === 0) return null

  return (
    <>
      <h2 className="text-lg font-bold">Education</h2>
      {education.map((school, i) => (
        <div key={i}>
          <h3 className="text-l font-bold bg-surface rounded-lg p-1">
            {school.degree}, {school.institution}, {school.location}
          </h3>
          <h4 className="text-l">{school.startDate} — {school.endDate}</h4>
          {school.achievements && <p className="text-xs mt-1">{school.achievements}</p>}
        </div>
      ))}
    </>
  )
}
