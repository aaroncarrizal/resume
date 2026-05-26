import React, { useMemo } from 'react'
import type { PersonalInfo } from '@resume/core'
import { Pill } from './ui/Pill'
import { parseUrl } from '../utils/parseUrl'

export const HeaderPills = ({ info }: { info: PersonalInfo }) => {
  return (
    <div className="flex flex-row justify-evenly text-xs">
      <Pill><a href={`mailto:${info.email}`}>{info.email}</a></Pill>
      <Pill>{info.phone}</Pill>
      {/* <Pill><a href={info.linkedIn}>{parseUrl(info.linkedIn)}</a></Pill> */}
      <Pill><a href={info.webpage}>{parseUrl(info.webpage)}</a></Pill>
      <Pill>{info.location}</Pill>
    </div>
  )
}
