"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { sendEmail } from "@/lib/resend";
import { redirect, RedirectType } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	segmento: z.string().min(1),
	tipo_site: z.string(),
	link_site: z.string().min(1).optional(),
	nome_cliente: z.string().min(1),
	nome_empresa: z.string().min(1),
	email_cliente: z.string(),
	descricao: z.string().optional(),
	termos: z.boolean(),
});

export default function MyForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const [sending, setSending] = useState(false);

	const callToast = (message: string, type: number) => {
		switch (type) {
			case 1:
				toast.success(message, {
					position: "bottom-right",
					autoClose: 1400,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				break;
			case 2:
				toast.error(message, {
					position: "bottom-right",
					autoClose: 1400,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				break;
			default:
				toast(message, {
					position: "bottom-right",
					autoClose: 1400,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				break;
		}
	};

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const validData = {
				segmento: values.segmento,
				tipo_site: values.tipo_site,
				link_site: values.link_site,
				nome_cliente: values.nome_cliente,
				nome_empresa: values.nome_empresa,
				email_cliente: values.email_cliente,
				descricao: values.descricao,
				termos: values.termos,
			};
			const parsedData = formSchema.parse(validData);
			sendEmail(parsedData);
			setSending(!sending);
			callToast("Email enviado!", 1);
			setTimeout(() => {
				redirect("/", RedirectType.replace);
			}, 1500);
		} catch (error) {
			callToast("Ops, algo deu errado...", 2);
			console.error("Form submission error", error);
		}
	}

	return (
		<section className="relative w-full h-auto flex flex-col items-center justify-center bg-[#111111] mt-20 px-10 md:px-20">
			<Typography
				variant="caption"
				className={"uppercase opacity-50 text-center text-neutral-100"}
			>
				contato
			</Typography>
			<Typography
				variant="bodytitle"
				className={"text-center text-neutral-50"}
			>
				agende uma ligação via google meet para discutir ideias
			</Typography>
			<Link
				href={"https://calendly.com/araujoerick-n1/30min"}
				target="_blank"
			>
				<Button className="relative mt-4 w-[280px] h-[58px] flex items-center justify-center hover:bg-white hover:text-black border-[1px] border-white hover:border-black duration-400 ease-in-out transition hover:cursor-pointer">
					<Typography variant="subtitle">Agendar ligação</Typography>
				</Button>
			</Link>
			<div className="relative w-1/2 mt-8 h-[1px] bg-neutral-100 opacity-80"></div>

			<Typography
				variant="bodytitle"
				className={"text-center text-neutral-50 mt-8"}
			>
				ou me envie um email com as informações de seu projeto
			</Typography>
			<div className="relative w-1/2 mt-8 h-[1px] bg-neutral-100 opacity-80"></div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="relative space-y-8 w-full md:w-1/2 mx-auto p-10 bg-neutral-50 rounded-md mt-10"
				>
					<FormField
						control={form.control}
						name="segmento"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Em qual segmento atua?*</FormLabel>
								<FormControl>
									<Input
										placeholder="Segmento"
										type=""
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Segmento de atuação da sua empresa
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-12">
							<FormField
								control={form.control}
								name="tipo_site"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Qual tipo de WebSite precisa?*
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione..." />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="onepager">
													Pagina Unica (OnePager)
												</SelectItem>
												<SelectItem value="portfolio_profissional">
													Portfólio Profissional
												</SelectItem>
												<SelectItem value="serviço_web">
													Serviço Web
												</SelectItem>
												<SelectItem value="ecommerce">
													Loja Virtual
												</SelectItem>
												<SelectItem value="outro">
													Outro
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<FormField
						control={form.control}
						name="link_site"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Link Website</FormLabel>
								<FormControl>
									<Input
										placeholder="URL"
										type=""
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Link de sua pagina atual (caso possua)
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="nome_cliente"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome</FormLabel>
								<FormControl>
									<Input
										placeholder="Nome"
										type=""
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Seu nome completo.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="nome_empresa"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome da Empresa</FormLabel>
								<FormControl>
									<Input
										placeholder="Empresa"
										type=""
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Nome de sua empresa ou marca
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email_cliente"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Email"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Email para contato
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="descricao"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Descrição</FormLabel>
								<FormControl>
									<Textarea
										id="descricao"
										placeholder="Descrição"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Adicione descrições ou comentarios
									adicionais sobre seu projeto
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="termos"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										<p>
											Eu concordo com o processamento dos
											meus dados pessoais de acordo com a{" "}
											<Link
												href={"/legal"}
												className={
													"font-bold hover:text-blue-500 underline"
												}
											>
												Política de Privacidade
											</Link>
										</p>
									</FormLabel>

									<FormMessage />
								</div>
							</FormItem>
						)}
					/>
					<div className="relative w-full flex justify-center">
						<Button
							type="submit"
							disabled={sending}
							className="relative w-[200px] h-[52px] flex items-center justify-center hover:bg-white hover:text-black hover:border-1 hover:border-black duration-400 ease-in-out transition hover:cursor-pointer"
						>
							<Typography variant="subtitle">enviar</Typography>
						</Button>
					</div>
				</form>
			</Form>
			<ToastContainer />
		</section>
	);
}
