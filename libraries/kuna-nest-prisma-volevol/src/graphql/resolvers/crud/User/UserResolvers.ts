import 'reflect-metadata'
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { User } from 'src/graphql/models/user.model'
import { Order } from 'src/graphql/models/order.model'

import { UserCreateInput } from '../../inputs/UserCreateInput'
import { UserUpdateInput } from '../../inputs/UserUpdateInput'
import { CreateOneUserArgs } from './args/CreateOneUserArgs'
import { FindUniqueUserArgs } from './args/FindUniqueUserArgs'

@Resolver(of => User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => [User], { nullable: true })
  async getAllUsers(@Context() ctx: any): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  // не работает через ctx => "Cannot read property 'user' of undefined"
  @Query(() => User, { nullable: true })
  async getUserById(@Context() ctx: any, @Args() args: FindUniqueUserArgs): Promise<User[]> {
    // console.log('--------------------') // эксперименты (удалить позже)
    // console.log(args)
    // // console.log('')
    // // console.log(ctx)
    // console.log('')
    // ctx.prisma = this.prisma
    // console.log(ctx.prisma)
    // console.log('--------------------') // эксперименты (удалить позже)
    return ctx.prisma.user.findUnique(args)
  }

  @Query(() => [Order], { nullable: true })
  async ordersByUser(@Context() ctx: any, @Args('id') id: string): Promise<Order[]> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    }).Order()
  }

  // @Mutation(() => User, { nullable: false })
  // async createUser(@Context() ctx: any, @Args() args: CreateOneUserArgs): Promise<User> {
  //   return ctx.prisma.user.create(args)
  // }

  @Mutation((returns) => User)
  async createUser(@Context() ctx: any, @Args('data') data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password
      }
    })
  }

  @Mutation((returns) => User)
  async updateUser(@Context() ctx: any, @Args('id') id: string, @Args('data') data: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: {
        id
      },
      data
    })
  }

  @Mutation((returns) => User, { nullable: true })
  async deleteUser(@Context() ctx: any, @Args('id') id: string): Promise<User | null> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    })
  }

  //   @ResolveField()
  //   async orders(@Root() user: User, @Context() ctx): Promise<Order[]> {
  //     return this.prisma.user
  //       .findUnique({
  //         where: {
  //           id: user.id,
  //         },
  //       })
  //       .Order()
  //   }


  // @UsePipes(ValidationPipe)

}