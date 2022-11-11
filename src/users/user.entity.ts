import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
