import { LocaleArticle } from './LocaleArticle';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Article {
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

  //   @Field()
  //   localeArticles: LocaleArticle[];
}
