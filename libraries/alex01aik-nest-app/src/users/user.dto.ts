class User {
  username: string;
  email: string;
  articles?: Array<any>;
  comments?: Array<any>;
}

export class CreateUserDto extends User {}

export class UpdateUserDto extends User {
  readonly id: string;
}
