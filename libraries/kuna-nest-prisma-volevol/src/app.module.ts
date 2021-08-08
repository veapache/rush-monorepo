import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { OrderModule } from './order/order.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { ResolversModule } from './resolvers/resolvers.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    VehicleModule, 
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    ResolversModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
