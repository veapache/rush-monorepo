import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ArticleWhereUniqueInput {
  @Field()
  id: string;
}
