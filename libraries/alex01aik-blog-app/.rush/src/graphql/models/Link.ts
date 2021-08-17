import { Localization } from './Localization';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Link {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  lang: Localization;
}
