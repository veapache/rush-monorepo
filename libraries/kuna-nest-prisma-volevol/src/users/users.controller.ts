import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes} from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';
import { OrderDto } from 'src/order/order.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    async getAll(): Promise<UserDto[]> {
        return this.usersService.findAll()
    }

    @Get('/:id')
    async getById(@Param('id') id: string): Promise<UserDto> {
        return this.usersService.findOne(id)
    }
 
    @Get('/:id/orders')
    async getOrdersById(@Param('id') id: string): Promise<OrderDto[]> {
        return this.usersService.findOrdersById(id)
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() data: UserDto): Promise<UserDto> {
        return this.usersService.createUser(data)
    }

    // @UsePipes(ValidationPipe)
    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() data: UserDto): Promise<UserDto>  {
        return this.usersService.updateUser(id, data)
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string): Promise<UserDto>  {
        return this.usersService.deleteUser(id)
    }

    // валидация на UUID (не работает)

    // @UsePipes(ValidationPipe)
    // @Get('/:id')
    // async getByUserId(@Param('id', new ParseUUIDPipe({version: '5'})) id): Promise<UserDto> {
    //     return this.prismaService.user.findUnique({
    //       where: id
    //     })
    // }
}
