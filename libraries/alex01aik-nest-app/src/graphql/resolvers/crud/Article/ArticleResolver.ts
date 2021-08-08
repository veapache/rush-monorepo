import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Article } from 'src/graphql/models/Article';
import { DIPrisma } from 'src/DIP';
import { PrismaClient } from '@prisma/client';
import { Inject } from '@nestjs/common';
import { ArticleCreateInput } from '../../inputs/ArticleCreateInput';
import { UpdateOneArticleArgs } from '../Article/args/UpdateOneArticleArgs';

@Resolver((of) => Article)
export class ArticleResolver {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  @Mutation((returns) => Article)
  async createOneArticle(
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

  @Query((returns) => Article)
  async getArticle(@Args('id', { type: () => String }) id: string) {
    return await this.prisma.article.findUnique({
      where: { id },
    });
  }

  @Mutation((returns) => Article)
  async updateOneArticle(
    @Args('id', { type: () => String }) id: string,
    @Args() updateArgs: UpdateOneArticleArgs,
  ) {
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: {
        ...updateArgs,
      },
    });
  }

  @Mutation((returns) => Article)
  async deleteOneArticle(@Args('id', { type: () => String }) id: string) {
    return await this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
