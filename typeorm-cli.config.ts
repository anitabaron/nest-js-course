import { DataSource } from 'typeorm';
import { CoffeRefactor1770722305026 } from './src/migrations/1770722305026-CoffeRefactor';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { SchemaSync1770733253543 } from 'src/migrations/1770733253543-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeRefactor1770722305026, SchemaSync1770733253543],
});
