import { InputType, Field, } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class OrderCreateInput {
  @Field()
  @IsString()
  userId: string

  @Field()
  @IsString()
  vehicleId: string

  @Field({ nullable: true })
  delivery: string

  @Field({ nullable: true })
  payment: string

  @Field({ nullable: true })
  address: string
}