import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, UsersModule, VehicleModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
