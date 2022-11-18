import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/guards/role-guard/roles.decorator';
import { RolesGuard } from '../auth/guards/role-guard/roles.guard';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserOutput } from './dto/user.dto';

@Controller('user')
@ApiTags('Users')
export class UserController {
    constructor (private readonly userService: UserService){}

    @UseGuards(RolesGuard)
    @Roles('admin')
    @ApiResponse({
        status: 200,
        type: GetUserOutput,
    })
    @Post()
    async getUser(@Body() input: {email: string}){
        // return this.userService.getUserByEmail(input.email);
        return this.userService.getArray(input.email)
    }

    // @Get(':id')
    // async getOneStudent(@Param('id') id: number){
    //     return this.studentService.getAllStudent();
    // }

    // @Post()
    // async CreateStudent(@Body() student: CreateStudentDto) {
    //     return this.studentService.createStudent();
    // }

    // @Put('id')
    // async UpdateStudent(@Param('id') id: number, @Body() student: UpdateStudentDto){
    //     return this.studentService.updateStudent();
    // }

    // @Delete('id')
    // async DeleteStudent(@Param('id') id: number){
    //     return this.studentService.deleteßStudent();
    // }
}
