import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AllowUnauthorized } from './decorators/allow-unauthorized.decorator';
import { LoginInput } from './dto/login.input';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @AllowUnauthorized()
    @Post('login')
    public async login(@Body() input: LoginInput) {      
    return await this.authService.validateUser(input);
  }
}
