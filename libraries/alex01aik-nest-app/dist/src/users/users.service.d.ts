import { PrismaClient } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaClient);
    getAllUsers(): any;
}
