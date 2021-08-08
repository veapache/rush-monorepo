import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async getAll(): Promise<VehicleDto[]> {
        return await this.prismaService.vehicle.findMany()
    }

    @Get('/:id')
    async getById(@Param('id') id): Promise<VehicleDto> {
        return this.prismaService.vehicle.findUnique({
          where: {
            id
          }
        })
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createVehicle(@Body() {brand, model}: VehicleDto): Promise<VehicleDto> {
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
    async deleteVehicle(@Param('id') id: string): Promise<VehicleDto>  {
        return this.prismaService.vehicle.delete({
            where: {
                id
            }
        })
    }
    

}
