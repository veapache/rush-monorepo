import { Localization } from './Localization';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Hashtag {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  name: string;

  @Field()
  lang: Localization;

  //relation with articles
}
