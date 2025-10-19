import React from "react";
import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import AnimatedBg from "@/components/AnimatedBg";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section
				id="hero"
				className="relative md:px-10 w-full h-screen grid grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-1 z-2 "
			>
				<AnimatedBg></AnimatedBg>
				<div className="mix-blend-difference text-white md:col-span-3 flex flex-col justify-center items-center md:items-baseline align-middle md:align-baseline">
					<Typography variant="title">erick</Typography>
					<Typography variant="title">Nunes</Typography>
					<div className="relative  w-full flex justify-between items-center px-4">
						<Typography variant="caption">Designer</Typography>
						<Typography variant="caption">Web</Typography>
						<Typography variant="caption">Developer</Typography>
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

			<section
				id="#services"
				className="relative z-2 min-h-screen md:h-[140vh] w-full bg-[#111111] px-10"
			>
				<div className="relative h-auto py-4 md:py-0 md:h-1/2 w-full grid gap-1 grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-1 text-neutral-50 text-center md:text-left">
					<div className="relative h-full w-full md:w-2/3 flex flex-col align-center justify-center col-span-2">
						<Typography
							variant="caption"
							className={"uppercase opacity-50"}
						>
							serviços
						</Typography>
						<Typography variant="bodytitle">
							como posso te ajudar com seus objetivos
						</Typography>
					</div>
					<div className="relative h-full w-full flex flex-col items-center justify-center p-4">
						<Typography
							variant="body"
							className={"opacity-80 md:mt-30"}
						>
							Meu foco é entender suas metas e transformá-las em
							soluções digitais que geram resultado. Com design
							estratégico e desenvolvimento moderno, crio
							experiências que comunicam valor e fortalecem a
							presença online da sua marca.
						</Typography>
					</div>
				</div>
				<div className="relative h-2/3 md:h-1/2 w-full grid gap-2 grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-1">
					<div className="relative h-full w-full p-2 flex items-center justify-center">
						<Card className="relative h-full w-full flex flex-col items-baseline justify-between border-none rounded-md overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full bg-radial from-[#91eaff] to-[#ffc5c4] rounded-md opacity-90 transition-all duration-300 ease-in-out hover:scale-140 "></div>
							<CardHeader>
								<CardTitle>
									<Typography variant="body">
										Desenvolvimento de Landing Pages
									</Typography>
								</CardTitle>
								<CardDescription>
									<Typography variant="caption">
										Criação e Manutenção
									</Typography>
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Typography variant="body">
									Criação de sites profissionais,
									institucionais e landing pages otimizadas
									para performance e conversão.
								</Typography>
							</CardContent>
							<CardFooter className="relative w-full flex items-center justify-center">
								<Button className="relative w-[200px] h-[52px] flex items-center justify-center hover:bg-white hover:text-black duration-400 ease-in-out transition">
									<Link href={"/form"}>
										<Typography variant="subtitle">
											Agendar
										</Typography>
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</div>

					<div className="relative h-full w-full p-2 flex items-center justify-center">
						<Card className="relative h-full w-full flex flex-col items-baseline justify-between border-none rounded-md overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full bg-radial from-[#ffc5c4] to-[#91eaff] rounded-md opacity-90 transition-all duration-300 ease-in-out hover:scale-140 "></div>
							<CardHeader>
								<CardTitle>
									<Typography variant="body">
										Design de Interfaces (UI/UX)
									</Typography>
								</CardTitle>
								<CardDescription>
									<Typography variant="caption">
										Ideação e Colaboração
									</Typography>
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Typography variant="body">
									Criação de interfaces intuitivas e visuais
									modernos para sites e aplicações web.
								</Typography>
							</CardContent>
							<CardFooter className="relative w-full flex items-center justify-center">
								<Button className="relative w-[200px] h-[52px] flex items-center justify-center hover:bg-white hover:text-black duration-400 ease-in-out transition">
									<Link href={"/form"}>
										<Typography variant="subtitle">
											Agendar
										</Typography>
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</div>

					<div className="relative h-full w-full p-2 flex items-center justify-center">
						<Card className="relative h-full w-full flex flex-col items-baseline justify-between border-none rounded-md overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full bg-radial from-[#91eaff] to-[#ffc5c4] rounded-md opacity-90 transition-all duration-300 ease-in-out hover:scale-140 "></div>
							<CardHeader>
								<CardTitle>
									<Typography variant="body">
										E-commerce e Integrações
									</Typography>
								</CardTitle>
								<CardDescription>
									<Typography variant="caption">
										Integração e Configuração
									</Typography>
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Typography variant="body">
									Desenvolvimento de lojas virtuais otimizadas
									e personalizadas para performance e vendas.
								</Typography>
							</CardContent>
							<CardFooter className="relative w-full flex items-center justify-center">
								<Button className="relative w-[200px] h-[52px] flex items-center justify-center hover:bg-white hover:text-black duration-400 ease-in-out transition">
									<Link href={"/form"}>
										<Typography variant="subtitle">
											Agendar
										</Typography>
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</div>

					<div className="relative h-full w-full p-2 flex items-center justify-center">
						<Card className="relative h-full w-full flex flex-col items-baseline justify-between border-none rounded-md overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full bg-radial from-[#ffc5c4] to-[#91eaff] rounded-md opacity-90 transition-all duration-300 ease-in-out hover:scale-140 "></div>
							<CardHeader>
								<CardTitle>
									<Typography variant="body">
										Otimização de SEO
									</Typography>
								</CardTitle>
								<CardDescription>
									<Typography variant="caption">
										Resultados e Pesquisas
									</Typography>
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Typography variant="body">
									Suporte técnico contínuo para sites
									existentes — correções, melhorias de
									performance, segurança e SEO.
								</Typography>
							</CardContent>
							<CardFooter className="relative w-full flex items-center justify-center">
								<Button className="relative w-[200px] h-[52px] flex items-center justify-center hover:bg-white hover:text-black duration-400 ease-in-out transition">
									<Link href={"/form"}>
										<Typography variant="subtitle">
											Agendar
										</Typography>
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
}
