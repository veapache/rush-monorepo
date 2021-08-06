import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async getAll(): Promise<OrderDto[]> {
        return await this.prismaService.order.findMany()
    }

    @Get('/:id')
    async getById(@Param('id') id): Promise<OrderDto> {
        return this.prismaService.order.findUnique({
          where: {
            id
          }
        })
    }
    
    @UsePipes(ValidationPipe)
    @Post()
    async createOrder(@Body() {userId, vehicleId}: OrderDto): Promise<OrderDto> {
        return await this.prismaService.order.create({
            data: {userId, vehicleId}
        })
    }

    @Put('/:id')
    async updateOrder(@Param('id') id: string, @Body() data: OrderDto): Promise<OrderDto>  {
        return this.prismaService.order.update({
          where: {
            id
          },
          data
        })
    }

    @Delete('/:id')
    async deleteOrder(@Param('id') id: string): Promise<OrderDto>  {
        return this.prismaService.order.delete({
            where: {
                id
            }
        })
    }

}