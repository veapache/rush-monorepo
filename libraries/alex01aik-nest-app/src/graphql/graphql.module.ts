import { AuthorResolver } from './resolvers/crud/Author/AuthorResolvers';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthorResolver],
})
export class GraphqlModule {}
