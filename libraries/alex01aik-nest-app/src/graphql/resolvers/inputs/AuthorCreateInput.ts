import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length, IsNotEmpty } from 'class-validator';
import { Article } from 'src/graphql/models/Article';

@InputType()
export class AuthorCreateInput {
  @Field((type) => String)
  @IsNotEmpty()
  username: string;

  @Field((type) => String)
  @IsEmail()
  email: string;

  @Field((type) => String)
  @Length(6, 24)
  password: string;
}
