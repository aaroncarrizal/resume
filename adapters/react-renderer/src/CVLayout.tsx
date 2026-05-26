import React from 'react'
import type { CV } from '@resume/core'
import { HeaderPills } from './components/HeaderPills'
import { HeaderMain } from './components/HeaderMain'
import { EmploymentSection } from './components/EmploymentSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { LanguagesSection } from './components/LanguagesSection'
import { CoursesSection } from './components/CoursesSection'
import { Profile } from './components/Profile'

export function CVLayout({ cv }: { cv: CV }) {
  return (
    <>
      <HeaderMain info={cv.personalInfo} />
      <HeaderPills info={cv.personalInfo} />
      <Profile info={cv.personalInfo} />
      <EmploymentSection history={cv.employmentHistory} />
      <SkillsSection skills={cv.skills} softSkills={cv.softSkills} />
      <EducationSection education={cv.education} />
      <LanguagesSection languages={cv.languages} />
      {/* <CoursesSection courses={cv.courses} /> */}
    </>
  )
}
