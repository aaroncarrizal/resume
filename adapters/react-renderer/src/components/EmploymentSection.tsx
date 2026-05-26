import React from 'react'
import type { Employment } from '@resume/core'

export function EmploymentSection({ history }: { history: Employment[] }) {
  if (!history || history.length === 0) return null

  return (
    <>
      <h2 className="text-lg font-bold">Employment History</h2>
      {history.map((job, i) => (
        <div key={i} className="mt-1 mb-2">
          <h3 className="text-l font-bold bg-surface rounded-lg p-1">
            {job.position} at {job.company}, {job.location}
          </h3>
          <h4 className="text-l">{job.startDate} — {job.endDate}</h4>
          <ul className="list-disc text-xs px-1">
            {job.responsibilities.map((r, j) => (
              <li key={j} className="mb-0.5">{r}</li>
            ))}
          </ul>
          <h4 className="text-l font-bold">Main Technologies</h4>
          <div className="flex justify-between items-center mt-0.5">
            {job.technologies.map((t, j) => (
              <div key={j} className="bg-surface rounded-full py-0.5 px-2">
                <p className="w-auto text-center text-xs">{t}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
