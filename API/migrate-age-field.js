import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateAgeField() {
    const users = await prisma.user.findMany();

    for (const user of users) {
        if (typeof user.age === 'string') {
            await prisma.user.update({
                where: { id: user.id },
                data: { age: String(Number(user.age)) }  // ✅ Converte para número, mas mantém como string no MongoDB
            });
        }
    }

    console.log('Idades convertidas!');
}

updateAgeField()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
