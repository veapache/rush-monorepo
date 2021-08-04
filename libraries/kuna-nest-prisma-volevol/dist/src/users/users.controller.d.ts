import { User as UserModel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersController {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllUsers(): Promise<UserModel[]>;
    signupUser(userData: {
        name?: string;
        email: string;
        posts?: Prisma.PostCreateInput[];
    }): Promise<UserModel>;
}
