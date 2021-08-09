import { InputType, Field, } from '@nestjs/graphql'
import { IsEmail, IsString, Length } from 'class-validator'

@InputType()
export class UserUpdateInput {

  @Field({ nullable: true })
  @IsEmail()
  @IsString()
  email?: string

  @Field({ nullable: true })
  @IsString()
  name?: string

  @Field({ nullable: true })
  @IsString()
  @Length(4,16)
  password?: string

}