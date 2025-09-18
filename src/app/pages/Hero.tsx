import React from 'react'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import AnimatedBg from '@/components/AnimatedBg'

export default function Hero() {
  return (
    <div id='hero' className='relative md:px-10 w-full h-screen grid grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-1 z-2 '>
      <AnimatedBg></AnimatedBg>
        <div className='mix-blend-difference md:col-span-3 flex flex-col justify-center items-center md:items-baseline align-middle md:align-baseline'>
            <Text variant='title'>erick</Text>
            <Text variant='title'>Nunes</Text>
            <div className='relative  w-full flex justify-between items-center px-4'>
              <Text variant='caption'>Designer</Text>
              <Text variant='caption'>Web</Text>
              <Text variant='caption'>Developer</Text>
            </div>
        </div>
        <div className='mix-blend-difference md:col-span-2 flex flex-col justify-center items-center align-middle '>
          <div className='text-center w-4/5 mb-16'>
            <Text variant='body'>Você sabe que aquele impulso na web vai ajudar o seu negócio. Então, por que não conversamos?</Text>
          </div>
            
          <Button>
            <Text variant='subtitle'>Agendar</Text>
          </Button> 
          
          
        </div>
    </div>
  )
}
