import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class ArticleCreateInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @Length(24)
  content?: string;
}
