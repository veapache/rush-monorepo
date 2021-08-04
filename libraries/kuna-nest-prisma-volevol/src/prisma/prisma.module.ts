import { Module, Global } from '@nestjs/common';
import { DIPrisma } from 'DIP';
import prisma from './client';
import { PrismaService } from './prisma.service';

const prismaProvider = {
  provide: DIPrisma,
  useValue: prisma
}

@Global()
@Module({
  providers: [prismaProvider, PrismaService],
  exports: [prismaProvider, PrismaService]
})
export class PrismaModule {}
