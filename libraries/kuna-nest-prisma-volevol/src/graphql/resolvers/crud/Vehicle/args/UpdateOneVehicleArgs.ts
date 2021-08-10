import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, Min } from 'class-validator';

@ArgsType()
export class UpdateOneVehicleArgs {
    @Field((type) => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    brand?: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    model?: string;

    @Field((type) => Number, { nullable: true })
    @IsNumber()
    @Min(1885)
    year?: number;

    @Field((type) => Number, { nullable: true })
    @Min(0)
    cost?: number;
}
