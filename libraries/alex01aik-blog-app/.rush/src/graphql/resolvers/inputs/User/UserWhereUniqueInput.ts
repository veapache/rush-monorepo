import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field()
  id: string;
  @Field()
  email: string;
}
