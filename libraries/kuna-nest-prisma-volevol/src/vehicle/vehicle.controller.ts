import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async findAll(): Promise<VehicleDto[]> {
        return await this.prismaService.vehicle.findMany()
    }

    @Get('/:id')
    async getByVehiclesId(@Param('id') id): Promise<VehicleDto> {
        return this.prismaService.vehicle.findUnique({
          where: {
            id
          }
        })
    }

    @Post()
    async create(@Body() {brand, model}: VehicleDto): Promise<VehicleDto> {
        return await this.prismaService.vehicle.create({
            data:  {brand, model}
        })
    }

    @Put('/:id')
    async updateVehicle(@Param('id') id: string, @Body() data: VehicleDto): Promise<VehicleDto>  {
        return this.prismaService.vehicle.update({
          where: {
            id
          },
          data
        })
    }

    @Delete('/:id')
    async removeVehicle(@Param('id') id: string): Promise<VehicleDto>  {
        return this.prismaService.vehicle.delete({
            where: {
                id
            }
        })
    }
    

}
