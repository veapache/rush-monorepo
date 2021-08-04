import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async findAll(): Promise<OrderDto[]> {
        return await this.prismaService.order.findMany()
    }

    @Get('/:id')
    async getByOrdersId(@Param('id') id): Promise<OrderDto> {
        return this.prismaService.order.findUnique({
          where: {
            id
          }
        })
    }

    @Post()
    async create(@Body() {userId, vehicleId}: OrderDto): Promise<OrderDto> {
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
    async removeOrder(@Param('id') id: string): Promise<OrderDto>  {
        return this.prismaService.order.delete({
            where: {
                id
            }
        })
    }

}