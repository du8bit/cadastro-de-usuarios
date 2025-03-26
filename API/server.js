import express from 'express';   
import cors from 'cors';     
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();  // Inicializa o Prisma Client

const app = express();  // Cria uma instância do Express
app.use(express.json());  // Configura o middleware para tratar JSON no corpo da requisição
app.use(cors({
    origin: '*',  // Permite requisições de qualquer origem
    methods: 'GET,POST,PUT,DELETE', // Permite os métodos desejados
  }));

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try {
        // Cria o usuário no banco de dados
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        
        // Responde com o status 201 e os dados do usuário
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
});

// Rota para obter todos os usuários ou filtrar por parâmetros de consulta
app.get('/users', async (req, res) => {
    try {
        // Verifica se há parâmetros de consulta e aplica filtros, senão retorna todos os usuários
        const users = req.query.name || req.query.email || req.query.age
            ? await prisma.user.findMany({
                where: {
                    name: req.query.name,
                    email: req.query.email,
                    age: req.query.age
                }
            })
            : await prisma.user.findMany();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// Rota para atualizar um usuário existente
app.put('/users/:id', async (req, res) => {
    try {
        // Atualiza o usuário com o ID especificado
        await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });

        // Responde com o status 200 e os dados atualizados
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
});

// Rota para excluir um usuário pelo ID
app.delete('/users/:id', async (req, res) => {
    try {
        // Deleta o usuário com o ID especificado
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        });

        // Responde com o status 200 e uma mensagem de sucesso
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
});

// Inicia o servidor na porta 3333
app.listen(3333, '0.0.0.0', () => {
    console.log('Server is running on http://localhost:3333');
});

