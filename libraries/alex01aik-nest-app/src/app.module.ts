import { GqlCrudModule } from './graphql/resolvers/GqlCrudModule';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    GraphqlModule,
    PrismaModule,
    UsersModule,
    GqlCrudModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
