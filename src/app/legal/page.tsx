import Typography from "@/components/ui/Typography";
import Link from "next/link";

export default function Legal() {
	return (
		<div className="min-h-screen mt-20 flex flex-col items-center justify-evenly text-neutral-100">
			<Typography variant="bodytitle" className={"text-center"}>
				termos legais - erick-nunes-dev.com.br
			</Typography>
			<ul className="flex flex-col items-baseline justify-center text-left my-4 px-10 md:px-60">
				<li className="w-full">
					<Typography variant="caption">
						Ultima Atualização: 10/25
					</Typography>
				</li>
				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						1. Coleta de Dados
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Ao preencher o formulário de contato, são solicitadas
						informações como nome, endereço de e-mail, empresa e
						mensagem. Esses dados são fornecidos voluntariamente
						pelo usuário e têm como única finalidade viabilizar o
						retorno do contato ou o envio de propostas e informações
						relacionadas aos serviços oferecidos.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						2. Uso das Informações
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Os dados coletados são utilizados exclusivamente para
						fins de comunicação entre o visitante e o responsável
						pelo site. Nenhum dado é compartilhado, vendido ou
						repassado a terceiros, exceto quando exigido por lei.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						3. Armazenamento e Segurança
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						As informações são armazenadas de forma segura,
						utilizando os serviços e padrões de proteção oferecidos
						pela infraestrutura do provedor de hospedagem e pelas
						ferramentas integradas ao site. O site adota medidas
						técnicas e organizacionais razoáveis para garantir a
						integridade e a confidencialidade dos dados pessoais.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						4. Retenção e Exclusão
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Os dados são mantidos apenas pelo tempo necessário para
						o atendimento do contato ou solicitação enviada. O
						usuário pode, a qualquer momento, solicitar a exclusão
						de seus dados, entrando em contato pelo e-mail
						<Link
							href="mailto:contato@erick-nunes-dev.com.br"
							className="hover:text-blue-500 ml-2"
						>
							contato@erick-nunes-dev.com.br
						</Link>
						.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						5. Alterações desta Política
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Esta Política de Privacidade pode ser atualizada
						periodicamente. Recomenda-se a verificação regular desta
						página para acompanhar eventuais alterações.
					</Typography>
				</li>
			</ul>
			<div className="relative mt-10 flex items-center justify-center">
				<Link href={"/"}>
					<Typography
						variant="caption"
						className={"hover:text-blue-500"}
					>
						HOME
					</Typography>
				</Link>
			</div>
		</div>
	);
}
