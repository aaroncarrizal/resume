import React from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export const HorizontalMasonry = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn('flex flex-wrap gap-1 items-start', className)}>{children}</div>
  )
}
