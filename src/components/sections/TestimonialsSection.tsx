import React from "react";
import Typography from "@/components/ui/Typography";
import Card from "../ui/Card";
import Link from "next/link";

export default function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			className="relative z-2 min-h-screen w-full bg-[#111111] m-0 md:px-10"
		>
			<div className="relative w-full text-[#ffffffaa] text-center md:border-x-1 md:border-b-1 border-[#ffffff4f] pb-10">
				<div className="relative text-center space-y-1 flex flex-col md:flex-row items-center justify-center md:justify-around p-8 border-solid border-y-1 border-inherit">
					<Typography variant="bodytitle" className={"text-white"}>
						depoimentos
					</Typography>
					<Typography variant="body" className={"text-[#91eaffaa]"}>
						O que clientes dizem sobre trabalhar comigo
					</Typography>
				</div>

				<div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
					{/* Testimonial 1 */}
					<Card variant="testimonial" accent="blue">
						<div className="flex items-start mb-6">
							<div className="w-14 h-14 bg-gradient-to-br from-[#91eaff] to-[#ffc5c4] rounded-full flex items-center justify-center shadow-lg">
								<span className="text-black font-bold text-lg">
									JD
								</span>
							</div>
							<div className="ml-4">
								<Typography
									variant="bodytitle"
									className="text-white mb-1"
								>
									joão silva
								</Typography>
								<Typography
									variant="body"
									className="text-[#91eaff] text-sm font-medium"
								>
									CEO, MyCabin
								</Typography>
							</div>
						</div>
						<div className="flex mb-4">
							{[1, 2, 3, 4, 5].map((star) => (
								<span
									key={star}
									className="text-[#ffc5c4] text-lg mr-1"
								>
									★
								</span>
							))}
						</div>
						<Typography
							variant="body"
							className="text-[#ffffffaa] italic leading-relaxed"
						>
							"Erick transformou nossa ideia em uma plataforma
							profissional. O sistema de reservas superou nossas
							expectativas e nossos clientes amam a experiência.
							Profissionalismo e qualidade em cada detalhe."
						</Typography>
					</Card>

					{/* Testimonial 2 */}
					<Card variant="testimonial" accent="blue">
						<div className="flex items-start mb-6">
							<div className="w-14 h-14 bg-gradient-to-br from-[#91eaff] to-[#ffc5c4] rounded-full flex items-center justify-center shadow-lg">
								<span className="text-black font-bold text-lg">
									MA
								</span>
							</div>
							<div className="ml-4">
								<Typography
									variant="bodytitle"
									className="text-white mb-1"
								>
									maria arts
								</Typography>
								<Typography
									variant="body"
									className="text-[#91eaff] text-sm font-medium"
								>
									Fundadora, Nihu
								</Typography>
							</div>
						</div>
						<div className="flex mb-4">
							{[1, 2, 3, 4, 5].map((star) => (
								<span
									key={star}
									className="text-[#ffc5c4] text-lg mr-1"
								>
									★
								</span>
							))}
						</div>
						<Typography
							variant="body"
							className="text-[#ffffffaa] italic leading-relaxed"
						>
							"Nosso e-commerce cresceu 300% após a reformulação.
							Erick entendeu exatamente nossas necessidades e
							entregou uma solução escalável que nos permitiu
							expandir para novos mercados."
						</Typography>
					</Card>

					{/* Testimonial 3 - Placeholder */}
					<Card variant="testimonial" accent="blue">
						<div className="flex items-start mb-6">
							<div className="w-14 h-14 bg-gradient-to-br from-[#91eaff] to-[#ffc5c4] rounded-full flex items-center justify-center shadow-lg">
								<span className="text-black font-bold text-lg">
									RC
								</span>
							</div>
							<div className="ml-4">
								<Typography
									variant="bodytitle"
									className="text-white mb-1"
								>
									ricardo costa
								</Typography>
								<Typography
									variant="body"
									className="text-[#91eaff] text-sm font-medium"
								>
									CTO, Startup Tech
								</Typography>
							</div>
						</div>
						<div className="flex mb-4">
							{[1, 2, 3, 4, 5].map((star) => (
								<span
									key={star}
									className="text-[#ffc5c4] text-lg mr-1"
								>
									★
								</span>
							))}
						</div>
						<Typography
							variant="body"
							className="text-[#ffffffaa] italic leading-relaxed"
						>
							"A combinação de habilidades técnicas e visão de
							negócio do Erick é incomparável. Ele não apenas
							codifica, mas pensa em produto e用户体验. Recomendo
							sem hesitação."
						</Typography>
					</Card>
				</div>

				<div className="text-center mt-12">
					<Typography variant="body" className="text-[#ffffffaa]">
						Pronto para ter resultados como estes?
					</Typography>
					<Link
						href="/form"
						className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black hover:bg-[#91eaff] transition-colors duration-400 rounded-md mt-4"
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
