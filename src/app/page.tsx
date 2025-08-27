'use client'

// app/page.tsx
import Menu from "@/components/Menu";
import Hero from "./pages/Hero";
import Method from "./pages/Method";
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
    document.addEventListener("mousemove", mouseMove)

    gsap.to(".cursor", {
      x: mousePosition.x - 58,
      y: mousePosition.y - 18 
    })
  }, [mousePosition])

  return (
    <>
    <Menu />
      <main className="relative flex flex-col min-h-screen max-w-screen md:px-10 overflow-clip bg-[rgb(11,11,11)]">
        <div className="cursor h-10 w-10 rounded-full backdrop-invert-100 z-50 pointer-events-none invisible md:visible absolute"></div>
        
        <Hero />
      </main>
    </>
  );
}