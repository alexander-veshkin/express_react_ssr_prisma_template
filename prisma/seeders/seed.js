const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { users } = require('../fixtures/users');

async function main() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect);
