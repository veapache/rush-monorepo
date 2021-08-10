import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './vehicle.dto';
import { OrderDto } from 'src/order/order.dto';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) {}

    @Get()
    async getAll(): Promise<VehicleDto[]> {
        return this.vehicleService.findAll();
    }

    @Get('/:id')
    async getById(@Param('id') id): Promise<VehicleDto> {
        return this.vehicleService.findOne(id);
    }

    @Get('/:id/orders')
    async getOrdersById(@Param('id') id: string): Promise<OrderDto[]> {
        return this.vehicleService.findOrdersById(id);
    }

    @Post()
    async createVehicle(@Body() data: VehicleDto): Promise<VehicleDto> {
        return this.vehicleService.createVehicle(data);
    }

    @Put('/:id')
    async updateVehicle(@Param('id') id: string, @Body() data: VehicleDto): Promise<VehicleDto> {
        return this.vehicleService.updateVehicle(id, data);
    }

    @Delete('/:id')
    async deleteVehicle(@Param('id') id: string): Promise<VehicleDto> {
        return this.vehicleService.deleteVehicle(id);
    }
}
