# Registro de Usuário

Sistema de cadastro de usuários com React + Vite no frontend e Node.js + Express no backend, usando MongoDB.

## Stack

**Frontend** - React, Vite, Axios, ESLint  
**Backend** - Node.js, Express, MongoDB, Mongoose

## Funcionalidades

- Cadastro com validação
- Listagem paginada
- Busca e filtragem
- Exclusão e atualização em tempo real

## Executando

**Pré-requisitos:** Node.js v16+, npm, MongoDB

```bash
# Clone
git clone https://github.com/Akynovia/user-registry.git
cd user-registry

# Backend
cd API && npm install && cp .env.example .env && npm start

# Frontend (novo terminal)
cd Frontend && npm install && npm run dev
```

- Frontend: http://localhost:5173  
- API: http://localhost:3333
