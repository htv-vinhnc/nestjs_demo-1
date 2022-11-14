import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}

    async getUserByEmail(username: string): Promise<User> {                
        const user = await this.usersRepository.findOneBy({
            username: username,
        })
        return user;
        
    }
    
    async getTrue() {
        return true
    }
}
