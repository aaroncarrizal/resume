import React from 'react'
import type { Education } from '@resume/core'
import { Divider } from './ui/Divider'
import { Container } from './ui/Container'
import { Pill } from './ui/Pill'

export function EducationSection({ education }: { education: Education[] }) {
  if (!education || education.length === 0) return null

  return (
    <section>
      <Divider text='Education' />
      {education.map((school, i) => (
        <Container key={i} className='text-xs'>
          <div className="flex justify-between">
            <h4>{school.degree}</h4>
            <Pill>{school.startDate} - {school.endDate}</Pill>
          </div>
          <div className="flex justify-between">
            <h4>{school.institution}</h4>
            <Pill>{school.location}</Pill>
          </div>
          <div className="text-xs">
            {school.achievements}
          </div>
        </Container>
      ))}
    </section>
  )
}
