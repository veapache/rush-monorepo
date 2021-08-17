import { IsEmail, IsNotEmpty } from 'class-validator';
import { Article } from './Article';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsNotEmpty()
  username: string;

  @Field((type) => [Article], { nullable: true })
  articles?: Article[];
}
