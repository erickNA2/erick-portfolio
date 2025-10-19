"use client";

import { useState, useEffect } from "react";
import Typography from "./ui/Typography";

export default function Menu() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const options: Intl.DateTimeFormatOptions = {
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZoneName,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short",
	};

	const formattedTime = currentDateTime.toLocaleString("pt-BR", options);

	return (
		<>
			<nav className="mix-blend-difference text-white fixed top-0 w-full h-18 flex justify-between items-center px-8 z-99">
				<div className="relative flex flex-col items-baseline">
					<Typography
						variant="caption"
						className={`${
							toggleMenu ? "text-black" : "text-white"
						} flex justify-center delay-200`}
					>
						location
					</Typography>
					<Typography
						variant="caption"
						className={`${
							toggleMenu ? "text-black" : "text-white"
						} flex justify-center delay-200`}
					>
						Brazil, SP - {formattedTime}
					</Typography>
				</div>
				<div
					onClick={() => setToggleMenu(!toggleMenu)}
					className="relative w-12 h-full flex justify-center items-center"
				>
					<span
						className={`${
							toggleMenu ? "bg-black" : "bg-none"
						} w-6 h-6 block border-1 border-white transition-all duration-400 ease-in-out delay-75 
          hover:bg-white`}
					></span>
				</div>
			</nav>

			<div
				onClick={() => setToggleMenu(!toggleMenu)}
				className={`fixed ${
					toggleMenu ? "h-full" : "h-0"
				} flex flex-col justify-center items-center top-0 w-full bg-[rgb(255,255,244)] text-black z-9 overflow-hidden transition-all delay-200`}
			>
				<a href="/" className="mb-10 hover:scale-120">
					<Typography variant="subtitle">inicio</Typography>
				</a>
				<a href="/form" className="mb-10 hover:scale-120">
					<Typography variant="subtitle">contato</Typography>
				</a>
				<a
					href="https://github.com/erickNA2"
					target="_blank"
					className="mb-10 hover:scale-120"
				>
					<Typography variant="subtitle">Git-hub</Typography>
				</a>
				<Typography variant="body" className="mt-10 text-black">
					Work in progress...
				</Typography>
			</div>
		</>
	);
}
