import { IsEmail, IsNotEmpty } from 'class-validator';
import { Article } from './Article';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field((type) => String)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @IsEmail()
  email: string;

  @Field((type) => String)
  @IsNotEmpty()
  password: string;

  @Field((type) => String)
  @IsNotEmpty()
  username: string;

  @Field((type) => [Article], { nullable: true })
  articles?: Article[];
}
