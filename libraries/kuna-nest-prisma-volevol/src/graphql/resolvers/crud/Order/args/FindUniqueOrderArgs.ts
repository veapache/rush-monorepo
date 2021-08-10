import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class FindUniqueOrderArgs {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
