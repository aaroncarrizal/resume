import React from 'react'
import type { Skills } from '@resume/core'

function Category({ name, items }: { name: string; items: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <>
      <h3 className="font-bold">{name}</h3>
      <div>
        {items.map((s, i) => (
          <div key={i} className="rounded-full bg-surface-alt text-center text-xs py-0.5 px-2 m-0.5 inline">
            {s}
          </div>
        ))}
      </div>
    </>
  )
}

export function SkillsSection({ skills, softSkills }: { skills: Skills; softSkills: string[] }) {
  return (
    <>
      <div className="bg-surface rounded-2xl px-4 py-2 mb-2">
        <h2 className="text-lg font-bold">Hard Skills</h2>
        <Category name="Frontend" items={skills.frontend} />
        <Category name="Backend" items={skills.backend} />
        <Category name="Software Development" items={skills.softwareDevelopment} />
      </div>
      <div className="bg-surface rounded-2xl px-4 py-2 mb-2">
        <h2 className="text-lg font-bold">Soft Skills</h2>
        <div>
          {softSkills.map((s, i) => (
            <div key={i} className="rounded-full bg-surface-alt text-center text-xs py-0.5 px-2 m-0.5 inline truncate">
              {s}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
