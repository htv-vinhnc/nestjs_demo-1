import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}
    
    @Get(':name')
    async getTrue(@Param('name') name: string){
        return this.userService.findAll(name);
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
