import { Localization } from './Localization';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SEO {
  @Field()
  url: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  keywords: string[];

  @Field()
  lang: Localization;

  @Field()
  seoAssets: string;
}
