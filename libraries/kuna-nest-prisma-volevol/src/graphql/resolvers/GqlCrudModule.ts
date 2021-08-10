import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderResolver } from './crud/Order/OrderResolvers';
import { UserResolver } from './crud/User/UserResolvers';
import { VehicleResolver } from './crud/Vehicle/VehicleResolvers';

@Module({
    imports: [PrismaModule],
    providers: [UserResolver, VehicleResolver, OrderResolver],
    exports: [UserResolver, VehicleResolver, OrderResolver],
})
export class GqlCrudModule {}
