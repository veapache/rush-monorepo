import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';

import { Vehicle } from 'src/graphql/models/vehicle.model';
import { Order } from 'src/graphql/models/order.model';

import { CreateOneVehicleArgs } from './args/CreateOneVehicleArgs';
import { UpdateOneVehicleArgs } from './args/UpdateOneVehicleArgs';
import { FindUniqueVehicleArgs } from './args/FindUniqueVehicleArgs';

@Resolver(Vehicle)
export class VehicleResolver {
    constructor(@Inject(DIPrisma) private prisma: PrismaClient) {}

    @Query(() => [Vehicle], { nullable: true })
    async allVehicles(): Promise<Vehicle[]> {
        return this.prisma.vehicle.findMany();
    }

    @Query(() => Vehicle, { nullable: true })
    async getVehicleById(@Args() args: FindUniqueVehicleArgs): Promise<Vehicle> {
        return this.prisma.vehicle.findUnique({ where: args });
    }

    @Query(() => [Order], { nullable: true })
    async ordersByVehicle(@Args('id') id: string): Promise<Order[]> {
        return this.prisma.vehicle.findUnique({ where: { id } }).Order();
    }

    @Mutation(() => Vehicle)
    async createVehicle(@Args() args: CreateOneVehicleArgs): Promise<Vehicle> {
        return this.prisma.vehicle.create({ data: args });
    }

    @Mutation(() => Vehicle)
    async updateVehicle(@Args('id') id: string, @Args() args: UpdateOneVehicleArgs): Promise<Vehicle> {
        return this.prisma.vehicle.update({ where: { id }, data: args });
    }

    @Mutation(() => Vehicle)
    async deleteVehicle(@Args('id') id: string): Promise<Vehicle | null> {
        return this.prisma.vehicle.delete({ where: { id } });
    }
}
