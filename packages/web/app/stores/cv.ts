import { defineStore } from 'pinia'
import cvData from '@resume/data/optimized.json'
import type {
    CV,
    PersonalInfo,
    Employment,
    Education,
    Skills,
    Language,
    Course
} from '@resume/core'

export const useCVStore = defineStore('cv', {
    state: (): CV => ({
        personalInfo: {
            fullName: '',
            title: '',
            email: '',
            phone: '',
            location: '',
            profilePicture: '',
            linkedIn: '',
            profile: '',
            github: '',
            webpage: ''
        },
        employmentHistory: [] as Employment[],
        education: [] as Education[],
        skills: {
            frontend: [],
            backend: [],
            softwareDevelopment: []
        } as Skills,
        softSkills: [] as string[],
        languages: [] as Language[],
        courses: [] as Course[]
    }),
    actions: {
        loadCV() {
            try {
                const data = cvData as CV
                this.personalInfo = data.personalInfo
                this.employmentHistory = data.employmentHistory
                this.education = data.education
                this.skills = data.skills
                this.softSkills = data.softSkills
                this.languages = data.languages
                this.courses = data.courses
            } catch (error) {
                console.error('Error loading CV:', error)
            }
        }
    }
})
