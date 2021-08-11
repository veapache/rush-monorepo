import { PrismaClient } from "@prisma/client";
import { users, vehicles } from './data';

const prisma = new PrismaClient()
 
async function main() {
    const promises = new Array()
    for (let user of users) {
        promises.push(prisma.user.create({ data: user }))
    }
    for (let vehicle of vehicles) {
        promises.push(await prisma.vehicle.create({ data: vehicle }))
    }
    Promise.all(promises)
    .then((result)=>console.log(result))
    .catch((error)=>console.log(`Error in promises ${error}`))
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect()
})