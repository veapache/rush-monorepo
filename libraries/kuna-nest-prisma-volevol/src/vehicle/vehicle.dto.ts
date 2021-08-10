import { IsString, IsNumber } from 'class-validator';

export class VehicleDto {
    id: string;
    @IsString({ message: 'Должно быть строкой' })
    brand: string;
    @IsString({ message: 'Должно быть строкой' })
    model: string;
    @IsNumber({}, { message: 'Должно быть числом' })
    year?: number;
    @IsNumber({}, { message: 'Должно быть числом' })
    cost?: number;
}
