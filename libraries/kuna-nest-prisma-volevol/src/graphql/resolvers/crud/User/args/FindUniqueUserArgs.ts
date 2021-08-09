import { ArgsType, Field, } from '@nestjs/graphql'
import { IsEmail, IsString, Length } from 'class-validator'

@ArgsType()
export class FindUniqueUserArgs {
    @Field()
    @IsString()
    id: string
}

