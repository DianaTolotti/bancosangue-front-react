# bancosangue-react-app

Este é o repositório do frontend da aplicação Bancosanguefront, desenvolvida usando React. Certifique-se de seguir as instruções abaixo para configurar e executar o projeto corretamente.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendamos usar a versão 16)
- [Yarn](https://yarnpkg.com/)
- [VSCode](https://code.visualstudio.com/) (ou qualquer editor de código de sua escolha)

## Configuração Inicial

Antes de iniciar o projeto, certifique-se de que você tem o Node.js instalado na versão 16. Você pode usar o [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) para gerenciar as versões do Node.js. Para isso, siga os comandos abaixo:

```bash
nvm install 16
nvm use 16
```

Certifique-se de também instalar a versão correta do node-sass, execute:
```bash
npm install node-sass@6.0.1
npm rebuild node-sass
```


## Instalação das Dependências
Agora, você pode instalar as dependências do projeto usando o Yarn. Execute o seguinte comando na raiz do projeto:
```bash
yarn add bootstrap@4.6.0 lodash@4.17.21 react-bootstrap@1.5.2 node-sass@4.14.1 react-router-dom@5.2.0 uuid@8.3.2
```

##Adição de bibliotecas
Além disso, você precisa adicionar as seguintes bibliotecas ao seu projeto:
```bash
yarn add axios
yarn add react-table
```

##Executando o Projeto
Para iniciar a aplicação, navegue até a pasta do projeto usando o terminal:
```bash
cd ./bancosangue-react-app
yarn install
yarn start
```

A aplicação será executada localmente e você poderá acessá-la em seu navegador no endereço http://localhost:3000.
