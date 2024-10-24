# Documentação do Projeto B2Y

## Índice
1. [Introdução](#introdução)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Funcionalidades Implementadas](#funcionalidades-implementadas)
4. [Estrutura do Código](#estrutura-do-código)

## Introdução
Este projeto, chamado **B2Y**, é um aplicativo desenvolvido para oportunidades de négocios.

## Tecnologias Utilizadas
- **React Native**: Para desenvolvimento do aplicativo.
- **Expo**: Para facilitar o desenvolvimento e o gerenciamento do projeto.
- **Firebase**: Para autenticação e gerenciamento de dados.
- **Tailwind CSS**: Para estilização da interface do usuário.

## Funcionalidades Implementadas

#### Estrutura Inicial
- Implementação da estrutura básica do projeto com a configuração do Expo.
- Estilização dos principais componentes utilizando Tailwind CSS.

#### Navegação
- **Tabs**: Implementação de uma navegação por abas para facilitar a acessibilidade às diferentes seções do aplicativo.
- **Criação de Rotas**: Utilização do Expo Router para gerenciar a navegação entre as telas do aplicativo.

#### Telas
- **Tela Inicial**: 
  - Exibição da logo do aplicativo.
  - Estrutura responsiva para diferentes tamanhos de tela.
- **Onboarding**: 
  - Exibição de slides informativos sobre o aplicativo para novos usuários.
- **Tela de Login**: 
  - Formulário de login integrado ao Firebase para autenticação de usuários por e-mail e senha.
  - Mensagens de feedback para sucesso ou falha no login.
- **Tela de Cadastro**: 
  - Formulário para novos usuários se registrarem utilizando o Firebase.
  - Validação básica de entradas de dados.
- **Botão de Logout**: 
  - Permite que usuários se desconectem da conta com facilidade.

## Estrutura do Código
A estrutura do código é organizada da seguinte forma:
- **/app**: Contém a lógica principal do aplicativo, incluindo componentes e telas.
- **/firebase**: Configurações e funcionalidades relacionadas ao Firebase.
- **/components**: Componentes reutilizáveis do aplicativo.
- **/assets**: Imagens e outros recursos utilizados.
- **/constants**: Principais cores em constantes.
