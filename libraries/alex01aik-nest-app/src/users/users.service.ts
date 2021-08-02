import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DIPrisma } from 'src/DIP';

@Injectable()
export class UsersService {
  constructor(@Inject(DIPrisma) private readonly prisma: PrismaClient) {}

  getAllUsers(): any {
    return this.prisma.user.findMany({});
  }
}
