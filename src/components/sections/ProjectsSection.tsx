import React from "react";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="relative z-2 min-h-screen w-full bg-[#111111] m-0 md:px-10 py-20"
		>
			<div className="relative w-full text-[#ffffffaa] text-center md:border-x-1 border-[#ffffff4f]">
				<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around p-8 border-solid border-y-1 border-inherit">
					<Typography variant="bodytitle" className={"text-white"}>
						projetos
					</Typography>
					<Typography variant="body" className={"text-[#91eaffaa]"}>
						Soluções reais para desafios de negócio
					</Typography>
				</div>

				{/* MyCabin Project */}
				<div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border-b-1 border-inherit hover:bg-[#ffffff03] transition-colors duration-400">
					<div className="space-y-4">
						<div className="flex items-center space-x-2 mb-4">
							<Typography
								variant="bodytitle"
								className="text-white"
							>
								mycabin
							</Typography>
							<span className="px-3 py-1 bg-[#91eaff] text-black text-xs font-bold rounded-full">
								E-commerce
							</span>
							<span className="px-3 py-1 bg-[#ffc5c4] text-black text-xs font-bold rounded-full">
								2025
							</span>
						</div>
						<Image
							src={"/p1hero.png"}
							alt="MyCabin Platform"
							width={600}
							height={400}
							className="rounded-lg shadow-2xl"
						/>
					</div>
					<div className="space-y-6">
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								o desafio
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								Proprietários de cabanas precisavam de uma forma
								eficiente de gerenciar reservas, calendário de
								disponibilidade e pagamentos, enquanto os
								clientes buscavam uma experiência de reserva
								intuitiva e visual.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								a solução
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								Plataforma completa de reservas com sistema de
								calendário em tempo real, galeria de fotos
								integrada, processamento de pagamentos seguro e
								dashboard analítico para proprietários.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								tecnologias
							</Typography>
							<div className="flex flex-wrap items-center justify-center gap-2">
								{[
									"Next.js",
									"TypeScript",
									"Tailwind CSS",
									"Prisma",
									"PostgreSQL",
									"Stripe",
								].map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-[#ffffff20] text-white text-xs rounded-full border border-[#ffffff40]"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						{/* <div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								resultados
							</Typography>
							<Typography
								variant="body"
								className="text-[#91eaff] font-bold"
							>
								• 95% de aumento em eficiência de gestão
								<br />
								• 40% mais reservas no primeiro mês
								<br />• Avaliação 4.9/5 dos usuários
							</Typography>
						</div> */}
						<div className="pt-4">
							<Link
								href={
									"https://github.com/erickNA2/mycabin-template"
								}
								target="_blank"
								className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black hover:bg-[#91eaff] transition-colors duration-400 rounded-md"
							>
								<Typography
									variant="body"
									className="font-bold"
								>
									Ver Projeto
								</Typography>
							</Link>
						</div>
					</div>
				</div>

				{/* Nihu Project */}
				<div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border-b-1 border-inherit hover:bg-[#ffffff03] transition-colors duration-400">
					<div className="space-y-4">
						<div className="flex items-center space-x-2 mb-4">
							<Typography
								variant="bodytitle"
								className="text-white"
							>
								nihu
							</Typography>
							<span className="px-3 py-1 bg-[#91eaff] text-black text-xs font-bold rounded-full">
								E-commerce
							</span>
							<span className="px-3 py-1 bg-[#ffc5c4] text-black text-xs font-bold rounded-full">
								2025
							</span>
						</div>
						<Image
							src={"/p2hero.png"}
							alt="Nihu Ceramic Store"
							width={600}
							height={400}
							className="rounded-lg shadow-2xl"
						/>
					</div>
					<div className="space-y-6">
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								o desafio
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								Artistas de cerâmica precisavam de uma
								plataforma escalável para vender peças únicas,
								com gestão de inventário complexa, cálculo de
								frete variável e integração com marketplaces.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								a solução
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								E-commerce moderno com sistema de inventário
								inteligente, cálculo de frete automatizado por
								região, integração com correios e gateway de
								pagamento múltiplo.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								tecnologias
							</Typography>
							<div className="flex flex-wrap items-center justify-center gap-2">
								{[
									"React",
									"Node.js",
									"MongoDB",
									"Redux",
									"Mercado Pago",
									"AWS",
								].map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-[#ffffff20] text-white text-xs rounded-full border border-[#ffffff40]"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						{/* <div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								resultados
							</Typography>
							<Typography
								variant="body"
								className="text-[#91eaff] font-bold"
							>
								• 300% de crescimento em vendas
								<br />
								• 50% redução em tempo de gestão
								<br />• Expansão para 3 novos estados
							</Typography>
						</div> */}
						<div className="pt-4">
							<Link
								href={"https://github.com/erickNA2/nihu"}
								target="_blank"
								className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black hover:bg-[#91eaff] transition-colors duration-400 rounded-md"
							>
								<Typography
									variant="body"
									className="font-bold"
								>
									Ver Projeto
								</Typography>
							</Link>
						</div>
					</div>
				</div>

				{/* Additional Project Placeholder */}
				<div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border-b-1 border-inherit hover:bg-[#ffffff03] transition-colors duration-400">
					<div className="space-y-4">
						<div className="flex items-center space-x-2 mb-4">
							<Typography
								variant="bodytitle"
								className="text-white"
							>
								crm-dashboard
							</Typography>
							<span className="px-3 py-1 bg-[#91eaff] text-black text-xs font-bold rounded-full">
								SaaS
							</span>
							<span className="px-3 py-1 bg-[#ffc5c4] text-black text-xs font-bold rounded-full">
								2026
							</span>
						</div>
						<div className="w-full h-64 bg-gradient-to-br from-[#91eaff] to-[#ffc5c4] rounded-lg shadow-2xl flex items-center justify-center">
							<Typography
								variant="bodytitle"
								className="text-black"
							>
								em desenvolvimento
							</Typography>
						</div>
					</div>
					<div className="space-y-6">
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								o desafio
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								Pequenas empresas precisavam de um CRM acessível
								com automação de vendas, gestão de leads e
								relatórios em tempo real, sem a complexidade das
								grandes plataformas do mercado.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								a solução
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffffffaa]"
							>
								CRM intuitivo com pipeline visual, automação de
								e-mails, integração com WhatsApp e dashboard
								analítico com métricas de performance em tempo
								real.
							</Typography>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								tecnologias
							</Typography>
							<div className="flex flex-wrap items-center justify-center gap-2">
								{[
									"Next.js",
									"TypeScript",
									"Supabase",
									"Framer Motion",
									"Zustand",
								].map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-[#ffffff20] text-white text-xs rounded-full border border-[#ffffff40]"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div>
							<Typography
								variant="subtitle"
								className="text-white mb-2"
							>
								status
							</Typography>
							<Typography
								variant="body"
								className="text-[#ffc5c4] font-bold"
							>
								• MVP em desenvolvimento
								<br />• Beta testing previsto Q2 2026
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
