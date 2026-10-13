# Aula 07 - Assincronia e Manipulação de Arquivos

Modo de IA: Tutor — pode perguntar, pedir explicação, pedir dica. Não pode pedir a solução.

## Exercícios para casa:

 * **Exercício 1 (Tutor):** `src/logger.ts` com a função `log(mensagem: string): Promise<void>`, que adiciona uma linha com timestamp a app.log, e `lerLogs(): Promise<string[]>`, que retorna todas as linhas.
 * **Exercício 2 (Tutor):** evolua o exemplo de tarefas acima: adicione `concluir(id)` e `remover(id)`, sempre lendo e salvando do arquivo JSON (sem manter estado em memória entre chamadas).
 * **Exercício 3 (Sem IA):** escreva `buscarComSeguranca(caminho: string): Promise<string | null>`, que tenta ler um arquivo e retorna null (em vez de lançar) se ele não existir. Sem consultar IA, para fixar sozinho try/catch assíncrono.