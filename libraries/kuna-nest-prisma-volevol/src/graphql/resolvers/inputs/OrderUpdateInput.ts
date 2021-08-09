import { InputType, Field, } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class OrderUpdateInput {

  @Field({ nullable: true })
  @IsString()
  delivery: string

  @Field({ nullable: true })
  @IsString()
  payment: string

  @Field({ nullable: true })
  @IsString()
  address: string

}