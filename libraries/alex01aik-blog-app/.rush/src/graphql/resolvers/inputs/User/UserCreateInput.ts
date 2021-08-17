import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length, IsNotEmpty } from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field()
  @IsNotEmpty()
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(6, 24)
  password: string;
}
