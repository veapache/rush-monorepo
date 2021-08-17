import { Category } from './Category';
import { Hashtag } from './Hashtag';
import { LocaleArticle } from './LocaleArticle';
import { Link } from './Link';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { SEO } from './SEO';

@ObjectType()
export class Localization {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  locale: string;

  @Field()
  links: Link[];

  @Field()
  seos: SEO[];

  @Field()
  articles: LocaleArticle[];

  @Field()
  hashtags: Hashtag[];

  @Field()
  categories: Category[];
}
