import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table name 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  recommendations: number;

  @Column({ nullable: true })
  description: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true }) // ['insert']
  flavors: Flavor[];
}
