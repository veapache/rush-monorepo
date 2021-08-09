import { ObjectType, Field } from '@nestjs/graphql';
import { Length, IsNotEmpty } from 'class-validator';

@ObjectType()
export class Article {
  @Field((type) => String)
  @IsNotEmpty()
  id: string;

  @Field((type) => String)
  @IsNotEmpty()
  title: string;

  @Field((type) => String)
  @Length(24)
  content: string;
  // @Field((type) => Boolean)
  // published: boolean;
  // @Field((type) => Date)
  // createdAt: Date;
  // @Field((type) => Date)
  // updatedAt: Date;
}
