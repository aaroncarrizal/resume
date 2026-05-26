import React from 'react'
import type { PersonalInfo } from '@resume/core'
import { Pill } from './ui/Pill'
import { parseUrl } from '../utils/parseUrl'
import { Container } from './ui/Container'

export function Header({ info }: { info: PersonalInfo }) {
  return (
    <section className='flex flex-col gap-1 mb-1'>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-black">{info.fullName}</h1>
        <h2 className="text-lg font-bold">{info.title}</h2>
      </div>
      <div className="flex flex-row justify-evenly text-2xs">
        <Pill><a href={`mailto:${info.email}`} aria-label={info.email}>{info.email}</a></Pill>
        <Pill>{info.phone}</Pill>
        <Pill><a href={info.linkedIn}>{parseUrl(info.linkedIn)}</a></Pill>
        <Pill><a href={info.webpage} aria-label={parseUrl(info.webpage)}>{parseUrl(info.webpage)}</a></Pill>
        <Pill>{info.location}</Pill>
      </div>
      <Container><p className='text-2xs text-justify'>{info.profile}</p></Container>
    </section>
  )
}
