import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class ArticleWhereUniqueInput {
  @Field()
  @IsNotEmpty()
  id: string;
}
