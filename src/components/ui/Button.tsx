import React, { ReactNode } from 'react'

interface buttonprops {
    children: ReactNode
}

export default function Button({children}:buttonprops) {
  return (
    <a href='https://calendly.com/araujoerick-n1/30min' target='_blank' 
    className='relative w-[260px] h-[68px] flex items-center justify-center rounded-full border-white border-1 hover:bg-gray-900 ease-in-out transition'>
        {children}
    </a>
  )
}
