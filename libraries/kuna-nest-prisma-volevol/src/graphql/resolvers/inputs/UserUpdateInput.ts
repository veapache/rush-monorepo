import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class UserUpdateInput {
    @Field({ nullable: true })
    @IsEmail({}, { message: 'Некорректный email' })
    email?: string;

    @Field({ nullable: true })
    @IsNotEmpty({ message: 'Имя не может быть пустым' })
    name?: string;

    @Field({ nullable: true })
    @Length(4, 16, { message: 'Длина пароля должна быть больше 4 и меньше 16' })
    password?: string;
}
