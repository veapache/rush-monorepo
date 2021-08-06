import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes} from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async getAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany()
    }

    // @UsePipes(ValidationPipe)

    // @Get('/:id')
    // async getByUserId(@Param('id', new ParseUUIDPipe({version: '5'})) id): Promise<UserDto> {
    //     return this.prismaService.user.findUnique({
    //       where: id
    //     })
    // }


    @Get('/:id')
    async getById(@Param('id') id): Promise<UserDto> {
        return this.prismaService.user.findUnique({
          where: {
              id
            }
        })
    }
 
    @Get('/:id/orders')
    async getOrdersById(@Param('id') id) {
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

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() {name, email, password}: UserDto): Promise<UserDto> {
        return await this.prismaService.user.create({
            data: {name, email, password}
        })
    }

    @UsePipes(ValidationPipe)
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
    async deleteUser(@Param('id') id: string): Promise<UserDto>  {
        return this.prismaService.user.delete({
            where: {
                id
            }
        })
    }

}
