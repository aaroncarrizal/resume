import React from 'react'
import type { Language } from '@resume/core'
import { Divider } from './ui/Divider'
import { Container } from './ui/Container'

export function LanguagesSection({ languages }: { languages: Language[] }) {
  if (!languages || languages.length === 0) return null

  return (
    <section>
      <Divider text='Languages' />
      <Container>
        {languages.map((lang, k) => (
          <div className='flex justify-between text-xs'>
            <p>{lang.name}</p>
            <p>{lang.level}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
