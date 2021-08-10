import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class FindUniqueUserArgs {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
