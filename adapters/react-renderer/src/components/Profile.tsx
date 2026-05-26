import { PersonalInfo } from '@resume/core'
import React from 'react'
import { Container } from './ui/Container'

export const Profile = ({ info }: { info: PersonalInfo }) => {
  return (
    <Container><p className='text-2xs'>{info.profile}</p></Container>
  )
}
