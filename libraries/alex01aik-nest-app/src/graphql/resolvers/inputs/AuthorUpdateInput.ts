import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length, IsNotEmpty } from 'class-validator';

@InputType()
export class AuthorUpdateInput {
  @Field({ nullable: true })
  @IsNotEmpty()
  username?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @Length(6, 24)
  password?: string;
}
