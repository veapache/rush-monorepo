import { ObjectType, Field } from '@nestjs/graphql';
import { Length, IsNotEmpty } from 'class-validator';

@ObjectType()
export class Article {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @Length(24)
  content: string;
}
