import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Logger, Inject, UseGuards } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';

import { User } from 'src/graphql/models/user.model';
import { Order } from 'src/graphql/models/order.model';

import { CreateOneUserArgs } from './args/CreateOneUserArgs';
import { FindUniqueUserArgs } from './args/FindUniqueUserArgs';
import { UpdateOneUserArgs } from './args/UpdateOneUserArgs';
import { CtxUser } from '../Auth/decorators/CtxUser.decorator';
import { GqlAuthGuard } from '../Auth/guards/GqlAuthGuard';

@Resolver((of) => User)
export class UserResolver {
    constructor(@Inject(DIPrisma) private prisma: PrismaClient) {}

    @Query(() => [User], { nullable: true })
    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    @Query(() => User, { nullable: true })
    async getUserById(@Args() args: FindUniqueUserArgs): Promise<User> {
        return this.prisma.user.findUnique({ where: args });
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Order], { nullable: true })
    async ordersByUser(@CtxUser() user: User, @Args() args: FindUniqueUserArgs): Promise<Order[]> {
        Logger.log(user)
        return this.prisma.user.findUnique({ where: {id: user.id} }).Order();
    }

    // @Mutation(() => User, { nullable: true })
    // async createUser(@Args() args: CreateOneUserArgs): Promise<User> {
    //     return this.prisma.user.create({ data: args });
    // }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => User, { nullable: true })
    async updateUser(@CtxUser() user: User, @Args('id') id: string, @Args() args: UpdateOneUserArgs): Promise<User> {
        return this.prisma.user.update({ where: { id: user.id }, data: args });
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => User, { nullable: true })
    async deleteUser(@CtxUser() user: User, @Args('id') id: string): Promise<User | null> {
        return this.prisma.user.delete({ where: { id: user.id } });
    }
}
