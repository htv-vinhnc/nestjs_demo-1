import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
    async findAll(username: string): Promise<User> {
        return await this.usersRepository.findOne(username)
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne(email);
      }
    

    async getTrue() {
        return true
    }
}
