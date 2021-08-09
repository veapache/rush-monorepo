import { InputType, Field, } from '@nestjs/graphql'
import { IsEmail, IsString, Length } from 'class-validator'
import { OrderCreateInput } from './OrderCreateInput'

@InputType()
export class UserCreateInput {

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

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]

}