# 🎮 Catálogo de Jogos — Full Stack App (Angular + Node + MySQL)

Este é um projeto full stack desenvolvido para **cadastrar, listar, editar e excluir jogos eletrônicos**, integrando uma API RESTful em Node.js com um frontend moderno em Angular e banco de dados MySQL. Ideal para estudo e prática de CRUDs com validação, organização modular e integração via HTTP.

## 🧩 Tecnologias Utilizadas

### Frontend (Angular 20+)
- Angular CLI
- Reactive Forms
- HTTP Client (com proxy ou endpoint direto)
- Estilização com CSS moderno e responsivo

### Backend (Node.js + Express)
- Express.js
- MySQL (via Docker)
- Nodemon para desenvolvimento
- Middlewares de validação
- CORS configurado para o frontend

### Banco de Dados
- MySQL 8
- Docker container
- Script de criação da tabela no arquivo `schema.sql`

---

## 🚀 Funcionalidades

### ✅ Frontend
- Cadastro de jogos com formulário reativo
- Listagem dinâmica dos jogos cadastrados
- Edição inline de jogos
- Exclusão com confirmação
- Feedback visual de erros e carregamento

### ✅ Backend
- Rotas REST para `/games`:
  - `GET /games` — lista todos os jogos
  - `GET /games/:id` — consulta um jogo específico
  - `POST /games` — cadastra novo jogo
  - `PUT /games/:id` — atualiza jogo
  - `DELETE /games/:id` — remove jogo
- Validação de campos obrigatórios
- Conexão com MySQL utilizando pool

---

## 🛠️ Como Executar

### 🔧 Requisitos
- Node.js (v18+)
- Docker instalado e rodando
- Angular CLI instalado globalmente (opcional)

### 1. Subir o banco de dados com Docker
```bash
docker run --name mysql-jogos \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=jogos \
  -p 3307:3306 \
  -d mysql:8
