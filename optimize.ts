import { GoogleGenAI } from '@google/genai';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import { prompt } from './prompt';
import { jobDescription } from './jobDescription';

dotenv.config();

const data = JSON.parse(await fs.readFile('./data.json', 'utf-8'));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API
});

function startSpinner() {
  const frames = ['-', '\\', '|', '/'];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(`\rWaiting on gemini… ${frames[i++ % frames.length]}`);
  }, 100);
  return interval;
}

async function main() {
  const spinner = startSpinner();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      prompt,

      `Input

Candidate CV (JSON): ${JSON.stringify(data)}`,

      `Job Description (Text):
${jobDescription}
`
    ]
  });
  clearInterval(spinner);
  // process.stdout.write('\r✅\n')

  if (response.text) {
    const text = response.text.trim();
    const jsonMatch = text.match(/```json\s*([\s\S]*?)```/i);
    const jsonString = jsonMatch ? jsonMatch[1].trim() : text;
    jsonString.replace('**', '');

    await fs.writeFile('optimized.json', jsonString, 'utf-8');
    console.log('File saved as optimized.json');
  }
}

await main();
