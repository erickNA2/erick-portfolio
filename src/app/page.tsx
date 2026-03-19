import React from "react";
import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import AnimatedBg from "@/components/AnimatedBg";
import {
	FaRegWindowRestore,
	FaHeadset,
	FaImages,
	FaMoneyCheck,
	FaSearchPlus,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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

			<section
				id="projects"
				className="relative z-2 h-screen w-full bg-[#111111] m-0 md:px-10"
			>
				<div className="relative h-full w-full grid grid-cols-1 text-[#ffffffaa] text-center md:border-x-1 border-[#ffffff4f]">
					<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around textce border-solid border-y-1 border-inherit">
						<Typography
							variant="bodytitle"
							className={"text-white"}
						>
							projetos
						</Typography>
						<Typography
							variant="body"
							className={"text-[#91eaffaa]"}
						>
							Conheça alguns de meus trabalhos.
						</Typography>
					</div>

					<div className="relative w-full h-full grid grid-row-3 md:grid-rows-1 md:grid-cols-3 p-2 border-b-1 border-inherit">
						<div className="flex items-center justify-center">
							<Image
								src={"/p1hero.png"}
								alt="Logo"
								width={300}
								height={200}
							/>
						</div>
						<div className="relative flex flex-col items-center justify-center space-y-2">
							<Typography variant="bodytitle">mycabin</Typography>
							<Typography variant="body">
								Pagina destinada para divulgação de cabanas para
								aluguel, com sistema de cadastro e gerenciamento
								de reservas.
							</Typography>
						</div>
						<div className="relative h-full flex flex-col items-center justify-center space-y-1">
							<Typography variant="body">Nov 2025</Typography>
							<Link
								href={
									"https://github.com/erickNA2/mycabin-template"
								}
								target="_blank"
							>
								<Typography
									variant="body"
									className="text-[#91eaffaa] hover:text-[#91eaff] hover:underline"
								>
									Ver projeto
								</Typography>
							</Link>
						</div>
					</div>

					<div className="relative w-full h-full grid grid-row-3 md:grid-rows-1 md:grid-cols-3 p-2 border-b-1 border-inherit">
						<div className="flex items-center justify-center">
							<Image
								src={"/p2hero.png"}
								alt="Logo"
								width={300}
								height={200}
							/>
						</div>
						<div className="relative flex flex-col items-center justify-center space-y-2">
							<Typography variant="bodytitle">nihu</Typography>
							<Typography variant="body">
								Eccomerce escalonavel para vendas de peças de
								ceramica, com sistema de cadastro e
								gerenciamento de produtos.
							</Typography>
						</div>
						<div className="relative h-full flex flex-col items-center justify-center space-y-1">
							<Typography variant="body">Dez 2025</Typography>
							<Link
								href={"https://github.com/erickNA2/nihu"}
								target="_blank"
							>
								<Typography
									variant="body"
									className="text-[#91eaffaa] hover:text-[#91eaff] hover:underline"
								>
									Ver projeto
								</Typography>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
