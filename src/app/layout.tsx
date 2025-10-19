import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import Script from "next/script";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Erick Nunes | Desenvolvedor e Designer Web",
	description:
		"Portfólio profissional de Erick Nunes, desenvolvedor e designer web especializado em criar sites modernos, responsivos e de alto desempenho.",
	keywords: [
		"Erick Nunes",
		"Desenvolvedor Web",
		"Designer Web",
		"Frontend",
		"Next.js",
		"React",
		"Portfólio",
		"Criação de sites",
	],
	authors: [{ name: "Erick Nunes", url: "https://erick-nunes.vercel.app" }],
	openGraph: {
		title: "Erick Nunes | Desenvolvedor e Designer Web",
		description:
			"Conheça o portfólio profissional de Erick Nunes — desenvolvedor e designer web especializado em experiências digitais modernas e eficientes.",
		url: "https://erick-nunes.vercel.app",
		siteName: "Portfólio de Erick Nunes",
		images: [
			{
				url: "https://erick-nunes.vercel.app/logo.png",
				width: 1200,
				height: 630,
				alt: "Prévia do portfólio de Erick Nunes",
			},
		],
		locale: "pt_BR",
		type: "website",
	},
	metadataBase: new URL("https://erick-nunes.vercel.app"),
	alternates: {
		canonical: "https://erick-nunes.vercel.app",
	},
	category: "Portfólio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const structuredDataPerson = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Erick Nunes de Araujo",
		url: "https://erick-nunes.vercel.app",
		image: "https://erick-nunes.vercel.app/logo.png",
		jobTitle: "Desenvolvedor e Designer Web",
		worksFor: {
			"@type": "Organization",
			name: "Freelancer",
		},
		sameAs: [
			"https://www.linkedin.com/in/erick-nunes-a243742b1",
			"https://github.com/erickNA2",
		],
		description:
			"Desenvolvedor e designer web especializado em experiências digitais modernas e de alto desempenho.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "São Paulo",
			addressCountry: "BR",
		},
	};

	const structuredDataWebsite = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Portfólio de Erick Nunes",
		url: "https://erick-nunes.vercel.app",
		description:
			"Portfólio profissional de Erick Nunes — desenvolvedor e designer web especializado em criação de sites modernos e responsivos.",
		publisher: {
			"@type": "Person",
			name: "Erick Nunes de Araujo",
		},
		potentialAction: {
			"@type": "SearchAction",
			target: "https://erick-nunes.vercel.app/?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
		inLanguage: "pt-BR",
	};

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.png" />
				<Script
					id="structured-data-person"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredDataPerson),
					}}
				/>
				<Script
					id="structured-data-website"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredDataWebsite),
					}}
				/>
			</head>
			<body
				className={`antialiased overflow-x-hidden w-screen bg-[#111111]`}
			>
				<Menu></Menu>
				{children}
				<Footer></Footer>
			</body>
		</html>
	);
}
