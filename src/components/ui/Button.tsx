import React from 'react'

export default function Button({children} : any) {
  return (
    <a href='https://calendly.com/araujoerick-n1/30min' target='_blank' 
    className='relative w-[260px] h-[68px] flex items-center justify-center border-white border-1 hover:bg-white hover:text-black duration-400 ease-in-out transition'>
        {children}
    </a>
  )
}
