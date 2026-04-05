import React from "react";
import Typography from "@/components/ui/Typography";
import Card from "../ui/Card";
import Link from "next/link";

export default function PackagesSection() {
	return (
		<section
			id="packages"
			className="relative z-2 min-h-screen w-full bg-[#111111] m-0 md:px-10 py-20"
		>
			<div className="relative w-full text-[#ffffffaa] text-center md:border-x-1 border-[#ffffff4f]">
				<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around p-8 border-solid border-y-1 border-inherit">
					<Typography variant="bodytitle" className={"text-white"}>
						oferta especial
					</Typography>
					<Typography variant="body" className={"text-[#91eaffaa]"}>
						projetos profissionais a partir de R$800 - por tempo
						limitado
					</Typography>
				</div>

				<div className="relative w-full max-w-4xl mx-auto p-8">
					{/* Limited Time Banner */}
					<div className="relative mb-8">
						<Card
							variant="package"
							accent="blue"
							hover={false}
							className="p-6 text-center"
						>
							<div className="flex items-center justify-center space-x-4 mb-4">
								<div className="text-left">
									<Typography
										variant="subtitle"
										className="text-white font-bold"
									>
										oferta por tempo limitado
									</Typography>
									<Typography
										variant="body"
										className="text-[#ffc5c4]"
									>
										termina em{" "}
										{new Date(
											Date.now() +
												30 * 24 * 60 * 60 * 1000,
										).toLocaleDateString("pt-BR")}
									</Typography>
								</div>
							</div>
							<Typography
								variant="bodytitle"
								className="text-white mb-2"
							>
								projetos web profissionais
							</Typography>
							<div className="flex items-center justify-center space-x-2">
								<Typography
									variant="body"
									className="text-[#ffffffaa]"
								>
									a partir de
								</Typography>
								<span className="text-4xl font-bold text-[#91eaff]">
									R$ 800
								</span>
							</div>
							<Typography
								variant="body"
								className="text-[#ffffffaa] mt-2"
							>
								dependendo do escopo do projeto
							</Typography>
						</Card>
					</div>

					{/* Main Offer Card */}
					<Card
						variant="package"
						accent="blue"
						hover={true}
						className="p-8"
					>
						<div className="text-center mb-8">
							<div className="inline-block px-6 py-3 bg-gradient-to-r from-[#91eaff] to-[#ffc5c4] text-black rounded-full mb-6">
								<Typography
									variant="bodytitle"
									className="font-bold"
								>
									melhor oferta do ano
								</Typography>
							</div>
							<Typography
								variant="body"
								className="text-[#ffffffcc] mb-6 text-lg"
							>
								soluções completas para impulsionar seu negócio
								digital
							</Typography>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="space-y-4">
								<Typography
									variant="subtitle"
									className="text-[#91eaff] font-semibold mb-4"
								>
									o que está incluído:
								</Typography>
								{[
									"website profissional responsivo",
									"design moderno e intuitivo",
									"otimização para seo básico",
									"formulário de contato",
									"integração com redes sociais",
									"hosting por 3 meses",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-start space-x-3"
									>
										<div className="w-5 h-5 rounded-full bg-[#91eaff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-[#91eaff] text-xs">
												✓
											</span>
										</div>
										<Typography
											variant="body"
											className="text-[#ffffffaa] text-sm"
										>
											{feature}
										</Typography>
									</div>
								))}
							</div>

							<div className="space-y-4">
								<Typography
									variant="subtitle"
									className="text-[#ffc5c4] font-semibold mb-4"
								>
									opções de upgrade:
								</Typography>
								{[
									"sistema de gestão de conteúdo",
									"loja virtual/e-commerce",
									"painel administrativo",
									"api rest personalizada",
									"dashboard analytics",
									"progressive web app",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-start space-x-3"
									>
										<div className="w-5 h-5 rounded-full bg-[#ffc5c4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-[#ffc5c4] text-xs">
												+
											</span>
										</div>
										<Typography
											variant="body"
											className="text-[#ffffffaa] text-sm"
										>
											{feature}
										</Typography>
									</div>
								))}
							</div>
						</div>

						<div className="text-center">
							<Link
								href="/form?offer=special800"
								className="w-full inline-block text-center px-8 py-4 bg-gradient-to-r from-[#91eaff] to-[#ffc5c4] text-black hover:from-white hover:to-white transition-all duration-500 rounded-2xl font-bold shadow-lg hover:shadow-[#91eaff]/40 transform hover:scale-105"
							>
								<Typography
									variant="body"
									className="font-bold text-lg"
								>
									garantir minha vaga
								</Typography>
							</Link>
							<Typography
								variant="body"
								className="text-[#ffffffaa] mt-4 text-sm"
							>
								vagas limitadas - aproveite agora!
							</Typography>
						</div>
					</Card>

					{/* Urgency Section */}
					<div className="mt-8 text-center p-6 bg-[#ffffff05] rounded-2xl border border-[#ffffff20]">
						<Typography
							variant="subtitle"
							className="text-[#ffc5c4] mb-4"
						>
							não perca esta oportunidade
						</Typography>
						<Typography variant="body" className="text-[#ffffffaa]">
							esta oferta especial termina em{" "}
							<span className="text-[#91eaff] font-bold">
								30 dias
							</span>
							. projetos começando a partir de r$800 são uma
							oportunidade única para ter um website profissional
							sem comprometer seu orçamento.
						</Typography>
					</div>
				</div>

				<div className="text-center mt-12 p-8 bg-gradient-to-r from-[#ffffff10] to-[#ffffff05] rounded-lg border border-[#ffffff30]">
					<Typography variant="subtitle" className="text-white mb-4">
						precisa de algo mais personalizado
					</Typography>
					<Typography
						variant="body"
						className="text-[#ffffffaa] mb-6"
					>
						cada projeto é único. além da oferta especial, criamos
						soluções sob medida para necessidades específicas.
					</Typography>
					<Link
						href="/form?offer=custom"
						className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white border-2 border-[#91eaff] hover:bg-[#91eaff] hover:text-black transition-colors duration-400 rounded-md"
					>
						<Typography variant="body" className="font-bold">
							discutir projeto personalizado
						</Typography>
					</Link>
				</div>
			</div>
		</section>
	);
}
