import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Order } from './order'

@ObjectType()
export class Vehicle {
  @Field((type) => String)
  id: string

  @Field((type) => String)
  brand: string

  @Field((type) => String)
  model: string

  @Field((type) => Int, { nullable: true })
  year?: number

  @Field((type) => Int, { nullable: true })
  cost?: number

  @Field((type) => [Order], { nullable: true })
  Order?: [Order] | null
}