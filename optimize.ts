import { GoogleGenAI } from '@google/genai'
import fs from 'fs/promises'
import dotenv from 'dotenv'

dotenv.config()

const data = JSON.parse(await fs.readFile('./data.json', 'utf-8'))

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API
})

function startSpinner() {
    const frames = ['-', '\\', '|', '/']
    let i = 0
    const interval = setInterval(() => {
        process.stdout.write(
            `\rWaiting on gemini… ${frames[i++ % frames.length]}`
        )
    }, 100)
    return interval
}

const jobDescription = `
Software Engineer, Early Career, Chrome Test Infrastructure
corporate_fare
Google
place
Mexico City, CDMX, Mexico
info_outline
X
Please submit your resume in English - we can only consider applications submitted in this language.

Only applications of candidates with Mexican citizenship will be evaluated for this role in compliance with the provisions of Article 7 of the Federal Labor Law.


Minimum qualifications:
Bachelor’s degree or equivalent practical experience.
1 year of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).
1 year of experience with data structures or algorithms.
1 year of experience building and developing large-scale infrastructure or distributed systems.

Preferred qualifications:
Experience with Python, C++, SQL.
Experience with test infrastructure continuous integration distributed systems.
Familiarity with CI workflows.
About the job
Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.

Our team is very self-directed and self-sustaining. We work with chrome developers at Google, and the broader Chromium community to come up with problems to solve. Our team then collaborates, debates, and experiments to come up with solutions. We take pride in the impact that we have, and take seriously our responsibility towards the billions of users that depend on Chrome everyday.

The Core team builds the technical foundation behind Google’s flagship products. We are owners and advocates for the underlying design elements, developer platforms, product components, and infrastructure at Google. These are the essential building blocks for excellent, safe, and coherent experiences for our users and drive the pace of innovation for every developer. We look across Google’s products to build central solutions, break down technical barriers and strengthen existing systems. As the Core team, we have a mandate and a unique opportunity to impact important technical decisions across the company.

Responsibilities
Apply debugging and creative thinking skills to find bottlenecks in Chrome developers processes.
Implement changes to improve Chrome developers processes.
Contribute to documentation and user education based on system updates and user feedback.
Triage, debug, track and resolve issues to maintain system operational excellence.
Participate in the infrastructure on-call rotation (work hours only).
`

async function main() {
    const spinner = startSpinner()
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            `Role: Expert ATS/Recruiter CV Optimization Engineer.

Objective: Analyze a candidate's CV (in JSON format) and a specific Job Description to generate a significantly optimized CV in the exact same JSON structure. The optimization must simultaneously ensure the CV achieves a near-perfect match score with Applicant Tracking Systems (ATS) and presents a compelling, achievement-focused narrative that is highly attractive to human recruiters and hiring engineers. The ultimate goal is to maximize the candidate's chances of securing a job interview.

Optimization Strategy & Constraints

Apply the following specific strategies to each section of the output JSON:

ATS Keyword Integration:

Mandatory: Systematically identify and integrate high-value, exact keywords and related concepts from the Job Description into the personalInfo.profile, employmentHistory.responsibilities, and relevant skills lists.

Synonyms & Acronyms: Incorporate common synonyms and both full and abbreviated forms of technologies/concepts (e.g., 'Kubernetes' and 'K8s', 'Agile SCRUM' and 'Agile methodologies') where appropriate, without creating keyword stuffing.

Recruiter & Engineer Appeal (Quantification & Action Verbs):

Strong Action Verbs: Start every responsibility bullet point with a powerful, distinct, and high-impact action verb (e.g., Architected, Spearheaded, Optimized, Delivered, Reduced, Mentored).

Technical Depth: Ensure employmentHistory.responsibilities clearly link the mentioned technologies to specific, non-trivial, and relevant engineering challenges or solutions.

Section-Specific Revisions:

personalInfo.title: Update the title to exactly match the most relevant title in the Job Description (e.g., change "Software Development Engineer (Full Stack)" to "Senior Backend Engineer" if the job is backend-focused).

personalInfo.profile: Rewrite the professional summary to be a compelling, 4-5 line narrative that directly addresses the core requirements of the job description within the first two sentences. Highlight years of experience, key domain expertise, and a major, quantified achievement.

skills:

Prioritize: Reorder all technology lists to put the most critical and frequently mentioned skills from the Job Description at the very top.

Consolidate/Expand: Consolidate generic skills where a more specific job-related term is possible (e.g., replace 'SQL' with 'PostgreSQL' or 'MySQL' if the JD mentions it). Add any missing core technologies from the Job Description that the candidate likely possesses but didn't list explicitly (only add if they are standard for the candidate's existing experience).

softSkills: Rephrase or reorder the list to prioritize and better align with the specific "cultural fit" and non-technical attributes mentioned or implied in the Job Description (e.g., change "Teamwork" to "Cross-functional Collaboration").

Make sure that the texts of each JSON property remain more or less the same length as their previous version.

Output Format

The final output must be a single, valid JSON object that adheres exactly to the structure of the input example. Do not include any text, explanations, or markdown outside of the JSON block.`,

            `Input

Candidate CV (JSON): ${JSON.stringify(data)}`,

            `Job Description (Text):
${jobDescription}
`
        ]
    })
    clearInterval(spinner)
    // process.stdout.write('\r✅\n')

    if (response.text) {
        const text = response.text.trim()
        const jsonMatch = text.match(/```json\s*([\s\S]*?)```/i)
        const jsonString = jsonMatch ? jsonMatch[1].trim() : text
        jsonString.replace('**', '')

        await fs.writeFile('optimized.json', jsonString, 'utf-8')
        console.log('File saved as optimized.json')
    }
}

await main()
