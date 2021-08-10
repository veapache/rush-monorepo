import { InputType, Field, } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import { OrderCreateInput } from './OrderCreateInput'

@InputType()
export class UserCreateInput {

  @Field((type) => String)
  @IsEmail({}, {message: 'Некорректный email'})
  email: string

  @Field((type) => String)
  @IsNotEmpty({message: 'Имя не может быть пустым'})
  name: string

  @Field((type) => String)
  @Length(4, 16, {message: 'Длина пароля должна быть больше 4 и меньше 16'})
  password: string

  @Field((type) => [OrderCreateInput], { nullable: true })
  Order: [OrderCreateInput]

}