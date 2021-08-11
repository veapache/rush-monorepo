import { ArticleUpdateInput } from './../../inputs/ArticleUpdateInput';
import { ArticleWhereUniqueInput } from './../../inputs/ArticleWhereUniqueInput';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Article } from 'src/graphql/models/Article';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';
import { Inject } from '@nestjs/common';
import { ArticleCreateInput } from '../../inputs/ArticleCreateInput';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  @Mutation(() => Article)
  async createOneAtricle(
    @Args('data') data: ArticleCreateInput,
    @Args('authorId') authorId: string,
  ) {
    return await this.prisma.article.create({
      data: {
        title: data.title,
        content: data.content,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
  }

  @Query(() => Article)
  async findUnique(@Args('where') uniqueArgs: ArticleWhereUniqueInput) {
    return await this.prisma.article.findUnique({
      where: { id: uniqueArgs.id },
    });
  }

  @Mutation(() => Article)
  async updateOne(
    @Args('where') uniqueArgs: ArticleWhereUniqueInput,
    @Args('data') updateArgs: ArticleUpdateInput,
  ) {
    return await this.prisma.article.update({
      where: {
        id: uniqueArgs.id,
      },
      data: {
        ...updateArgs,
      },
    });
  }

  @Mutation(() => Article)
  async deleteOne(@Args('where') uniqueArgs: ArticleWhereUniqueInput) {
    return await this.prisma.article.delete({
      where: {
        id: uniqueArgs.id,
      },
    });
  }
}
