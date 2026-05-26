import './app.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import cvData from '../../../data/data.json'
import { CVLayout } from './CVLayout'
import { PaperToggle } from './PaperToggle'
import './preview.css'

createRoot(document.getElementById('root')!).render(
  <>
    <CVLayout cv={cvData} />
    <PaperToggle />
  </>,
)
