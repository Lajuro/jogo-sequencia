# Jogo de Sequência

<p style="text-align: center">
  <img src="./public/logo.png" alt="Logo" style="width: 20%;">
</p>

Este é um jogo interativo de sequência que desafia sua memória e habilidades de reconhecimento de padrões. A aplicação é construída com React e TypeScript, utilizando conceitos modernos de desenvolvimento web.

## Funcionalidades

- **Níveis de Dificuldade:** Três níveis de dificuldade disponíveis, cada um com um conjunto específico de padrões a serem seguidos.
- **Interface Dinâmica:** Cores vibrantes e efeitos visuais que proporcionam uma experiência de jogo envolvente.
- **Sistema de Pontuação:** Acompanhe o número de cliques e o tempo gasto para completar cada nível.
- **Feedback Visual:** Efeitos sonoros e visuais ao interagir com os elementos do jogo.
- **Sistema de Desbloqueio de Níveis:** Os níveis são desbloqueados progressivamente conforme o jogador completa os desafios anteriores.

## Tecnologias Utilizadas

- **React:** Para a construção da interface do usuário.
- **TypeScript:** Para fornecer tipagem estática e melhorar a manutenção do código.
- **CSS:** Para estilização dos elementos e efeitos visuais.
- **React Hooks:** Hooks personalizados para gerenciamento de estados, sons e cronômetro.
- **HTML5 Audio API:** Para feedback sonoro nas interações do jogo.

## Como Jogar

1. Ao iniciar, você verá uma tela de seleção de níveis. Apenas o primeiro nível estará disponível.
2. Clique no primeiro nível para começar o jogo.
3. O objetivo é clicar nas bolas coloridas na sequência correta. Preste atenção nas cores e tente memorizar o padrão.
4. Se você clicar na sequência correta, o nível será concluído com sucesso, e o próximo nível será desbloqueado.
5. Complete todos os níveis para experimentar toda a diversão do jogo!

## Como Executar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório:

   ```bash
   git clone https://github.com/Lajuro/jogo-sequencia.git
   ```

3. Acesse a pasta do projeto:

   ```bash
   cd jogo-sequencia
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

5. Execute o projeto:

   ```bash
   npm run dev
   ```

6. Abra o navegador e acesse:

   ```plaintext
   http://localhost:3000
   ```

## Favicon

Um favicon personalizado foi adicionado ao projeto. Certifique-se de colocar o arquivo `favicon.png` dentro da pasta `public` para que ele apareça corretamente na aba do navegador.

## Personalizando o Jogo

- Você pode modificar as cores, níveis e dificuldade no arquivo `constants.ts` localizado na pasta `src`.

## Próximas Funcionalidades

- Mais níveis e desafios.
- Melhoria na interface e nos efeitos visuais.
- Novos modos de jogo e funcionalidades especiais.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para adicionar novas funcionalidades ou corrigir problemas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
