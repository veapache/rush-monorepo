import { InputType, Field, } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class VehicleUpdateInput {
  
  @Field({ nullable: true })
  @IsString()
  brand: string

  @Field({ nullable: true })
  @IsString()
  model: string

  @Field({ nullable: true })
  @IsString()
  year: number

  @Field({ nullable: true })
  @IsString()
  cost: number

}