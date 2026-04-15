# Atividade-TDD
Desenvolvimento de um módulo de validação de senhas que será utilizado na criação de contas de usuário no aplicativo, para da atividade prática com TDD

##### Aluno: Rômulo Jordão
##### Disciplina: Teste de Software 2026

### Decisões tomadas

Durante o desenvolvimento, optei por organizar o código separando a lógica de validação, as constantes e as mensagens de erro em arquivos diferentes. Isso ajudou a deixar o código mais organizado e fácil de manter.

Também decidi criar uma única classe responsável pela validação da senha, dividindo cada regra em métodos menores. Dessa forma, o código ficou mais legível e mais fácil de entender o que cada parte faz.

Outra decisão foi utilizar exceções (throw Error) quando a senha não atende alguma regra, em vez de apenas retornar verdadeiro ou falso. Isso permite identificar exatamente qual foi o erro na validação.

### Observação sobre o processo de desenvolvimento

O desenvolvimento foi feito de forma incremental, seguindo o ciclo do TDD (Red, Green, Refactor). Para cada regra de validação, primeiro foi criado um teste que falhava, depois foi implementado o código mínimo necessário para fazê-lo passar e, por fim, foram feitas pequenas refatorações.

Além disso, os commits foram organizados de forma sequencial, utilizando prefixos como "test", "add"(que acabei utilizando no lugar do "feat" sem querer) e "refactor", para deixar claro o processo de evolução do código.

### Dificuldades encontradas

A principal dificuldade foi seguir corretamente a lógica do TDD. Em alguns momentos, tive a tendência de querer implementar várias validações de uma vez, ao invés de seguir o processo passo a passo, escrevendo um teste, vendo ele falhar e só depois implementando o código necessário.

Também foi um pouco desafiador organizar os commits de forma que representassem bem cada etapa do desenvolvimento, principalmente separando corretamente testes, implementação e refatoração.

Outra dificuldade foi adaptar o código para utilizar arquivos separados de constantes e mensagens, mantendo a organização sem complicar demais a estrutura.

### Reflexão sobre o uso de TDD

A aplicação do TDD ajudou a desenvolver o sistema de forma mais organizada e segura. Escrever os testes antes fez com que eu pensasse melhor nos requisitos antes de implementar o código.

Além disso, os testes trouxeram mais confiança na hora de fazer alterações e refatorações, já que era possível verificar rapidamente se algo deixou de funcionar.

Mesmo sendo um processo que exige mais disciplina no início, o TDD se mostrou útil para garantir que o código fosse construído de forma gradual e com menos erros.