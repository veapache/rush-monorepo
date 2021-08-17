import { ObjectType, Field } from '@nestjs/graphql';
import { Localization } from './Localization';
import { IsNotEmpty } from 'class-validator';
import { LocaleArticle } from './LocaleArticle';

@ObjectType()
export class Category {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  name: string;

  @Field()
  lang: Localization;

  @Field()
  acticles: LocaleArticle[];
}
