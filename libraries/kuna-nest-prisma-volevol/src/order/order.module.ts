import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderController } from './order.controller';

@Module({
  imports: [PrismaModule],
  controllers: [OrderController]
})
export class OrderModule {}
