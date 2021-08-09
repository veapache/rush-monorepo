import { Injectable } from '@nestjs/common';
import { OrderDto } from 'src/order/order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';

class VehicleCreateInput {
    brand: string
    model: string
    year?: number
    cost?: number
}

class VehicleUpdateInput {
    brand?: string
    model?: string
    year?: number
    cost?: number
}

@Injectable()
export class VehicleService {

    constructor(private prismaService: PrismaService) {}

    async findAll(): Promise<VehicleDto[]> {
        return await this.prismaService.vehicle.findMany()
    }

    async findOne(id: string): Promise<VehicleDto> {
        return this.prismaService.vehicle.findUnique({
            where: {
                id
              }
          })
    }

    async findOrdersById(id: string): Promise<OrderDto[]> {
        return this.prismaService.vehicle.findUnique({
            where: { 
                id 
            }
        }).Order()
    }

    async createVehicle(data: VehicleCreateInput): Promise<VehicleDto> {
        return await this.prismaService.vehicle.create({
            data
        })
    }

    async updateVehicle(id: string, data: VehicleUpdateInput): Promise<VehicleDto> {
        return this.prismaService.vehicle.update({
            where: {
                id
            },
            data
          })
    }

    async deleteVehicle(id: string): Promise<VehicleDto> {
        return this.prismaService.vehicle.delete({
            where: {
                id
            }
        })
    }
}
