import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './users.dto';
export declare class UsersController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<UserDto[]>;
    getByUserId(id: any): Promise<UserDto>;
    getOrdersByUserId(id: any): Promise<import("@prisma/client").Order[]>;
    create({ name, email, password }: UserDto): Promise<UserDto>;
    updateUser(id: string, data: UserDto): Promise<UserDto>;
    removeUser(id: string): Promise<UserDto>;
}
