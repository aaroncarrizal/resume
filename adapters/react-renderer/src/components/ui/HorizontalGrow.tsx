import React, { ReactNode } from 'react'
import { cn } from '../../lib/utils';

export const HorizontalGrow = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn("flex justify-between text-2xs mb-1", className)}>
      {children}
    </div>
  )
}
