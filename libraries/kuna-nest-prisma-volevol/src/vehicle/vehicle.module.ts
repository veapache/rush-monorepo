import { Module, Global } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VehicleController } from './vehicle.controller';

@Global()
@Module({
  imports: [PrismaModule],
  controllers: [VehicleController]
})
export class VehicleModule {}
