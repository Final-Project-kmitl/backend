import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  product: string;

  @Column()
  price: number;

  @Column("json")
  ingredientTitle: string[];

  @Column()
  favcount: number;
}
