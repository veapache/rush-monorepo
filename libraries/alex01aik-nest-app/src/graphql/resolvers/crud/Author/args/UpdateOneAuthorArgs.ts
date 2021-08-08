import { Field, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, Length } from 'class-validator';

@ArgsType()
export class UpdateOneAuthorArgs {
  @Field((type) => String, { nullable: true })
  @IsNotEmpty()
  username?: string;

  @Field((type) => String, { nullable: true })
  @IsEmail()
  email?: string;

  @Field((type) => String, { nullable: true })
  @Length(6, 24)
  password?: string;
}
