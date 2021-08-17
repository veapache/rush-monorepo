import { Category } from './Category';
import { Article } from './Article';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Location } from 'graphql';

@ObjectType()
export class LocaleArticle {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  lang: Location;

  @Field()
  article: Article;

  @Field()
  title: string;

  @Field()
  img: string;

  @Field()
  category: Category;

  @Field()
  description: string;

  @Field()
  keywords: string[];

  @Field()
  seoAssets: string;

  //relation with hashtags
}
