import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginInput } from '../../dto/login.input';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: 'JWT_SECRET_KEY',
        });
  }

  async validate(payload: LoginInput) {
    console.log('payload: ', payload);
    const user = {
      ...payload
    }
    return user;
  }
}
