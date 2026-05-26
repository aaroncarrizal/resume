import './app.css'
import './preview.css'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import type { CV } from '@resume/core'
import { CVLayout } from './CVLayout'
import { PaperToggle } from './PaperToggle'

function App() {
  const [cv, setCv] = useState<CV | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setCv((await import('../../../data/optimized.json')) as CV)
      } catch {
        setCv((await import('../../../data/data.json')) as CV)
      }
    }
    load()
  }, [])

  if (!cv) return null

  return (
    <>
      <CVLayout cv={cv} />
      <PaperToggle />
    </>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
