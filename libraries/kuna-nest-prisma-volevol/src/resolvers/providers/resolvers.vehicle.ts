import 'reflect-metadata'
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
  InputType,
  Field,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { OrderCreateInput } from './resolvers.order'
import { PrismaService } from 'src/prisma/prisma.service'
import { Vehicle } from '../models/vehicle.model'
import { Order } from '../models/order.model'
import { IsString } from 'class-validator'


@InputType()
class VehicleUniqueInput {
  @Field({ nullable: true })
  id: string
}

@InputType()
class VehicleCreateInput {
  @Field()
  brand: string

  @Field()
  model: string

  @Field({ nullable: true })
  year: number

  @Field({ nullable: true })
  cost: number

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]
}

@InputType()
class VehicleUpdateInput {
  
  @Field({ nullable: true })
  @IsString()
  brand: string

  @Field({ nullable: true })
  @IsString()
  model: string

  @Field({ nullable: true })
  @IsString()
  year: number

  @Field({ nullable: true })
  @IsString()
  cost: number

}

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
  async ordersByVehicle(@Args('data') data: VehicleUniqueInput): Promise<Order[]> {
    return this.prismaService.vehicle.findUnique({
      where: {
        id: data.id || undefined,
      }
    }).Order({
      where: {
        payment: "cash"
      }
    })
  }
}