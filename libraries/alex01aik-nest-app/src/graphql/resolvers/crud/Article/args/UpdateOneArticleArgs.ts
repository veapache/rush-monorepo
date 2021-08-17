import { Field, ArgsType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@ArgsType()
export class UpdateOneArticleArgs {
  @Field((type) => String, { nullable: true })
  title?: string;

  @Field((type) => String, { nullable: true })
  @Length(24)
  content?: string;
}
