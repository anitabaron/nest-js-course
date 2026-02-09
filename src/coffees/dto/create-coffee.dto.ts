import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsNumber()
  readonly price: number;
  @IsArray()
  @IsString({ each: true })
  readonly flavors: string[];
}
