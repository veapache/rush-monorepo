import { Module, Global } from '@nestjs/common';
import { DIPrisma } from 'src/DIP';
import prisma from './client';
import { PrismaService } from './prisma.service';

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
