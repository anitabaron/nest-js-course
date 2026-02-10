import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query/pagination-query.dto';

// CONTROLLER
// obsługuje HTTP (request / response),
// odbiera dane z requesta,
// woła logikę biznesową w serwisie,
// nie robi logiki aplikacji.
// @Post() → endpoint POST /coffees
// @Body() → wyciąga body z requesta
// przekazuje dane dalej do serwisu
// zwraca wynik do klienta
// Controller = brama HTTP.
// Controller nie zapisuje do DB
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Get()
  // findAll() {
  //   return 'All coffees';
  // }

  // @Get()
  // findAll(@Query() paginationQuery) {
  //   const { limit, offset } = paginationQuery;
  //   return `All coffees. Limit: ${limit}, Offset: ${offset}`;
  // }
  // localhost:3000/coffees?limit=5&offset=10

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
  }
  // @Get()
  // findAll(@Res() response) {
  //   return response.status(200).send('All coffees');
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `Coffee id: ${id}`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  // @Post()
  // // @HttpCode(HttpStatus.GONE)
  // create(@Body() body) {
  //   return body;
  // }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   return `This update #${id} coffee`;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This delete #${id} coffee`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
