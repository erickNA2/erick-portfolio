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
						Ultima Atualização: 11/25
					</Typography>
				</li>
				<li className="mt-4">
					<Typography
						variant="bodytitle"
						className="font-bold lowercase"
					>
						Termos de Serviço
					</Typography>
				</li>
				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						1. Objeto do Serviço
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Este site oferece serviços de instalação, personalização
						e implementação de templates one-page. A contratação é
						realizada mediante contato direto; não há transações
						financeiras realizadas no site.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						2. Metodologia de Trabalho (Modelo Ágil / Sprints
						Curtas)
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						A execução do serviço é conduzida em sprints curtas, com
						comunicação contínua entre cliente e desenvolvedor,
						garantindo alinhamento das expectativas durante o
						processo de personalização. O cliente deverá estar
						disponível para aprovações rápidas, envio de materiais e
						validações a cada etapa do desenvolvimento, a fim de
						evitar atrasos e retrabalho.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						3. Escopo do Serviço Inclui
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Instalação do template em sua hospedagem, Configuração
						de domínio e Google Search Console Ajuste de SEO básico
						(títulos, descrições, palavras-chave e indexação),
						Personalização visual (cores, tipografia, mensagens e
						estrutura textual conforme a identidade da marca),
						Reuniões curtas de alinhamento durante as sprints 7 dias
						de suporte técnico após a entrega. Requisitos adicionais
						podem ser acordados por meio de chamadas e comunicação
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						4. Propriedade Intelectual
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						O cliente adquire o direito de uso do template em um
						único projeto/site. É proibida a revenda, redistribuição
						ou uso como base para revenda de serviços, exceto
						mediante autorização formal e contrato específico.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						5. Entrega e Aceite
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						A entrega é considerada concluída após a validação final
						realizada ao término da última sprint. A partir deste
						momento, inicia-se o período de 7 dias de suporte
						técnico.
					</Typography>
				</li>
				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						6. Política de Reembolso
					</Typography>
				</li>

				<li className="mt-2">
					<Typography variant="body">
						Por se tratar de um serviço customizado e realizado sob
						demanda, não há reembolso após o início da execução do
						projeto. Cancelamentos só podem ser feitos antes da
						primeira sprint de implementação.
					</Typography>
				</li>

				<li className="mt-4">
					<Typography variant="body" className="font-bold">
						7. Atualizações dos Termos
					</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body">
						Estes termos podem ser atualizados sem aviso prévio,
						sendo recomendada a verificação periódica desta página.
					</Typography>
				</li>
			</ul>

			<ul className="flex flex-col items-baseline justify-center text-left my-8 px-10 md:px-60">
				<li className="w-full">
					<Typography variant="caption">
						Ultima Atualização: 10/25
					</Typography>
				</li>
				<li className="mt-4">
					<Typography
						variant="bodytitle"
						className="font-bold lowercase"
					>
						Termos de Privacidade
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
