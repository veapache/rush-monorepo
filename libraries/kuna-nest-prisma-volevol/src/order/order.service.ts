import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './order.dto';

class OrderCreateInput {
    userId: string
    vehicleId: string
}

class OrderUpdateInput {
    delivery?: string 
    payment?: string
    address?: string
}

@Injectable()
export class OrderService {
    
    constructor(private prismaService: PrismaService) {}

    async findAll(): Promise<OrderDto[]> {
        return await this.prismaService.order.findMany()
    }

    async findOne(id: string): Promise<OrderDto> {
        return this.prismaService.order.findUnique({
            where: {
                id
            }
        })
    }

    async createOrder(data: OrderCreateInput): Promise<OrderDto> {
        return await this.prismaService.order.create({
            data
        })
    }

    async updateOrder(id: string, data: OrderUpdateInput): Promise<OrderDto> {
        return this.prismaService.order.update({
            where: {
                id
            },
            data
        })
    }

    async deleteOrder(id: string): Promise<OrderDto> {
        return this.prismaService.order.delete({
            where: {
                id
            }
        })
    }
}