import { ArgsType, Field, } from '@nestjs/graphql'
import { IsEmail, IsString, Length } from 'class-validator'

@ArgsType()
export class CreateOneUserArgs {
    @Field()
    @IsEmail()
    @IsString()
    email: string

    @Field()
    @IsString()
    name: string

    @Field()
    @IsString()
    @Length(4,16)
    password: string
}

