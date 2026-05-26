import React from 'react'
import type { PersonalInfo } from '@resume/core'

export function HeaderSidebar({ info }: { info: PersonalInfo }) {
  return (
    <>
      <img src={info.profilePicture} alt="profile_picture" className="object-cover rounded-lg h-24 mb-1" />
      <p className="font-bold text-sm">{info.title}</p>
      <a className="text-xs -mt-3" href={`mailto:${info.email}`}>{info.email}</a><br />
      <p className="text-xs">{info.phone}</p>
      <p className="text-xs">{info.location}</p>
    </>
  )
}
