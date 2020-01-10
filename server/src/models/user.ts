import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  id: string;

  @Column({ length: 100 })
  pw: string;
}
