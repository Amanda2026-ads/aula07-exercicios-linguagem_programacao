//exercicio 1
import fs from "fs/promises";

//adiciona uma linha com timestamp a app.log
export async function log(mensagem:string): Promise<void>{
    const timestamp = new Date().toISOString();
    //new Date(): Pega a data e hora atual do sistema.
    //.toISOString(): Transforma essa data em um formato de texto padronizado internacionalmente,facilitando a leitura por sistemas e a ordenação por data.
    const linha = `[${timestamp}] ${mensagem}\n`
    //Junta a timestamp com a mensagem fornecida

    // fs.appendFile adiciona conteúdo no final do arquivo sem apagar o anterior
    await fs.appendFile("app.log", linha, "utf-8");
    //fs.appendFile(...): É uma função do módulo de sistema de arquivos (fs) do Node.js. Ela abre o arquivo e adiciona o texto no final dele.
    //"app.log": O nome (e caminho) do arquivo onde o texto será salvo. Se o arquivo não existir, o Node.js cria um automaticamente.
    //"utf-8": O tipo de codificação do texto, garantindo que acentos e caracteres especiais sejam salvos corretamente.
}
//Lê o arquivo de log e retorna um array com todas as linhas.
export async function lerLogs(): Promise<string[]> {
    try{
        const conteudo = await fs.readFile("app.log", "utf-8");
        // Divide o texto por quebras de linha e remove linhas vazias no final
        return conteudo.split("\n").filter((linha:string) => linha.trim() !== "");
    }
    catch{
        // Se o arquivo ainda não existir, retorna um array vazio
        return [];
    }
}

log("testando o primeiro log");
log("testando o segundo log");
log("testando o terceiro log");

//criei esta função para verificar a função lerLogs
async function mostrarLogs() {
  const logs = await lerLogs(); 
  console.log(logs);           
}

mostrarLogs();