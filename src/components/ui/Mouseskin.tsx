'use client'

import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useGSAP(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    document.addEventListener("mousemove", mouseMove)

    gsap.to(".cursor", {
      x: mousePosition.x - 58,
      y: mousePosition.y - 18 
    }).progress(1000).invalidate()
  }, [mousePosition]) 

  return(
    <div className="cursor h-10 w-10 rounded-full backdrop-invert-100 z-50 pointer-events-none invisible md:visible absolute"></div>
  )
}