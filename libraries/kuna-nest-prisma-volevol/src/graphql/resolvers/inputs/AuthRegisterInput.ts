import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRegisterInput {

    @Field()
    email: string
    
    @Field()
    name: string

    @Field()
    password: string

}