import 'reflect-metadata'
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
  InputType,
  Field,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from '../models/user'
import { Order } from '../models/order'
import { OrderCreateInput } from './resolvers.order'

@InputType()
class UserUniqueInput {
  @Field({ nullable: true })
  id: string
}

@InputType()
class UserCreateInput {
  @Field()
  email: string

  @Field()
  name: string

  @Field()
  password: string

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]
}

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

//   @ResolveField()
//   async orders(@Root() user: User, @Context() ctx): Promise<Order[]> {
//     return this.prismaService.user
//       .findUnique({
//         where: {
//           id: user.id,
//         },
//       })
//       .Order()
//   }

  @Mutation((returns) => User)
  async createUser( @Args('data') data: UserCreateInput, @Context() ctx): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password
      }
    })
  }

  @Mutation((returns) => User, { nullable: true })
  async deleteUser( @Args('id') id: string, @Context() ctx): Promise<User | null> {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    })
  }

  @Query((returns) => [User], { nullable: true })
  async allUsers(@Context() ctx): Promise<User[]> {
    return this.prismaService.user.findMany()
  }

  @Query((returns) => [Order], { nullable: true })
  async ordersByUser(@Args('data') data: UserUniqueInput): Promise<Order[]> {
    return this.prismaService.user.findUnique({
      where: {
        id: data.id || undefined,
      }
    }).Order({
      where: {
        payment: "cash"
      }
    })
  }
}