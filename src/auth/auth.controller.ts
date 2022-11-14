import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AllowUnauthorized } from './decorators/allow-unauthorized.decorator';
import { LoginInput } from './dto/login.input';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @AllowUnauthorized()
    @ApiTags('Auth')
    @Post('login')
    public async login(@Body() input: LoginInput) {      
    return await this.authService.validateUser(input);
  }
}
