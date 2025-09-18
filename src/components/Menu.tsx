'use client'

import { useState, useEffect } from 'react'
import Text from './ui/Text';

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZoneName,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };

  const formattedTime = currentDateTime.toLocaleString('pt-BR', options);

  return (
    <>
      <div className='mix-blend-difference fixed top-0 w-full h-18 flex justify-between items-center px-8  z-10'>
        <div className='relative flex flex-col items-baseline'>
          <Text variant='caption' className={`${toggleMenu ? 'text-black' : 'text-white'} flex justify-center delay-200`}>location</Text>
          <Text variant='caption' className={`${toggleMenu ? 'text-black' : 'text-white'} flex justify-center delay-200`}>Brazil, SP - {formattedTime}</Text>
        </div>
        <div onClick={() => setToggleMenu(!toggleMenu)} className='relative w-12 h-full flex justify-center items-center'>
          <span className={`${toggleMenu ? 'bg-black' : 'bg-none'} w-6 h-6 block border-1 border-white transition-all duration-400 ease-in-out delay-75 
          hover:bg-white`}></span>
        </div>

      </div>

      <div onClick={() => setToggleMenu(!toggleMenu)} className={`fixed ${toggleMenu ? 'h-full' : 'h-0'} flex flex-col justify-center items-center top-0 w-full bg-[rgb(255,255,212)] text-black z-9 overflow-hidden transition-all delay-200`}>
        <a href="#hero" className='mb-10 hover:scale-120'><Text variant='subtitle'>Home</Text></a>
        <a href="#hero" className='mb-10 hover:scale-120'><Text variant='subtitle'>contact</Text></a>
        <a href="https://github.com/erickNA2" target='_blank' className='mb-10 hover:scale-120'><Text variant='subtitle'>Git-hub</Text></a>
        <Text variant='body' className='mt-10 text-black'>Work in progress...</Text>
      </div>
    </>

  )
}