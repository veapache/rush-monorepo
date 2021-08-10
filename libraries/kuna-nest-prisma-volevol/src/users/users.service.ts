import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DIPrisma } from 'src/DIP';
import { UserDto } from './users.dto';
import { OrderDto } from 'src/order/order.dto';

class UserCreateInput {
    name: string;
    email: string;
    password: string;
}

class UserUpdateInput {
    name?: string;
    email?: string;
    password?: string;
}

@Injectable()
export class UsersService {
    constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

    async findAll(): Promise<UserDto[]> {
        return await this.prisma.user.findMany();
    }

    async findOne(id: string): Promise<UserDto> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findOrdersById(id: string): Promise<OrderDto[]> {
        return this.prisma.user
            .findUnique({
                where: {
                    id,
                },
            })
            .Order();
    }

    async createUser(data: UserCreateInput): Promise<UserDto> {
        return await this.prisma.user.create({
            data,
        });
    }

    async updateUser(id: string, data: UserUpdateInput): Promise<UserDto> {
        return this.prisma.user.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteUser(id: string): Promise<UserDto> {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
