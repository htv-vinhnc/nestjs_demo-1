import { IsEmail, IsEnum, IsInt, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ROLE } from "./user.contant";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;


  @Column()
  @IsString()
  password: string;

  @Column()
  @IsString()
  phone: string;

  @Column()
  @IsEnum(ROLE)
  role: string;
}
