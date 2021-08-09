import { InputType, Field, } from '@nestjs/graphql'
import { IsString } from 'class-validator'
import { OrderCreateInput } from './OrderCreateInput'

@InputType()
export class VehicleCreateInput {
  @Field()
  @IsString()
  brand: string

  @Field()
  @IsString()
  model: string

  @Field({ nullable: true })
  @IsString()
  year: number

  @Field({ nullable: true })
  @IsString()
  cost: number

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]
}