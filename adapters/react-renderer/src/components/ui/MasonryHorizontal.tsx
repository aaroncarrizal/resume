import React from 'react'
import type { ReactNode } from 'react'

export const MasonryHorizontal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-wrap gap-1 items-start">{children}</div>
  )
}
