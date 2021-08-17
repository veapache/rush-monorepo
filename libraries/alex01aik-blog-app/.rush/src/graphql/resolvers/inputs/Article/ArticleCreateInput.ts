import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ArticleCreateInput {
  @Field()
  cteatedAt: string;

  @Field()
  updatedAt: string;

  @Field()
  hide: boolean;

  @Field()
  publishDate: string;
}
