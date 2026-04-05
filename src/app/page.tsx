"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PackagesSection from "@/components/sections/PackagesSection";
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
