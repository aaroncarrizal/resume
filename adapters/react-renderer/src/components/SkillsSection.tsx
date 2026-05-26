import React from 'react'
import type { Skills } from '@resume/core'
import { Pill } from './ui/Pill';
import { MasonryHorizontal } from './ui/MasonryHorizontal';
import { Divider } from './ui/Divider';
import { Container } from './ui/Container';

function Category({ name, items }: { name: string; items: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <div className='flex text-2xs'>
      <h5 className='whitespace-nowrap mr-2 font-medium'>{name}</h5>
      <MasonryHorizontal>
        {items.map((skill, i) => (
          <Pill key={i}>
            {skill}
          </Pill>
        ))}
      </MasonryHorizontal>
    </div>
  )
}

export function SkillsSection({ skills, softSkills }: { skills: Skills; softSkills: string[] }) {
  return (
    <section>
      <Divider text='Skills' />
      <Container>
        <Category name="Frontend" items={skills.frontend} />
        <Category name="Backend" items={skills.backend} />
        <Category name="Software Development" items={skills.softwareDevelopment} />
        <Category name="Soft Skills" items={softSkills} />
      </Container>
    </section>
  )
}
