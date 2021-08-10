import 'reflect-metadata'
import { ObjectType, Field } from '@nestjs/graphql'
import { User } from './user.model'
import { Vehicle } from './vehicle.model'

@ObjectType()
export class Order {
  @Field((type) => String)
  id: string

  @Field((type) => String, { nullable: true })
  delivery: string | null

  @Field((type) => String, { nullable: true })
  payment: string | null

  @Field((type) => String, { nullable: true })
  address: string | null

  @Field((type) => String, { nullable: true })
  userId?: string | null

  @Field((type) => String, { nullable: true })
  vehicleId?: string | null

  @Field((type) => User, { nullable: true })
  User?: User | null

  @Field((type) => Vehicle, { nullable: true })
  Vehicle?: Vehicle | null
}