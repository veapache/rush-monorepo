import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './users.dto';
import { OrderDto } from 'src/order/order.dto';

class UserCreateInput {
    name: string
    email: string
    password: string
}

class UserUpdateInput {
    name?: string
    email?: string
    password?: string
}

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {}

    async findAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany()
    }

    async findOne(id: string): Promise<UserDto> {
        return this.prismaService.user.findUnique({
            where: {
                id
              }
          })
    }

    async findOrdersById(id: string): Promise<OrderDto[]> {
        return this.prismaService.user.findUnique({
            where: { 
                id 
            }
        }).Order()
    }

    async createUser(data: UserCreateInput): Promise<UserDto> {
        return await this.prismaService.user.create({
            data
        })
    }

    async updateUser(id: string, data: UserUpdateInput): Promise<UserDto> {
        return this.prismaService.user.update({
            where: {
                id
            },
            data
          })
    }

    async deleteUser(id: string): Promise<UserDto> {
        return this.prismaService.user.delete({
            where: {
                id
            }
        })
    }
    
}
 