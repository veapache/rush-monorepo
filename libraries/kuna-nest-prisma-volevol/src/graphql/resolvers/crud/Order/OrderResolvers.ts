import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Logger,Inject, UseGuards } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';

import { Order } from 'src/graphql/models/order.model';

import { CreateOneOrderArgs } from './args/CreateOneOrderArgs';
import { UpdateOneOrderArgs } from './args/UpdateOneOrderArgs';
import { FindUniqueOrderArgs } from './args/FindUniqueOrderArgs';
import { GqlAuthGuard } from '../Auth/guards/GqlAuthGuard';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from '../../inputs/JwtDto';
import { CtxUser } from '../Auth/decorators/CtxUser.decorator';
import { User } from 'src/graphql/models/user.model';

@UseGuards(GqlAuthGuard)
@Resolver(Order)
export class OrderResolver {
    constructor(
        @Inject(DIPrisma) private prisma: PrismaClient,
        private readonly jwt: JwtService
    ) {}

    @Query(() => [Order], { nullable: true })
    async allOrders(): Promise<Order[]> {
        return this.prisma.order.findMany();
    }

    @Query(() => Order, { nullable: true })
    async orderById(@Args() args: FindUniqueOrderArgs): Promise<Order> {
        return this.prisma.order.findUnique({ where: args });
    }

    @Mutation(() => Order)
    async createOrder(@CtxUser() user: User, @Args() args: CreateOneOrderArgs): Promise<Order> {
        Logger.log(user)
        return await this.prisma.order.create({ data: {...args, userId: user.id}});
    }

    @Mutation(() => Order)
    async updateOrder(@CtxUser() user: User, @Args('id') id: string, @Args() args: UpdateOneOrderArgs): Promise<Order> {
        return this.prisma.order.update({ where: { id }, data: args });
    }

    @Mutation(() => Order)
    async deleteOrder(@CtxUser() user: User, @Args('id') id: string): Promise<Order | null> {
        return this.prisma.order.delete({ where: { id } });
    }
}
