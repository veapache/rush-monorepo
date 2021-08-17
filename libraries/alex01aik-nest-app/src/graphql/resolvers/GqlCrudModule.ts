import { AuthorResolver } from './crud/Author/AuthorResolvers';
import { ArticleResolver } from './crud/Article/ArticleResolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthorResolver, ArticleResolver],
})
export class GqlCrudModule {}
