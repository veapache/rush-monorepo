import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class ArticleUpdateInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  cteatedAt: string;

  @Field()
  updatedAt: string;

  @Field()
  hide: boolean;

  @Field()
  publishDate: string;
}
