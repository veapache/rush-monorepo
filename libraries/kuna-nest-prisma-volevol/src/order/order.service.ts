import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DIPrisma } from 'src/DIP';
import { OrderDto } from './order.dto';

class OrderCreateInput {
    userId: string;
    vehicleId: string;
}

class OrderUpdateInput {
    delivery?: string;
    payment?: string;
    address?: string;
}

@Injectable()
export class OrderService {
    constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

    async findAll(): Promise<OrderDto[]> {
        return await this.prisma.order.findMany();
    }

    async findOne(id: string): Promise<OrderDto> {
        return this.prisma.order.findUnique({
            where: {
                id,
            },
        });
    }

    async createOrder(data: OrderCreateInput): Promise<OrderDto> {
        return await this.prisma.order.create({
            data,
        });
    }

    async updateOrder(id: string, data: OrderUpdateInput): Promise<OrderDto> {
        return this.prisma.order.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteOrder(id: string): Promise<OrderDto> {
        return this.prisma.order.delete({
            where: {
                id,
            },
        });
    }
}
