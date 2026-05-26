import React from 'react'
import type { CV } from '@resume/core'
import { Header } from './components/Header'
import { EmploymentSection } from './components/EmploymentSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { LanguagesSection } from './components/LanguagesSection'
import { CoursesSection } from './components/CoursesSection'

export function CVLayout({ cv }: { cv: CV }) {
  return (
    <>
      <Header info={cv.personalInfo} />
      <EmploymentSection history={cv.employmentHistory} />
      <SkillsSection skills={cv.skills} softSkills={cv.softSkills} />
      <EducationSection education={cv.education} />
      <LanguagesSection languages={cv.languages} />
      {/* <CoursesSection courses={cv.courses} /> */}
    </>
  )
}
