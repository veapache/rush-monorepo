import { Module, Global } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Global()
@Module({
  imports: [PrismaModule],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
