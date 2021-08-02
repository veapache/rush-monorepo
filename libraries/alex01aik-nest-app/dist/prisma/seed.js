"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const alex = await prisma.user.upsert({
        where: { email: 'a@prisma.io' },
        update: {},
        create: {
            email: 'a@prisma.io',
            name: 'Alex',
        },
    });
    const bob = await prisma.user.upsert({
        where: { email: 'b@prisma.io' },
        update: {},
        create: {
            email: 'b@prisma.io',
            name: 'Bob',
        },
    });
    console.log({ alex, bob });
}
exports.main = main;
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map