export interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  github: string
  profilePicture: string
  linkedIn: string
  profile: string
  webpage: string
}

export interface Employment {
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  responsibilities: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  achievements?: string
}

export interface Skills {
  frontend: string[]
  backend: string[]
  softwareDevelopment: string[]
}

export interface Language {
  name: string
  level: string
}

export interface Course {
  title: string
  institution: string
  startDate: string
  endDate: string,
  description: string
}

export interface CV {
  personalInfo: PersonalInfo
  employmentHistory: Employment[]
  education: Education[]
  skills: Skills
  softSkills: string[]
  languages: Language[]
  courses: Course[]
}
