"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

type data = {
    segmento: string,
    tipo_site: string,
    link_site?: string | undefined,
    nome_cliente: string,
    email_cliente: string,
    descricao?: string | undefined,
    termos: boolean,
};

export const sendEmail = async (data: data) => {
    try {

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nova requisição de projeto</h2>
        <p><strong>Nome do cliente:</strong> ${data.nome_cliente}</p>
        <p><strong>Email do cliente:</strong> ${data.email_cliente}</p>
        ${data.segmento ? `<p><strong>Segmento:</strong> ${data.segmento}</p>` : ""}
        ${data.tipo_site ? `<p><strong>Tipo de site:</strong> ${data.tipo_site}</p>` : ""}
        ${data.descricao ? `<p><strong>Descrição:</strong> ${data.descricao}</p>` : ""}
        ${data.link_site ? `<p><strong>Link do site:</strong> <a href="${data.link_site}" target="_blank">${data.link_site}</a></p>` : ""}
      </div>
    `;

    await resend.emails.send({
      to: "erick.araujo@sptech.school",
      from: "erick <hello@erick-nunes-dev.com.br>",
      subject: `Requisição de Projeto - ${data.nome_cliente}`,
      html: htmlContent,
    });
    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}