import { UpdateOneAuthorArgs } from './args/UpdateOneAuthorArgs';
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

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  @ResolveField((returns) => [Article])
  async getArticlesByUserId(@Parent() author: Author) {
    return await this.prisma.article.findMany({
      where: {
        authorId: author.id,
      },
    });
  }

  @Query((returns) => Author)
  async getAuthor(@Args('id', { type: () => String }) id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  @Query((returns) => [Author])
  async getAuthors() {
    return await this.prisma.user.findMany({});
  }

  @Mutation((returns) => Author)
  async createOneAuthor(@Args('args') args: AuthorCreateInput) {
    return await this.prisma.user.create({
      data: {
        ...args,
      },
    });
  }

  @Mutation((returns) => Author)
  async updateOneAuthor(
    @Args('id', { type: () => String }) id: string,
    @Args() updateArgs: UpdateOneAuthorArgs,
  ) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateArgs,
      },
    });
  }

  @Mutation((returns) => Author)
  async deleteOneAuthor(@Args('id', { type: () => String }) id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
