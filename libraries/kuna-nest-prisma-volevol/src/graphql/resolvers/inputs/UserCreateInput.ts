import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { OrderCreateInput } from './OrderCreateInput';

@InputType()
export class UserCreateInput {
    @Field((type) => String)
    @IsEmail()
    email: string;

    @Field((type) => String)
    @IsNotEmpty()
    name: string;

    @Field((type) => String)
    @Length(4, 16)
    password: string;

    @Field((type) => [OrderCreateInput], { nullable: true })
    Order: [OrderCreateInput];
}
