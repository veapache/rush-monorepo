import { InputType, Field, } from '@nestjs/graphql'
import { IsUUID } from 'class-validator'

@InputType()
export class OrderCreateInput {
  @Field()
  @IsUUID("all", {message: 'Некорректный или несуществующий UUID'})
  userId: string

  @Field()
  @IsUUID("all", {message: 'Некорректный или несуществующий UUID'})
  vehicleId: string

  @Field({ nullable: true })
  delivery: string

  @Field({ nullable: true })
  payment: string

  @Field({ nullable: true })
  address: string
}