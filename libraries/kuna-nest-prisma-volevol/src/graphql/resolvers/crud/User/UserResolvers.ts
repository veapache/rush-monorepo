import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, Body } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';

import { User } from 'src/graphql/models/user.model';
import { Order } from 'src/graphql/models/order.model';

import { CreateOneUserArgs } from './args/CreateOneUserArgs';
import { FindUniqueUserArgs } from './args/FindUniqueUserArgs';
import { UpdateOneUserArgs } from './args/UpdateOneUserArgs';

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

    @Query(() => [Order], { nullable: true })
    async ordersByUser(@Args() args: FindUniqueUserArgs): Promise<Order[]> {
        return this.prisma.user.findUnique({ where: args }).Order();
    }

    @Mutation(() => User, { nullable: true })
    async createUser(@Args() args: CreateOneUserArgs): Promise<User> {
        return this.prisma.user.create({ data: args });
    }

    @Mutation(() => User, { nullable: true })
    async updateUser(@Args('id') id: string, @Args() args: UpdateOneUserArgs): Promise<User> {
        return this.prisma.user.update({ where: { id }, data: args });
    }

    @Mutation(() => User, { nullable: true })
    async deleteUser(@Args('id') id: string): Promise<User | null> {
        return this.prisma.user.delete({ where: { id } });
    }

    //   @ResolveField()
    //   async orders(@Root() user: User, @Context() ctx): Promise<Order[]> {
    //     return this.prisma.user
    //       .findUnique({
    //         where: {
    //           id: user.id,
    //         },
    //       })
    //       .Order()
    //   }

    // @UsePipes(ValidationPipe)
}
