import { Module, Global } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import prisma from './client';

const prismaProvider = {
  provide: DIPrisma,
  useValue: prisma,
};

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [prismaProvider],
  exports: [prismaProvider],
})
export class PrismaModule {}
