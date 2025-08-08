'use client'

// app/page.tsx
import Menu from "@/components/Menu";
import AnimatedBg from "@/components/AnimatedBg";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useGSAP(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    gsap.to(".cursor", {
      x: mousePosition.x - 14,
      y: mousePosition.y - 14
    })
  }, [mousePosition])

  return (
    <>
      <div className="cursor h-10 w-10 rounded-full backdrop-invert-100 fixed z-50 pointer-events-none"></div>
      <AnimatedBg />
      <Menu />
      <main className="relative min-h-screen max-w-screen md:px-10 overflow-clip bg-black opacity-60 backdrop-blur-lg z-5">
        
        
      </main>
    </>

  );
}