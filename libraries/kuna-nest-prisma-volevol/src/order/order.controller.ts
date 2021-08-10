import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    async getAll(): Promise<OrderDto[]> {
        return await this.orderService.findAll();
    }

    @Get('/:id')
    async getById(@Param('id') id): Promise<OrderDto> {
        return await this.orderService.findOne(id);
    }

    @Post()
    async createOrder(@Body() data: OrderDto): Promise<OrderDto> {
        return await this.orderService.createOrder(data);
    }

    @Put('/:id')
    async updateOrder(@Param('id') id: string, @Body() data: OrderDto): Promise<OrderDto> {
        return await this.orderService.updateOrder(id, data);
    }

    @Delete('/:id')
    async deleteOrder(@Param('id') id: string): Promise<OrderDto> {
        return await this.orderService.deleteOrder(id);
    }
}
