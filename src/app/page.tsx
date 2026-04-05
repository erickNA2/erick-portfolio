"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

export default function Home() {
	useLocomotiveScroll();

	return (
		<>
			<HeroSection />
			<ServicesSection />
			<ProjectsSection />
			<AboutSection />
			<ProcessSection />
		</>
	);
}
