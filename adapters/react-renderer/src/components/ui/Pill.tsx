import React from 'react'
import type { ReactNode } from 'react'

export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-block rounded-full bg-primary/10 py-0.5 px-2 whitespace-nowrap">{children}</div>
  )
}
