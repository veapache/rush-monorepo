import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class ArticleCreateInput {
  @Field((type) => String)
  @IsNotEmpty()
  title: string;

  @Field((type) => String)
  @Length(24)
  content?: string;
}
