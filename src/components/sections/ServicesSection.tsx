import React from "react";
import Typography from "@/components/ui/Typography";
import {
	FaRegWindowRestore,
	FaHeadset,
	FaImages,
	FaMoneyCheck,
	FaSearchPlus,
} from "react-icons/fa";

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="relative z-2 h-[140vh] w-full bg-[#111111] m-0 pt-2 md:px-8"
		>
			<div className="relative h-full w-full grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-4 text-[#ffffffaa] md:border-x-1 border-[#ffffff4f]">
				<div className="relative md:col-span-3 md:row-span-1 text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around textce border-solid border-y-1 border-inherit">
					<Typography
						variant="bodytitle"
						className={"text-white"}
					>
						servicos
					</Typography>
					<Typography
						variant="body"
						className={"text-[#91eaffaa]"}
					>
						Do planejamento à execução, impulsione sua presença
						digital.
					</Typography>
				</div>
				<div className="relative h-full w-full md:col-span-2 md:row-span-2 flex flex-col items-baseline p-6 border-solid border-b-1 md:border-r-1 border-inherit hover:bg-[#ffffff03] hover:text-[#91eaff] transition-colors duration-400 ease-in-out space-y-1">
					<div className="relative flex items-center justify-center">
						<FaRegWindowRestore
							size={24}
							className="mr-2 group-hover:text-[#91eaff]"
							opacity={0.8}
						></FaRegWindowRestore>
						<Typography
							variant="bodytitle"
							className="group-hover:text-[#91eaff]"
						>
							criação de portfolio
						</Typography>
					</div>

					<Typography
						variant="body"
						className={"text-[#ffffffaa]"}
					>
						Construa seu portfolio profissional, moderno e
						responsivo, focado na conversão de clientes,
						simplificação do contato com clientes e presença
						digital.
					</Typography>
				</div>

				<div className="relative md:col-span-1 md:row-span-1 flex flex-col items-baseline p-6 border-solid border-b-1 border-inherit hover:bg-[#ffffff03] hover:text-[#91eaff] transition-colors duration-400 ease-in-out space-y-1">
					<div className="relative flex items-center justify-center">
						<FaImages
							size={24}
							className="mr-2 group-hover:text-[#91eaff]"
							opacity={0.8}
						></FaImages>
						<Typography variant="bodytitle">
							identidade visual
						</Typography>
					</div>

					<Typography
						variant="body"
						className={"text-[#ffffffaa]"}
					>
						Trabalhe a identidade visual da sua marca com foco
						em atingir seu público ideal, transmitindo a cultura
						e os valores da sua empresa.
					</Typography>
				</div>
				<div className="relative md:col-span-1 md:row-span-1 flex flex-col items-baseline p-6 border-solid border-b-1 border-inherit hover:bg-[#ffffff03] hover:text-[#91eaff] transition-colors duration-400 ease-in-out space-y-1">
					<div className="relative flex items-center justify-center">
						<FaHeadset
							size={24}
							className="mr-2 group-hover:text-[#91eaff]"
							opacity={0.8}
						></FaHeadset>
						<Typography variant="bodytitle">
							consultoria web
						</Typography>
					</div>

					<Typography
						variant="body"
						className={"text-[#ffffffaa]"}
					>
						Melhora de performance, correção de falhas,
						manutenção de sistemas, analise de dados e criação
						de estrategias para melhorar seus sistemas
					</Typography>
				</div>
				<div className="relative md:col-span-1 md:row-span-1 flex flex-col items-baseline p-6 border-solid border-b-1 md:border-r-1 border-inherit hover:bg-[#ffffff03] hover:text-[#91eaff] transition-colors duration-400 ease-in-out space-y-1">
					<div className="relative flex items-center justify-center">
						<FaMoneyCheck
							size={24}
							className="mr-2 group-hover:text-[#91eaff]"
							opacity={0.8}
						></FaMoneyCheck>
						<Typography variant="bodytitle">
							desenvolvimento saas
						</Typography>
					</div>

					<Typography
						variant="body"
						className={"text-[#ffffffaa]"}
					>
						sistemas de caixa, estoque, cadastro e
						acompanhamento de funcionarios, vendas, clientes e
						fornecedores, com acesso remoto e multiplataforma
					</Typography>
				</div>
				<div className="relative md:col-span-2 md:row-span-1 flex flex-col items-baseline p-6 border-solid border-b-1 border-inherit hover:bg-[#ffffff03] hover:text-[#91eaff] transition-colors duration-400 ease-in-out space-y-1">
					<div className="relative flex items-center justify-center">
						<FaSearchPlus
							size={24}
							className="mr-2 group-hover:text-[#91eaff]"
							opacity={0.8}
						></FaSearchPlus>
						<Typography variant="bodytitle">
							seo & analises
						</Typography>
					</div>

					<Typography
						variant="body"
						className={"text-[#ffffffaa]"}
					>
						Analise de performance geral do site, e configuração
						das ferramentas de busca para fazer sua empresa
						chegar aos seus clientes
					</Typography>
				</div>
			</div>
		</section>
	);
}
