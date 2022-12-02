import { plainToClass } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { OutputDto } from './dto/user.dto';
import { OutputValidator } from './output.validator';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        private readonly outputValidator: OutputValidator,
      ) {}

    async getUserByEmail(email: string): Promise<User> {                
        const user = await this.usersRepository.findOne(email)              
        return user;
    }

    async getArray(input: string): Promise<any> {  
                          
        const result = plainToInstance(OutputDto, {result: input});
        return result.result
    }
}
