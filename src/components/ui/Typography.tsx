import clsx from "clsx";
import { Major_Mono_Display, JetBrains_Mono } from "next/font/google";

const mnDisplayFont = Major_Mono_Display({
	subsets: ["latin"],
	weight: "400",
});

const jtbMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: "400",
});

type TextVariant = "title" | "subtitle" | "body" | "bodytitle" | "caption";

interface TextProps {
	variant?: TextVariant;
	children: any;
	className?: string | null;
	as?: any;
}

const variantClasses: Record<TextVariant, string> = {
	title: "text-[7rem] captalize text-balance font-[Major_Mono_Display] tracking-wide wrap-break-word",
	subtitle: "text-[1.4rem] font-[Major_Mono_Display] wrap-break-word",
	bodytitle:
		"text-[1rem] md:text-[1.4rem] font-[Major_Mono_Display] wrap-break-word",
	body: "text-[0.8rem] font-[JetBrains_Mono] wrap-break-word",
	caption: "text-[.8rem] font-[Inter] wrap-break-word",
};

export default function Typography({
	variant = "body",
	children,
	className,
	as: Component = "p",
}: TextProps) {
	return (
		<Component className={clsx(variantClasses[variant], className)}>
			{children}
		</Component>
	);
}
