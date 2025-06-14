const {PrismaClient, Prisma} = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            nome: "teste",
            email: "teste1@example.com",
            senha: "1234567",
            cpf: "12345678911",
        }
    })
}

main().finally(() => prisma.$disconnect());