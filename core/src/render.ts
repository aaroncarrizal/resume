import type { CV } from './types'
import { styles } from './styles'
import { renderHeaderSidebar, renderHeaderMain } from './sections/header'
import { renderEmployment } from './sections/employment'
import { renderSkills } from './sections/skills'
import { renderEducation } from './sections/education'
import { renderLanguages } from './sections/languages'
import { renderCourses } from './sections/courses'

export function renderCV(cv: CV): { html: string; css: string } {
  const body = `
    <div class="grid grid-cols-12 mb-2">
      <div class="col-span-3">
        ${renderHeaderSidebar(cv.personalInfo)}
      </div>
      <div class="col-span-9">
        ${renderHeaderMain(cv.personalInfo)}
      </div>
    </div>
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-8 px-1">
        ${renderEmployment(cv.employmentHistory)}
        ${renderEducation(cv.education)}
      </div>
      <div class="col-span-4">
        ${renderSkills(cv.skills, cv.softSkills)}
        ${renderLanguages(cv.languages)}
        ${renderCourses(cv.courses)}
      </div>
    </div>
  `

  return {
    css: styles,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <style>${styles}</style>
</head>
<body>
  ${body}
</body>
</html>`,
  }
}
