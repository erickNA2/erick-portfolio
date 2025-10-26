import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import Script from "next/script";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Erick Nunes | Desenvolvedor e Designer Web",
	description:
		"Torne seu projeto realidade com as melhores soluções mais modernas e atuais do mercado. Encomende seu web site responsivo e profissional hoje.",
	keywords: [
		"Erick",
		"Erick Nunes",
		"Erick Nunes de Araujo",
		"Desenvolvedor Web",
		"Designer Web",
		"Frontend",
		"Next.js",
		"React",
		"Criação de sites",
		"Manutenção de Site",
		"Site",
		"Web Site",
		"Ecommerce",
		"Site Profissional",
	],
	authors: [
		{ name: "Erick Nunes", url: "https://www.erick-nunes-dev.com.br" },
	],
	openGraph: {
		title: "Erick Nunes | Desenvolvedor e Designer Web",
		description:
			"Conheça o portfólio profissional de Erick Nunes — desenvolvedor e designer web especializado em experiências digitais modernas e eficientes.",
		url: "https://www.erick-nunes-dev.com.br",
		siteName: "Portfólio de Erick Nunes",
		images: [
			{
				url: "https://www.erick-nunes-dev.com.br/logo.svg",
				width: 1200,
				height: 630,
				alt: "Prévia de Erick Nunes Dev",
			},
		],
		locale: "pt_BR",
		type: "website",
	},
	metadataBase: new URL("https://www.erick-nunes-dev.com.br"),
	alternates: {
		canonical: "https://erick-nunes-dev.com.br",
	},
	category: "Criação de Sites e Aplicativos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const structuredDataPerson = {
		"@type": "Person",
		name: "Erick Nunes de Araujo",
		url: "https://www.erick-nunes-dev.com.br",
		image: "https://www.erick-nunes-dev.com.br/logo.png",
		jobTitle: "Desenvolvedor e Designer Web",
		worksFor: {
			"@type": "ErickNunes",
			name: "Freelancer",
		},
		sameAs: [
			"https://www.linkedin.com/in/erick-nunes-a243742b1",
			"https://github.com/erickNA2",
		],
		description:
			"Desenvolvedor e designer web especializado em experiências digitais modernas e de alto desempenho.",
		address: {
			addressLocality: "São Paulo",
			addressCountry: "BR",
		},
	};

	const structuredDataWebsite = {
		"@type": "WebSite",
		name: "Portfólio de Erick Nunes",
		url: "https://www.erick-nunes-dev.com.br",
		description:
			"Erick Nunes — desenvolvedor e designer web especializado em criação de sites modernos e responsivos.",
		publisher: {
			"@type": "Person",
			name: "Erick Nunes de Araujo",
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
