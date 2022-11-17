import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}

    async getUserByEmail(email: string): Promise<User> {                
        const user = await this.usersRepository.findOneBy({
            email: email,
        })              
        return user;
    }
}
