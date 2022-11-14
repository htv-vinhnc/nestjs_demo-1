import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/guards/role-guard/roles.decorator';
import { RolesGuard } from '../auth/guards/role-guard/roles.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}

    @UseGuards(RolesGuard)
    @Roles('user')
    @Get()
    async getUser(@Body() input: {username: string}){
        return this.userService.getUserByEmail(input.username);
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
