import { PartialType } from '@nestjs/mapped-types'; //allows to extend the CreateCoffeeDto class and make all fields optional
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
