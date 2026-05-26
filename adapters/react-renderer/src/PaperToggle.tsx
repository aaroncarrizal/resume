import React, { useState, useEffect } from 'react'

const KEY = 'pv-active'

export function PaperToggle() {
  const [active, setActive] = useState(() => localStorage.getItem(KEY) === 'true')

  useEffect(() => {
    document.documentElement.classList.toggle('pv-paper', active)
  }, [active])

  const toggle = () => {
    const next = !active
    setActive(next)
    localStorage.setItem(KEY, String(next))
  }

  return (
    <button
      className={`pv-btn ${active ? 'active' : ''}`}
      onClick={toggle}
    >
      {active ? 'Scroll View' : 'Page View'}
    </button>
  )
}
