import React from 'react'
import type { Language } from '@resume/core'

export function LanguagesSection({ languages }: { languages: Language[] }) {
  if (!languages || languages.length === 0) return null

  return (
    <div className="bg-gray-200 rounded-2xl px-4 py-2 mb-2">
      <h2 className="text-lg font-bold">Languages</h2>
      <div className="text-xs">
        {languages.map((lang, i) => (
          <div key={i} className="flex justify-between rounded-full bg-gray-300 py-0.5 px-2 m-0.5">
            <span>{lang.name}</span>
            <div className="flex-grow mx-2" />
            <span>{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
