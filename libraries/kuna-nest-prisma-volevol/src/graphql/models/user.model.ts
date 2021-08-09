import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { Order } from './order.model'

@ObjectType()
export class User {

  @Field((type) => String)
  id: string

  @Field()
  @IsEmail()
  email: string

  @Field((type) => String)
  name: string

  @Field((type) => String, { nullable: true })
  password: string

  @Field((type) => [String], { nullable: true })
  orderIds?: [String] | null

  @Field((type) => [Order], { nullable: true })
  Order?: [Order] | null
}