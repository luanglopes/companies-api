# companies-api

API para cadastro busca e exclusão de empresas

# Setup

Para executar a aplicação em desenvolvimento siga os passos abaixo:

> A aplicação foi desenvolvida utilizando o `yarn` e todos os guias utilizam ele para exemplos e comandos

1. Clone o repositório utilizando o comando `git clone https://github.com/luanglopes/companies-api.git`
2. Na raiz do projeto execute `yarn install` (ou `npm install` caso esteja utilizando npm) para instalar as dependências
3. Crie um arquivo `ormconfig.json` seguindo o modelo do `ormconfig.example.json` com suas configurações de banco de dados
4. Execute o comando `yarn typeorm migration:run` (ou `npm run typeorm migration:run`) para executar as migrações e criara a estrutura do banco de dados
    - Certifique-se que a base de dados está rodando e accessível
5. Acesse a aplicação em http://localhost:3000
