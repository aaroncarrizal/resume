import React from 'react'
import type { CV } from '@resume/core'
import { HeaderPills } from './components/HeaderPills'
import { HeaderMain } from './components/HeaderMain'
import { EmploymentSection } from './components/EmploymentSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { LanguagesSection } from './components/LanguagesSection'
import { CoursesSection } from './components/CoursesSection'

export function CVLayout({ cv }: { cv: CV }) {
  return (
    <>
      <div className="grid grid-cols-12 mb-2">
        <div className="col-span-12">
          <HeaderMain info={cv.personalInfo} />
          <HeaderPills info={cv.personalInfo} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8 px-1">
          <EmploymentSection history={cv.employmentHistory} />
          <EducationSection education={cv.education} />
        </div>
        <div className="col-span-4">
          <SkillsSection skills={cv.skills} softSkills={cv.softSkills} />
          <LanguagesSection languages={cv.languages} />
          <CoursesSection courses={cv.courses} />
        </div>
      </div>
    </>
  )
}
