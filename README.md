🎮 Catálogo de Jogos

Aplicação fullstack desenvolvida com **Angular (frontend)** e **Node.js + Express + MySQL (backend via Docker)** para catalogar jogos eletrônicos, com funcionalidades completas de **criar, listar, editar e excluir jogos**.

🚀 Tecnologias Utilizadas

- **Frontend:** Angular 19, TypeScript, Reactive Forms, SCSS responsivo
- **Backend:** Node.js, Express, MySQL 8 (via Docker), validações com middleware
- **Outros:** Docker, RxJS, HTTP Client

📁 Estrutura do Projeto

catalogo_jogos/
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── middlewares/
│ ├── sql/
│ │ └── schema.sql
│ ├── server.js
│ └── package.json
├── frontend/
│ └── frontend/
│ ├── src/
│ ├── angular.json
│ └── ...
└── README.md


🐬 Banco de Dados com Docker

> Rode o MySQL sem instalar nada, utilizando Docker:

1. Suba o container do MySQL

```bash
docker run --name mysql-jogos \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=jogos \
  -p 3307:3306 \
  -d mysql:8
2. Importe o schema do banco
bash
Copiar
docker exec -i mysql-jogos \
  mysql -uroot -proot jogos < backend/sql/schema.sql
🔧 Rodando o Backend
Porta padrão: 3011

bash
Copiar
cd backend
npm install
npm run dev
API disponível em: http://localhost:3011/games

🌐 Rodando o Frontend
Porta padrão: 4200

bash
Copiar
cd frontend/frontend
npm install
npm start
Interface disponível em: http://localhost:4200

🔄 Funcionalidades do Sistema
✅ Cadastro de novos jogos
📋 Listagem completa de jogos
✏️ Edição de registros existentes
❌ Exclusão com confirmação
📡 Comunicação full com API REST
🐳 Banco totalmente operacional via Docker
🔍 Teste Rápido (via terminal)


👨‍💻 Autor
Lucas Hot
