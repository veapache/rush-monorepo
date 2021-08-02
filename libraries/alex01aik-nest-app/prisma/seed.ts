import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
