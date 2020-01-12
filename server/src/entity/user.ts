import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  @Index({ unique: true })
  id: string;

  @Column({ length: 100 })
  pw: string;

  @Column({ length: 20 })
  name: string;
}
