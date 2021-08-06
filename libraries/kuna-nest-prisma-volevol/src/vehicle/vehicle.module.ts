import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [PrismaModule],
  controllers: [VehicleController]
})
export class VehicleModule {}
