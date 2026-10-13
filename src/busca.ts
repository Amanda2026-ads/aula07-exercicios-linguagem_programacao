//exercicio 3
import fs from "fs/promises";

export async function buscarComSeguranca(caminho: string): Promise <string | null>{
    try{
        await fs.access(caminho);
        return "Arquivo encontrado";

    }catch{
        return null;
    }
}
// verificando função
async function executandoTestes() {
    console.log(await buscarComSeguranca("app.log"));//"Arquivo encontrado"
    console.log(await buscarComSeguranca("aluno.ts"));//null
}

executandoTestes();