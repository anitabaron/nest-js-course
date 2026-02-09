import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('json', { nullable: true })
  flavors: string[];
}
