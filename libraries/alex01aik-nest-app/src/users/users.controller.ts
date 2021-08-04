import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<CreateUserDto> {
    return this.usersService.createUser(user);
  }
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<any> {
    return this.usersService.getUser(id);
  }
  @Put(':id')
  async changeUser(
    @Param('id') id: string,
    @Body() changedfields: string,
  ): Promise<UpdateUserDto> {
    return this.usersService.changeUser(id, changedfields);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UpdateUserDto> {
    return this.usersService.deleteUser(id);
  }

  @Get()
  async getUsers(): Promise<Array<UpdateUserDto>> {
    return this.usersService.getAllUsers();
  }
}
