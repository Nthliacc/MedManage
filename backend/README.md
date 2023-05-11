## Backend

### Descrição
A API construída é uma aplicação simples para gerenciamento de medicamentos e contas de usuários. Ela permite que usuários criem uma conta, adicionem, atualizem, excluam e busquem medicamentos, além de listar todas as contas de usuários existentes.

A API foi desenvolvida utilizando o framework FastAPI, que utiliza o Python como linguagem de programação. O banco de dados utilizado é o PostgreSQL, e o contêiner Docker é usado para criar um ambiente de desenvolvimento isolado para a aplicação.

### Funcionalidades
A API possui as seguintes funcionalidades:

#### Medicamentos

- GET /medication: Retorna uma lista de todos os medicamentos cadastrados.
- POST /medication: Cria um novo medicamento.
- GET /medication/{medication_id}: Retorna um medicamento específico pelo seu ID.
- PUT /medication/{medication_id}: Atualiza as informações de um medicamento existente.
- DELETE /medication/{medication_id}: Exclui um medicamento específico pelo seu ID.
- GET /medication/search?name={medication_name}: Retorna uma lista de medicamentos que contém a string pesquisada no nome.
Contas
- GET /accounts: Retorna uma lista de todas as contas de usuários existentes.
- POST /accounts: Cria uma nova conta de usuário.
- PUT /accounts/{account_id}: Atualiza as informações de uma conta de usuário existente.
- DELETE /accounts/{account_id}: Exclui uma conta de usuário específica pelo seu ID.

### Instalação
Para executar a aplicação localmente, você precisará ter o Docker e o Docker Compose instalados em sua máquina. Clone o repositório e execute o seguinte comando na raiz do projeto:

````
docker-compose up --build
````

Isso criará e executará os contêineres da aplicação e do banco de dados. Depois que a aplicação estiver em execução, você pode acessar a documentação da API em http://localhost:8000/docs ou http://localhost:8000/redoc para interagir com a API.

### Considerações finais
Essa aplicação é um exemplo simples de como criar uma API com o FastAPI e o PostgreSQL, mas pode ser expandida e melhorada para atender a requisitos específicos de projetos maiores e mais complexos.