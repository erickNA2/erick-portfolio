"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
	const scrollRef = useRef<LocomotiveScroll | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			scrollRef.current = new LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]") as HTMLElement,
				smooth: true,
				multiplier: 1,
				class: "is-revealed",
			});

			// Clean up on unmount
			return () => {
				if (scrollRef.current) {
					scrollRef.current.destroy();
				}
			};
		}
	}, []);

	// Update scroll on window resize
	useEffect(() => {
		const handleResize = () => {
			if (scrollRef.current) {
				scrollRef.current.update();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return scrollRef.current;
};
