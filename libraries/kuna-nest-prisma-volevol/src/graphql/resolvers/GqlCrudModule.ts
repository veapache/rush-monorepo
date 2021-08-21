import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthResolver } from './crud/Auth/AuthResolvers';
import { AuthService } from './crud/Auth/AuthService';
import { JwtStrategy } from './crud/Auth/strategies/JwtStrategy';
import { OrderResolver } from './crud/Order/OrderResolvers';
import { UserResolver } from './crud/User/UserResolvers';
import { VehicleResolver } from './crud/Vehicle/VehicleResolvers';

@Module({
    imports: [PrismaModule, JwtModule.register({
        secret: 'KUNA-IVAN-AUTH'
    })],
    providers: [UserResolver, VehicleResolver, OrderResolver,
         AuthResolver, AuthService, JwtStrategy
        ],
    exports: [UserResolver, VehicleResolver, OrderResolver, 
        AuthResolver, AuthService, JwtStrategy
        ],
})
export class GqlCrudModule {}
