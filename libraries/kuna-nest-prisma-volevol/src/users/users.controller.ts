import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async findAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany()
    }

    @Get('/:id')
    async getByUserId(@Param('id') id): Promise<UserDto> {
        return this.prismaService.user.findUnique({
          where: {
            id
          }
        })
    }

    @Get('/:id/orders')
    async getOrdersByUserId(@Param('id') id){
        return this.prismaService.user.findUnique({
            where: { 
                id 
            }
        }).Order({
            where: {
                // добавь позже чтобы просто всех выдавало а не только с таким параметров и значением
                address: 'none'
            }
        })
    }

    @Post()
    async create(@Body() {name, email, password}: UserDto): Promise<UserDto> {
        return await this.prismaService.user.create({
            data: {name, email, password}
        })
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() data: UserDto): Promise<UserDto>  {
        return this.prismaService.user.update({
          where: {
            id
          },
          data
        })
    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string): Promise<UserDto>  {
        return this.prismaService.user.delete({
            where: {
                id
            }
        })
    }

}
