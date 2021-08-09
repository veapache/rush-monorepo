import 'reflect-metadata'
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
  Context,
  Int,
  InputType,
  Field,
  registerEnumType,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from '../models/user.model'
import { Vehicle } from '../models/vehicle.model'
import { Order } from '../models/order.model'

@InputType()
export class OrderCreateInput {
  @Field()
  userId: string

  @Field()
  vehicleId: string

  @Field({ nullable: true })
  delivery: string

  @Field({ nullable: true })
  payment: string

  @Field({ nullable: true })
  address: string
}

@Resolver(Order)
export class OrderResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  // @ResolveField()
  // getUser(@Root() order: Order): Promise<User | null> {
  //   return this.prismaService.order
  //     .findUnique({
  //       where: {
  //         id: order.id,
  //       },
  //     })
  //     .User()
  // }

  // @ResolveField()
  // getVehicle(@Root() order: Order): Promise<Vehicle | null> {
  //   return this.prismaService.order
  //     .findUnique({
  //       where: {
  //         id: order.id,
  //       },
  //     })
  //     .Vehicle()
  // }

  @Query((returns) => Order, { nullable: true })
  orderById(@Args('id') id: string): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: { id },
    })
  }

  @Mutation((returns) => Order)
  createOrder( @Args('data') data: OrderCreateInput, @Context() ctx): Promise<Order> {
    return this.prismaService.order.create({
      data: {
        userId: data.userId,
        vehicleId: data.vehicleId,
      },
    })
  }

  @Mutation((returns) => Order, { nullable: true })
  async deleteOrder( @Args('id') id: string, @Context() ctx): Promise<Order | null> {
    return this.prismaService.order.delete({
      where: {
        id: id,
      },
    })
  }

  @Query((returns) => [Order], { nullable: true })
  async allOrders(@Context() ctx): Promise<Order[]> {
    return this.prismaService.order.findMany()
  }
}