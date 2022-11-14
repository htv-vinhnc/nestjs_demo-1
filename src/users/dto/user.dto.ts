import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class GetUserOutput {
    @IsString()
    @ApiProperty()
    username: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    role: string;
}
