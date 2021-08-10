import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@ArgsType()
export class UpdateOneOrderArgs {
    @Field((type) => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    delivery?: string | null;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    payment?: string | null;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    address?: string | null;
}
