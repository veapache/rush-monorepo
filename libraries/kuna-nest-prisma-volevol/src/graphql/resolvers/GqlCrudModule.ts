import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthResolver } from './crud/Auth/AuthResolvers';
import { AuthService } from './crud/Auth/AuthService';
import { OrderResolver } from './crud/Order/OrderResolvers';
import { UserResolver } from './crud/User/UserResolvers';
import { VehicleResolver } from './crud/Vehicle/VehicleResolvers';

@Module({
    imports: [PrismaModule],
    providers: [UserResolver, VehicleResolver, OrderResolver,
         AuthResolver, AuthService
        ],
    exports: [UserResolver, VehicleResolver, OrderResolver, 
        AuthResolver, AuthService
        ],
})
export class GqlCrudModule {}
