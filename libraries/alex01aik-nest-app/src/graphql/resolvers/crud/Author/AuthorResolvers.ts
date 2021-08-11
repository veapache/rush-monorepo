import { AuthorUpdateInput } from './../../inputs/AuthorUpdateInput';
import { AuthorWhereUniqueInput } from './../../inputs/AuthorWhereUniqueInput';
import { AuthorCreateInput } from './../../inputs/AuthorCreateInput';
import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Author } from 'src/graphql/models/Author';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';
import { Article } from 'src/graphql/models/Article';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  @ResolveField(() => [Article])
  async articles(@Parent() author: Author) {
    return await this.prisma.article.findMany({
      where: {
        authorId: author.id,
      },
    });
  }

  @Query(() => Author)
  async findUniqueAuthor(@Args('where') uniqueArgs: AuthorWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where: { id: uniqueArgs.id },
    });
  }

  @Query(() => [Author])
  async findManyAuthors() {
    return await this.prisma.user.findMany({});
  }

  @Query(() => [Author])
  async findOnePageOfAuthors() {
    return await this.prisma.user.findMany({
      skip: 2,
      take: 2,
    });
  }

  @Mutation(() => Author)
  async createOneAuthor(@Args('args') args: AuthorCreateInput) {
    return await this.prisma.user.create({
      data: {
        ...args,
      },
    });
  }

  @Mutation(() => Author)
  async updateOneAuthor(
    @Args('where') uniqueArgs: AuthorWhereUniqueInput,
    @Args('data') updateArgs: AuthorUpdateInput,
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

  @Mutation(() => Author)
  async deleteOneAuthor(@Args('where') uniqueArgs: AuthorWhereUniqueInput) {
    return await this.prisma.user.delete({
      where: {
        id: uniqueArgs.id,
      },
    });
  }
}
