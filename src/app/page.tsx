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

			<section
				id="#services"
				className="relative z-2 min-h-[110vh] md:h-screen w-full bg-[#111111f4] p-10 rounded-t-lg"
			>
				<div className="relative h-auto py-4 md:py-0 md:h-1/2 w-full grid gap-1 grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-1 text-neutral-100 text-center md:text-left">
					<div className="relative h-full w-full md:w-2/3 flex flex-col align-center justify-center col-span-3">
						<Typography
							variant="caption"
							className={"uppercase opacity-50"}
						>
							serviços
						</Typography>
						<Typography
							variant="bodytitle"
							className="font-semibold"
						>
							como posso te ajudar com seus objetivos
						</Typography>
					</div>
					<div className="relative h-full w-full flex flex-col items-center justify-center p-4 col-span-2">
						<Typography variant="body" className="opacity-80 ">
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

			<section className="relative w-screen h-[130vh] md:h-screen flex flex-col items-center justify-center bg-[#111111f4] z-2">
				<div className="relative h-full w-screen grid gap-8 md:gap-0 grid-cols-1 md:grid-cols-2 grid-rows-2 px-10 md:grid-rows-1 ">
					<div className="relative w-full h-full order-last md:order-first flex flex-col justify-center items-baseline py-10 text-neutral-100">
						<div className="relative w-full h-auto flex flex-col justify-center items-baseline space-y-1">
							<Typography
								variant="bodytitle"
								className="w-full lowercase text-center md:text-left font-semibold"
							>
								onepager template
							</Typography>
							<Typography
								variant="body"
								className="text-center md:text-left font-light"
							>
								Template profissional e responsivo focado na
								conversão de clientes, simplificação do contato
								com clientes e presença digital
							</Typography>
						</div>

						<div className="relative w-full h-full">
							<div className="relative w-full h-full flex flex-col items-baseline justify-center space-y-1">
								<Typography
									variant="bodytitle"
									className=" w-full lowercase text-center md:text-left font-semibold"
								>
									inclui
								</Typography>
								<ul className="relative md:w-110 space-y-4 md:space-y-6 text-white text-left font-light">
									<li className="border-b-1 border-neutral-500">
										<Typography variant="body">
											Instalação e configuração do
											template conforme suas necessidades
										</Typography>
									</li>
									<li className="border-b-1 border-neutral-500">
										<Typography variant="body">
											Configuração de dominio para
											hospedagem e google search console
										</Typography>
									</li>
									<li className="border-b-1 border-neutral-500">
										<Typography variant="body">
											SEO personalizado, palavras chave,
											titulos, meta dados e vinculo de
											pesquisa com redes sociais e
											profissionais
										</Typography>
									</li>
									<li className="border-b-1 border-neutral-500">
										<Typography variant="body">
											Implementação da identidade visual
											da marca, cores, textos, mensagens e
											cultura
										</Typography>
									</li>
									<li className="border-b-1 border-neutral-500">
										<Typography variant="body">
											Sete dias de suporte após a compra
										</Typography>
									</li>
								</ul>
							</div>
						</div>

						<div className="relative w-full h-auto flex items-center justify-between mt-4">
							<div className="relative w-[60%] z-10">
								<Typography
									variant="caption"
									className="text-left opacity-70 font-extralight "
								>
									<span className="font-semibold">
										Importante!
									</span>{" "}
									este site não realiza transações, para
									comprar o template entre em{" "}
									<Link
										href={"/form"}
										className="text-blue-500 hover:underline"
									>
										contato.
									</Link>
								</Typography>
								{/* <div className="relative w-4 h-4 bg-[#ffc5c4] rounded-full hover:scale-140 transition-all duration-200 ease-in-out"></div>
								<div className="relative w-4 h-4 bg-[#ffc5c4] rounded-full hover:scale-140 transition-all duration-200 ease-in-out"></div> */}
							</div>

							<Typography
								variant="bodytitle"
								className="font-bold"
							>
								R$249,99
							</Typography>
						</div>
					</div>

					<div className="relative w-full h-full flex items-center justify-center">
						<div className="relative mt-8 shadow-2xl h-[92%] w-[90%] border-6 border-[#91ebff6b] rounded-md">
							<video
								autoPlay
								muted
								loop
								width="600"
								height="800"
								controls
								preload="none"
								className="relative h-full w-full object-contain rounded-md"
							>
								<source
									src="/video/navigation.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
