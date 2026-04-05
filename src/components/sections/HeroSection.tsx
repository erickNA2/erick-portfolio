import React from "react";
import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import AnimatedBg from "@/components/AnimatedBg";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section
			id="hero"
			data-scroll-section
			className="relative md:px-10 w-full h-screen grid grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-1 z-2 "
		>
			<AnimatedBg></AnimatedBg>
			<div className="mix-blend-difference text-white md:col-span-3 flex flex-col justify-center items-center md:items-baseline align-middle md:align-baseline">
				<Typography variant="title" className="lowercase">
					erick
				</Typography>
				<Typography variant="title" className="capitalize">
					Nunes
				</Typography>
				<div className="relative w-full flex justify-center md:justify-start items-center px-4">
					<Typography variant="caption" className="font-bold">
						Full Stack Developer | UX/UI Designer
					</Typography>
				</div>
			</div>
			<div className="mix-blend-difference text-white md:col-span-2 flex flex-col justify-center items-center align-middle ">
				<div className="text-center w-4/5 mb-16">
					<Typography variant="body">
						Você sabe que aquele impulso na web vai ajudar o seu
						negócio. Então, por que não conversamos?
					</Typography>
				</div>

				<Button className="relative w-[260px] h-[68px] flex items-center justify-center border-white border-1 hover:bg-white hover:text-black duration-400 ease-in-out transition">
					<Link href={"/form"}>
						<Typography variant="subtitle">Agendar</Typography>
					</Link>
				</Button>
			</div>
		</section>
	);
}
