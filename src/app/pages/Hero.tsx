import React from 'react'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <div className='relative p-2 w-full h-screen grid grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-1 z-1 '>
        <div className='md:col-span-3 flex flex-col justify-center items-center md:items-baseline align-middle md:align-baseline'>
            <Text variant='title' >Erick</Text>
            <Text variant='title' >Nunes</Text>
        </div>
        <div className='md:col-span-2 flex flex-col justify-center items-center align-middle '>
          <div className='text-center w-3/5 mb-16'>
            <Text variant='subtitle'>You know your business will be more profitable with the right digital aproach, so why don't we talk it over?</Text>
          </div>
            
            <Button><Text variant='subtitle'>Scheadule Meeting</Text></Button>
        </div>
       
    </div>
  )
}
