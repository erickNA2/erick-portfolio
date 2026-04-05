import React from "react";
import Typography from "@/components/ui/Typography";
import { Card } from "@/components/ui";
import Link from "next/link";

export default function ProcessSection() {
	return (
		<section
			id="process"
			className="relative z-2 min-h-screen w-full bg-[#111111] m-0 md:px-10"
		>
			<div className="relative w-full text-[#ffffffaa] text-center md:border-x-1 md:border-b-1 border-[#ffffff4f] pb-10">
				<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around p-8 border-solid border-y-1 border-inherit">
					<Typography variant="bodytitle" className={"text-white"}>
						processo
					</Typography>
					<Typography variant="body" className={"text-[#91eaffaa]"}>
						Como transformamos sua ideia em realidade digital
					</Typography>
				</div>

				<div className="relative w-full grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
					{[
						{
							step: "01",
							title: "descoberta",
							description:
								"Entendemos profundamente seus objetivos, público e desafios de negócio através de entrevistas e pesquisas.",
							duration: "1-2 dias",
						},
						{
							step: "02",
							title: "estratégia",
							description:
								"Definimos o escopo, tecnologias e arquitetura ideal para seu projeto, com cronograma detalhado.",
							duration: "2-4 dias",
						},
						{
							step: "03",
							title: "design & protótipo",
							description:
								"Criamos wireframes, design visual e protótipos interativos para validação antes do desenvolvimento.",
							duration: "4-6 dias",
						},
						{
							step: "04",
							title: "desenvolvimento",
							description:
								"Construção iterativa com entregas semanais, testes contínuos e sua participação no processo.",
							duration: "2-4 semanas",
						},
						{
							step: "05",
							title: "testes & otimização",
							description:
								"Testes extensivos, otimização de performance, segurança e validação final com usuários reais.",
							duration: "1 semana",
						},
						{
							step: "06",
							title: "lançamento",
							description:
								"Deploy em produção, configuração de analytics, treinamento e handoff documentado.",
							duration: "2-3 dias",
						},
						{
							step: "07",
							title: "suporte",
							description:
								"Acompanhamento pós-lançamento, monitoramento, ajustes e evolução contínua do projeto.",
							duration: "30-90 dias",
						},
						{
							step: "08",
							title: "evolução",
							description:
								"Planejamento de novas funcionalidades, expansões e manutenção preventiva para crescimento.",
							duration: "Contínuo",
						},
					].map((process, index) => (
						<div key={index} className="relative">
							<Card
								variant="process"
								accent="blue"
								hover={true}
								className="h-full"
							>
								<div className="flex items-center justify-between mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-[#91eaff]/20 to-[#91eaff]/10 rounded-full flex items-center justify-center">
										<span className="text-[#91eaff] font-bold text-lg">
											{process.step}
										</span>
									</div>
									<div className="w-8 h-8 rounded-full bg-[#ffc5c4]/20 flex items-center justify-center">
										<span className="text-[#ffc5c4] text-sm">
											⏱
										</span>
									</div>
								</div>
								<Typography
									variant="subtitle"
									className="text-white mb-4 font-semibold"
								>
									{process.title}
								</Typography>
								<Typography
									variant="body"
									className="text-[#ffffffaa] mb-6 leading-relaxed text-sm"
								>
									{process.description}
								</Typography>
								<div className="flex items-center space-x-2">
									<Typography
										variant="body"
										className="text-[#ffc5c4] text-sm font-semibold"
									>
										{process.duration}
									</Typography>
								</div>
							</Card>
							{index < 7 && (
								<div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#ffffff40] text-2xl">
									→
								</div>
							)}
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Typography
						variant="body"
						className="text-[#ffffffaa] mb-4"
					>
						Processo transparente, comunicação clara e resultados
						garantidos
					</Typography>
					<Link
						href="/form"
						className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black hover:bg-[#91eaff] transition-colors duration-400 rounded-md"
					>
						<Typography variant="body" className="font-bold">
							Iniciar Projeto
						</Typography>
					</Link>
				</div>
			</div>
		</section>
	);
}
