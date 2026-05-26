import React from 'react'
import type { Employment } from '@resume/core'
import { Divider } from './ui/Divider'
import { Container } from './ui/Container'
import { Pill } from './ui/Pill'
import { HorizontalGrow } from './ui/HorizontalGrow'

export function EmploymentSection({ history }: { history: Employment[] }) {
  if (!history || history.length === 0) return null

  return (
    <section className='mb-2'>
      <Divider text='Employment' />
      <div className='flex flex-col gap-1'>
        {history.map((job, i) => (
          <Container key={i}>
            <HorizontalGrow>
              <h4 className='font-bold'>{job.company}</h4>
              <Pill>{job.startDate} - {job.endDate}</Pill>
            </HorizontalGrow>
            <HorizontalGrow>
              <h4 className='font-medium'>{job.position}</h4>
              <Pill>{job.location}</Pill>
            </HorizontalGrow>
            <ul className="list-disc text-2xs list-outside pl-3">
              {job.responsibilities.map((r, j) => (
                <li key={j} className="leading-tight">{r}</li>
              ))}
            </ul>
          </Container>
        ))}
      </div>
    </section>
  )
}
