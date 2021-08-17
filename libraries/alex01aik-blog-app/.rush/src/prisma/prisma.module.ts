import { PrismaService } from './prisma.servise';
import { Module, Global } from '@nestjs/common';
import { DIPrisma } from './DIP';
import prisma from './client';

const prismaProvider = {
  provide: DIPrisma,
  useValue: prisma,
};

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [prismaProvider, PrismaService],
  exports: [prismaProvider, PrismaService],
})
export class PrismaModule {}
