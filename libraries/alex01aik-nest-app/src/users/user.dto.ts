import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class User {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  articles?: Array<any>;
  comments?: Array<any>;
}

export class CreateUserDto extends User {}

export class UpdateUserDto extends User {
  readonly id: string;
}
