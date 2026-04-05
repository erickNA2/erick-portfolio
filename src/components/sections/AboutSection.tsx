import React from "react";
import Typography from "@/components/ui/Typography";
import { Card } from "@/components/ui";
import Link from "next/link";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="relative z-2 min-h-screen w-full bg-[#111111] m-0 md:px-10 py-20"
		>
			<div className="relative w-full text-[#ffffffaa] text-center md:border-x-1 md:border-b-1 border-[#ffffff4f]">
				<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around p-8 border-solid border-y-1 border-inherit">
					<Typography variant="bodytitle" className={"text-white"}>
						sobre
					</Typography>
					<Typography variant="body" className={"text-[#91eaffaa]"}>
						Transformando ideias em soluções digitais de impacto
					</Typography>
				</div>

				<div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-8">
					<div className="space-y-8 md:text-left">
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-6"
							>
								resultados que impulsionam negócios
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa] leading-relaxed"
							>
								Transformo ideias em produtos digitais que geram
								receita e aumentam eficiência. Com 5+ anos de
								experiência, entrego soluções completas que
								resolvem problemas reais e criam vantagem
								competitiva.
							</Typography>
						</div>

						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-6"
							>
								como entrego valor
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa] leading-relaxed"
							>
								Metodologia ágil focada em resultados. Entendo
								seu negócio primeiro, depois construo soluções
								escaláveis que crescem com você. Cada decisão
								técnica visa performance, segurança e retorno
								sobre investimento.
							</Typography>
						</div>

						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-6"
							>
								por que escolher meu trabalho
							</Typography>
							<div className="space-y-4">
								<div className="flex items-start space-x-4">
									<span className="text-[#91eaff] mt-1 text-lg">
										▸
									</span>
									<div>
										<Typography
											variant="body"
											className="text-[#ffffffaa]"
										>
											<strong>Entrega Completa</strong>
										</Typography>
										<Typography
											variant="body"
											className="text-[#ffffffaa] text-sm opacity-80"
										>
											Do conceito ao deploy, sem surpresas
										</Typography>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<span className="text-[#91eaff] mt-1 text-lg">
										▸
									</span>
									<div>
										<Typography
											variant="body"
											className="text-[#ffffffaa]"
										>
											<strong>
												Performance Garantida
											</strong>
										</Typography>
										<Typography
											variant="body"
											className="text-[#ffffffaa] text-sm opacity-80"
										>
											Aplicações rápidas que convertem
											usuários
										</Typography>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<span className="text-[#91eaff] mt-1 text-lg">
										▸
									</span>
									<div>
										<Typography
											variant="body"
											className="text-[#ffffffaa]"
										>
											<strong>
												Parceria de Resultados
											</strong>
										</Typography>
										<Typography
											variant="body"
											className="text-[#ffffffaa] text-sm opacity-80"
										>
											Seu sucesso é meu sucesso
										</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-6"
							>
								tecnologias que entregam
							</Typography>
							<div className="grid grid-cols-2 gap-6">
								<Card
									variant="expertise"
									accent="blue"
									className="h-full"
								>
									<Typography
										variant="bodytitle"
										className="text-[#91eaff] mb-4"
									>
										web moderno
									</Typography>
									<Typography
										variant="body"
										className="text-[#ffffffaa] text-sm"
									>
										React, Next.js, TypeScript
									</Typography>
								</Card>
								<Card
									variant="expertise"
									accent="blue"
									className="h-full"
								>
									<Typography
										variant="bodytitle"
										className="text-[#91eaff] mb-4"
									>
										backend & dados
									</Typography>
									<Typography
										variant="body"
										className="text-[#ffffffaa] text-sm"
									>
										Node.js, PostgreSQL, APIs
									</Typography>
								</Card>
								<Card
									variant="expertise"
									accent="coral"
									className="h-full"
								>
									<Typography
										variant="bodytitle"
										className="text-[#ffc5c4] mb-4"
									>
										experiência do usuário
									</Typography>
									<Typography
										variant="body"
										className="text-[#ffffffaa] text-sm"
									>
										UX/UI, Design systems, Acessibilidade
									</Typography>
								</Card>
								<Card
									variant="expertise"
									accent="coral"
									className="h-full"
								>
									<Typography
										variant="bodytitle"
										className="text-[#ffc5c4] mb-4"
									>
										qualidade & deploy
									</Typography>
									<Typography
										variant="body"
										className="text-[#ffffffaa] text-sm"
									>
										Testes, CI/CD, Performance
									</Typography>
								</Card>
							</div>
						</div>

						<div className="pt-8">
							<Link
								href="/form"
								className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black hover:bg-[#91eaff] transition-colors duration-400 rounded-md"
							>
								<Typography
									variant="body"
									className="font-bold"
								>
									Vamos Conversar
								</Typography>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
