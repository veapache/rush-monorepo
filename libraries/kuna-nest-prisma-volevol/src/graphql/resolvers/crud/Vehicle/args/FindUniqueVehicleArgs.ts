import { ArgsType, Field } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty } from 'class-validator';

@ArgsType()
export class FindUniqueVehicleArgs {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
