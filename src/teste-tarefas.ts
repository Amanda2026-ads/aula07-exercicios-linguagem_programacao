import { adicionar, concluir, remover } from "./tarefas";

async function executarTestes() {
  const caminho = "tarefas.json";

  console.log("Adicionando tarefas...");
  await adicionar(caminho, "Teste 1");
  await adicionar(caminho, "teste 2");
  await adicionar(caminho, "teste 3");

  console.log("Concluindo a primeira tarefa...");
  await concluir(caminho, 1);

  console.log("Removendo a segunda tarefa...");
  await remover(caminho, 2);

  console.log("Teste concluído!");
}
executarTestes();