import React from "react";
import Typography from "@/components/ui/Typography";

export interface CardProps {
	children: React.ReactNode;
	variant?:
		| "default"
		| "expertise"
		| "testimonial"
		| "package"
		| "process"
		| "project";
	hover?: boolean;
	className?: string;
	accent?: "blue" | "coral";
	onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
	children,
	variant = "default",
	hover = true,
	className = "",
	accent = "blue",
	onClick,
}) => {
	const getVariantClasses = () => {
		switch (variant) {
			case "expertise":
				return "bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] p-6 rounded-2xl border border-[#ffffff20]";
			case "testimonial":
				return "bg-gradient-to-br from-[#ffffff15] to-[#ffffff05] p-8 rounded-2xl border border-[#ffffff20]";
			case "package":
				return "bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] p-8 rounded-3xl border border-[#ffffff20]";
			case "process":
				return "bg-gradient-to-br from-[#ffffff15] to-[#ffffff05] p-8 rounded-2xl border border-[#ffffff20]";
			case "project":
				return "bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] p-6 rounded-2xl border border-[#ffffff20]";
			default:
				return "bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] p-6 rounded-2xl border border-[#ffffff20]";
		}
	};

	const getHoverClasses = () => {
		if (!hover) return "";

		const accentColors = {
			blue: "hover:border-[#91eaff]/50 hover:shadow-[#91eaff]/20",
			coral: "hover:border-[#ffc5c4]/50 hover:shadow-[#ffc5c4]/20",
		};

		return `transition-all duration-500 hover:shadow-2xl hover:scale-105 ${accentColors[accent]}`;
	};

	const getOverlayClasses = () => {
		if (!hover) return "";

		const overlays = {
			blue: "from-[#91eaff]/10 via-transparent to-[#91eaff]/10",
			coral: "from-[#ffc5c4]/10 via-transparent to-[#ffc5c4]/10",
		};

		return overlays[accent];
	};

	return (
		<div
			className={`group relative ${getVariantClasses()} ${getHoverClasses()} ${className}`}
			onClick={onClick}
		>
			{hover && (
				<div
					className={`absolute inset-0 bg-gradient-to-br ${getOverlayClasses()} rounded-inherit opacity-0 group-hover:opacity-100 transition-all duration-700`}
				></div>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default Card;
