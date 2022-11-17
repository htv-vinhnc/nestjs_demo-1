import { LoginInput } from './dto/login.input';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
    private readonly usersService: UserService,
    ) {};

  async validateUser(input: LoginInput) {
    const user = await this.usersService.getUserByEmail(input.email);
    
    if (user && user.password === input.password) {      
      const token = this.jwtService.sign(
        {
          email: user.email,
          password: user.password,
          role: user.role,
        },
        {
            secret: 'JWT_SECRET_KEY'
        }
        );
    
      return token;
      }
    return null;
  }
}
