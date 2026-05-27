import React from 'react'
import type { Skills } from '@resume/core'
import { Pill } from './ui/Pill';
import { HorizontalMasonry } from './ui/HorizontalMasonry';
import { Divider } from './ui/Divider';
import { Container } from './ui/Container';
import { HorizontalGrow } from './ui/HorizontalGrow';

function Category({ name, items }: { name: string; items: string[] | string }) {
  if (!items) return null
  const list: string[] = Array.isArray(items) ? items : items.split(',').map((s) => s.trim())
  if (list.length === 0) return null
  return (
    <div className='grid grid-cols-12 text-2xs'>
      <h5 className='whitespace-nowrap mr-2 font-medium col-span-2'>{name}</h5>
      <HorizontalMasonry className='col-span-10 text-2xs'>
        {list.map((skill, i) => (
          <Pill key={i}>
            {skill}
          </Pill>
        ))}
      </HorizontalMasonry>
    </div>
  )
}

export function SkillsSection({ skills, softSkills }: { skills: Skills; softSkills: string[] }) {
  return (
    <section className='mb-1'>
      <Divider text='Skills' />
      <Container className='flex flex-col gap-0.5'>
        <Category name="Frontend" items={skills.frontend} />
        <Category name="Backend" items={skills.backend} />
        <Category name="Software Eng." items={skills.softwareDevelopment} />
        <Category name="Soft Skills" items={softSkills} />
      </Container>
    </section>
  )
}
