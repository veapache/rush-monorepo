import { Controller, Get, Post, Body } from '@nestjs/common';
import { User as UserModel, Post as PostModel, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('users')
export class UsersController {

    constructor(private prismaService: PrismaService) {}

    @Get('users')
    async getAllUsers(): Promise<UserModel[]> {
      return this.prismaService.user.findMany()
    }

    @Post('signup')
    async signupUser(
      @Body() userData: { name?: string; email: string, posts?: Prisma.PostCreateInput[] },
    ): Promise<UserModel> {
  
      const postData = userData.posts?.map((post) => {
        return { title: post?.title, content: post?.content }
      })
      return this.prismaService.user.create({
        data: {
          name: userData?.name,
          email: userData.email,
          posts: {
            create: postData
          }
        },
      })
    }
}
