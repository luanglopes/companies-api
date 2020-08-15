# companies-api

API para cadastro busca e exclusão de empresas

# Tecnologias

- NodeJS
- TypeScript
- Yarn
- MySQL

# Setup

Para executar a aplicação em desenvolvimento siga os passos abaixo:

> A aplicação foi desenvolvida utilizando o `yarn` e todos os guias utilizam ele para exemplos e comandos

1. Clone o repositório utilizando o comando `git clone https://github.com/luanglopes/companies-api.git`
2. Na raiz do projeto execute `yarn install` (ou `npm install` caso esteja utilizando npm) para instalar as dependências
3. Crie um arquivo `ormconfig.json` seguindo o modelo do `ormconfig.example.json` com suas configurações de banco de dados
4. Execute o comando `yarn typeorm migration:run` (ou `npm run typeorm migration:run`) para executar as migrações e criar a estrutura do banco de dados
    - Certifique-se que o banco de dados está rodando e accessível
5. Acesse a aplicação em http://localhost:3000

# Docker Setup

Você pode executar o ambiente de desenvolvimento utilizando docker, assim não precisa ter um banco de dados em sua máquina, para isso é necessário possuir o docker e o docker-compose instalados em sua máquina. Instruções:

1. Clone o repositório utilizando o comando `git clone https://github.com/luanglopes/companies-api.git`
2. Na raiz do projeto execute `yarn install` (ou `npm install` caso esteja utilizando npm) para instalar as dependências
3. Execute o comando `yarn setup:docker` (ou `npm run setup:docker`), isso irá criar o ambiente de desenvolvimento
4. Execute o comando `yarn dev:docker` esse comando ira iniciar o containers, caso não estejam ativos, e mostrar os logs da aplicação no terminal
5. Acesse a aplicação em http://localhost:3000

> É necessário fazer o setup do docker apenas uma vez, depois disso basta executar `yarn dev:docker` e o ambiente vai iniciar normalmente


# Build

Para executar a aplicação em produção com NodeJS é necessário transpilar o código para JavaScript. Para isso a aplicação vem com dois scripts, um para transpilar o código e outro para executar o código transpilado com node. Para executar a aplicação em produção:

1. Clone o repositório utilizando o comando `git clone https://github.com/luanglopes/companies-api.git`
2. Na raiz do projeto execute `yarn install` (ou `npm install` caso esteja utilizando npm) para instalar as dependências
3. Crie um arquivo `ormconfig.json` seguindo o modelo do `ormconfig.example.json` com suas configurações de banco de dados
4. Execute o comando `yarn typeorm migration:run` (ou `npm run typeorm migration:run`) para executar as migrações e criar a estrutura do banco de dados
    - Certifique-se que o banco de dados está rodando e accessível
5. Execute o comando `yarn build` (ou `npm run build`) para transpilar o código TypeScript para JavaScript
6. Execute o comando `yarn start` (ou `npm start`) para executar a aplicação transpilada utilizando o NodeJS
7. Acesse a aplicação em http://localhost:3000

# Comandos

A aplicação possui os seguintes comandos no `package.json` para serem executados:

> Os comandos podem ser executados utilizando o `yarn <comando>` ou `npm run <comando>`

- `dev`: Sobe o servidor de aplicação em modo de desenvolvimento
- `dev:docker`: Sobe o ambiente de desenvolvimento utilizando o docker (aplicação + banco de dados)
- `typeorm`: Utilizado para compatibilidade com TypeScript ao executar comandos do TypeORM
- `test`: Executa os testes unitários da aplicação
- `setup:docker`: Faz o build dos containers do docker utilizando a configuração do arquivo `docker-compose.yml`
- `build`: Executa a transpilação do código TypeScript para JavaScript para ser executado em produção, o resultado fica na pasta `dist`
- `start`: Executa a aplicação transpilada pelo comando build (Recomendado para produção)
