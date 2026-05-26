import React from 'react'
import type { PersonalInfo } from '@resume/core'
import { Pill } from './Pill'

export function HeaderMain({ info }: { info: PersonalInfo }) {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 className="text-xl">{info.fullName}</h1>
      <h2 className="text-lg">{info.title}</h2>
    </div>
    <div className="flex flex-row justify-between">
        <Pill>
          {info.email}
        </Pill>
    </div>
    </>
  )
}
