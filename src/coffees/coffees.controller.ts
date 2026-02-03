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
  findAll() {
    return this.coffeesService.findAll();
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
  create(@Body() createCoffeeDto: any) {
    return this.coffeesService.create(createCoffeeDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   return `This update #${id} coffee`;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: any) {
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
