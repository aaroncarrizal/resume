import React from 'react'
import type { PersonalInfo } from '@resume/core'
import { Pill } from './ui/Pill'

export function HeaderMain({ info }: { info: PersonalInfo }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-black m-0 p-0">{info.fullName}</h1>
      <h2 className="text-lg font-bold">{info.title}</h2>
    </div>
  )
}
