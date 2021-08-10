import 'reflect-metadata'
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { Order } from 'src/graphql/models/order.model'

import { OrderCreateInput } from '../../inputs/OrderCreateInput'
import { OrderUpdateInput } from '../../inputs/OrderUpdateInput'

@Resolver(Order)
export class OrderResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  @Query((returns) => Order, { nullable: true })
  orderById(@Args('id') id: string): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: { id },
    })
  }

  @Mutation((returns) => Order)
  createOrder(@Context() ctx: any, @Args('data') data: OrderCreateInput): Promise<Order> {
    return this.prismaService.order.create({
      data: {
        userId: data.userId,
        vehicleId: data.vehicleId,
      },
    })
  }

  @Mutation((returns) => Order)
  updateOrder(@Context() ctx: any, @Args('id') id: string, @Args('data') data: OrderUpdateInput): Promise<Order> {
    return this.prismaService.order.update({
      where: {
        id
      },
      data
    })
  }

  @Mutation((returns) => Order, { nullable: true })
  async deleteOrder(@Context() ctx: any, @Args('id') id: string): Promise<Order | null> {
    return this.prismaService.order.delete({
      where: {
        id: id,
      },
    })
  }

  @Query((returns) => [Order], { nullable: true })
  async allOrders(@Context() ctx: any): Promise<Order[]> {
    return this.prismaService.order.findMany()
  }
}