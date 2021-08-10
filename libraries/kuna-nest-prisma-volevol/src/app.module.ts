import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { OrderModule } from './order/order.module';

import { GqlCrudModule } from './graphql/resolvers/GqlCrudModule';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

@Module({
    imports: [
        PrismaModule,
        UsersModule,
        VehicleModule,
        OrderModule,
        GqlCrudModule,
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
