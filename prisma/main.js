const {PrismaClient} = require("@prisma/client");
const db = new PrismaClient();

module.export = { db };