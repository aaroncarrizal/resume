import React from 'react'
import type { Education } from '@resume/core'
import { Divider } from './ui/Divider'
import { Container } from './ui/Container'
import { Pill } from './ui/Pill'
import { HorizontalGrow } from './ui/HorizontalGrow'

export function EducationSection({ education }: { education: Education[] }) {
  if (!education || education.length === 0) return null

  return (
    <section className='mb-1'>
      <Divider text='Education' />
      {education.map((school, i) => (
        <Container key={i} className='text-2xs'>
          <HorizontalGrow>
            <h4 className='font-bold'>{school.degree}</h4>
            <Pill>{school.startDate} - {school.endDate}</Pill>
          </HorizontalGrow>
          <HorizontalGrow>
            <h4 className='font-medium'>{school.institution}</h4>
            <Pill>{school.location}</Pill>
          </HorizontalGrow>
          <div className='text-2xs'>
            {school.achievements}
          </div>
        </Container>
      ))}
    </section>
  )
}
