import React from 'react'
import type { Employment } from '@resume/core'
import { Divider } from './ui/Divider'
import { Container } from './ui/Container'
import { Pill } from './ui/Pill'

export function EmploymentSection({ history }: { history: Employment[] }) {
  if (!history || history.length === 0) return null

  return (
    <section>
      <Divider text='Employment' />
      {history.map((job, i) => (
        <Container key={i}>
          <div className="flex justify-between text-xs">
            <h4>{job.company}</h4>
            <Pill>{job.startDate} - {job.endDate}</Pill>
          </div>
          <div className="flex justify-between text-xs">
            <h4>{job.position}</h4>
            <Pill>{job.location}</Pill>
          </div>
          <ul className="list-disc text-xs list-inside">
            {job.responsibilities.map((r, j) => (
              <li key={j} className="mb-0.5">{r}</li>
            ))}
          </ul>
        </Container>
      ))}
    </section>
  )
}
