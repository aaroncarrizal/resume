import React from 'react'

export const Divider = ({ text }: { text?: string }) => {
  return (
    <div className='my-1.5'>
      <h3 className='font-bold text-2xs'>{text}</h3>
      <span className='block h-0.5 bg-primary rounded-lg w-full'></span>
    </div>
  )
}
