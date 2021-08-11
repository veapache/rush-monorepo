import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthorWhereUniqueInput {
  @Field()
  id: string;
  @Field()
  email: string;
}
