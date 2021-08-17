import { UserResolver } from './resolvers/crud/User/UserResolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [UserResolver],
})
export class GraphqlModule {}
