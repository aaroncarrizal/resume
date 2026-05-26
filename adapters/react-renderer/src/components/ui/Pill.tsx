import React from 'react'
import type { ReactNode } from 'react'

export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-block rounded-full bg-primary/10 py-px px-1.5 whitespace-nowrap">{children}</div>
  )
}
