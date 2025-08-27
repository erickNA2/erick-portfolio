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
      <div className='fixed top-0 w-full h-18 flex justify-between items-center px-8  z-10'>
        <div className='relative flex flex-col items-baseline'>
          <Text variant='caption' className='flex justify-center'>location</Text>
          <Text variant='body' className='flex justify-center'>Brazil, SP - {formattedTime}</Text>
        </div>
        <div onClick={() => setToggleMenu(!toggleMenu)} className='relative w-12 h-full flex justify-center items-center'>
          <span className='w-12 h-[2px] block bg-white transition-all duration-150
            before:content-[""] before:absolute before:w-12 before:h-[2px] before:bg-white before:-translate-y-4 before:transition-all before:duration-150
            after:content-[""] after:absolute after:w-12 after:h-[2px] after:bg-white after:translate-y-4 after:transition-all after:duration-150'
          ></span>
        </div>

      </div>

      <div onClick={() => setToggleMenu(!toggleMenu)} className={`absolute ${toggleMenu ? 'h-full' : 'h-0'} flex flex-col justify-center items-center top-0 w-full bg-gray-800 z-9 overflow-hidden transition-all delay-200`}>
        <a href="#hero"><Text variant='title'>Hero</Text></a>
        <a href="#hero"><Text variant='title'>Contact</Text></a>
        <a href="https://github.com/erickNA2" target='_blank'><Text variant='title'>Git-hub</Text></a>
        <Text variant='subtitle'>Work in progress...</Text>
      </div>
    </>

  )
}


// 'use client'

// import { useState, useEffect } from 'react'
// import Text from './ui/Text';
// import Box1 from './ui/Box1';

// export default function Menu() {
//     const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const options: Intl.DateTimeFormatOptions= {
//     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZoneName,
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short'
//   };

//   const formattedTime = currentDateTime.toLocaleString('pt-BR', options);

//   return (
//     <div className="relative md:absolute top-0 left-0 md:px-10 mt-2 w-full min-h-18 grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
//         <Box1>
//             <Text variant='caption' className='flex justify-center'>Front-End Developer</Text>
//             <Text variant='body' className='flex justify-center'>Available for work!</Text>
//         </Box1>
//         <Box1>
//             <Text variant='caption' className='flex justify-center'>GitHub</Text>
//             <Text variant='body' className='flex justify-center'><a href="https://github.com/erickNA2" target='blank'>@erickNA2</a></Text>
//         </Box1>
//         <Box1>
//             <Text variant='caption' className='flex justify-center'>Contact</Text>
//             <Text variant='body' className='flex justify-center'><a href="mailto:araujoerick.n1@gmail.com">araujoerick.n1@gmail.com</a></Text>
//         </Box1>
//         <Box1>
//             <Text variant='caption' className='flex justify-center'>location</Text>
//             <Text variant='body' className='flex justify-center'>Brazil, SP - {formattedTime}</Text>
//         </Box1>
//     </div>
//   )
// }
