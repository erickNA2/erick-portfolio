import React from 'react'
import { ReactNode } from 'react';

interface boxprops {
    children: ReactNode
}

export default function Box1({children}:boxprops) {
  return (
    <div className="relative rounded-[4px] w-full h-full flex flex-col justify-center bg-white border-1 border-solid border-l-lgray border-t-lgray border-r-dgray border-b-dgray shadow-[0_2px_5px_rgba(255,255,255,0.4)]">
        {children}
    </div>
  )
}
