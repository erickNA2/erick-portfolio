import React from 'react'

export default function Button({children, link} : any) {
  return (
    <a className='relative w-[348px] h-[108px] flex items-center justify-center rounded-full border-white border-1 hover:border-[rgb(66,66,66)] ease-in-out transition'>
        {children}
    </a>
  )
}
