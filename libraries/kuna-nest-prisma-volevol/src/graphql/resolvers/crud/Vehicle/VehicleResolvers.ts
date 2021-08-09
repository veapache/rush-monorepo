import 'reflect-metadata'
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { Vehicle } from 'src/graphql/models/vehicle.model'
import { Order } from 'src/graphql/models/order.model'

import { VehicleCreateInput } from '../../inputs/VehicleCreateInput'
import { VehicleUpdateInput } from '../../inputs/VehicleUpdateInput'

@Resolver(Vehicle)
export class VehicleResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  @Mutation((returns) => Vehicle)
  async createVehicle( @Args('data') data: VehicleCreateInput, @Context() ctx): Promise<Vehicle> {
    return this.prismaService.vehicle.create({
      data: {
        brand: data.brand,
        model: data.model,
        year: data.year,
        cost: data.cost
      }
    })
  }

  @Mutation((returns) => Vehicle)
  async updateVehicle( 
    @Args('data') data: VehicleUpdateInput, 
    @Args('id') id: string, 
    @Context() ctx
  ): Promise<Vehicle> {
    return this.prismaService.vehicle.update({
      where: {
        id
      },
      data
    })
  }

  @Mutation((returns) => Vehicle, { nullable: true })
  async deleteVehicle( @Args('id') id: string, @Context() ctx): Promise<Vehicle | null> {
    return this.prismaService.vehicle.delete({
      where: {
        id: id,
      },
    })
  }

  @Query((returns) => [Vehicle], { nullable: true })
  async allVehicles(@Context() ctx): Promise<Vehicle[]> {
    return this.prismaService.vehicle.findMany()
  }

  @Query((returns) => [Order], { nullable: true })
  async ordersByVehicle(@Args('id') id: string): Promise<Order[]> {
    return this.prismaService.vehicle.findUnique({
      where: {
        id
      }
    }).Order()
  }
}