import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DIPrisma } from 'src/DIP';
import { OrderDto } from 'src/order/order.dto';
import { VehicleDto } from './vehicle.dto';

class VehicleCreateInput {
    brand: string;
    model: string;
    year?: number;
    cost?: number;
}

class VehicleUpdateInput {
    brand?: string;
    model?: string;
    year?: number;
    cost?: number;
}

@Injectable()
export class VehicleService {
    constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

    async findAll(): Promise<VehicleDto[]> {
        return await this.prisma.vehicle.findMany();
    }

    async findOne(id: string): Promise<VehicleDto> {
        return this.prisma.vehicle.findUnique({
            where: {
                id,
            },
        });
    }

    async findOrdersById(id: string): Promise<OrderDto[]> {
        return this.prisma.vehicle
            .findUnique({
                where: {
                    id,
                },
            })
            .Order();
    }

    async createVehicle(data: VehicleCreateInput): Promise<VehicleDto> {
        return await this.prisma.vehicle.create({
            data,
        });
    }

    async updateVehicle(id: string, data: VehicleUpdateInput): Promise<VehicleDto> {
        return this.prisma.vehicle.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteVehicle(id: string): Promise<VehicleDto> {
        return this.prisma.vehicle.delete({
            where: {
                id,
            },
        });
    }
}
