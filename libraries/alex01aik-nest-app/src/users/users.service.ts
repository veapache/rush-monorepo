import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DIPrisma } from 'src/DIP';
import { UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  async getAllUsers(): Promise<Array<UpdateUserDto>> {
    return await this.prisma.user.findMany({});
  }
  async createUser(body) {
    return await this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
  }
  async getUser(id): Promise<UpdateUserDto> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
  async changeUser(id, changedfields): Promise<UpdateUserDto> {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...changedfields,
      },
    });
  }
  async deleteUser(id): Promise<UpdateUserDto> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
