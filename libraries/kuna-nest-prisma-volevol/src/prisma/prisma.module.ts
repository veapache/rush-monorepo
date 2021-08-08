import { Module, Global } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import prisma from './client';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
