import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class OrderUpdateInput {
    @Field((type) => String, { nullable: true })
    delivery: string;

    @Field((type) => String, { nullable: true })
    payment: string;

    @Field((type) => String, { nullable: true })
    address: string;
}
