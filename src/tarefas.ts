//exercício 2
import fs from "fs/promises";

interface Tarefa { 
    id: number; 
    titulo: string; 
    concluida: boolean; 
}

export async function lerTarefas(caminho: string): Promise<Tarefa[]> {
  try {
    const dados = await fs.readFile(caminho, "utf-8");
    return JSON.parse(dados);
  } catch {
    return [];   // arquivo ainda não existe
  }
}

export async function salvarTarefas(caminho: string, tarefas: Tarefa[]): Promise<void> {
  await fs.writeFile(caminho, JSON.stringify(tarefas, null, 2), "utf-8");
}

export async function adicionar(caminho: string, titulo: string): Promise<Tarefa> {
  const tarefas = await lerTarefas(caminho);
  const nova: Tarefa = { id: tarefas.length + 1, titulo, concluida: false };
  tarefas.push(nova);
  await salvarTarefas(caminho, tarefas);
  return nova;
}

// adiciona `concluir(id)`
export async function concluir(caminho: string, id:number): Promise<void>{
    const tarefas:Tarefa[] = await lerTarefas(caminho);
    //encontra a tarefa específica pelo ID
    const tarefaEncontrada = tarefas.find((t)=> t.id === id);
    if(tarefaEncontrada){
        tarefaEncontrada.concluida=true;
    }
    await salvarTarefas(caminho,tarefas);
}

// adiciona `remover(id)`
export async function remover(caminho: string, id:number): Promise<void>{
    const tarefas = await lerTarefas(caminho);
    
    const tarefasAtualizadas = tarefas.filter((t)=> t.id !== id);
    
    await salvarTarefas(caminho,tarefasAtualizadas);
}