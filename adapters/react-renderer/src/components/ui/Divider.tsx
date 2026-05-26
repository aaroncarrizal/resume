import React from 'react'

export const Divider = ({ text }: { text?: string }) => {
  return (
    <div className='my-2'>
      <h3 className='font-black text-md'>{text}</h3>
      <span className='block h-1 bg-primary rounded-lg w-full'></span>
    </div>
  )
}
