import { IsEmail, IsString } from "class-validator";

export class LoginInput {
  @IsEmail() 
  username: string;

  @IsString() 
  password: string;
}
