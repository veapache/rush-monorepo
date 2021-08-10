import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateOneUserArgs {
    @Field((type) => String)
    @IsEmail()
    @IsString()
    email: string;

    @Field((type) => String)
    @IsString()
    name: string;

    @Field((type) => String)
    @IsString()
    @Length(4, 16)
    password: string;
}
