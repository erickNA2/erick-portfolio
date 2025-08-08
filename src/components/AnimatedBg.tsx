import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function AnimatedBg() {
  gsap.to
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-1 bg-amber-900'>
        <div id='bubble' className='absolute translate-y-[350px] bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-700 rounded-full'>

        </div>
    </div>
  )
}
