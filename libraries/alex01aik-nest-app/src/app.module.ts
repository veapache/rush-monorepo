import { GqlCrudModule } from './graphql/resolvers/GqlCrudModule';
import { AuthorResolver } from './graphql/resolvers/crud/Author/AuthorResolvers';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    GqlCrudModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthorResolver],
})
export class AppModule {}
