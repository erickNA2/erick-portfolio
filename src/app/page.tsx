'use client'

import Hero from "./pages/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
    <Menu></Menu>
      <main className="relative flex flex-col min-h-screen w-screen overflow-clip bg-[rgb(11,11,11)]">
        <Hero></Hero>
      </main>
    </>
  );
}