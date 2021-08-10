import { IsString, IsUUID } from 'class-validator';

export class OrderDto {
    id: string;
    @IsString({ message: 'Должно быть строкой' })
    @IsUUID('all', { message: 'Не существующий UUID' })
    userId: string;
    @IsString({ message: 'Должно быть строкой' })
    @IsUUID('all', { message: 'Не существующий UUID' })
    vehicleId: string;
    // @IsString({message: 'Должно быть строкой'})
    delivery: string;
    // @IsString({message: 'Должно быть строкой'})
    payment: string;
    // @IsString({message: 'Должно быть строкой'})
    address: string;
}

// @IsString({message: 'Должно быть строкой'})
// @IsEmail({}, {message: 'Некорректный email'})
// @IsString({message: 'Должно быть строкой'})
// @Length(4, 16, {message: 'Не еньше 4 и не больше 16'})
