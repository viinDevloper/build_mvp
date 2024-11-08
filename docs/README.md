# Documentação do Projeto B2Y

Iniciamos o desenvolvimento do MVP (Produto Mínimo Viável) utilizando **React Native** 
com **Expo**, que nos oferece um ambiente robusto e simplificado para desenvolver 
aplicativos móveis rapidamente. Logo após, configuramos o **NativeWind**, que é uma 
biblioteca que permite integrar o **TailwindCSS** ao React Native, facilitando a 
aplicação de estilos de forma declarativa e padronizada, alinhada às necessidades 
do projeto. Com isso, conseguimos manter um fluxo de trabalho mais ágil no que diz 
respeito à estilização, sem precisar lidar com CSS convencional.

## Índice
1. [Introdução](#introdução)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Funcionalidades Implementadas](#funcionalidades-implementadas)
4. [Estrutura do Código](#estrutura-do-código)

## Componentes

Criamos dois componentes principais que serão amplamente reutilizados ao longo 
do projeto: um `Button` e um `Input`. Esses componentes foram projetados para seguir 
o estilo proposto no Figma, o que garante consistência visual em toda a aplicação. 
O `Button` foi criado com variações de estilo, permitindo diferentes usos como 
botões primários, secundários, entre outros. Já o `Input` foi pensado para ser 
flexível, aceitando propriedades como tipos diferentes de campo (texto, senha, 
email, etc.) e validações. Ambos os componentes estão prontos para serem importados 
e utilizados nas diferentes telas do aplicativo, o que otimiza o processo de 
desenvolvimento e manutenção.

## Estrutura de Pastas

Optamos por organizar a estrutura do projeto dentro de uma pasta chamada `src`, 
que centraliza toda a lógica e os arquivos essenciais do app. Dentro de `src`, temos 
pastas dedicadas para diferentes responsabilidades. A pasta `components` armazena 
todos os componentes reutilizáveis, enquanto a pasta `types` contém as tipagens 
que ajudam a manter o TypeScript robusto e coerente ao longo do projeto. Também 
incluímos uma pasta de configuração do **Firebase**, onde gerenciaremos a autenticação, 
banco de dados e demais serviços em nuvem. A pasta `assets` centraliza os recursos 
estáticos como imagens, fontes e ícones.

Além disso, a pasta `app` foi criada especificamente para gerenciar a parte visual 
do aplicativo. É nesta pasta que as telas principais do app estão sendo desenvolvidas, 
como as telas de login, cadastro, onboarding e outras. Essa divisão de responsabilidades 
nos permite uma melhor organização, tornando o projeto escalável e fácil de manter, 
além de garantir que diferentes membros da equipe possam trabalhar simultaneamente 
sem causar conflitos.

## Andamento do Projeto

Até o momento, já concluímos as principais telas iniciais do aplicativo: as telas de 
**onboarding**, **login**, **cadastro** e a tela de **boas-vindas**. Essas telas são 
fundamentais para guiar o usuário através da primeira experiência com o app, desde o 
primeiro acesso até a criação de uma conta ou o login. Além das telas, também já 
estruturamos todo o sistema de rotas, que foi configurado utilizando o sistema de 
layouts para garantir uma navegação fluida entre as diferentes telas.

Agora, estamos em uma fase de refatoração do código. Nosso objetivo é melhorar a 
organização e modularização das telas e dos componentes, garantindo que o projeto 
fique mais fácil de manter e que futuras modificações possam ser implementadas de 
forma ágil e eficiente. Esta fase de refatoração é crucial para garantir que o código 
fique limpo e sustentável à medida que o aplicativo cresce em funcionalidades e 
complexidade.

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