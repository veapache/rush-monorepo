import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class ArticleUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  @Length(24)
  content?: string;
}
