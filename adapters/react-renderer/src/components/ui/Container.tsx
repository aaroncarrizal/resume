import React from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn('bg-primary/5 text-sm rounded-lg p-1.5', className)}>{children}</div>
  )
}
