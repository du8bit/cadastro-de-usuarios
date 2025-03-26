
# 📝 Cadastro de Usuários

**React**  
**Vite**  
**Node.js**  
**MongoDB**

Um sistema de cadastro de usuários com frontend moderno em React + Vite e backend eficiente em Node.js + Express, utilizando MongoDB para armazenamento de dados.

## 🔥 Funcionalidades Principais

- ✨ Interface moderna e responsiva
- 📝 Cadastro de usuários com validação
- 📋 Listagem paginada de usuários
- 🔍 Busca e filtragem de registros
- 🗑️ Exclusão segura de usuários
- 🔄 Atualização em tempo real

## 🛠 Stack Tecnológica

### Frontend

| Tecnologia | Descrição                           |
|------------|-------------------------------------|
| React      | Biblioteca para construção de UI    |
| Vite       | Build tool ultrarrápida             |
| Axios      | Cliente HTTP para APIs              |
| ESLint     | Padronização de código              |

### Backend

| Tecnologia | Descrição                           |
|------------|-------------------------------------|
| Node.js    | Runtime JavaScript                  |
| Express    | Framework web minimalista           |
| MongoDB    | Banco de dados NoSQL                |
| Mongoose   | ODM para MongoDB                    |

## 🚀 Como Executar

### Pré-requisitos

- Node.js v16+
- npm ou yarn
- MongoDB (local ou Atlas)

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/Akynovia/user-registry.git
   cd user-registry
   ```

2. Configure o backend:

   ```bash
   cd API
   npm install
   cp .env.example .env  # Configure suas variáveis
   npm start
   ```

3. Configure o frontend:

   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

4. Acesse a aplicação:
   
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **API:** [http://localhost:3333](http://localhost:3333)
