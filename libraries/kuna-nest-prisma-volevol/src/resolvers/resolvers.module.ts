import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderResolver } from './providers/resolvers.order';
import { UserResolver } from './providers/resolvers.user';
import { VehicleResolver } from './providers/resolvers.vehicle';

@Module({
    imports: [PrismaModule],
    providers: [
        UserResolver,
        VehicleResolver,
        OrderResolver
    ],
    exports: [
        UserResolver,
        VehicleResolver,
        OrderResolver
    ]
})
export class ResolversModule {}
