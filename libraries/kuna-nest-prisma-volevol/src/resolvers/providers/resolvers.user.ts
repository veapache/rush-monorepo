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
import { Inject, UsePipes } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from '../models/user.model'
import { Order } from '../models/order.model'
import { OrderCreateInput } from './resolvers.order'
import { IsEmail, IsString, Length } from 'class-validator'

@InputType()
class UserUniqueInput {
  @Field({ nullable: true })
  id: string
}

@InputType()
class UserCreateInput {

  @Field()
  @IsEmail()
  @IsString()
  email: string

  @Field()
  @IsString()
  name: string

  @Field()
  @IsString()
  @Length(4,16)
  password: string

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]

}

@InputType()
class UserUpdateInput {

  @Field({ nullable: true })
  @IsEmail()
  @IsString()
  email?: string

  @Field({ nullable: true })
  @IsString()
  name?: string

  @Field({ nullable: true })
  @IsString()
  @Length(4,16)
  password?: string

}

@Resolver(of => User)
export class UserResolver {
  constructor(
    @Inject(PrismaService) private prismaService: PrismaService
  ) { }

  @Mutation((returns) => User)
  async createUser(@Context() ctx, @Args('data') data: UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password
      }
    })
  }

  @Mutation((returns) => User)
  async updateUser(
    @Context() ctx, 
    @Args('id') id: string, 
    @Args('data') data: UserUpdateInput
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id
      },
      data
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


  // @UsePipes(ValidationPipe)

}