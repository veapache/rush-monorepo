import { InputType, Field, } from '@nestjs/graphql'
import { IsNotEmpty, Min } from 'class-validator'

@InputType()
export class VehicleUpdateInput {
  
  @Field((type => String), { nullable: true })
  @IsNotEmpty({message: 'Автомобиль должен пренадлежать к какому-либо бренду'})
  brand: string

  @Field((type => String), { nullable: true })
  @IsNotEmpty({message: 'У автомобиля должна быть модель'})
  model: string

  @Field((type => Number), { nullable: true })
  @Min(1885 , {message: "Автомобиль должен иметь валидный год выпуска"})
  year: number

  @Field((type => Number), { nullable: true })
  @Min(0 , {message: "Автомобиль должен иметь валидную цену"})
  cost: number

}