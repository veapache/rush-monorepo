import { UserUpdateInput } from '../../inputs/User/UserUpdateInput';
import { UserWhereUniqueInput } from '../../inputs/User/UserWhereUniqueInput';
import { UserCreateInput } from '../../inputs/User/UserCreateInput';
import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from 'src/graphql/models/User';
import { DIPrisma } from 'src/prisma/DIP';
import { PrismaClient } from '@prisma/client';
import { Article } from 'src/graphql/models/Article';

@Resolver(() => User)
export class UserResolver {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  @ResolveField(() => [Article])
  async articles(@Parent() author: User) {
    return await this.prisma.article.findMany({
      where: {
        authorId: author.id,
      },
    });
  }

  @Query(() => User)
  async findUniqueUser(@Args('where') uniqueArgs: UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where: { id: uniqueArgs.id },
    });
  }

  @Query(() => [User])
  async findManyUsers() {
    return await this.prisma.user.findMany({});
  }

  @Mutation(() => User)
  async createOneUser(@Args('args') args: UserCreateInput) {
    return await this.prisma.user.create({
      data: {
        ...args,
      },
    });
  }

  @Mutation(() => User)
  async updateOneUser(
    @Args('where') uniqueArgs: UserWhereUniqueInput,
    @Args('data') updateArgs: UserUpdateInput,
  ) {
    return await this.prisma.user.update({
      where: {
        id: uniqueArgs.id,
      },
      data: {
        ...updateArgs,
      },
    });
  }

  @Mutation(() => User)
  async deleteOneUser(@Args('where') uniqueArgs: UserWhereUniqueInput) {
    return await this.prisma.user.delete({
      where: {
        id: uniqueArgs.id,
      },
    });
  }
}
