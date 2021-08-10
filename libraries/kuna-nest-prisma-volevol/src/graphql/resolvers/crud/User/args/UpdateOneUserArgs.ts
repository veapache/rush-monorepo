import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length, IsUUID } from 'class-validator';

@ArgsType()
export class UpdateOneUserArgs {
    @Field((type) => String, { nullable: true })
    @IsEmail()
    @IsString()
    email?: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    name?: string;

    @Field((type) => String, { nullable: true })
    @IsString()
    @Length(4, 16)
    password?: string;
}
