import { ArgsType, Field, } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@ArgsType()
export class FindUniqueUserArgs {
    @Field()
    @IsString()
    id: string
}

