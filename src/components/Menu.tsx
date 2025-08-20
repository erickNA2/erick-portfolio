'use client'

import { useState, useEffect } from 'react'
import Text from './ui/Text';
import Box1 from './ui/Box1';

export default function Menu() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions= {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZoneName,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };

  const formattedTime = currentDateTime.toLocaleString('pt-BR', options);

  return (
    <div className="relative md:absolute top-0 left-0 md:px-10 mt-2 w-full min-h-18 grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
        <Box1>
            <Text variant='caption' className='flex justify-center'>Front-End Developer</Text>
            <Text variant='body' className='flex justify-center'>Available for work!</Text>
        </Box1>
        <Box1>
            <Text variant='caption' className='flex justify-center'>GitHub</Text>
            <Text variant='body' className='flex justify-center'><a href="https://github.com/erickNA2" target='blank'>@erickNA2</a></Text>
        </Box1>
        <Box1>
            <Text variant='caption' className='flex justify-center'>Contact</Text>
            <Text variant='body' className='flex justify-center'><a href="mailto:araujoerick.n1@gmail.com">araujoerick.n1@gmail.com</a></Text>
        </Box1>
        <Box1>
            <Text variant='caption' className='flex justify-center'>location</Text>
            <Text variant='body' className='flex justify-center'>Brazil, SP - {formattedTime}</Text>
        </Box1>  
    </div>
  )
}
